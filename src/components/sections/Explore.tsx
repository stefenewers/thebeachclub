"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { activations } from "@/data/activations";
import { copy } from "@/data/event";
import { zones } from "@/data/zones";
import { selectActivation } from "@/lib/events";
import { Media } from "@/components/media/Media";
import { useExperience } from "@/components/providers/Experience";
import { Section, SectionIndex } from "@/components/ui/Section";
import { SitePlan } from "./SitePlan";

const EASE = [0.16, 1, 0.3, 1] as const;

/** 04 — Explore the beach. Interactive conceptual site plan with zone stories. */
export function Explore() {
  const [activeId, setActiveId] = useState("shore");
  const [open, setOpen] = useState(false);
  const zone = zones.find((z) => z.id === activeId)!;
  const zi = zones.indexOf(zone);
  const reduce = useReducedMotion();
  const { scrollTo, lockScroll } = useExperience();
  const activation = zone.activationId ? activations.find((a) => a.id === zone.activationId) : undefined;

  const closeViewer = useCallback(() => {
    setOpen(false);
    lockScroll(false);
  }, [lockScroll]);

  function toActivation() {
    if (!activation) return;
    setOpen(false);
    selectActivation(activation.id);
    scrollTo("#experiences");
  }

  return (
    <Section id="explore" labelledBy="explore-title" className="pb-20 pt-[calc(var(--nav-h)+3rem)] md:pb-32 md:pt-32">
      <div className="gutter">
        <SectionIndex id="explore" className="opacity-60" />
        <h2 id="explore-title" className="t-display mt-6 text-[clamp(2.25rem,11vw,4rem)] md:text-[clamp(3rem,6vw,7rem)]">
          {copy.explore.headline}
        </h2>
      </div>

      <div className="mt-10 grid gap-8 md:mt-16 md:grid-cols-12 md:gap-10 md:px-[var(--gutter)]">
        {/* plan */}
        <div className="md:col-span-7">
          <div className="relative aspect-square w-full overflow-hidden md:aspect-[1/1]">
            <SitePlan />
            <ul className="absolute inset-0" aria-label="Beach zones">
              {zones.map((z, i) => {
                const active = z.id === activeId;
                return (
                  <li key={z.id} className="absolute" style={{ left: `${z.pos.x}%`, top: `${z.pos.y}%` }}>
                    <button
                      type="button"
                      onClick={() => setActiveId(z.id)}
                      aria-pressed={active}
                      aria-controls="zone-panel"
                      className="group -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 p-2"
                    >
                      <span
                        className={`relative grid h-7 w-7 place-items-center rounded-full border text-[0.625rem] tabular-nums transition-all duration-500 md:h-8 md:w-8 ${
                          active ? "scale-110 border-ink bg-ink text-linen" : "border-ink/60 bg-linen/90 text-ink group-hover:bg-white"
                        }`}
                      >
                        {active && <span aria-hidden className="absolute inset-0 rounded-full border border-ink/50 motion-safe:animate-ping" />}
                        {i + 1}
                      </span>
                      <span className={`t-label hidden whitespace-nowrap bg-linen/90 px-2 py-1 text-[0.625rem] text-ink transition-opacity md:block ${active ? "opacity-100" : "opacity-70 group-hover:opacity-100"}`}>
                        {z.name}
                      </span>
                      <span className="sr-only md:hidden">{z.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="t-eyebrow absolute bottom-3 right-3 text-[0.5625rem] text-white/80">{copy.explore.mapLabel}</p>
          </div>

          {/* mobile zone strip */}
          <div className="gutter mt-4 flex snap-x gap-2 overflow-x-auto pb-2 [scrollbar-width:none] md:hidden" role="group" aria-label="Choose a zone">
            {zones.map((z, i) => (
              <button
                key={z.id}
                type="button"
                onClick={() => setActiveId(z.id)}
                aria-pressed={z.id === activeId}
                className={`t-label shrink-0 snap-start border px-3 py-2.5 text-[0.625rem] transition-colors ${z.id === activeId ? "border-ink bg-ink text-linen" : "border-ink/25"}`}
              >
                {i + 1} · {z.name}
              </button>
            ))}
          </div>
        </div>

        {/* panel */}
        <div id="zone-panel" className="gutter md:col-span-5 md:px-0" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={zone.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="md:sticky md:top-28"
            >
              <button
                type="button"
                onClick={() => {
                  setOpen(true);
                  lockScroll(true);
                }}
                className="group relative block aspect-[4/5] w-full overflow-hidden md:aspect-[3/2]"
                aria-label={`Open ${zone.name}`}
              >
                <Media id={zone.mediaId} sizes="(min-width: 768px) 40vw, 100vw" className="transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]" />
                <span className="t-eyebrow absolute right-3 top-3 bg-linen/90 px-2 py-1 text-[0.5625rem] text-ink">Step inside ↗</span>
              </button>
              <p className="t-eyebrow mt-6 opacity-50">
                Zone {String(zi + 1).padStart(2, "0")} / {String(zones.length).padStart(2, "0")}
              </p>
              <h3 className="t-headline mt-3 text-3xl md:text-4xl">{zone.name}</h3>
              <p className="t-serif mt-2 text-2xl">{zone.line}</p>
              <p className="t-body mt-4 max-w-md opacity-75">{zone.story}</p>
              {activation && (
                <button type="button" onClick={toActivation} className="t-label mt-6 inline-flex items-center gap-2 border-b border-current pb-1 text-[0.6875rem]">
                  Activation: {activation.name} <span aria-hidden>→</span>
                </button>
              )}
            </motion.article>
          </AnimatePresence>
        </div>
      </div>

      <ZoneViewer open={open} onClose={closeViewer} zoneId={zone.id} />
    </Section>
  );
}

/** Full-screen cinematic view of a zone. */
function ZoneViewer({ open, onClose, zoneId }: { open: boolean; onClose: () => void; zoneId: string }) {
  const zone = zones.find((z) => z.id === zoneId)!;
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      prev?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="zone-viewer-title"
          className="fixed inset-0 z-[60] bg-black text-white"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="absolute inset-0" initial={reduce ? false : { scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: EASE }}>
            <Media id={zone.mediaId} eager />
          </motion.div>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40" />
          <button ref={closeRef} type="button" onClick={onClose} className="t-eyebrow absolute right-[var(--gutter)] top-[calc(env(safe-area-inset-top)+1.25rem)] z-10 p-2">
            Close ✕
          </button>
          <motion.div
            className="gutter absolute inset-x-0 bottom-0 pb-[max(2rem,env(safe-area-inset-bottom))] md:pb-16"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: EASE }}
          >
            <h3 id="zone-viewer-title" className="t-display text-[clamp(2.75rem,12vw,9rem)]">
              {zone.name}
            </h3>
            <p className="t-serif mt-4 max-w-xl text-xl text-white/85 md:text-2xl">{zone.story}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
