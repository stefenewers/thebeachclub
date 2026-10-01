"use client";

import { useRef } from "react";
import { copy } from "@/data/event";
import { getMedia } from "@/data/media";
import { aspectCss } from "@/lib/media";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { Media } from "@/components/media/Media";
import { Section, SectionIndex } from "@/components/ui/Section";

/** Frame that uses the manifest's desktop/mobile aspect ratios. */
function Frame({ id, className = "", sizes }: { id: string; className?: string; sizes?: string }) {
  const m = getMedia(id);
  return (
    <div
      data-reveal
      className={`relative w-full overflow-hidden [aspect-ratio:var(--ar-m)] md:[aspect-ratio:var(--ar-d)] ${className}`}
      style={{ "--ar-m": aspectCss(m.aspect.mobile), "--ar-d": aspectCss(m.aspect.desktop) } as React.CSSProperties}
    >
      <div data-reveal-inner className="absolute inset-0">
        <Media id={id} sizes={sizes} />
      </div>
    </div>
  );
}

function Word({ children, className = "" }: { children: string; className?: string }) {
  return (
    <p className={`t-serif overflow-hidden text-[clamp(3.5rem,18vw,5.5rem)] leading-[0.9] md:text-[clamp(4rem,9vw,10rem)] ${className}`}>
      <span data-word className="block">
        {children}
      </span>
    </p>
  );
}

/** 05 — The People. Full-bleed editorial; one word at a time. */
export function People() {
  const root = useRef<HTMLDivElement>(null);
  const [friends, taste, privacy, ease] = copy.people.words;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          const inner = el.querySelector("[data-reveal-inner]");
          gsap
            .timeline({ scrollTrigger: { trigger: el, start: "top 85%" } })
            .from(el, { clipPath: "inset(18% 0% 0% 0%)", duration: 1.6, ease: "expo.out" }, 0)
            .from(inner, { scale: 1.18, duration: 2.2, ease: "expo.out" }, 0);
        });
        gsap.utils.toArray<HTMLElement>("[data-word]").forEach((el) => {
          gsap.from(el, { yPercent: 105, duration: 1.3, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%" } });
        });
      });
    },
    { scope: root },
  );

  return (
    <Section id="people" labelledBy="people-title" className="pb-24 pt-[calc(var(--nav-h)+3rem)] md:pb-40 md:pt-32">
      <div ref={root}>
        <div className="gutter mb-10 md:mb-16">
          <SectionIndex id="people" className="opacity-60" />
          <h2 id="people-title" className="sr-only">
            The people
          </h2>
        </div>

        {/* 01 — full bleed */}
        <div className="relative">
          <Frame id="people.01" />
          <Word className="gutter absolute bottom-6 left-0 text-white md:bottom-10">{friends}</Word>
        </div>

        {/* 02 / 03 — offset pair */}
        <div className="gutter mt-16 grid grid-cols-12 gap-4 md:mt-32 md:gap-8">
          <div className="col-span-12 md:col-span-5 md:col-start-2">
            <Frame id="people.02" sizes="(min-width: 768px) 40vw, 100vw" />
          </div>
          <div className="col-span-12 flex flex-col justify-end md:col-span-4 md:col-start-8 md:pb-[12vh]">
            <Word className="mb-6 md:mb-10">{taste}</Word>
            <Frame id="people.03" sizes="(min-width: 768px) 33vw, 100vw" />
          </div>
        </div>

        {/* 04 — centred toast */}
        <div className="gutter mt-16 grid grid-cols-12 items-end gap-4 md:mt-32 md:gap-8">
          <div className="col-span-12 md:col-span-4 md:col-start-4">
            <Frame id="people.04" sizes="(min-width: 768px) 33vw, 100vw" />
          </div>
          <Word className="col-span-12 md:col-span-4 md:pb-8">{privacy}</Word>
        </div>

        {/* 05 — full bleed crowd */}
        <div className="relative mt-16 md:mt-32">
          <Frame id="people.05" />
          <Word className="gutter absolute bottom-6 right-0 text-right text-white md:bottom-10">{ease}</Word>
        </div>

        {/* 06 — closing portrait */}
        <div className="gutter mt-16 grid grid-cols-12 items-end gap-4 md:mt-32 md:gap-8">
          <p className="t-eyebrow order-2 col-span-12 max-w-xs leading-loose opacity-60 md:order-1 md:col-span-4 md:col-start-2">{copy.people.caption}</p>
          <div className="order-1 col-span-12 md:order-2 md:col-span-4 md:col-start-8">
            <Frame id="people.06" sizes="(min-width: 768px) 33vw, 100vw" />
          </div>
        </div>
      </div>
    </Section>
  );
}
