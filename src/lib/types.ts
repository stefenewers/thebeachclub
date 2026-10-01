/**
 * Shared content types. Everything rendered on the page is described by these
 * shapes so copy, media, partners and programming can change in `src/data/*`
 * without touching components.
 */

export type SectionId =
  | "arrival"
  | "reveal"
  | "first-pour"
  | "explore"
  | "people"
  | "sound"
  | "champagne"
  | "experiences"
  | "cabanas"
  | "sunset"
  | "end";

/** Page-wide ambient tone. Sections declare one; the site eases between them. */
export type Tone = "night" | "linen" | "sand" | "noon" | "golden" | "dusk" | "black";

export type ViewMode = "guest" | "partner";

/* ------------------------------------------------------------------ media */

export type Aspect = "21/9" | "16/9" | "3/2" | "4/3" | "1/1" | "4/5" | "3/4" | "2/3" | "9/16";

/** What the final asset is expected to be. Drives production planning. */
export type MediaExpectation =
  | "real-photography"
  | "conceptual-rendering"
  | "real-video"
  | "conceptual-video"
  | "audio";

export type MediaProvider = "local" | "cloudinary" | "mux";

/** Scene used to draw the V1 placeholder plate (see `components/media/plates`). */
export type PlateScene =
  | "estate"
  | "canopy"
  | "beach"
  | "shore"
  | "still"
  | "portrait"
  | "cabana"
  | "sunset";

export type TimeOfDay = "noon" | "afternoon" | "golden" | "dusk";

export type StillSubject =
  | "bottle"
  | "ice"
  | "goblet"
  | "toast"
  | "pour"
  | "wristband"
  | "sand"
  | "sunlight"
  | "bucket"
  | "umbrella"
  | "linen"
  | "fragrance"
  | "car"
  | "decks";

export interface PlateSpec {
  scene: PlateScene;
  time?: TimeOfDay;
  subject?: StillSubject;
  /** Portrait/cabana palette variation, 0–5. */
  variant?: number;
}

/** A delivered asset. Absent until real media exists. */
export interface MediaSource {
  provider: MediaProvider;
  /** Asset type when it differs from the slot (e.g. a still poster in a video slot). */
  kind?: "image" | "video";
  /** CSS object-position — keeps the subject in frame across desktop/mobile crops. */
  focus?: string;
  /** Provenance, e.g. "board-5 898x505" for interim concept crops. */
  origin?: string;
  /** Local path, Cloudinary public id, or Mux playback id. */
  desktop: string;
  /** Optional art-directed mobile cut (same provider). */
  mobile?: string;
  /** Intrinsic dimensions of the desktop master. */
  width: number;
  height: number;
  /** Video only: poster frame (local path or Cloudinary id). */
  poster?: string;
  /** Tiny base64 blur for next/image `placeholder="blur"`. */
  blurDataURL?: string;
}

export interface MediaSlot {
  id: string;
  section: SectionId;
  kind: "image" | "video" | "audio";
  expected: MediaExpectation;
  aspect: { desktop: Aspect; mobile: Aspect };
  artDirection: string;
  mobileCrop: string;
  alt: string;
  /** Where the delivered master should live (local path or CDN folder). */
  path: string;
  /** V1 generated placeholder. */
  placeholder: PlateSpec;
  /** Present once real media is delivered — flips the slot from plate to asset. */
  source?: MediaSource;
  /** Above-the-fold / LCP candidate. */
  preload?: boolean;
}

/* ---------------------------------------------------------------- content */

export interface LineupSlot {
  time: string;
  /** 24h hour used for ordering and sky interpolation. */
  hour: number;
  title: string;
  genres: string[];
  tone: Tone;
  artists: { name: string; note: string; placeholder: boolean }[];
}

export interface Zone {
  id: string;
  name: string;
  line: string;
  story: string;
  /** Hotspot position on the map, as % of the map box. */
  pos: { x: number; y: number };
  mediaId: string;
  activationId?: string;
}

export type TouchpointCategory =
  | "Every guest"
  | "High-frequency"
  | "Dwell"
  | "Premium hospitality"
  | "Arrival moment"
  | "Content-led";

export interface Activation {
  id: string;
  index: string;
  name: string;
  category: string;
  line: string;
  description: string;
  touchpoint: TouchpointCategory;
  contentMoment: string;
  mediaId: string;
  zoneId?: string;
}

export type PartnerStatus = "conceptual" | "in-conversation" | "confirmed";

export interface PartnerConcept {
  id: string;
  /** Brand used for internal visualization only. */
  brand: string;
  category: string;
  status: PartnerStatus;
  activationIds: string[];
  /**
   * Whether the brand name may appear on the public page. Keep `false` until a
   * partnership is signed — the UI shows `category` instead.
   */
  displayName: boolean;
}
