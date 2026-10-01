/** Small, always-visible marker for anything conceptual (brands, venue, activations). */
export function ConceptLabel({ children = "Conceptual visualization", className = "" }: { children?: string; className?: string }) {
  return (
    <span className={`t-eyebrow inline-flex items-center gap-2 border border-current/40 px-2.5 py-1 text-[0.5625rem] ${className}`}>
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-solaire" />
      {children}
    </span>
  );
}
