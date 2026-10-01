"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { activations } from "@/data/activations";
import { copy } from "@/data/event";
import { SELECT_ACTIVATION } from "@/lib/events";
import type { Activation } from "@/lib/types";
import { Media } from "@/components/media/Media";
import { ConceptLabel } from "@/components/ui/ConceptLabel";
import { Section, SectionIndex } from "@/components/ui/Section";

const EASE = [0.16, 1, 0.3, 1] as const;

function Details({ a, className = "" }: { a: Activation; className?: string }) {
  return (
    <div className={className}>
      <p className="t-serif text-2xl md:text-3xl">{a.line}</p>
      <p className="t-body mt-4 max-w-md opacity-75">{a.description}</p>
      <dl className="mt-6 grid grid-cols-1 border-t border-current/15 text-sm sm:grid-cols-2">
        <div className="border-b border-current/15 py-3 sm:pr-4">
          <dt className="t-eyebrow opacity-50">Guest touchpoint</dt>
          <dd className="t-label mt-1 text-[0.75rem]">{a.touchpoint}</dd>
        </div>
        <div className="border-b border-current/15 py-3 sm:pl-4">
          <dt className="t-eyebrow opacity-50">Partner category</dt>
          <dd className="t-label mt-1 text-[0.75rem]">{a.category}</dd>
        </div>
        <div className="border-b border-current/15 py-3 sm:col-span-2">
          <dt className="t-eyebrow opacity-50">Content moment</dt>
          <dd className="mt-1">{a.contentMoment}</dd>
        </div>
      </dl>
    </div>
  );
}

/**
 * 08 — Brand Experiences. The sponsor-facing activation gallery.
 * Desktop: vertical tab list + large stage. Mobile: swipeable full cards.
 */
export function Experiences() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const rail = useRef<HTMLDivElement>(null);
  const [railIndex, setRailIndex] = useState(0);
  const a = activations[active];

  // Deep links from the site plan.
  useEffect(() => {
    const on = (e: Event) => {
      const i = activations.findIndex((x) => x.id === (e as CustomEvent<string>).detail);
      if (i < 0) return;
      setActive(i);
      const card = rail.current?.children[i] as HTMLElement | undefined;
      if (card && rail.current) rail.current.scrollTo({ left: card.offsetLeft - rail.current.offsetLeft, behavior: "instant" });
    };
    window.addEventListener(SELECT_ACTIVATION, on);
    return () => window.removeEventListener(SELECT_ACTIVATION, on);
  }, []);

  function onTabKey(e: KeyboardEvent) {
    const n = activations.length;
    let next = active;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (active + 1) % n;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (active - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  function onRailScroll() {
    const el = rail.current;
    if (!el) return;
    const w = (el.children[0] as HTMLElement | undefined)?.offsetWidth ?? 1;
    setRailIndex(Math.round(el.scrollLeft / (w + 12)));
  }

  return (
    <Section id="experiences" labelledBy="exp-title" className="pb-24 pt-[calc(var(--nav-h)+3rem)] md:pb-40 md:pt-32">
      <div className="gutter flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionIndex id="experiences" className="opacity-60" />
          <h2 id="exp-title" className="t-display mt-6 text-[clamp(2.25rem,10.5vw,4rem)] md:text-[clamp(3rem,6vw,7rem)]">
            {copy.experiences.headline}
          </h2>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end md:pb-2">
          <p className="t-serif text-xl opacity-75">{copy.experiences.sub}</p>
          <ConceptLabel>{copy.experiences.label}</ConceptLabel>
        </div>
      </div>

      {/* desktop: tabs + stage */}
      <div className="gutter mt-16 hidden grid-cols-12 gap-10 md:grid">
        <div role="tablist" aria-label="Activations" aria-orientation="vertical" className="col-span-4 flex flex-col border-t border-current/15" onKeyDown={onTabKey}>
          {activations.map((x, i) => (
            <button
              key={x.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`act-tab-${x.id}`}
              role="tab"
              type="button"
              aria-selected={i === active}
              aria-controls="act-panel"
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className="group flex items-baseline gap-5 border-b border-current/15 py-4 text-left"
            >
              <span className="t-eyebrow tabular-nums opacity-50">{x.index}</span>
              <span className={`t-headline text-xl transition-all duration-500 lg:text-2xl ${i === active ? "translate-x-2 opacity-100" : "opacity-40 group-hover:opacity-80"}`}>{x.name}</span>
              {i === active && <span aria-hidden className="ml-auto h-2 w-2 self-center rounded-full bg-solaire" />}
            </button>
          ))}
        </div>

        <div id="act-panel" role="tabpanel" aria-labelledby={`act-tab-${a.id}`} className="col-span-8 grid grid-cols-8 gap-8">
          <div className="relative col-span-8 aspect-[4/3] overflow-hidden lg:col-span-5">
            <AnimatePresence initial={false}>
              <motion.div
                key={a.id}
                className="absolute inset-0"
                initial={reduce ? false : { opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: EASE }}
              >
                <Media id={a.mediaId} sizes="(min-width: 1024px) 40vw, 60vw" />
              </motion.div>
            </AnimatePresence>
            <span className="t-eyebrow absolute left-3 top-3 z-[2] bg-linen/90 px-2 py-1 text-[0.5625rem] text-ink">Concept</span>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={a.id}
              className="col-span-8 lg:col-span-3"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <h3 className="t-headline text-3xl">{a.name}</h3>
              <Details a={a} className="mt-4" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* mobile: swipe rail */}
      <div className="mt-10 md:hidden">
        <div
          ref={rail}
          onScroll={onRailScroll}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-[var(--gutter)] px-[var(--gutter)] pb-4 [scrollbar-width:none]"
          aria-label="Activations"
          role="region"
        >
          {activations.map((x) => (
            <article key={x.id} className="w-[84vw] shrink-0 snap-start" aria-labelledby={`act-m-${x.id}`}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Media id={x.mediaId} sizes="84vw" />
                <span className="t-eyebrow absolute left-3 top-3 z-[2] bg-linen/90 px-2 py-1 text-[0.5625rem] text-ink">Concept</span>
              </div>
              <p className="t-eyebrow mt-5 opacity-50">{x.index}</p>
              <h3 id={`act-m-${x.id}`} className="t-headline mt-2 text-2xl">
                {x.name}
              </h3>
              <Details a={x} className="mt-3" />
            </article>
          ))}
        </div>
        <p className="gutter t-eyebrow mt-2 flex items-center gap-3 tabular-nums opacity-60" aria-hidden>
          {String(railIndex + 1).padStart(2, "0")}
          <span className="relative h-px flex-1 bg-current/20">
            <span className="absolute inset-y-0 left-0 bg-current transition-all duration-300" style={{ width: `${((railIndex + 1) / activations.length) * 100}%` }} />
          </span>
          {String(activations.length).padStart(2, "0")}
        </p>
      </div>
    </Section>
  );
}
