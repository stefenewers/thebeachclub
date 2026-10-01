/**
 * Splits text into masked spans for GSAP reveals while keeping one accessible
 * string for screen readers. Characters are grouped per word so lines only
 * ever break between words.
 */
export function SplitChars({ text, className = "", charClass = "" }: { text: string; className?: string; charClass?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((w, wi) => (
          <span key={wi}>
            <span className="inline-block whitespace-nowrap">
              {Array.from(w).map((c, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                  <span className={`inline-block ${charClass}`} data-char>
                    {c}
                  </span>
                </span>
              ))}
            </span>
            {wi < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </span>
  );
}

export function SplitLines({ lines, className = "", lineClass = "" }: { lines: readonly string[]; className?: string; lineClass?: string }) {
  return (
    <span className={className}>
      <span className="sr-only">{lines.join(" ")}</span>
      {lines.map((l, i) => (
        <span key={i} aria-hidden className="block overflow-hidden">
          <span className={`block ${lineClass}`} data-line>
            {l}
          </span>
        </span>
      ))}
    </span>
  );
}
