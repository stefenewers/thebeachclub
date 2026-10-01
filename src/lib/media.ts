import type { ImageLoader } from "next/image";
import type { Aspect, MediaSlot } from "@/lib/types";

/**
 * Media provider adapters. Components never build CDN URLs themselves — they
 * ask here, so swapping local files for Cloudinary/Mux is a data change.
 *
 * Env:
 *   NEXT_PUBLIC_CLOUDINARY_CLOUD  — Cloudinary cloud name
 */

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD;

export const cloudinaryLoader: ImageLoader = ({ src, width, quality }) => {
  if (!CLOUD) throw new Error("NEXT_PUBLIC_CLOUDINARY_CLOUD is not set");
  const q = quality ? `q_${quality}` : "q_auto";
  return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,${q},w_${width},c_limit/${src}`;
};

export const mux = {
  hls: (playbackId: string) => `https://stream.mux.com/${playbackId}.m3u8`,
  /** Requires static renditions enabled on the Mux asset. */
  mp4: (playbackId: string) => `https://stream.mux.com/${playbackId}/capped-1080p.mp4`,
  poster: (playbackId: string, width = 1920) =>
    `https://image.mux.com/${playbackId}/thumbnail.webp?width=${width}&time=0`,
};

export function aspectValue(a: Aspect): number {
  const [w, h] = a.split("/").map(Number);
  return w / h;
}

/** CSS `aspect-ratio` string, e.g. "16 / 9". */
export function aspectCss(a: Aspect): string {
  return a.replace("/", " / ");
}

export function hasAsset(slot: MediaSlot): boolean {
  return Boolean(slot.source);
}

export function imageLoaderFor(slot: MediaSlot): ImageLoader | undefined {
  return slot.source?.provider === "cloudinary" ? cloudinaryLoader : undefined;
}

export interface ResolvedVideo {
  /** HLS manifest (Safari/iOS play natively; elsewhere needs hls.js — pass two). */
  hls?: string;
  /** Progressive fallback. */
  mp4?: string;
  poster?: string;
}

export function resolveVideo(slot: MediaSlot): ResolvedVideo | null {
  const s = slot.source;
  if (!s || slot.kind !== "video") return null;
  if (s.provider === "mux") {
    return { hls: mux.hls(s.desktop), mp4: mux.mp4(s.desktop), poster: s.poster ?? mux.poster(s.desktop) };
  }
  return { mp4: s.desktop, poster: s.poster };
}

/** Production summary for the media report / partner mode. */
export function mediaStatus(slots: MediaSlot[]) {
  const pending = slots.filter((s) => !s.source);
  const count = (k: MediaSlot["expected"]) => pending.filter((s) => s.expected === k).length;
  return {
    total: slots.length,
    delivered: slots.length - pending.length,
    pending: pending.length,
    photography: count("real-photography"),
    rendering: count("conceptual-rendering"),
    video: count("real-video") + count("conceptual-video"),
    audio: count("audio"),
  };
}
