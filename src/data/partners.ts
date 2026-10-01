import type { PartnerConcept } from "@/lib/types";

/**
 * Conceptual partner fits used for internal visualization.
 *
 * NONE of these brands are confirmed sponsors. `displayName` stays `false`
 * until a partnership is signed; the UI renders `category` instead and every
 * activation carries a "Concept" label.
 */
export const partners: PartnerConcept[] = [
  {
    id: "champagne-primary",
    brand: "Veuve Clicquot",
    category: "Champagne house",
    status: "conceptual",
    activationIds: ["champagne-bar", "shoreline-lounge"],
    displayName: false,
  },
  {
    id: "champagne-alt",
    brand: "Moët & Chandon",
    category: "Champagne house",
    status: "conceptual",
    activationIds: ["champagne-bar", "cabana-partnership"],
    displayName: false,
  },
  {
    id: "tequila",
    brand: "Don Julio",
    category: "Premium tequila",
    status: "conceptual",
    activationIds: ["sunset-tequila", "cabana-partnership"],
    displayName: false,
  },
  {
    id: "automotive",
    brand: "Porsche",
    category: "Automotive",
    status: "conceptual",
    activationIds: ["arrival-valet"],
    displayName: false,
  },
];

export function partnerLabel(p: PartnerConcept): string {
  return p.displayName && p.status === "confirmed" ? p.brand : p.category;
}

export function partnersForActivation(activationId: string): PartnerConcept[] {
  return partners.filter((p) => p.activationIds.includes(activationId));
}
