import React, { useEffect, useId, useRef, useState } from 'react';
import { ArabicLetter } from '../types';

interface LetterWriterProps {
  letter: ArabicLetter;
  /** Bump to replay the writing from scratch */
  runId: number;
  durationMs?: number;
  className?: string;
}

const VIEWBOX = 100;
const BASELINE = 68;
const FONT_SIZE = 66;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
  );
}

/**
 * Writes an Arabic letter the way a hand would: the ink appears along the pen's
 * path, right to left, and the dots land at the end.
 *
 * The stroke is a *mask*, never the ink. The letterform always comes from the
 * font, and the mask is dropped the moment the animation ends, so the final
 * frame is a pixel-perfect glyph whatever the path does in between.
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
  const penRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDone(true);
      return;
    }
    setDone(false);

    let cancelled = false;
    const finish = () => {
      if (!cancelled) setDone(true);
    };

    // The animation is the source of truth: a hidden or throttled tab freezes
    // it, and a timeout alone would unmask the letter before a stroke is drawn.
    const anim = penRef.current?.getAnimations?.()[0];
    if (anim) {
      anim.finished.then(finish).catch(() => {});
      return () => {
        cancelled = true;
      };
    }

    const timer = window.setTimeout(finish, durationMs + 120);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [runId, letter.id, durationMs]);

  const animation = `penWrite ${durationMs}ms cubic-bezier(0.45, 0.05, 0.35, 1) forwards`;

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
          <path
            ref={penRef}
            d={letter.penPath}
            fill="none"
            stroke="white"
            strokeWidth={30}
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={100}
            strokeDasharray="100"
            strokeDashoffset="100"
            style={{ animation }}
          />
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
        className="fill-amber-400"
        mask={done ? undefined : `url(#${maskId})`}
      >
        {letter.char}
      </text>

      {/* The pen tip */}
      {!done && (
        <circle
          r={2.6}
          className="fill-emerald-300"
          style={{
            offsetPath: `path("${letter.penPath}")`,
            offsetDistance: '0%',
            offsetRotate: '0deg',
            animation: `penTravel ${durationMs}ms cubic-bezier(0.45, 0.05, 0.35, 1) forwards`
          } as React.CSSProperties}
        />
      )}
    </svg>
  );
};
