"use client";

import Lenis from "lenis";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { ui } from "@/data/event";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { AmbientEngine } from "@/lib/sound";
import type { Tone, ViewMode } from "@/lib/types";

/* ------------------------------------------------------- active section */

let activeSection = { index: "01", label: "Arrival" };
const listeners = new Set<() => void>();
function setActiveSection(next: typeof activeSection) {
  if (next.index === activeSection.index) return;
  activeSection = next;
  listeners.forEach((l) => l());
}
const subscribe = (l: () => void) => (listeners.add(l), () => listeners.delete(l));
export function useActiveSection() {
  return useSyncExternalStore(subscribe, () => activeSection, () => activeSection);
}

const noop = () => () => {};
const audioSupported = () => "AudioContext" in window || "webkitAudioContext" in window;

/* -------------------------------------------------------------- context */

interface ExperienceValue {
  view: ViewMode;
  sound: { supported: boolean; on: boolean; toggle: () => void; setOpenness: (v: number) => void };
  scrollTo: (target: string | HTMLElement) => void;
  /** Pause/resume smooth scroll (e.g. while a modal is open). */
  lockScroll: (locked: boolean) => void;
}

const Ctx = createContext<ExperienceValue | null>(null);

export function useExperience() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useExperience must be used inside <Experience>");
  return v;
}

export function Experience({ view, children }: { view: ViewMode; children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const engineRef = useRef<AmbientEngine | null>(null);
  const opennessRef = useRef(0);
  const [soundOn, setSoundOn] = useState(false);
  const soundSupported = useSyncExternalStore(noop, audioSupported, () => false);

  /* Lenis + GSAP ticker. Smooth scroll only for fine pointers without reduced motion. */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (!ui.smoothScroll || reduce || coarse) return;
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.9 });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  /* Ambient tone + active section from [data-tone] sections. */
  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-tone]"));
    const triggers = els.map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 55%",
        end: "bottom 55%",
        onToggle: (self) => {
          if (!self.isActive) return;
          root.dataset.tone = el.dataset.tone as Tone;
          if (el.dataset.index) setActiveSection({ index: el.dataset.index, label: el.dataset.label ?? "" });
        },
      }),
    );
    // Fonts and lazy plates can shift section heights; re-measure once settled.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => {
      triggers.forEach((t) => t.kill());
      window.removeEventListener("load", refresh);
    };
  }, []);

  /* Pause sound when the tab is hidden. */
  useEffect(() => {
    const onVis = () => {
      const e = engineRef.current;
      if (!e || !soundOn) return;
      if (document.hidden) e.stop();
      else e.start();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [soundOn]);

  useEffect(() => () => engineRef.current?.dispose(), []);

  const toggle = useCallback(async () => {
    if (!engineRef.current) engineRef.current = new AmbientEngine();
    const e = engineRef.current;
    if (soundOn) {
      setSoundOn(false);
      await e.stop();
    } else {
      setSoundOn(true);
      e.setOpenness(opennessRef.current);
      await e.start();
    }
  }, [soundOn]);

  const setOpenness = useCallback((v: number) => {
    opennessRef.current = v;
    engineRef.current?.setOpenness(v);
  }, []);

  const scrollTo = useCallback((target: string | HTMLElement) => {
    const el = typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
    if (!el) return;
    if (lenisRef.current) lenisRef.current.scrollTo(el, { duration: 2.2 });
    else el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, []);

  const lockScroll = useCallback((locked: boolean) => {
    if (locked) lenisRef.current?.stop();
    else lenisRef.current?.start();
  }, []);

  const value = useMemo<ExperienceValue>(
    () => ({ view, sound: { supported: soundSupported, on: soundOn, toggle, setOpenness }, scrollTo, lockScroll }),
    [view, soundSupported, soundOn, toggle, setOpenness, scrollTo, lockScroll],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
