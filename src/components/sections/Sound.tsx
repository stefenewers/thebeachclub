"use client";

import { useRef } from "react";
import { copy, lineup } from "@/data/event";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { Section, SectionIndex } from "@/components/ui/Section";

/** Sky per hour: [top, bottom, sun, text]. Interpolated as you scroll. */
const SKY: Record<number, [string, string, string, string]> = {
  14: ["#9FD3D8", "#EEF1E8", "#FFF6DC", "#141310"],
  16: ["#86C6CF", "#F3E6CC", "#FFEFC2", "#141310"],
  18: ["#E9A050", "#F8D79B", "#FFE6A6", "#1E1109"],
  19: ["#C9562E", "#F2A65A", "#FFD27E", "#1E1109"],
  20: ["#2B1915", "#8E3A26", "#F2A65A", "#F6E7D2"],
};

/**
 * 06 — Sound. A day-part timeline; the sky behind it moves from bright
 * afternoon to dusk as the user progresses.
 */
export function Sound() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const setSky = (hour: number, duration = 1.4) => {
        const [top, bottom, sun, text] = SKY[hour];
        gsap.to(root.current, { "--sky-top": top, "--sky-bottom": bottom, "--sun": sun, "--sky-text": text, duration, ease: "power2.inOut" });
      };
      setSky(14, 0);

      gsap.utils.toArray<HTMLElement>("[data-slot]").forEach((el) => {
        const hour = Number(el.dataset.slot);
        gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
            end: "bottom 60%",
            onToggle: (self) => self.isActive && setSky(hour),
          },
        });
      });

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        // Sun descends across the whole section.
        gsap.fromTo(
          "[data-sun]",
          { yPercent: -120 },
          { yPercent: 160, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom bottom", scrub: true } },
        );
        gsap.utils.toArray<HTMLElement>("[data-slot-inner]").forEach((el) => {
          gsap.from(el.children, {
            opacity: 0,
            y: 30,
            duration: 1.1,
            stagger: 0.08,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 75%" },
          });
        });
      });
    },
    { scope: root },
  );

  return (
    <Section id="sound" labelledBy="sound-title">
      <div
        ref={root}
        className="relative"
        style={{ "--sky-top": SKY[14][0], "--sky-bottom": SKY[14][1], "--sun": SKY[14][2], "--sky-text": SKY[14][3] } as React.CSSProperties}
      >
        {/* sticky sky — absolute wrapper bounds the sticky layer to this section */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="sticky top-0 h-[100svh] overflow-hidden"
            style={{ background: "linear-gradient(180deg, var(--sky-top) 0%, var(--sky-bottom) 100%)" }}
          >
            <div
              data-sun
              className="absolute left-1/2 top-1/2 aspect-square w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90 md:w-[34vw]"
              style={{ background: "radial-gradient(circle, var(--sun) 0%, color-mix(in oklab, var(--sun) 40%, transparent) 38%, transparent 70%)" }}
            />
            <div className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>

        <div className="relative" style={{ color: "var(--sky-text)" }}>
          <div className="gutter flex min-h-[70svh] flex-col justify-end pb-16 pt-[calc(var(--nav-h)+3rem)] md:min-h-[80svh]">
            <SectionIndex id="sound" className="opacity-60" />
            <h2 id="sound-title" className="t-display mt-6 text-[clamp(2.25rem,11vw,4rem)] md:text-[clamp(3rem,7vw,8rem)]">
              {copy.sound.headline}
            </h2>
          </div>

          <ol className="gutter">
            {lineup.map((slot) => (
              <li key={slot.time} data-slot={slot.hour} className="flex min-h-[78svh] items-center border-t border-current/20 py-16 md:min-h-[90svh]">
                <div data-slot-inner className="grid w-full gap-6 md:grid-cols-12 md:gap-8">
                  <p className="t-display text-[clamp(4.5rem,24vw,7rem)] tabular-nums md:col-span-5 md:text-[clamp(5rem,11vw,13rem)]">{slot.time}</p>
                  <div className="md:col-span-6 md:col-start-7 md:self-end">
                    <h3 className="t-headline text-2xl md:text-4xl">{slot.title}</h3>
                    <ul className="mt-6 divide-y divide-current/15 border-y border-current/15">
                      {slot.artists.map((a) => (
                        <li key={a.name} className="flex items-baseline justify-between gap-4 py-3">
                          <span className="t-label text-[0.75rem]">{a.name}</span>
                          <span className="t-serif text-lg opacity-70">{a.note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="gutter t-eyebrow pb-16 opacity-60">{copy.sound.note}</p>
        </div>
      </div>
    </Section>
  );
}
