"use client";

import { useRef } from "react";
import { copy } from "@/data/event";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { Media } from "@/components/media/Media";
import { Section, SectionIndex } from "@/components/ui/Section";
import { SplitLines } from "@/components/ui/Split";

/** 09 — Cabanas. Hospitality, not bottle service. */
export function Cabanas() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          "[data-hero-media]",
          { yPercent: -8, scale: 1.1 },
          { yPercent: 8, scale: 1, ease: "none", scrollTrigger: { trigger: "[data-hero]", start: "top bottom", end: "bottom top", scrub: true } },
        );
        gsap.from("[data-line]", { yPercent: 110, duration: 1.3, stagger: 0.08, ease: "expo.out", scrollTrigger: { trigger: "[data-hero]", start: "top 60%" } });
        gsap.from("[data-feature]", { opacity: 0, y: 20, duration: 1, stagger: 0.1, ease: "expo.out", scrollTrigger: { trigger: "[data-features]", start: "top 80%" } });
        gsap.from("[data-ritual]", { opacity: 0, x: -10, duration: 0.8, stagger: 0.12, ease: "power2.out", scrollTrigger: { trigger: "[data-rituals]", start: "top 85%" } });
      });
    },
    { scope: root },
  );

  return (
    <Section id="cabanas" labelledBy="cabanas-title" className="pb-24 md:pb-40">
      <div ref={root}>
        <div data-hero className="relative h-[100svh] min-h-[560px] overflow-hidden md:h-auto md:min-h-0 md:aspect-[16/9]">
          <div data-hero-media className="absolute inset-0">
            <Media id="cabanas.hero" />
          </div>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
          <div className="gutter absolute inset-x-0 bottom-0 pb-10 text-white md:pb-16">
            <SectionIndex id="cabanas" className="mb-6 opacity-80" />
            <h2 id="cabanas-title" className="t-display text-[clamp(2.5rem,11vw,4.5rem)] md:text-[clamp(4rem,8.5vw,10rem)]">
              <SplitLines lines={copy.cabanas.headline} />
            </h2>
          </div>
        </div>

        <div className="gutter mt-16 grid grid-cols-12 gap-6 md:mt-28 md:gap-10">
          <div className="relative col-span-12 aspect-square md:col-span-4 md:col-start-2 md:aspect-[3/4]">
            <Media id="cabanas.detail" sizes="(min-width: 768px) 33vw, 100vw" />
          </div>
          <div className="col-span-12 flex flex-col justify-between md:col-span-5 md:col-start-7">
            <dl data-features className="border-t border-current/15">
              {copy.cabanas.features.map((f) => (
                <div key={f.k} data-feature className="flex items-baseline justify-between gap-6 border-b border-current/15 py-5">
                  <dt className="t-eyebrow opacity-50">{f.k}</dt>
                  <dd className="t-serif text-right text-xl md:text-2xl">{f.v}</dd>
                </div>
              ))}
            </dl>
            <ol data-rituals className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2" aria-label="A cabana afternoon">
              {copy.cabanas.ritual.map((r, i) => (
                <li key={r} data-ritual className="t-label flex items-center gap-3 text-[0.6875rem]">
                  {i > 0 && <span aria-hidden className="h-px w-5 bg-solaire" />}
                  {r}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}
