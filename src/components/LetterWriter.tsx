import React, { useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { ArabicLetter } from '../types';

interface LetterWriterProps {
  letter: ArabicLetter;
  /** Bump to replay the writing from scratch */
  runId: number;
  /** Time the body of the letter takes; the lifts and the dots are added on top */
  durationMs?: number;
  className?: string;
}

const VIEWBOX = 100;

/**
 * Frame fitted to the ink of the 28 letters, not guessed.
 *
 * Amiri descends far below the baseline on jim/ha/kha and mim: at the previous
 * 66/68 the bowls fell outside the box and were clipped. These values are the
 * largest size that keeps every letter inside with a 5-unit margin.
 */
const FONT_SIZE = 69.2;
const BASELINE = 60.4;

/**
 * Width of the brush that reveals the ink.
 *
 * The paths are medial axes of the real Amiri outlines, so 12 units is enough to
 * ink 100% of every glyph (measured). Anything wider stops following the curve
 * and starts reading as a right-to-left wipe, which is exactly what it must not
 * look like.
 */
const PEN_WIDTH = 12;

/** The hand lifts the pen: between two strokes, and again before the dots */
const LIFT_MS = 220;
const DOT_LAND_MS = 180;
const DOT_STEP_MS = 170;

const EASING = 'cubic-bezier(0.45, 0.05, 0.35, 1)';

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
  );
}

/**
 * Writes an Arabic letter the way a hand would: the ink appears along the pen's
 * path, right to left, the pen lifts between strokes, and the dots are landed
 * last, one group at a time.
 *
 * The stroke is a *mask*, never the ink. The letterform always comes from the
 * font, and the mask is dropped the moment the animation ends, so the final
 * frame is a pixel-perfect glyph whatever the path does in between.
 *
 * Timing is computed from the real length of each stroke rather than split
 * evenly: a long sweep and a short tick must not take the same time, or the pen
 * visibly changes speed at every lift.
 */
export const LetterWriter: React.FC<LetterWriterProps> = ({
  letter,
  runId,
  durationMs = 1700,
  className = ''
}) => {
  const uid = useId().replace(/:/g, '');
  const maskId = `pen-${uid}`;
  const [done, setDone] = useState(false);
  const strokeRefs = useRef<(SVGPathElement | null)[]>([]);
  const nibRefs = useRef<(SVGCircleElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);

  // One subpath per pen lift: the data joins them into a single `d`
  const strokes = useMemo(
    () => letter.penPath.split(/(?=M)/).map((s) => s.trim()).filter(Boolean),
    [letter.penPath]
  );
  const dots = letter.dots ?? [];

  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      setDone(true);
      return;
    }
    setDone(false);

    const paths = strokeRefs.current.filter(Boolean) as SVGPathElement[];
    if (!paths.length) return;

    const lengths = paths.map((p) => p.getTotalLength() || 1);
    const total = lengths.reduce((a, b) => a + b, 0);

    const anims: Animation[] = [];
    let at = 0;

    paths.forEach((path, i) => {
      const ms = (lengths[i] / total) * durationMs;
      // The dash has to match this subpath's own length, so the reveal starts
      // exactly at its first point and ends exactly at its last.
      path.style.strokeDasharray = String(lengths[i]);
      path.style.strokeDashoffset = String(lengths[i]);
      anims.push(
        path.animate([{ strokeDashoffset: lengths[i] }, { strokeDashoffset: 0 }], {
          duration: ms,
          delay: at,
          easing: EASING,
          fill: 'forwards'
        })
      );

      const nib = nibRefs.current[i];
      if (nib) {
        // visibility is a discrete property: it flips at the start and back at
        // the end, so the tip only exists while its own stroke is being drawn.
        // That gap between two strokes is what reads as the hand lifting.
        anims.push(
          nib.animate(
            [
              { offsetDistance: '0%', visibility: 'visible' },
              { offsetDistance: '100%', visibility: 'visible' }
            ],
            { duration: ms, delay: at, easing: EASING }
          )
        );
      }

      at += ms + (i < paths.length - 1 ? LIFT_MS : 0);
    });

    at += LIFT_MS;
    dotRefs.current.forEach((dot, i) => {
      if (!dot) return;
      anims.push(
        dot.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: DOT_LAND_MS,
          delay: at + i * DOT_STEP_MS,
          easing: 'ease-out',
          fill: 'forwards'
        })
      );
    });

    let cancelled = false;
    // The animations are the source of truth: a hidden or throttled tab freezes
    // them, and a timeout alone would unmask the letter before a stroke is drawn.
    Promise.all(anims.map((a) => a.finished)).then(
      () => {
        if (!cancelled) setDone(true);
      },
      () => {}
    );

    return () => {
      cancelled = true;
      anims.forEach((a) => a.cancel());
    };
  }, [runId, letter.id, durationMs, strokes.length, dots.length]);

  return (
    <svg
      key={`${letter.id}-${runId}`}
      viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
      className={className}
      role="img"
      aria-label={`Écriture de la lettre ${letter.translit}`}
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={VIEWBOX} height={VIEWBOX}>
          {/* The body: one stroke per pen lift, drawn in order */}
          {strokes.map((d, i) => (
            <path
              key={`stroke-${i}`}
              ref={(el) => {
                strokeRefs.current[i] = el;
              }}
              d={d}
              fill="none"
              stroke="white"
              strokeWidth={PEN_WIDTH}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ strokeDashoffset: 1e5, strokeDasharray: 1e5 }}
            />
          ))}

          {/* Punched out of the body reveal: no dot may appear while the stroke
              under it is still being drawn, whatever the brush happens to cover. */}
          {dots.map((dot, i) => (
            <circle key={`hole-${i}`} cx={dot.x} cy={dot.y} r={dot.r} fill="black" />
          ))}

          {/* ...then landed, one group at a time, once the body is finished */}
          {dots.map((dot, i) => (
            <circle
              key={`dot-${i}`}
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              cx={dot.x}
              cy={dot.y}
              r={dot.r}
              fill="white"
              opacity={0}
            />
          ))}
        </mask>
      </defs>

      {/* Ghost of the finished letter, so the eye has a target to follow */}
      <text
        x={VIEWBOX / 2}
        y={BASELINE}
        textAnchor="middle"
        fontSize={FONT_SIZE}
        fontFamily="Amiri, serif"
        className="fill-stone-700/25"
      >
        {letter.char}
      </text>

      {/* The ink */}
      <text
        x={VIEWBOX / 2}
        y={BASELINE}
        textAnchor="middle"
        fontSize={FONT_SIZE}
        fontFamily="Amiri, serif"
        className="fill-accent"
        mask={done ? undefined : `url(#${maskId})`}
      >
        {letter.char}
      </text>

      {/* The pen tip, one per stroke: each shows only while its stroke is drawn */}
      {!done &&
        strokes.map((d, i) => (
          <circle
            key={`nib-${i}`}
            ref={(el) => {
              nibRefs.current[i] = el;
            }}
            r={2.4}
            className="fill-emerald-300"
            style={
              {
                offsetPath: `path("${d}")`,
                offsetDistance: '0%',
                offsetRotate: '0deg',
                visibility: 'hidden'
              } as React.CSSProperties
            }
          />
        ))}
    </svg>
  );
};
