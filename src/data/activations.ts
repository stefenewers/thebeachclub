import type { Activation } from "@/lib/types";

/**
 * Conceptual brand activation inventory. No pricing in V1.
 * Brand names live in `partners.ts` and are never rendered unless confirmed.
 */
export const activations: Activation[] = [
  {
    id: "champagne-bar",
    index: "01",
    name: "Champagne Bar",
    category: "Champagne",
    line: "The first pour of the day.",
    description:
      "A sun-yellow bar at the centre of the beach. Buckets on ice, acrylic goblets, a pour every guest remembers.",
    touchpoint: "Every guest",
    contentMoment: "The first pour — overhead, on ice, at 2 PM light.",
    mediaId: "activation.champagne-bar",
    zoneId: "champagne-bar",
  },
  {
    id: "shoreline-lounge",
    index: "02",
    name: "Shoreline Lounge",
    category: "Champagne / Rosé",
    line: "Umbrellas to the waterline.",
    description:
      "Branded umbrellas, loungers and roaming service along the open shore. The image people post without being asked.",
    touchpoint: "Dwell",
    contentMoment: "Wide drone pass over the umbrella rows.",
    mediaId: "activation.shoreline-lounge",
    zoneId: "shore",
  },
  {
    id: "sunset-tequila",
    index: "03",
    name: "Sunset Tequila Bar",
    category: "Premium tequila",
    line: "Last light, served cold.",
    description:
      "A west-facing timber bar built for the golden hour. Long pours, citrus, ice, and the busiest twenty minutes of the day.",
    touchpoint: "High-frequency",
    contentMoment: "Silhouetted toast against the sun at 6:40 PM.",
    mediaId: "activation.sunset-tequila",
    zoneId: "sunset-bar",
  },
  {
    id: "arrival-valet",
    index: "04",
    name: "Arrival / Valet",
    category: "Automotive",
    line: "The first impression.",
    description:
      "Guest arrival through the estate drive. Valet, guest list and a single hero vehicle at the gate.",
    touchpoint: "Arrival moment",
    contentMoment: "Door open, foliage, first sound of the beach.",
    mediaId: "activation.arrival-valet",
  },
  {
    id: "cabana-partnership",
    index: "05",
    name: "Cabana Partnership",
    category: "Hospitality / Spirits",
    line: "Hosted, private, ocean-front.",
    description:
      "A named cabana row with dedicated hosts, premium spirits and champagne on ice. Hospitality, not bottle service.",
    touchpoint: "Premium hospitality",
    contentMoment: "Linen in the breeze, bucket sweating, sea behind.",
    mediaId: "activation.cabana",
    zoneId: "cabanas",
  },
  {
    id: "beauty-refresh",
    index: "06",
    name: "Beauty / Fragrance Refresh",
    category: "Beauty / Fragrance",
    line: "Cool towels. A new scent.",
    description:
      "A shaded refresh station in the garden lounge. SPF, mist, cold towels, a signature fragrance for the evening.",
    touchpoint: "High-frequency",
    contentMoment: "Mirror moment under the sea grape trees.",
    mediaId: "activation.beauty-refresh",
    zoneId: "garden-lounge",
  },
  {
    id: "resortwear",
    index: "07",
    name: "Fashion / Resortwear",
    category: "Fashion",
    line: "Dressed for the shore.",
    description:
      "A capsule resortwear moment — styled guests, a pop-up rail, a limited piece only available on the day.",
    touchpoint: "Content-led",
    contentMoment: "Editorial portraits on the shoreline at golden hour.",
    mediaId: "activation.resortwear",
  },
  {
    id: "content-installation",
    index: "08",
    name: "Content Installation",
    category: "Any partner",
    line: "The frame everyone uses.",
    description:
      "A single, well-lit architectural frame on the sand. Designed for the photograph, not around a logo.",
    touchpoint: "Content-led",
    contentMoment: "The shared image of the day, from five hundred phones.",
    mediaId: "activation.content-installation",
  },
];
