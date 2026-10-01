/**
 * Generation jobs — Media Pass 02.
 *
 * Every prompt is composed from the same continuity blocks (docs/media-production-plan.md §3)
 * so all images read as one photographer, one event, one day. Venue is a
 * conceptual North Coast private estate — never named as confirmed. No text,
 * no logos, no real brands, no real people.
 */

const PLACE =
  "a small, lush, private cove on Jamaica's North Coast near Ocho Rios: fine pale cream-white coral sand, glass-clear shallows going pale turquoise to deep teal beyond a reef, dark limestone rocks at the headlands, dense dark-green sea grape and Indian almond trees and a few naturally leaning coconut palms running down to the sand";

const CAST =
  "a contemporary affluent Caribbean crowd, naturally mixed: Black Jamaican, mixed-race, white and international guests, mostly late 20s to early 40s, men and women in roughly equal numbers, relaxed old friends and couples, stylish but not posed, no one looking at the camera";

const WARDROBE =
  "men in open-collar linen shirts, knit polos, resort shirts and tailored swim shorts; women in premium swimwear, crochet cover-ups, linen sets and resort dresses; colours white, cream, sand, black, olive and muted terracotta; gold jewellery and sunglasses; almost nobody wears yellow";

const OBJECTS = {
  umbrella:
    "round beach umbrellas with solid saffron-yellow matte canvas, short straight valance, no stripes, no fringe, natural teak poles",
  goblet: "opaque glossy deep-saffron (warm marigold, orange-leaning yellow, not lemon, not transparent) acrylic stemmed champagne goblets with a round bowl and short stem",
  bucket: "a opaque glossy deep-saffron (warm marigold, orange-leaning yellow, not lemon, not transparent) acrylic champagne ice bucket filled with crushed ice",
  bottle: "dark green champagne bottles with plain gold foil and blank cream labels",
  cabana: "natural oiled-teak cabanas with white linen drapes tied back with rope, cream cushions with a few saffron-yellow accents",
};

const PHOTO =
  "documentary editorial photograph, shot on a full-frame camera with natural light only, warm-neutral colour grade, true skin tones on every complexion, protected highlights on the white sand, fine film grain, luxury hospitality campaign, restrained and real";

const NEVER =
  "No text, no letters, no logos, no signage, no brand labels, no stage, no LED screens, no lighting truss, no inflatables, no neon, no purple, no festival.";

const ULTRA = "black-forest-labs/flux-1.1-pro-ultra";
const ultra = (aspect_ratio) => ({ aspect_ratio, raw: true, output_format: "jpg", safety_tolerance: 4 });

export const jobs = [
  /* ------------------------------------------------------------ P0 wides */
  {
    id: "reveal-beach",
    slot: "reveal.beach",
    model: ULTRA,
    variants: 3,
    seed: 2101,
    input: ultra("16:9"),
    prompt: `Elevated wide view from the tree line, about five metres up, looking straight out to sea over ${PLACE}, transformed for a private one-day beach party at 2:45 PM in early June. Hard, clear high sun from the left, short crisp shadows, water at its most saturated natural turquoise, a few small cumulus clouds on the horizon. About 200 guests spread naturally across the sand and shallows: small groups under umbrellas, swimmers waist-deep, couples walking the waterline, waiters in white linen carrying trays. ${CAST}. ${WARDROBE}. Production is light and producible: exactly twelve ${OBJECTS.umbrella} in loose informal clusters near the water, never in rows; low teak loungers with cream cushions; at the back of the beach under the trees a 6-metre bar with a saffron-yellow slatted front and white top under a white canvas pergola; on the right edge three ${OBJECTS.cabana}. Foreground branches of sea grape softly out of focus framing the top corners. Horizon at about 40% from the top; calm sea and sky in the upper middle. ${PHOTO}. ${NEVER}`,
  },
  {
    id: "arrival-hero",
    slot: "arrival.hero",
    model: ULTRA,
    variants: 2,
    seed: 2201,
    input: ultra("16:9"),
    prompt: `A private Jamaican estate drive at 1:40 PM: a narrow paved drive under a dense tropical canopy of almond trees, palms and orange-red flowering royal poinciana, leading to tall weathered teak double gates set in a pale limestone wall. A dark unbadged luxury SUV with no visible logo or lettering rolls slowly toward the open gates, seen from behind and slightly to the left, about 20 metres from the camera. At the gate a host in a white linen shirt holds a slim black leather folio, a valet in a white shirt and black trousers steps forward, a security guard in a black polo stands discreetly back. Hard high sun filtered through the canopy: deep shade on the drive with bright shafts and dappled pools of light, the gate area brighter. The car, gate and host sit in the upper-middle of the frame; the lower half of the frame is the shaded drive, dark and calm. Standing eye level, 35mm lens, deep focus, cinematic. ${PHOTO}. No text, no logos, no badges, no number plate lettering, no night, no headlights on, no red carpet.`,
  },
  {
    id: "champagne-still",
    slot: "champagne.still",
    model: ULTRA,
    variants: 2,
    seed: 2301,
    input: ultra("4:5"),
    prompt: `Minimal luxury still life on the sand of ${PLACE} at 4:45 PM. ${OBJECTS.bucket}, beaded with condensation, holding two ${OBJECTS.bottle}; beside it a single ${OBJECTS.goblet} half full of pale gold champagne with fine bubbles, on a low weathered teak side table. The plain straight edge of a saffron-yellow beach umbrella canvas enters the top corner and casts a soft shadow band. Behind, softly out of focus, a band of clear turquoise sea and a sliver of sky. Hard warm sun from the left, one long crisp shadow running to the right across the sand, bright specular highlights on the acrylic and ice, sun glowing through the goblet. Low camera about 40 cm above the sand, 85mm lens at f/4. ${PHOTO}. No people, no hands, no text, no logos, no labels, no flowers, no fruit, no flutes, no steel.`,
  },

  /* ------------------------------------- v2: board-guided, production-first */
  {
    id: "reveal-beach-b",
    slot: "reveal.beach",
    model: ULTRA,
    variants: 3,
    seed: 2111,
    input: { aspect_ratio: "16:9", raw: false, output_format: "jpg", safety_tolerance: 4, image_prompt_strength: 0.22 },
    refs: [{ key: "image_prompt", file: "media-src/boards/board-5.png", crop: [56, 0, 898, 505] }],
    prompt: `A private one-day beach club party in full swing on ${PLACE}, photographed at 2:45 PM in early June from slightly above the sand at the back of the beach, looking out to sea. The foreground and middle of the frame are the party: twelve ${OBJECTS.umbrella} in loose clusters, low teak loungers and daybeds with cream cushions and a few saffron-yellow cushions, three ${OBJECTS.cabana} along the tree line on the right, a 6-metre bar with a saffron-yellow slatted front and white top under a white canvas pergola at the back right with bartenders in white, and a small timber DJ booth tucked under the trees. About 200 guests: groups talking and laughing on the sand, waiters in white linen with trays, people waist-deep in the clear turquoise shallows. ${CAST}. ${WARDROBE}. Hard clear sun from the left, short crisp shadows, turquoise water, small cumulus on the horizon, out-of-focus sea grape branches framing the top left corner. ${PHOTO}. ${NEVER}`,
  },
  {
    id: "arrival-hero-b",
    slot: "arrival.hero",
    model: ULTRA,
    variants: 2,
    seed: 2211,
    input: { aspect_ratio: "16:9", raw: false, output_format: "jpg", safety_tolerance: 4, image_prompt_strength: 0.2 },
    refs: [{ key: "image_prompt", file: "media-src/boards/board-3.png", crop: [1103, 0, 433, 330] }],
    prompt: `Guest arrival at a private Jamaican beach estate at 1:40 PM. Seen from behind, a dark luxury SUV with a completely plain, unbadged tailgate and no lettering rolls slowly up a short pale-stone driveway toward tall weathered teak double gates standing open in a rough dry-stacked white limestone wall overgrown with tropical plants. Dense canopy of palms, almond trees and orange-red flowering royal poinciana overhead, hard high sun breaking through in shafts and dappled light. Beside the gate a host in a white linen shirt and cream trousers holds a slim black leather folio; a valet in white steps forward. The car and gate sit in the upper-middle of the frame; the bottom of the frame is shaded driveway, dark and calm. Standing eye level, 35mm lens. ${PHOTO}. No text, no logos, no badges, no number plate, no stucco, no suburban houses, no night, no headlights.`,
  },
  ...[1, 2].map((n) => ({
    id: `champagne-still-edit-${n}`,
    slot: "champagne.still",
    model: "black-forest-labs/flux-kontext-pro",
    variants: 1,
    seed: 2320 + n,
    input: { aspect_ratio: "match_input_image", output_format: "png", safety_tolerance: 4 },
    refs: [{ key: "input_image", file: `media-src/generated/champagne-still/champagne-still-${n}.jpg`, max: 1440 }],
    prompt:
      "Replace every clear glass champagne flute with an opaque glossy deep-saffron acrylic stemmed champagne goblet (warm marigold, orange-leaning yellow, same colour as the ice bucket) with a round bowl and short stem, half full of pale gold champagne. Remove any lemons or fruit. Keep the ice bucket, bottles, table, umbrella, sand, sea, light and shadows exactly the same. No text, no logos.",
  })),

  {
    id: "champagne-still-up",
    slot: "champagne.still",
    model: "nightmareai/real-esrgan",
    input: { scale: 2, face_enhance: false },
    refs: [{ key: "image", file: "media-src/generated/champagne-still-edit-2/champagne-still-edit-2-1.png", max: 1200 }],
  },

  /* ------------------------------------------ First Pour redos (raw off) */
  ...[
    ["goblet", "A hand with warm brown skin and thin gold rings holds a single champagne goblet at chest height. GOBLET: opaque glossy deep-saffron acrylic (warm marigold orange-yellow, like a yellow ceramic glaze, NOT transparent glass, NOT lemon), wide round bowl, short thick stem, round foot, half full of pale gold champagne. White sand and turquoise sea softly out of focus behind."],
    ["toast", "Two hands of different skin tones with gold jewellery raise two champagne goblets that just touch. GOBLETS: opaque glossy deep-saffron acrylic (warm marigold orange-yellow, NOT transparent glass, NOT flutes), wide round bowls, short stems. Sea and white sand softly out of focus behind. Calm, no splashing."],
    ["pour", "A bartender's hand in a white linen cuff pours champagne from ONE dark green bottle with plain unmarked gold foil into ONE goblet: opaque glossy deep-saffron acrylic (warm marigold orange-yellow, NOT transparent), wide round bowl, short stem. A thin golden stream and rising foam, backlit, turquoise sea out of focus. Only one bottle and one glass in frame."],
    ["wristband", "Close-up of a woman's wrist with warm brown skin wearing a plain woven fabric wristband in deep saffron yellow with one thin cream edge stripe and a small matte brass slider clasp, layered with two thin gold bracelets. Her hand rests on a cream linen cushion; behind, out of focus, white sand and turquoise sea. The wristband and everything in frame is completely free of text, letters or patterns."],
  ].map(([name, scene], i) => ({
    id: `pour-${name}-b`,
    slot: `pour.${name}`,
    model: ULTRA,
    variants: 2,
    seed: 2500 + i * 10,
    input: { aspect_ratio: "3:4", raw: false, output_format: "jpg", safety_tolerance: 4 },
    prompt: `Editorial macro photograph at a private Caribbean beach party at 2:15 PM. ${scene} Hard high early-afternoon tropical sun from the left, crisp specular highlights, short sharp shadows. 100mm macro lens, shallow depth of field. ${PHOTO}. No text, no letters, no logos, no labels, no flutes, no clear glass, no plastic cups, no neon.`,
  })),

  /* ------------------------------------------------------ First Pour macros */
  ...[
    ["bottle", "A dark green champagne bottle cropped at the shoulder rising from crushed ice in a opaque glossy deep-saffron (warm marigold, orange-leaning yellow, not lemon, not transparent) acrylic ice bucket, heavy condensation, plain gold foil catching hard sun, blank cream label turned away; white bar top, turquoise sea softly out of focus behind."],
    ["ice", "Extreme close-up of crushed ice in a opaque glossy deep-saffron (warm marigold, orange-leaning yellow, not lemon, not transparent) acrylic champagne bucket, droplets and frost, hard sunlight refracting turquoise from the sea behind, the gold foil of a bottle neck just entering the frame."],
    ["goblet", "A hand with warm brown skin and thin gold rings holds a opaque glossy deep-saffron (warm marigold, orange-leaning yellow, not lemon, not transparent) acrylic stemmed champagne goblet with a round bowl and short stem, half full of pale gold champagne with fine bubbles, at chest height; white sand and turquoise sea softly out of focus behind; sun glowing through the yellow bowl."],
    ["pour", "Backlit macro of champagne being poured in a thin golden stream from the neck of a dark green bottle into a opaque glossy deep-saffron (warm marigold, orange-leaning yellow, not lemon, not transparent) acrylic goblet, rising bubbles and a little foam, a bartender's white linen cuff at the edge of frame, turquoise sea out of focus."],
    ["toast", "Two opaque glossy deep-saffron (warm marigold, orange-leaning yellow, not lemon, not transparent) acrylic champagne goblets meeting mid-toast, held by two hands of different skin tones with gold jewellery, droplets flying, sea and white sand softly out of focus behind."],
    ["wristband", "Close-up of a wrist wearing a woven fabric event wristband in saffron yellow with a thin cream edge stripe and a small matte brass slider clasp, layered with thin gold bracelets, holding the stem of a yellow acrylic goblet; warm skin, hard sun, sand out of focus. The wristband has no text or pattern."],
    ["sand", "Overhead view of bare feet on fine pale cream-white coral sand, a tan leather sandal kicked off beside them, the sharp curved shadow edge of a beach umbrella crossing the frame diagonally; one foot with a thin gold anklet."],
    ["sunlight", "Looking up from below into a saffron-yellow canvas beach umbrella lit from above by hard sun so the canvas glows almost like a colour field, the teak pole and ribs in silhouette, a sliver of turquoise sky at one edge, warm light spilling onto a white linen cushion."],
  ].map(([name, scene], i) => ({
    id: `pour-${name}`,
    slot: `pour.${name}`,
    model: ULTRA,
    variants: 1,
    seed: 2400 + i,
    input: ultra("3:4"),
    prompt: `Editorial macro photograph at a private Caribbean beach party at 2:15 PM. ${scene} Hard high early-afternoon tropical sun from the left, crisp specular highlights, short sharp shadows. 100mm macro lens, shallow depth of field. ${PHOTO}. No text, no letters, no logos, no labels, no flutes, no plastic cups, no steel bucket, no neon.`,
  })),
];
