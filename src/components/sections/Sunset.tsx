"use client";

import { useRef } from "react";
import { copy } from "@/data/event";
import { media } from "@/data/media";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { Media } from "@/components/media/Media";
import { useExperience } from "@/components/providers/Experience";
import { Section } from "@/components/ui/Section";
import { SplitChars } from "@/components/ui/Split";

const frames = media.filter((m) => m.section === "sunset");

/**
 * 10 — Sunset. The emotional climax. Copy nearly disappears: four frames,
 * four time stamps, one line.
 */
export function Sunset() {
  const root = useRef<HTMLDivElement>(null);
  const { sound } = useExperience();
  const setOpenness = sound.setOpenness;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=340%",
            pin: true,
            scrub: 0.8,
            onEnter: () => setOpenness(1),
          },
        });
        const fr = gsap.utils.toArray<HTMLElement>("[data-frame]");
        const st = gsap.utils.toArray<HTMLElement>("[data-stamp]");
        fr.forEach((f, i) => {
          const at = i * 1;
          if (i > 0) tl.fromTo(f, { opacity: 0 }, { opacity: 1, duration: 0.35 }, at - 0.15);
          tl.fromTo(f, { scale: 1.14 }, { scale: 1, duration: 1.3 }, Math.max(0, at - 0.15));
          if (i > 0) tl.to(st[i - 1], { opacity: 0, duration: 0.1 }, at - 0.15);
          tl.fromTo(st[i], { opacity: 0 }, { opacity: 1, duration: 0.1 }, at - 0.05);
        });
        const end = fr.length;
        tl.fromTo("[data-sun]", { yPercent: -60 }, { yPercent: 70, duration: end + 0.6 }, 0)
          .fromTo("[data-warm]", { opacity: 0.05 }, { opacity: 0.28, duration: end }, 0)
          .to(st[st.length - 1], { opacity: 0, duration: 0.1 }, end - 0.1)
          .to("[data-night]", { opacity: 0.72, duration: 0.6 }, end - 0.2)
          .from("[data-char]", { yPercent: 105, opacity: 0, duration: 0.4, stagger: 0.02 }, end + 0.1)
          .to({}, { duration: 0.4 });
      });
    },
    { scope: root },
  );

  return (
    <Section id="sunset" labelledBy="sunset-title">
      <div ref={root} className="relative h-[100svh] min-h-[560px] overflow-hidden bg-[#3a1d12] text-white">
        {frames.map((f, i) => (
          <div key={f.id} data-frame className={`absolute inset-0 will-change-transform ${i > 0 ? "opacity-0 motion-reduce:hidden" : ""}`}>
            <Media id={f.id} />
          </div>
        ))}
        <div
          aria-hidden
          data-sun
          className="pointer-events-none absolute left-1/2 top-[18%] aspect-square w-[120vw] -translate-x-1/2 rounded-full md:w-[60vw]"
          style={{ background: "radial-gradient(circle, rgba(255,226,160,0.55) 0%, rgba(255,180,90,0.25) 30%, transparent 62%)" }}
        />
        <div aria-hidden data-warm className="absolute inset-0 bg-[linear-gradient(180deg,#E07A35_0%,#F2A14A_45%,#7A2E1A_100%)] opacity-10 mix-blend-multiply" />
        <div aria-hidden data-night className="absolute inset-0 bg-[#140a06] opacity-0 motion-reduce:opacity-60" />

        <div className="t-eyebrow absolute left-[var(--gutter)] top-[calc(var(--nav-h)+1.5rem)] text-white/80" aria-hidden>
          {copy.sunset.stamps.map((s, i) => (
            <span key={s} data-stamp className={`absolute left-0 whitespace-nowrap tabular-nums ${i > 0 ? "opacity-0" : ""}`}>
              {s}
            </span>
          ))}
        </div>

        <div className="gutter relative z-10 flex h-full items-center justify-center text-center">
          <h2 id="sunset-title" className="t-display text-[clamp(2.25rem,10.5vw,4.25rem)] md:text-[clamp(3.5rem,7.6vw,9rem)]">
            {copy.sunset.final.map((line) => (
              <SplitChars key={line} text={line} className="block" />
            ))}
          </h2>
        </div>
      </div>
    </Section>
  );
}
