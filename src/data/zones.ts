import type { Zone } from "@/lib/types";

/**
 * Conceptual beach zones for the interactive site plan.
 * North coast: the sea is north (top of the plan), sunset falls west (left).
 * `pos` is a percentage of the plan box — the plan scales, positions don't.
 */
export const zones: Zone[] = [
  {
    id: "water",
    name: "The Water",
    line: "Clear to the reef.",
    story: "Swim between sets. Floating day beds just off the sand, a lifeguard on every shift, and the music carrying over the water.",
    pos: { x: 52, y: 13 },
    mediaId: "zone.water",
  },
  {
    id: "shore",
    name: "The Shore",
    line: "Feet in the sand.",
    story: "The open beach. Rows of yellow umbrellas, low loungers, roaming service. Where most of the afternoon actually happens.",
    pos: { x: 38, y: 37 },
    mediaId: "zone.shore",
    activationId: "shoreline-lounge",
  },
  {
    id: "sunset-bar",
    name: "Sunset Bar",
    line: "West-facing, last light.",
    story: "A long timber bar on the west point. Tequila, citrus and ice as the sky turns. The busiest twenty minutes of the day.",
    pos: { x: 13, y: 47 },
    mediaId: "zone.sunset-bar",
    activationId: "sunset-tequila",
  },
  {
    id: "cabanas",
    name: "Cabanas",
    line: "First row to the water.",
    story: "A short line of linen cabanas on the east curve. A host, a bucket, a view. Hospitality, not table service.",
    pos: { x: 82, y: 40 },
    mediaId: "zone.cabanas",
    activationId: "cabana-partnership",
  },
  {
    id: "champagne-bar",
    name: "Champagne Bar",
    line: "The first pour.",
    story: "The centre of the beach. Yellow, white and cold. Every guest passes here inside the first ten minutes.",
    pos: { x: 60, y: 54 },
    mediaId: "zone.champagne-bar",
    activationId: "champagne-bar",
  },
  {
    id: "dj-terrace",
    name: "DJ Terrace",
    line: "A booth, not a stage.",
    story: "A raised timber deck at the back of the sand, facing the sea. Booth at eye level. The crowd is the production.",
    pos: { x: 40, y: 66 },
    mediaId: "zone.dj-terrace",
  },
  {
    id: "garden-lounge",
    name: "Garden Lounge",
    line: "Shade, quiet, conversation.",
    story: "Under the almond and sea grape trees. Low seating, softer sound, a fragrance refresh. Where deals and introductions happen.",
    pos: { x: 72, y: 81 },
    mediaId: "zone.garden-lounge",
    activationId: "beauty-refresh",
  },
];
