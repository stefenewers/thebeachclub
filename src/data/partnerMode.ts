import type { SectionId } from "@/lib/types";

/**
 * Partner mode (`?view=partner`) content modules.
 *
 * Each module is injected after the section named in `after`. Modules marked
 * `draft` render a clear "in preparation" state instead of figures, so no
 * unverified business data is ever shown. Flip to `ready` and fill `rows`
 * when numbers are approved.
 */

export type PartnerModuleId =
  | "audience"
  | "attendance"
  | "inventory"
  | "media"
  | "hospitality"
  | "deliverables"
  | "contact";

export interface PartnerRow {
  k: string;
  v: string;
}

export interface PartnerModule {
  id: PartnerModuleId;
  index: string;
  title: string;
  after: SectionId;
  status: "draft" | "ready";
  summary: string;
  rows: PartnerRow[];
}

export const partnerModules: PartnerModule[] = [
  {
    id: "audience",
    index: "P1",
    title: "Audience profile",
    after: "people",
    status: "draft",
    summary: "Affluent young professionals, founders, executives, creatives and diaspora visitors.",
    rows: [
      { k: "Age", v: "21+" },
      { k: "Origin", v: "Jamaica · diaspora (UK, US, Canada) · international" },
      { k: "Profile", v: "Professionals, founders, executives, creatives" },
      { k: "Demographics", v: "In preparation" },
    ],
  },
  {
    id: "attendance",
    index: "P2",
    title: "Attendance",
    after: "reveal",
    status: "draft",
    summary: "Working target of approximately 500 guests.",
    rows: [
      { k: "Target", v: "≈ 500 guests" },
      { k: "Format", v: "Single day · 2 PM to late" },
      { k: "Window", v: "May / June 2027" },
      { k: "Caveat", v: "Subject to venue approval and safe operating capacity" },
    ],
  },
  {
    id: "inventory",
    index: "P3",
    title: "Activation inventory",
    after: "experiences",
    status: "draft",
    summary: "Eight activation concepts. Category exclusivity available. Pricing on request.",
    rows: [],
  },
  {
    id: "media",
    index: "P4",
    title: "Media opportunities",
    after: "sound",
    status: "draft",
    summary: "Pre-event campaign, on-site capture and post-event edit.",
    rows: [
      { k: "Pre-event", v: "Announcement film · lineup reveals · invitation" },
      { k: "On-site", v: "Photo · video · creator capture" },
      { k: "Post-event", v: "Recap film · editorial gallery" },
      { k: "Reach estimates", v: "In preparation" },
    ],
  },
  {
    id: "hospitality",
    index: "P5",
    title: "Hospitality opportunities",
    after: "cabanas",
    status: "draft",
    summary: "Hosted cabanas and guest-list allocations for partner guests.",
    rows: [
      { k: "Cabanas", v: "Partner-named cabana row" },
      { k: "Guest list", v: "Partner allocation" },
      { k: "Arrival", v: "Valet and hosted entry" },
    ],
  },
  {
    id: "deliverables",
    index: "P6",
    title: "Expected content deliverables",
    after: "sunset",
    status: "draft",
    summary: "A shared content plan, agreed per partner.",
    rows: [
      { k: "Photography", v: "Editorial gallery, partner selects" },
      { k: "Film", v: "Hero recap · vertical cut-downs" },
      { k: "Creators", v: "Curated guest creators" },
      { k: "Volumes", v: "In preparation" },
    ],
  },
  {
    id: "contact",
    index: "P7",
    title: "Contact",
    after: "end",
    status: "ready",
    summary: "Partnerships, venue and talent enquiries.",
    rows: [],
  },
];

export function partnerModulesAfter(section: SectionId): PartnerModule[] {
  return partnerModules.filter((m) => m.after === section);
}
