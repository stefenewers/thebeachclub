import type { ReactNode } from "react";
import { sections } from "@/data/event";
import type { SectionId } from "@/lib/types";

/** Semantic section wrapper. Declares ambient tone + nav label for ToneController. */
export function Section({
  id,
  children,
  className = "",
  labelledBy,
}: {
  id: SectionId;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  const meta = sections.find((s) => s.id === id)!;
  return (
    <section
      id={id}
      data-tone={meta.tone}
      data-index={meta.index}
      data-label={meta.label}
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : meta.label}
      className={`relative ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionIndex({ id, className = "" }: { id: SectionId; className?: string }) {
  const meta = sections.find((s) => s.id === id)!;
  return (
    <p className={`t-eyebrow flex items-center gap-3 ${className}`}>
      <span>{meta.index}</span>
      <span aria-hidden className="h-px w-8 bg-current opacity-40" />
      <span>{meta.label}</span>
    </p>
  );
}
