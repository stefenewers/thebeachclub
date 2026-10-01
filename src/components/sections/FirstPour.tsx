"use client";

import { useRef } from "react";
import { copy } from "@/data/event";
import { media } from "@/data/media";
import { hasAsset } from "@/lib/media";
import { DESKTOP, gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { Media } from "@/components/media/Media";
import { Section, SectionIndex } from "@/components/ui/Section";
import { SplitLines } from "@/components/ui/Split";

const all = media.filter((m) => m.section === "first-pour");
/** Once real media exists, show only delivered frames — never mix photos with plates. */
const frames = all.some(hasAsset) ? all.filter(hasAsset) : all;

/**
 * 03 — First Pour. Editorial macro sequence.
 * Desktop: pinned horizontal track. Mobile: full-screen frames that stack
 * over each other with CSS sticky (no JS, no scroll-jacking).
 */
export function FirstPour() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${MOTION_OK} and ${DESKTOP}`, () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth;
        gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
        gsap.from("[data-line]", {
          yPercent: 110,
          duration: 1.2,
          stagger: 0.08,
          ease: "expo.out",
          scrollTrigger: { trigger: root.current, start: "top 70%" },
        });
      });
      mm.add(`${MOTION_OK} and (max-width: 767px)`, () => {
        gsap.utils.toArray<HTMLElement>("[data-frame-media]").forEach((m) => {
          gsap.fromTo(m, { scale: 1.15 }, { scale: 1, ease: "none", scrollTrigger: { trigger: m, start: "top bottom", end: "top top", scrub: true } });
        });
      });
    },
    { scope: root },
  );

  return (
    <Section id="first-pour" labelledBy="pour-title">
      <div ref={root} className="relative overflow-clip md:h-[100svh]">
        <div ref={track} className="flex flex-col md:h-full md:flex-row md:items-center md:gap-[3vw] md:pl-[var(--gutter)] md:pr-[12vw]">
          {/* title card */}
          <div className="gutter flex min-h-[80svh] flex-col justify-between pb-10 pt-[calc(var(--nav-h)+2rem)] md:min-h-0 md:w-[38vw] md:shrink-0 md:px-0 md:py-0 md:pr-[2vw]">
            <SectionIndex id="first-pour" className="opacity-60" />
            <h2 id="pour-title" className="t-display mt-auto text-[clamp(2.25rem,11vw,5rem)] md:mt-10 md:text-[clamp(2.5rem,4.3vw,5.5rem)]">
              <SplitLines lines={copy.firstPour.headline} />
            </h2>
            <p className="t-eyebrow mt-8 opacity-50 md:hidden">Scroll</p>
          </div>

          {frames.map((f, i) => {
            const word = f.id.split(".")[1];
            return (
              <figure
                key={f.id}
                className="relative m-0 h-[100svh] w-full shrink-0 max-md:sticky max-md:top-0 md:h-[72vh] md:w-auto md:aspect-[3/4]"
                style={{ zIndex: i + 1 }}
              >
                <div data-frame-media className="absolute inset-0 overflow-hidden">
                  <Media id={f.id} sizes="(min-width: 768px) 40vw, 100vw" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-5 text-white md:top-full md:bottom-auto md:mt-4 md:p-0 md:text-[var(--fg)]">
                  <span className="t-eyebrow tabular-nums opacity-70">{String(i + 1).padStart(2, "0")}</span>
                  <span className="t-serif text-2xl capitalize md:text-xl">{word}</span>
                </figcaption>
                <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
              </figure>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
