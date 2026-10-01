import type { LineupSlot, SectionId, Tone } from "@/lib/types";

/**
 * Event facts, section copy and programming.
 * Copy rule: if a line can be five words, make it five words.
 */

export const event = {
  name: "Beach Club",
  wordmark: "BEACH CLUB",
  location: { city: "Ocho Rios", country: "Jamaica", short: "Ocho Rios, Jamaica" },
  season: "Summer 2027",
  window: "May / June 2027",
  /** Working target — subject to venue approval and safe operating capacity. */
  attendance: { target: 500, label: "≈ 500 guests", caveat: "Subject to final venue approval and safe operating capacity." },
  age: "21+",
  hours: { open: "2 PM", close: "Late" },
  venue: {
    /** Public-facing line. Never name an unconfirmed venue as fact. */
    public: "Private estate, North Coast",
    /** Internal visual reference — shown only with an explicit conceptual label. */
    reference: "Prospect Estate & Villas — Frankfort Villa private beach",
    confirmed: false,
  },
  disclaimer:
    "Private concept preview. Venue, brands and imagery are conceptual visualizations, not confirmed partnerships.",
  contact: {
    email: "partners@beachclub.example",
    note: "Placeholder address — replace before sharing.",
  },
} as const;

export interface SectionMeta {
  id: SectionId;
  index: string;
  label: string;
  tone: Tone;
}

/** Order, numbering, nav labels and ambient tone for every section. */
export const sections: SectionMeta[] = [
  { id: "arrival", index: "01", label: "Arrival", tone: "night" },
  { id: "reveal", index: "02", label: "The Reveal", tone: "linen" },
  { id: "first-pour", index: "03", label: "First Pour", tone: "linen" },
  { id: "explore", index: "04", label: "The Beach", tone: "sand" },
  { id: "people", index: "05", label: "The People", tone: "linen" },
  { id: "sound", index: "06", label: "Sound", tone: "noon" },
  { id: "champagne", index: "07", label: "Champagne", tone: "linen" },
  { id: "experiences", index: "08", label: "Brand Experiences", tone: "sand" },
  { id: "cabanas", index: "09", label: "Cabanas", tone: "linen" },
  { id: "sunset", index: "10", label: "Sunset", tone: "golden" },
  { id: "end", index: "11", label: "Private Preview", tone: "black" },
];

export const copy = {
  arrival: {
    eyebrow: "Private estate · Guest list only",
    cta: "Enter the experience",
    soundPrompt: "Sound on",
    /** Small arrival details, read like a guest-list card. */
    details: ["Gate", "Guest list", "Valet", "Wristband"],
  },
  reveal: {
    headline: ["This is", "Beach Club."],
    caption: "One beach. Five hundred guests. No stage.",
  },
  firstPour: {
    headline: ["Your afternoon", "begins here."],
  },
  explore: {
    eyebrow: "Explore the beach",
    headline: "Seven places to be.",
    hint: "Select a zone",
    mapLabel: "Conceptual site plan — not to scale",
  },
  people: {
    words: ["Friends.", "Taste.", "Privacy.", "Ease."],
    caption: "Ocho Rios, Kingston, Montego Bay, London, Toronto, Miami, New York.",
  },
  sound: {
    eyebrow: "Sound",
    headline: "Afternoon into night.",
    note: "Lineup to be announced. Names shown are placeholders.",
  },
  champagne: {
    lines: ["Champagne, cold.", "Caribbean, warm."],
    label: "Conceptual brand activation",
  },
  experiences: {
    eyebrow: "Brand experiences",
    headline: "Built into the afternoon.",
    sub: "Eight conceptual activations. Each one a moment guests choose.",
    label: "Concept — not a confirmed partnership",
  },
  cabanas: {
    eyebrow: "Cabanas",
    headline: ["Your own", "shoreline."],
    features: [
      { k: "Build", v: "Natural wood, white linen" },
      { k: "Service", v: "Dedicated host" },
      { k: "On ice", v: "Champagne, premium spirits" },
      { k: "View", v: "First row to the water" },
    ],
    ritual: ["Arrive", "Settle", "First pour", "Golden hour", "Stay late"],
  },
  sunset: {
    /** The only text in the sequence: time stamps. */
    stamps: ["6:38 PM", "6:48 PM", "7:30 PM", "7:45 PM"],
    final: ["You should have", "been here."],
  },
  end: {
    tag: "Private concept preview",
    partner: "Partner with Beach Club",
    deck: "Request the deck",
  },
} as const;

/** Placeholder programming. Replace `artists` when bookings are confirmed. */
export const lineup: LineupSlot[] = [
  {
    time: "2 PM",
    hour: 14,
    title: "Deep / Soulful / Afro House",
    genres: ["Deep house", "Soulful", "Afro house"],
    tone: "noon",
    artists: [
      { name: "Resident — TBA", note: "Opening set", placeholder: true },
      { name: "Guest selector — TBA", note: "Kingston", placeholder: true },
    ],
  },
  {
    time: "4 PM",
    hour: 16,
    title: "House / Afrobeats / Global",
    genres: ["House", "Afrobeats", "Global"],
    tone: "noon",
    artists: [
      { name: "International guest — TBA", note: "London", placeholder: true },
      { name: "Resident — TBA", note: "B2B", placeholder: true },
    ],
  },
  {
    time: "6 PM",
    hour: 18,
    title: "Golden Hour",
    genres: ["Melodic", "Afro house", "Live percussion"],
    tone: "golden",
    artists: [{ name: "Headline — TBA", note: "Sunset set", placeholder: true }],
  },
  {
    time: "7 PM",
    hour: 19,
    title: "Crossover",
    genres: ["Amapiano", "Afrobeats", "R&B edits"],
    tone: "golden",
    artists: [{ name: "Special guest — TBA", note: "Crossover", placeholder: true }],
  },
  {
    time: "8 PM",
    hour: 20,
    title: "Jamaica",
    genres: ["Dancehall", "Reggae", "Soca"],
    tone: "dusk",
    artists: [
      { name: "Sound system — TBA", note: "Closing", placeholder: true },
      { name: "Selector — TBA", note: "Ocho Rios", placeholder: true },
    ],
  },
];

/** UI flags for the prototype. */
export const ui = {
  /** Show small slot ids on placeholder plates (shot-list mode). */
  showSlotLabels: true,
  /** Lenis smooth scrolling on pointer devices. */
  smoothScroll: true,
} as const;
