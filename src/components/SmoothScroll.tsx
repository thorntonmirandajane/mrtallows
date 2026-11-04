"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { prefersReducedMotion, useRevealAll } from "@/lib/motion";

/** Smooth, weighted scrolling (skipped for reduced-motion) plus the global reveal observer. */
export default function SmoothScroll() {
  useRevealAll();

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      anchors: { offset: -64 },
      touchMultiplier: 1,
    });
    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
