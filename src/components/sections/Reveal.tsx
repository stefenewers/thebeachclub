"use client";

import { useId, useRef } from "react";
import { copy } from "@/data/event";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { Media } from "@/components/media/Media";
import { CanopyScene } from "@/components/media/plates/scenes";
import { useExperience } from "@/components/providers/Experience";
import { Section } from "@/components/ui/Section";
import { SplitLines } from "@/components/ui/Split";

/** 02 — The Reveal. Push through the foliage; the beach opens up. */
export function Reveal() {
  const root = useRef<HTMLDivElement>(null);
  const { sound } = useExperience();
  const setOpenness = sound.setOpenness;
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=170%",
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
            onUpdate: (self) => setOpenness(Math.min(1, self.progress * 1.25)),
          },
        });
        // Narrow screens need a longer push for the foliage to clear the frame.
        const push = () => (window.innerWidth < 768 ? 125 : 80);
        tl.fromTo("[data-beach]", { scale: 1.32 }, { scale: 1, duration: 1 }, 0)
          .fromTo("[data-leaves='left']", { xPercent: 0, scale: 1.05 }, { xPercent: () => -push(), scale: 1.3, duration: 0.7 }, 0)
          .fromTo("[data-leaves='right']", { xPercent: 0, scale: 1.05 }, { xPercent: () => push(), scale: 1.3, duration: 0.7 }, 0)
          .fromTo("[data-leaves='top']", { yPercent: 0 }, { yPercent: -90, duration: 0.6 }, 0.05)
          .fromTo("[data-veil]", { opacity: 0.55 }, { opacity: 0, duration: 0.5 }, 0)
          .from("[data-line]", { yPercent: 110, duration: 0.25, stagger: 0.06 }, 0.62)
          .from("[data-caption]", { opacity: 0, duration: 0.2 }, 0.8);
      });
      // Reduced motion: no pin, foliage removed, beach and headline visible.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-leaves], [data-veil]", { autoAlpha: 0 });
        setOpenness(1);
      });
    },
    { scope: root },
  );

  return (
    <Section id="reveal" labelledBy="reveal-title">
      <div ref={root} className="relative h-[100svh] min-h-[560px] overflow-hidden bg-[#0B1A13]">
        <div data-beach className="absolute inset-0 will-change-transform">
          <Media id="reveal.beach" frame />
        </div>
        <div aria-hidden data-veil className="absolute inset-0 bg-[#0B1A13]" />

        {/* foreground foliage — swapped for `reveal.foliage` cut-outs when delivered */}
        <div aria-hidden data-leaves="left" className="absolute inset-y-[-10%] left-[-25%] w-[85%] will-change-transform">
          <CanopyScene uid={`${uid}l`} transparent side="left" />
        </div>
        <div aria-hidden data-leaves="right" className="absolute inset-y-[-10%] right-[-25%] w-[85%] will-change-transform">
          <CanopyScene uid={`${uid}r`} transparent side="right" />
        </div>
        <div aria-hidden data-leaves="top" className="absolute inset-x-[-10%] top-[-20%] h-[70%] will-change-transform">
          <CanopyScene uid={`${uid}t`} transparent y={[-200, 520]} />
        </div>

        <div className="gutter pointer-events-none relative z-10 flex h-full flex-col items-center justify-center pb-[22vh] text-center text-white md:pb-[16vh]">
          <h2 id="reveal-title" className="t-display text-[clamp(2.5rem,12vw,4.75rem)] drop-shadow-[0_2px_30px_rgba(0,40,40,0.35)] md:text-[clamp(4rem,9.5vw,11rem)]">
            <SplitLines lines={copy.reveal.headline} />
          </h2>
          <p data-caption className="t-serif mt-6 text-xl text-white drop-shadow-[0_1px_12px_rgba(0,40,40,0.5)] md:text-2xl">
            {copy.reveal.caption}
          </p>
        </div>
      </div>
    </Section>
  );
}
