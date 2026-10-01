"use client";

import Image, { getImageProps } from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ui } from "@/data/event";
import { getMedia } from "@/data/media";
import { imageLoaderFor, resolveVideo } from "@/lib/media";
import type { MediaExpectation, MediaSlot } from "@/lib/types";
import { Plate } from "./plates/Plate";

const EXPECTED: Record<MediaExpectation, string> = {
  "real-photography": "Photography pending",
  "conceptual-rendering": "Concept rendering pending",
  "real-video": "Film pending",
  "conceptual-video": "Concept film pending",
  audio: "Audio pending",
};

/** Base colour per scene, shown before a lazy plate mounts. */
const SCENE_BASE: Record<string, string> = {
  estate: "#0A1510",
  canopy: "#4F7552",
  beach: "#CFE3DC",
  shore: "#2A9C9A",
  sunset: "#E8904A",
  cabana: "#E7DCC8",
  portrait: "#D9C4A2",
  still: "#E8DCC8",
};

interface MediaProps {
  id: string;
  /** `sizes` for responsive images. Default: full viewport width. */
  sizes?: string;
  className?: string;
  style?: CSSProperties;
  /** Beach plates: add a foliage frame. */
  frame?: boolean;
  /** Hide the slot label even when labels are on. */
  hideLabel?: boolean;
  /** Overrides the manifest `preload` flag. */
  eager?: boolean;
}

/**
 * Fills its (positioned, sized) parent. Resolution order:
 * delivered video → delivered image → generated plate.
 */
export function Media({ id, sizes = "100vw", className = "", style, frame, hideLabel, eager }: MediaProps) {
  const slot = getMedia(id);
  const isEager = eager ?? slot.preload ?? false;
  return (
    <div className={`grain absolute inset-0 overflow-hidden ${className}`} style={style} data-media={slot.id}>
      {slot.source && (slot.source.kind ?? slot.kind) === "video" ? (
        <AdaptiveVideo slot={slot} eager={isEager} />
      ) : slot.source ? (
        <AssetImage slot={slot} sizes={sizes} eager={isEager} />
      ) : (
        <LazyPlate slot={slot} eager={isEager} frame={frame} />
      )}
      {!slot.source && ui.showSlotLabels && !hideLabel && <SlotLabel slot={slot} />}
    </div>
  );
}

function SlotLabel({ slot }: { slot: MediaSlot }) {
  return (
    <span className="t-eyebrow pointer-events-none absolute bottom-3 left-3 z-[1] text-[0.5625rem] tracking-[0.16em] text-white/70 mix-blend-difference">
      {slot.id} · {EXPECTED[slot.expected]}
    </span>
  );
}

/* ------------------------------------------------------------- plates */

function useNearViewport<T extends Element>(enabled: boolean) {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(!enabled);
  useEffect(() => {
    if (!enabled || near) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "120% 0px 120% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled, near]);
  return [ref, near] as const;
}

function LazyPlate({ slot, eager, frame }: { slot: MediaSlot; eager: boolean; frame?: boolean }) {
  const [ref, near] = useNearViewport<HTMLDivElement>(!eager);
  return (
    <div ref={ref} className="absolute inset-0" style={{ background: SCENE_BASE[slot.placeholder.scene] }}>
      {near && <Plate spec={slot.placeholder} frame={frame} />}
    </div>
  );
}

/* ------------------------------------------------------------- images */

function AssetImage({ slot, sizes, eager }: { slot: MediaSlot; sizes: string; eager: boolean }) {
  const src = slot.source!;
  const loader = imageLoaderFor(slot);
  const common = {
    alt: slot.alt,
    sizes,
    loader,
    quality: 75,
    ...(eager ? { preload: true } : { loading: "lazy" as const }),
    placeholder: src.blurDataURL ? ("blur" as const) : ("empty" as const),
    blurDataURL: src.blurDataURL,
  };

  if (!src.mobile) {
    return <Image {...common} alt={slot.alt} src={src.desktop} fill className="object-cover" style={{ objectPosition: src.focus }} />;
  }

  // Art direction: separate vertical cut for small screens.
  const { props: { srcSet: desktop } } = getImageProps({ ...common, src: src.desktop, width: src.width, height: src.height });
  const { props: { srcSet: mobile, ...rest } } = getImageProps({
    ...common,
    src: src.mobile,
    width: Math.round(src.height * 0.5625),
    height: src.height,
  });
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktop} />
      <source srcSet={mobile} />
      <img {...rest} alt={slot.alt} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: src.focus }} />
    </picture>
  );
}

/* -------------------------------------------------------------- video */

/**
 * Plays only while visible; never autoplays under reduced motion or
 * Save-Data. HLS plays natively on Safari/iOS; elsewhere the MP4 rendition is
 * used until hls.js is wired in (pass two).
 */
function AdaptiveVideo({ slot, eager }: { slot: MediaSlot; eager: boolean }) {
  const v = resolveVideo(slot)!;
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || saveData) return;
    const native = v.hls && el.canPlayType("application/vnd.apple.mpegurl");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSrc((s) => s ?? (native ? v.hls : v.mp4));
          el.play().catch(() => {});
        } else el.pause();
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [v.hls, v.mp4]);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      poster={v.poster}
      muted
      loop
      playsInline
      preload={eager ? "metadata" : "none"}
      aria-label={slot.alt}
    />
  );
}
