"use client";

import { event } from "@/data/event";
import { useActiveSection, useExperience } from "@/components/providers/Experience";

/** Minimal fixed chrome. `mix-blend-difference` keeps it legible over any plate. */
export function Nav() {
  const { view, sound, scrollTo } = useExperience();
  const active = useActiveSection();
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
      <div className="gutter flex h-[var(--nav-h)] items-center justify-between pt-[env(safe-area-inset-top)]">
        <a
          href="#arrival"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#arrival");
          }}
          className="t-label pointer-events-auto text-[0.8125rem] tracking-[0.22em]"
        >
          {event.wordmark}
        </a>

        <p className="t-eyebrow hidden items-center gap-3 md:flex" aria-live="polite">
          <span className="tabular-nums">{active.index}</span>
          <span aria-hidden className="h-px w-6 bg-current opacity-50" />
          <span>{active.label}</span>
        </p>

        <div className="pointer-events-auto flex items-center gap-5">
          {view === "partner" && <span className="t-eyebrow border border-current/50 px-2 py-1 text-[0.5625rem]">Partner view</span>}
          {sound.supported && (
            <button type="button" onClick={sound.toggle} aria-pressed={sound.on} className="t-eyebrow group flex items-center gap-2 py-2">
              <SoundBars on={sound.on} />
              <span>{sound.on ? "Sound on" : "Sound off"}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

function SoundBars({ on }: { on: boolean }) {
  return (
    <span aria-hidden className="flex h-3 items-end gap-[2px]">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="w-[2px] origin-bottom bg-current transition-transform duration-500"
          style={{
            height: "100%",
            transform: on ? undefined : "scaleY(0.25)",
            animation: on ? `eq 0.${7 + i}s ${i * 0.12}s ease-in-out infinite alternate` : "none",
          }}
        />
      ))}
    </span>
  );
}
