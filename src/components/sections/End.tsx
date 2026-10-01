"use client";

import { useRef } from "react";
import { copy, event } from "@/data/event";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { useInquiry } from "@/components/ui/Inquiry";
import { Section } from "@/components/ui/Section";

/** 11 — End frame. Near-black, wordmark, two doors. */
export function End() {
  const root = useRef<HTMLDivElement>(null);
  const openInquiry = useInquiry();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from("[data-end]", { opacity: 0, y: 24, duration: 1.4, stagger: 0.12, ease: "expo.out", scrollTrigger: { trigger: root.current, start: "top 60%" } });
      });
    },
    { scope: root },
  );

  return (
    <Section id="end" labelledBy="end-title">
      <div ref={root} className="gutter flex min-h-[100svh] flex-col bg-[#080807] pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(var(--nav-h)+4rem)] text-linen">
        <div className="flex flex-1 flex-col justify-center">
          <h2 id="end-title" data-end className="t-wordmark text-[clamp(3.25rem,19vw,9rem)] md:text-[clamp(4rem,12.1vw,15rem)]">
            <span className="block md:inline">BEACH</span> <span className="block md:inline">CLUB</span>
          </h2>
          <p data-end className="t-label mt-8 flex flex-col gap-1 text-[0.8125rem] text-linen/80 md:flex-row md:gap-10">
            <span>{event.location.city}</span>
            <span>{event.season}</span>
          </p>
          <p data-end className="t-serif mt-10 text-2xl text-linen/60">
            {copy.end.tag}.
          </p>
          <div data-end className="mt-10 flex flex-col gap-3 md:flex-row md:gap-4">
            <button type="button" onClick={() => openInquiry("partner")} className="btn btn-solid w-full md:w-auto">
              {copy.end.partner}
            </button>
            <button type="button" onClick={() => openInquiry("deck")} className="btn w-full border-linen/50 text-linen hover:bg-linen hover:text-ink md:w-auto">
              {copy.end.deck}
            </button>
          </div>
        </div>
        <footer className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="t-eyebrow max-w-2xl text-[0.5625rem] leading-relaxed text-linen/40">{event.disclaimer}</p>
          <p className="t-eyebrow text-[0.5625rem] text-linen/40">
            {event.age} · {event.attendance.label}
          </p>
        </footer>
      </div>
    </Section>
  );
}
