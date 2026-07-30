import React from 'react';

/**
 * Minimal Markdown renderer for the coach answers.
 *
 * Gemini replies with headings, bold, lists and rules; printing them raw shows
 * `###` and `**` to the user. Everything is rendered as React elements (never
 * dangerouslySetInnerHTML), so model output can never inject markup.
 */

const INLINE = /(\*\*[^*]+\*\*|\*[^*\n]+\*|`[^`\n]+`)/g;

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  return text.split(INLINE).filter(Boolean).map((chunk, i) => {
    const key = `${keyPrefix}-${i}`;
    if (chunk.startsWith('**') && chunk.endsWith('**')) {
      return <strong key={key} className="text-accent font-bold">{chunk.slice(2, -2)}</strong>;
    }
    if (chunk.startsWith('`') && chunk.endsWith('`')) {
      return (
        <code key={key} className="bg-stone-800 text-emerald-300 px-1.5 py-0.5 rounded font-mono text-[0.9em]">
          {chunk.slice(1, -1)}
        </code>
      );
    }
    if (chunk.startsWith('*') && chunk.endsWith('*') && chunk.length > 2) {
      return <em key={key} className="text-stone-400">{chunk.slice(1, -1)}</em>;
    }
    return <React.Fragment key={key}>{chunk}</React.Fragment>;
  });
}

export const Markdown: React.FC<{ text: string }> = ({ text }) => {
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];

  const flushList = (key: string) => {
    if (!list.length) return;
    const items = list;
    list = [];
    blocks.push(
      <ul key={key} className="list-disc list-outside pl-5 space-y-1 my-2 marker:text-emerald-500">
        {items.map((item, i) => (
          <li key={i}>{renderInline(item, `${key}-${i}`)}</li>
        ))}
      </ul>
    );
  };

  text.split('\n').forEach((raw, index) => {
    const line = raw.trimEnd();
    const key = `l${index}`;

    const bullet = /^\s*[-*+]\s+(.*)$/.exec(line);
    if (bullet) {
      list.push(bullet[1]);
      return;
    }
    flushList(`u${index}`);

    if (!line.trim()) return;

    if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      blocks.push(<hr key={key} className="border-stone-800 my-3" />);
      return;
    }

    const heading = /^(#{1,4})\s+(.*)$/.exec(line);
    if (heading) {
      const size = heading[1].length <= 2 ? 'text-base' : 'text-sm';
      blocks.push(
        <p key={key} className={`${size} font-black text-white mt-3 mb-1`}>
          {renderInline(heading[2], key)}
        </p>
      );
      return;
    }

    const quote = /^>\s?(.*)$/.exec(line);
    if (quote) {
      blocks.push(
        <p key={key} className="border-l-2 border-emerald-600 pl-3 my-2 text-stone-300 italic">
          {renderInline(quote[1], key)}
        </p>
      );
      return;
    }

    blocks.push(<p key={key} className="my-1">{renderInline(line, key)}</p>);
  });

  flushList('u-end');
  return <>{blocks}</>;
};
