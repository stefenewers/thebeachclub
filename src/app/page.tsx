import { Fragment, type ComponentType } from "react";
import { sections } from "@/data/event";
import { partnerModulesAfter } from "@/data/partnerMode";
import type { SectionId, ViewMode } from "@/lib/types";
import { PartnerModule } from "@/components/partner/PartnerModule";
import { Experience } from "@/components/providers/Experience";
import { InquiryProvider } from "@/components/ui/Inquiry";
import { Nav } from "@/components/ui/Nav";
import { Arrival } from "@/components/sections/Arrival";
import { Reveal } from "@/components/sections/Reveal";
import { FirstPour } from "@/components/sections/FirstPour";
import { Explore } from "@/components/sections/Explore";
import { People } from "@/components/sections/People";
import { Sound } from "@/components/sections/Sound";
import { Champagne } from "@/components/sections/Champagne";
import { Experiences } from "@/components/sections/Experiences";
import { Cabanas } from "@/components/sections/Cabanas";
import { Sunset } from "@/components/sections/Sunset";
import { End } from "@/components/sections/End";

/** Section registry — order and labels come from `data/event.ts`. */
const REGISTRY: Record<SectionId, ComponentType> = {
  arrival: Arrival,
  reveal: Reveal,
  "first-pour": FirstPour,
  explore: Explore,
  people: People,
  sound: Sound,
  champagne: Champagne,
  experiences: Experiences,
  cabanas: Cabanas,
  sunset: Sunset,
  end: End,
};

export default async function Home({ searchParams }: PageProps<"/">) {
  const { view: raw } = await searchParams;
  const view: ViewMode = raw === "partner" ? "partner" : "guest";

  return (
    <Experience view={view}>
      <InquiryProvider>
        <a href="#end" className="t-eyebrow sr-only z-[70] bg-solaire px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to contact
        </a>
        <Nav />
        <main>
          {sections.map(({ id }) => {
            const Component = REGISTRY[id];
            return (
              <Fragment key={id}>
                <Component />
                {view === "partner" && partnerModulesAfter(id).map((m) => <PartnerModule key={m.id} m={m} />)}
              </Fragment>
            );
          })}
        </main>
      </InquiryProvider>
    </Experience>
  );
}
