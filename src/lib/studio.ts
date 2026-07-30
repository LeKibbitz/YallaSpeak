/**
 * Audio engine of the Studio Doublage: decoding, waveform peaks, mic capture
 * and a small player that knows how to loop a slice, chain repeats, and play
 * two takes A/B or layered. Everything runs on one shared AudioContext —
 * creating one per playback would hit the browser's context limit.
 */

let sharedCtx: AudioContext | null = null;

export function getAudioContext(): AudioContext {
  if (!sharedCtx) sharedCtx = new AudioContext();
  // Autoplay policy suspends the context until a user gesture; every entry
  // point below is gesture-driven, so resuming here is always legitimate.
  if (sharedCtx.state === 'suspended') void sharedCtx.resume();
  return sharedCtx;
}

/** Fetch a TTS URL and decode it into a playable buffer. */
export async function fetchAudioBuffer(url: string): Promise<AudioBuffer> {
  const response = await fetch(url);
  if (!response.ok) {
    const retryAfter = Number(response.headers.get('Retry-After'));
    const error = new Error(`Audio indisponible (${response.status})`) as Error & {
      retryAfter?: number;
    };
    if (Number.isFinite(retryAfter)) error.retryAfter = retryAfter;
    throw error;
  }
  const bytes = await response.arrayBuffer();
  return getAudioContext().decodeAudioData(bytes);
}

/**
 * Min/max amplitude per horizontal pixel — the classic waveform shape.
 * Returned flat as [min0, max0, min1, max1, ...] to avoid array-of-arrays churn.
 */
export function computePeaks(buffer: AudioBuffer, columns: number): Float32Array {
  const data = buffer.getChannelData(0);
  const peaks = new Float32Array(columns * 2);
  const samplesPerColumn = data.length / columns;
  for (let i = 0; i < columns; i++) {
    const start = Math.floor(i * samplesPerColumn);
    const end = Math.min(data.length, Math.ceil((i + 1) * samplesPerColumn));
    let min = 0;
    let max = 0;
    for (let j = start; j < end; j++) {
      const v = data[j];
      if (v < min) min = v;
      if (v > max) max = v;
    }
    peaks[i * 2] = min;
    peaks[i * 2 + 1] = max;
  }
  return peaks;
}

/**
 * Cut the dead air surrounding a mic take. Without this, the second of
 * hesitation before speaking shifts the whole overlay and the comparison
 * feels out of sync even when the pronunciation is right.
 */
export function trimSilence(buffer: AudioBuffer, threshold = 0.02): AudioBuffer {
  const data = buffer.getChannelData(0);
  let start = 0;
  let end = data.length - 1;
  while (start < end && Math.abs(data[start]) < threshold) start++;
  while (end > start && Math.abs(data[end]) < threshold) end--;

  // Keep 120 ms of breath on each side so the attack of the first syllable survives
  const margin = Math.floor(buffer.sampleRate * 0.12);
  start = Math.max(0, start - margin);
  end = Math.min(data.length, end + margin);
  if (end - start < buffer.sampleRate * 0.1) return buffer; // all silence: keep as-is

  const ctx = getAudioContext();
  const trimmed = ctx.createBuffer(buffer.numberOfChannels, end - start, buffer.sampleRate);
  for (let ch = 0; ch < buffer.numberOfChannels; ch++) {
    trimmed.copyToChannel(buffer.getChannelData(ch).subarray(start, end), ch);
  }
  return trimmed;
}

/* ------------------------------------------------------------------ *
 * Mic capture
 * ------------------------------------------------------------------ */

export interface Recorder {
  stop(): Promise<AudioBuffer>;
  cancel(): void;
}

export async function startRecording(): Promise<Recorder> {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: {
      // Voice-call processing softens exactly the consonants being compared
      echoCancellation: false,
      noiseSuppression: true,
      autoGainControl: true
    }
  });
  const recorder = new MediaRecorder(stream);
  const chunks: Blob[] = [];
  recorder.ondataavailable = (e) => {
    if (e.data.size > 0) chunks.push(e.data);
  };
  recorder.start();

  const cleanup = () => stream.getTracks().forEach((t) => t.stop());

  return {
    stop: () =>
      new Promise<AudioBuffer>((resolve, reject) => {
        recorder.onstop = async () => {
          cleanup();
          try {
            const blob = new Blob(chunks, { type: recorder.mimeType });
            const bytes = await blob.arrayBuffer();
            const buffer = await getAudioContext().decodeAudioData(bytes);
            resolve(trimSilence(buffer));
          } catch (error) {
            reject(error);
          }
        };
        recorder.stop();
      }),
    cancel: () => {
      recorder.onstop = null;
      try {
        recorder.stop();
      } catch {
        /* already stopped */
      }
      cleanup();
    }
  };
}

/* ------------------------------------------------------------------ *
 * Playback engine
 * ------------------------------------------------------------------ */

export interface PlaySlice {
  buffer: AudioBuffer;
  /** Seconds inside the buffer; defaults to the whole take. */
  start?: number;
  end?: number;
  /** -1 full left, 0 center, 1 full right. */
  pan?: number;
  gain?: number;
}

export interface PlaybackHandle {
  stop(): void;
  /** Resolves true when playback ran to the end, false when stopped early. */
  done: Promise<boolean>;
}

export interface PlayOptions {
  rate?: number;
  /**
   * Called every animation frame with the position (in buffer seconds) of
   * each slice still playing, or null once it has finished. Index-aligned
   * with the slices argument.
   */
  onFrame?: (positions: Array<number | null>) => void;
}

/**
 * Play one or several slices simultaneously (superposition = two slices).
 * All slices start together; each stops at its own end.
 */
export function playSlices(slices: PlaySlice[], options: PlayOptions = {}): PlaybackHandle {
  const ctx = getAudioContext();
  const rate = options.rate ?? 1;
  const startAt = ctx.currentTime + 0.05;

  let liveCount = slices.length;
  let raf = 0;
  let resolveDone: (complete: boolean) => void;
  const done = new Promise<boolean>((r) => (resolveDone = r));

  const entries = slices.map((slice) => {
    const from = Math.max(0, slice.start ?? 0);
    const to = Math.min(slice.buffer.duration, slice.end ?? slice.buffer.duration);
    const source = ctx.createBufferSource();
    source.buffer = slice.buffer;
    source.playbackRate.value = rate;

    const gain = ctx.createGain();
    gain.gain.value = slice.gain ?? 1;
    let tail: AudioNode = gain;
    if (slice.pan !== undefined && 'createStereoPanner' in ctx) {
      const panner = ctx.createStereoPanner();
      panner.pan.value = slice.pan;
      gain.connect(panner);
      tail = panner;
    }
    source.connect(gain);
    tail.connect(ctx.destination);

    const entry = { source, from, to, ended: false };
    source.onended = () => {
      entry.ended = true;
      liveCount -= 1;
      if (liveCount <= 0) finish(true);
    };
    source.start(startAt, from, to - from);
    return entry;
  });

  const frame = () => {
    const elapsed = (ctx.currentTime - startAt) * rate;
    options.onFrame?.(
      entries.map((e) => {
        if (e.ended || elapsed < 0) return e.ended ? null : e.from;
        const pos = e.from + elapsed;
        return pos >= e.to ? null : pos;
      })
    );
    raf = requestAnimationFrame(frame);
  };
  if (options.onFrame) raf = requestAnimationFrame(frame);

  let finished = false;
  const finish = (complete: boolean) => {
    if (finished) return;
    finished = true;
    cancelAnimationFrame(raf);
    options.onFrame?.(entries.map(() => null));
    resolveDone(complete);
  };

  return {
    stop: () => {
      entries.forEach((e) => {
        if (e.ended) return;
        e.source.onended = null;
        try {
          e.source.stop();
        } catch {
          /* not started yet */
        }
      });
      finish(false);
    },
    done
  };
}

/**
 * Run a sequence of steps (each = one playSlices call) with a breath of
 * silence in between. Used for ×2/×3 repeats and for A/B comparison.
 * Stops cleanly mid-sequence.
 */
export function playSequence(
  steps: Array<{ slices: PlaySlice[]; onFrame?: PlayOptions['onFrame'] }>,
  options: { rate?: number; gapMs?: number; onStep?: (index: number) => void } = {}
): PlaybackHandle {
  let current: PlaybackHandle | null = null;
  let stopped = false;
  let resolveDone: (complete: boolean) => void;
  const done = new Promise<boolean>((r) => (resolveDone = r));

  (async () => {
    for (let i = 0; i < steps.length; i++) {
      if (stopped) break;
      options.onStep?.(i);
      current = playSlices(steps[i].slices, { rate: options.rate, onFrame: steps[i].onFrame });
      const complete = await current.done;
      if (!complete || stopped) break;
      if (i < steps.length - 1) {
        await new Promise((r) => setTimeout(r, options.gapMs ?? 350));
      }
    }
    resolveDone(!stopped);
  })();

  return {
    stop: () => {
      stopped = true;
      current?.stop();
    },
    done
  };
}
