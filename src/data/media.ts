import type { MediaSlot } from "@/lib/types";

/**
 * Central media manifest — also the production shot list.
 *
 * Every image/video/audio slot on the site is declared here. In V1 no slot has
 * a `source`, so each renders its generated `placeholder` plate. To ship real
 * media, add `source` (local path, Cloudinary public id or Mux playback id);
 * no component changes are needed.
 *
 *   expected      — what production must deliver (photo vs. rendering vs. film)
 *   aspect        — intended frame for desktop and the art-directed mobile cut
 *   artDirection  — brief for the photographer / 3D artist
 *   mobileCrop    — how the vertical cut differs (not just a centre crop)
 *   path          — where the delivered master should live
 */

const casting =
  "Casting: contemporary Jamaican and Caribbean — Black, mixed-race, white and international guests, naturally mixed. Affluent, relaxed, never posed.";

export const media: MediaSlot[] = [
  /* --------------------------------------------------------- 01 ARRIVAL */
  {
    id: "arrival.hero",
    section: "arrival",
    kind: "video",
    expected: "real-video",
    aspect: { desktop: "16/9", mobile: "9/16" },
    artDirection:
      "Late afternoon. A dark luxury car moves slowly up a private estate drive under dense tropical canopy. Low sun through leaves. Security at a lit gate, a host with a guest list, valet stepping forward. 12–15s seamless loop, no faces in close-up, no logos.",
    mobileCrop:
      "Shoot a separate vertical pass: car enters from the bottom third, canopy fills the top two-thirds, headroom for the wordmark.",
    alt: "A car arriving through a private tropical estate drive.",
    path: "mux://beachclub/arrival-hero",
    placeholder: { scene: "estate" },
    preload: true,
  },

  /* ---------------------------------------------------------- 02 REVEAL */
  {
    id: "reveal.foliage",
    section: "reveal",
    kind: "image",
    expected: "conceptual-rendering",
    aspect: { desktop: "16/9", mobile: "9/16" },
    artDirection:
      "Two cut-out foreground plates (left/right) of sea grape, almond and banana leaves with alpha, shot or rendered at the same lens as the beach plate so they part naturally.",
    mobileCrop: "Taller leaf masses; the part opens vertically as much as horizontally.",
    alt: "",
    path: "/media/reveal/foliage-{left,right}.avif",
    placeholder: { scene: "canopy" },
  },
  {
    id: "reveal.beach",
    section: "reveal",
    kind: "image",
    expected: "real-photography",
    aspect: { desktop: "16/9", mobile: "9/16" },
    artDirection:
      "Elevated view from the tree line: an intimate white-sand cove, turquoise water, dense green on both headlands, rows of yellow umbrellas, a well-dressed crowd of ~500. No stage, no truss, no barriers in frame. 3 PM light.",
    mobileCrop: "Vertical: foliage frame at top, sand and umbrellas mid, water to the horizon in the top third.",
    alt: "A private Caribbean cove with yellow umbrellas, white sand and turquoise water.",
    path: "/media/reveal/beach.avif",
    placeholder: { scene: "beach", time: "afternoon" },
  },

  /* ------------------------------------------------------ 03 FIRST POUR */
  ...(
    [
      ["bottle", "Champagne bottle on crushed ice, condensation, hard 2 PM sun, bottle cropped at the shoulder. Label turned away until a partner is confirmed.", "A champagne bottle on ice."],
      ["ice", "Macro of ice in a metal bucket, sunlight refracting turquoise from the sea behind.", "Ice in a bucket, catching sunlight."],
      ["goblet", "Solaire-yellow acrylic goblet held at chest height, sand background, shallow depth of field.", "A yellow acrylic goblet held in the sun."],
      ["pour", "The pour: a thin golden stream into the goblet, bubbles visible, backlit.", "Champagne being poured into a goblet."],
      ["wristband", "Woven fabric wristband on a wrist, gold jewellery, skin and sun. Close, tactile.", "A woven event wristband on a guest's wrist."],
      ["sand", "Bare feet and white sand, a sandal kicked off, umbrella shadow crossing frame.", "Bare feet in white sand under an umbrella's shadow."],
      ["sunlight", "Light through a yellow umbrella canopy onto linen. Abstract, warm, almost colour-field.", "Warm light through a yellow umbrella onto white linen."],
    ] as const
  ).map(
    ([subject, artDirection, alt]): MediaSlot => ({
      id: `pour.${subject}`,
      section: "first-pour",
      kind: "image",
      expected: "real-photography",
      aspect: { desktop: "3/4", mobile: "9/16" },
      artDirection: `${artDirection} Editorial macro, 100mm, natural light only.`,
      mobileCrop: "Full-height vertical; subject in the upper-middle third, caption space below.",
      alt,
      path: `/media/first-pour/${subject}.avif`,
      placeholder: { scene: "still", subject },
    }),
  ),

  /* -------------------------------------------------------- 04 EXPLORE */
  {
    id: "zone.water",
    section: "explore",
    kind: "image",
    expected: "real-photography",
    aspect: { desktop: "3/2", mobile: "4/5" },
    artDirection: "Guests waist-deep in clear turquoise water, floating day beds, shoreline and umbrellas behind.",
    mobileCrop: "Tighter on two swimmers; horizon high.",
    alt: "Guests swimming in clear turquoise water off the beach.",
    path: "/media/zones/water.avif",
    placeholder: { scene: "shore", time: "afternoon" },
  },
  {
    id: "zone.shore",
    section: "explore",
    kind: "image",
    expected: "real-photography",
    aspect: { desktop: "3/2", mobile: "4/5" },
    artDirection: "Rows of yellow umbrellas to the waterline, loungers, service moving through. Eye level.",
    mobileCrop: "Single umbrella row receding to the water.",
    alt: "Yellow umbrellas and loungers along the shoreline.",
    path: "/media/zones/shore.avif",
    placeholder: { scene: "beach", time: "afternoon" },
  },
  {
    id: "zone.sunset-bar",
    section: "explore",
    kind: "image",
    expected: "conceptual-rendering",
    aspect: { desktop: "3/2", mobile: "4/5" },
    artDirection: "Long timber bar on the west point, backlit by a low sun, bartenders in white.",
    mobileCrop: "End-on view down the bar toward the sun.",
    alt: "A timber bar facing the setting sun.",
    path: "/media/zones/sunset-bar.avif",
    placeholder: { scene: "sunset" },
  },
  {
    id: "zone.cabanas",
    section: "explore",
    kind: "image",
    expected: "conceptual-rendering",
    aspect: { desktop: "3/2", mobile: "4/5" },
    artDirection: "Natural wood cabanas with white linen drapes, yellow cushions, sea directly ahead.",
    mobileCrop: "One cabana, drapes moving, bucket in foreground.",
    alt: "Linen cabanas facing the sea.",
    path: "/media/zones/cabanas.avif",
    placeholder: { scene: "cabana", variant: 0 },
  },
  {
    id: "zone.champagne-bar",
    section: "explore",
    kind: "image",
    expected: "conceptual-rendering",
    aspect: { desktop: "3/2", mobile: "4/5" },
    artDirection: "A sun-yellow bar on the sand, white top, buckets on ice, guests three-deep but relaxed.",
    mobileCrop: "Bartender's hands and buckets, crowd soft behind.",
    alt: "A yellow champagne bar on the beach.",
    path: "/media/zones/champagne-bar.avif",
    placeholder: { scene: "still", subject: "bucket" },
  },
  {
    id: "zone.dj-terrace",
    section: "explore",
    kind: "image",
    expected: "conceptual-rendering",
    aspect: { desktop: "3/2", mobile: "4/5" },
    artDirection: "Low timber deck, DJ booth at eye level, crowd on sand in front, sea behind the DJ. No LED walls.",
    mobileCrop: "From behind the booth looking out at the crowd and water.",
    alt: "A DJ booth on a timber terrace facing the crowd and sea.",
    path: "/media/zones/dj-terrace.avif",
    placeholder: { scene: "still", subject: "decks" },
  },
  {
    id: "zone.garden-lounge",
    section: "explore",
    kind: "image",
    expected: "real-photography",
    aspect: { desktop: "3/2", mobile: "4/5" },
    artDirection: "Low seating in dappled shade under sea grape trees. Conversation, linen, a glass on a side table.",
    mobileCrop: "Two guests in conversation, foliage overhead.",
    alt: "A shaded garden lounge under tropical trees.",
    path: "/media/zones/garden-lounge.avif",
    placeholder: { scene: "canopy" },
  },

  /* --------------------------------------------------------- 05 PEOPLE */
  ...(
    [
      ["01", "16/9", "4/5", "Three friends walking the shoreline, mid-laugh, linen and gold, shot from behind and side.", "Friends walking along the shoreline."],
      ["02", "4/5", "4/5", "Portrait: a woman in a white resort dress under a yellow umbrella, looking off-frame.", "A guest in white under a yellow umbrella."],
      ["03", "3/4", "4/5", "Two men in open-collar shirts, champagne, easy conversation at the bar.", "Two guests talking at the bar."],
      ["04", "4/5", "9/16", "Hands, glasses, jewellery — a toast from above.", "A toast seen from above."],
      ["05", "16/9", "4/5", "Wide: the crowd at 5 PM, mixed, dressed, dancing loosely, sea behind.", "The crowd dancing with the sea behind."],
      ["06", "3/4", "4/5", "Quiet portrait in the garden lounge, half shade, direct gaze.", "A guest in the shade of the garden lounge."],
    ] as const
  ).map(
    ([n, desktop, mobile, artDirection, alt], i): MediaSlot => ({
      id: `people.${n}`,
      section: "people",
      kind: "image",
      expected: "real-photography",
      aspect: { desktop, mobile },
      artDirection: `${artDirection} ${casting}`,
      mobileCrop: "Recompose vertically; keep faces in the upper third.",
      alt,
      path: `/media/people/${n}.avif`,
      placeholder: { scene: "portrait", variant: i },
    }),
  ),

  /* ---------------------------------------------------------- 06 SOUND */
  {
    id: "sound.booth",
    section: "sound",
    kind: "image",
    expected: "real-photography",
    aspect: { desktop: "4/5", mobile: "4/5" },
    artDirection: "The booth from the crowd's side: hands on the mixer, sea behind, afternoon flare.",
    mobileCrop: "Same frame.",
    alt: "A DJ at the booth with the sea behind.",
    path: "/media/sound/booth.avif",
    placeholder: { scene: "still", subject: "decks" },
  },
  {
    id: "audio.ambient",
    section: "arrival",
    kind: "audio",
    expected: "audio",
    aspect: { desktop: "1/1", mobile: "1/1" },
    artDirection:
      "A 60–90s seamless afro-house loop recorded/mixed as if heard from the estate drive, plus an open mix. V1 synthesises a muffled kick in-browser.",
    mobileCrop: "n/a",
    alt: "",
    path: "/media/audio/ambient-{muffled,open}.m4a",
    placeholder: { scene: "still", subject: "decks" },
  },

  /* ------------------------------------------------------ 07 CHAMPAGNE */
  {
    id: "champagne.still",
    section: "champagne",
    kind: "image",
    expected: "conceptual-rendering",
    aspect: { desktop: "4/5", mobile: "4/5" },
    artDirection:
      "Minimal still life on the sand: bottle, ice bucket, one glass, the edge of a yellow umbrella, ocean beyond. Hard sun, long shadow. Conceptual brand activation — label generic until confirmed.",
    mobileCrop: "Same composition, tighter on bottle and glass.",
    alt: "A champagne bottle in an ice bucket with a glass, umbrella and ocean.",
    path: "/media/champagne/still.avif",
    placeholder: { scene: "still", subject: "bottle" },
  },
  {
    id: "champagne.umbrella",
    section: "champagne",
    kind: "image",
    expected: "real-photography",
    aspect: { desktop: "3/2", mobile: "4/5" },
    artDirection: "Looking up through a yellow umbrella canopy, sky turquoise at the edges.",
    mobileCrop: "Vertical canopy detail.",
    alt: "Looking up through a yellow umbrella.",
    path: "/media/champagne/umbrella.avif",
    placeholder: { scene: "still", subject: "umbrella" },
  },

  /* ---------------------------------------------------- 08 EXPERIENCES */
  ...(
    [
      ["champagne-bar", "still", "goblet", "Yellow bar, buckets, acrylic goblets, the first pour."],
      ["shoreline-lounge", "beach", undefined, "Umbrella rows to the waterline from a low drone."],
      ["sunset-tequila", "sunset", undefined, "West-facing bar at golden hour, silhouetted toast."],
      ["arrival-valet", "still", "car", "Hero vehicle at the estate gate, door open, canopy above."],
      ["cabana", "cabana", undefined, "Partner-named cabana row, hosts in white, linen moving."],
      ["beauty-refresh", "still", "fragrance", "Mist, cold towels and a fragrance bottle in dappled shade."],
      ["resortwear", "portrait", undefined, "Styled guest on the shoreline, capsule resortwear, golden light."],
      ["content-installation", "still", "sunlight", "A single timber frame on the sand, sea through it, yellow light."],
    ] as const
  ).map(
    ([id, scene, subject, artDirection]): MediaSlot => ({
      id: `activation.${id}`,
      section: "experiences",
      kind: "image",
      expected: "conceptual-rendering",
      aspect: { desktop: "4/3", mobile: "4/5" },
      artDirection: `${artDirection} Concept visual — brand marks generic or absent until a partner is confirmed.`,
      mobileCrop: "Vertical recomposition centred on the activation's hero object.",
      alt: artDirection,
      path: `/media/activations/${id}.avif`,
      placeholder: {
        scene,
        ...(subject ? { subject } : {}),
        ...(scene === "beach" ? { time: "afternoon" as const } : {}),
        ...(scene === "portrait" ? { variant: 4 } : {}),
        ...(scene === "cabana" ? { variant: 1 } : {}),
      },
    }),
  ),

  /* -------------------------------------------------------- 09 CABANAS */
  {
    id: "cabanas.hero",
    section: "cabanas",
    kind: "image",
    expected: "conceptual-rendering",
    aspect: { desktop: "16/9", mobile: "4/5" },
    artDirection:
      "A row of natural-wood cabanas with white linen, integrated into the tree line, ocean directly ahead. Yellow accents only in cushions and towels.",
    mobileCrop: "One cabana, front-on, sea framed by the drapes.",
    alt: "Wooden cabanas with white linen facing the ocean.",
    path: "/media/cabanas/hero.avif",
    placeholder: { scene: "cabana", variant: 2 },
  },
  {
    id: "cabanas.detail",
    section: "cabanas",
    kind: "image",
    expected: "real-photography",
    aspect: { desktop: "3/4", mobile: "1/1" },
    artDirection: "Detail: bucket sweating on teak, linen napkin, two glasses, a host's hand.",
    mobileCrop: "Square, overhead.",
    alt: "A champagne bucket and two glasses on a teak table.",
    path: "/media/cabanas/detail.avif",
    placeholder: { scene: "still", subject: "linen" },
  },

  /* --------------------------------------------------------- 10 SUNSET */
  ...(
    [
      ["crowd", "Hands in the air, crowd silhouetted against a low orange sun.", "A crowd with hands raised at sunset.", "portrait", 5],
      ["dj", "The DJ from behind, sun setting over the crowd, booth light warm.", "A DJ playing to the crowd at sunset.", "still", "decks"],
      ["ocean", "The sun touching the sea, a single swimmer, gold on the water.", "The sun setting into the sea.", "sunset", undefined],
      ["champagne", "Two goblets raised against the last light.", "Two glasses raised against the sunset.", "still", "goblet"],
    ] as const
  ).map(
    ([n, artDirection, alt, scene, extra]): MediaSlot => ({
      id: `sunset.${n}`,
      section: "sunset",
      kind: "image",
      expected: "real-photography",
      aspect: { desktop: "16/9", mobile: "9/16" },
      artDirection: `${artDirection} ${casting}`,
      mobileCrop: "Full-screen vertical; sun in the upper third.",
      alt,
      path: `/media/sunset/${n}.avif`,
      placeholder:
        scene === "portrait"
          ? { scene, variant: extra as number }
          : scene === "still"
            ? { scene, subject: extra as "decks" | "goblet" }
            : { scene },
    }),
  ),
];

const byId = new Map(media.map((m) => [m.id, m]));

export function getMedia(id: string): MediaSlot {
  const slot = byId.get(id);
  if (!slot) throw new Error(`Unknown media slot: ${id}`);
  return slot;
}
