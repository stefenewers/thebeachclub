"use client";

import { useRef } from "react";
import { copy } from "@/data/event";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { Media } from "@/components/media/Media";
import { ConceptLabel } from "@/components/ui/ConceptLabel";
import { Section } from "@/components/ui/Section";

/** 07 — Champagne. Minimal editorial composition; two lines, one bottle. */
export function Champagne() {
  const root = useRef<HTMLDivElement>(null);
  const [cold, warm] = copy.champagne.lines;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const st = { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true };
        gsap.fromTo("[data-cold]", { xPercent: -8 }, { xPercent: 6, ease: "none", scrollTrigger: st });
        gsap.fromTo("[data-warm]", { xPercent: 8 }, { xPercent: -6, ease: "none", scrollTrigger: st });
        gsap.fromTo("[data-still]", { yPercent: 8 }, { yPercent: -8, ease: "none", scrollTrigger: st });
        gsap.fromTo("[data-umbrella]", { yPercent: 20 }, { yPercent: -20, ease: "none", scrollTrigger: st });
      });
    },
    { scope: root },
  );

  return (
    <Section id="champagne" labelledBy="champagne-title">
      <div ref={root} className="relative overflow-hidden py-24 md:py-40">
        <h2 id="champagne-title" className="sr-only">
          {cold} {warm}
        </h2>

        <p aria-hidden data-cold className="t-display gutter relative z-10 text-[clamp(2.25rem,10.5vw,4.5rem)] md:whitespace-nowrap md:text-[clamp(3rem,6.6vw,9rem)]">
          {cold}
        </p>

        <div className="gutter relative mt-8 grid grid-cols-12 gap-4 md:-mt-[3vw] md:gap-8">
          <div data-umbrella className="relative col-span-5 col-start-1 hidden aspect-[3/2] self-end md:col-span-3 md:col-start-2 md:block">
            <Media id="champagne.umbrella" sizes="25vw" hideLabel />
          </div>
          <figure data-still className="relative col-span-12 m-0 aspect-[4/5] md:col-span-4 md:col-start-6">
            <Media id="champagne.still" sizes="(min-width: 768px) 33vw, 100vw" />
          </figure>
        </div>

        <p aria-hidden data-warm className="t-display gutter relative z-10 mt-8 text-right text-[clamp(2.25rem,10.5vw,4.5rem)] md:-mt-[3vw] md:whitespace-nowrap md:text-[clamp(3rem,6.6vw,9rem)]">
          {warm}
        </p>

        <div className="gutter mt-10 flex justify-center md:mt-14">
          <ConceptLabel>{copy.champagne.label}</ConceptLabel>
        </div>
      </div>
    </Section>
  );
}
