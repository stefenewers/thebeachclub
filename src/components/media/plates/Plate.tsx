import { useId } from "react";
import type { PlateSpec } from "@/lib/types";
import { BeachScene, CabanaScene, CanopyScene, EstateScene, PortraitScene, ShoreScene, StillScene, SunsetScene } from "./scenes";

/** Renders the V1 generated placeholder for a media slot. */
export function Plate({ spec, frame }: { spec: PlateSpec; frame?: boolean }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  switch (spec.scene) {
    case "estate":
      return <EstateScene uid={uid} />;
    case "canopy":
      return <CanopyScene uid={uid} />;
    case "beach":
      return <BeachScene uid={uid} time={spec.time} frame={frame} />;
    case "shore":
      return <ShoreScene uid={uid} />;
    case "sunset":
      return <SunsetScene uid={uid} />;
    case "cabana":
      return <CabanaScene uid={uid} variant={spec.variant} />;
    case "portrait":
      return <PortraitScene uid={uid} variant={spec.variant} />;
    case "still":
      return <StillScene uid={uid} subject={spec.subject} />;
  }
}
