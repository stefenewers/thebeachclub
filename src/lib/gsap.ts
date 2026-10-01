"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  // Avoid re-layout when the iOS address bar shows/hides.
  ScrollTrigger.config({ ignoreMobileResize: true });
}

/** Choreography only runs for users without a reduced-motion preference. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const DESKTOP = "(min-width: 768px)";

export { gsap, ScrollTrigger, useGSAP };
