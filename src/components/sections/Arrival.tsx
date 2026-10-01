"use client";

import { useRef } from "react";
import { copy, event } from "@/data/event";
import { DESKTOP, gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { Media } from "@/components/media/Media";
import { useExperience } from "@/components/providers/Experience";
import { Section } from "@/components/ui/Section";
import { SplitChars } from "@/components/ui/Split";

/** 01 — Arrival. The estate drive at dusk; music heard before the beach is seen. */
export function Arrival() {
  const root = useRef<HTMLDivElement>(null);
  const { scrollTo, sound } = useExperience();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" }, delay: 0.25 });
        tl.from("[data-media]", { scale: 1.12, opacity: 0, duration: 2.6, ease: "power2.out" })
          .from("[data-char]", { yPercent: 105, duration: 1.4, stagger: 0.045 }, 0.5)
          .from("[data-fade]", { opacity: 0, y: 16, duration: 1.2, stagger: 0.12 }, 1.2)
          .from("[data-step]", { opacity: 0, x: -8, duration: 0.6, stagger: 0.35 }, 1.6);

        // Scroll away: content lifts, frame deepens.
        gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } })
          .to("[data-hero-content]", { yPercent: -18, opacity: 0, ease: "none" }, 0)
          .to("[data-media]", { scale: 1.08, ease: "none" }, 0)
          .to("[data-shade]", { opacity: 0.85, ease: "none" }, 0);
      });
      mm.add(`${MOTION_OK} and ${DESKTOP}`, () => {
        gsap.to("[data-wordmark]", {
          xPercent: -4,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: root },
  );

  async function enter() {
    // "Enter" is an explicit gesture — the right moment to bring the music in.
    if (sound.supported && !sound.on) await sound.toggle();
    scrollTo("#reveal");
  }

  return (
    <Section id="arrival" labelledBy="arrival-title">
      <div ref={root} className="relative h-[100svh] min-h-[560px] overflow-hidden bg-[#070d0a] text-linen">
        <Media id="arrival.hero" />
        <div aria-hidden data-shade className="absolute inset-0 bg-black opacity-0" />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,6,0.55)_0%,rgba(4,8,6,0)_28%,rgba(4,8,6,0)_55%,rgba(4,8,6,0.82)_100%)]" />

        <div data-hero-content className="gutter relative z-10 flex h-full flex-col justify-end pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[calc(var(--nav-h)+1rem)] md:pb-12">
          {/* guest-list card */}
          <ol className="t-eyebrow absolute right-[var(--gutter)] top-[calc(var(--nav-h)+1.5rem)] hidden flex-col gap-2 text-linen/70 md:flex" aria-label="Arrival">
            {copy.arrival.details.map((d, i) => (
              <li key={d} data-step className="flex items-center gap-3">
                <span className="tabular-nums text-linen/40">0{i + 1}</span>
                <span>{d}</span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-solaire" />
              </li>
            ))}
          </ol>

          <p data-fade className="t-eyebrow mb-5 text-linen/70 md:mb-8">
            {copy.arrival.eyebrow}
          </p>

          <h1 id="arrival-title" data-wordmark className="t-wordmark text-[clamp(3.25rem,19vw,9rem)] md:whitespace-nowrap md:text-[clamp(4rem,12.1vw,15rem)]">
            <SplitChars text="BEACH" className="block md:inline" />
            <span className="hidden md:inline"> </span>
            <SplitChars text="CLUB" className="block md:inline" />
          </h1>

          <div className="mt-6 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between">
            <p data-fade className="t-label flex flex-col gap-1 text-[0.8125rem] leading-relaxed text-linen/90 md:flex-row md:gap-10">
              <span>{event.location.short}</span>
              <span>{event.season}</span>
            </p>
            <div data-fade className="flex flex-col gap-3 md:items-end">
              <button type="button" onClick={enter} className="btn w-full border-linen/60 text-linen hover:bg-linen hover:text-ink md:w-auto">
                {copy.arrival.cta}
                <span aria-hidden>↓</span>
              </button>
              {sound.supported && <span className="t-eyebrow text-center text-[0.5625rem] text-linen/45 md:text-right">With sound</span>}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
