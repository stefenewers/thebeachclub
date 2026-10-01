/**
 * Brand palette — single source for CSS tokens (mirrored in globals.css) and
 * generated SVG plates.
 */
export const palette = {
  white: "#FBF9F4",
  linen: "#F4EFE6",
  sand: "#E8DCC8",
  sandDeep: "#D6C3A2",
  sandShadow: "#BFA984",
  turquoiseLight: "#A6E0D6",
  turquoise: "#3DB5B0",
  turquoiseDeep: "#137A7C",
  ocean: "#0D5560",
  green: "#0E2A20",
  greenMid: "#1D4633",
  greenLeaf: "#2F5E3F",
  greenLight: "#4E7F4F",
  black: "#0C0C0B",
  ink: "#141310",
  gold: "#C8A464",
  goldLight: "#E6CF9C",
  solaire: "#F3A619",
  solaireDeep: "#DE7D12",
  sunset: "#EC7A3C",
  ember: "#B6432A",
  dusk: "#2B1915",
  skin: "#7A4A30",
} as const;

export type PaletteKey = keyof typeof palette;
