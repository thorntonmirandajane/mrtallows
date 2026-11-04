"use client";

import { useEffect, useRef, type RefObject } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Observes every [data-reveal], .rule-draw and [data-reveal-group] once.
 * Masked images (.img-reveal) are revealed by a [data-reveal-group] parent: an element fully hidden
 * by its own clip-path never reports as intersecting.
 */
export function useRevealAll() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      "[data-reveal], .rule-draw, [data-reveal-group]",
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/**
 * Subtle scroll-linked translate. `speed` is the fraction of scroll distance to move,
 * e.g. 0.12 moves 12px for every 100px scrolled past the element's center.
 */
export function useParallax<T extends HTMLElement>(speed = 0.1, ref?: RefObject<T | null>) {
  const ownRef = useRef<T>(null);
  const target = ref ?? ownRef;

  useEffect(() => {
    const el = target.current;
    if (!el || prefersReducedMotion()) return;
    let raf = 0;
    let visible = false;

    const update = () => {
      raf = 0;
      const r = el.parentElement?.getBoundingClientRect() ?? el.getBoundingClientRect();
      const offset = r.top + r.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (visible && !raf) raf = requestAnimationFrame(update);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) onScroll();
    });
    io.observe(el.parentElement ?? el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed, target]);

  return ownRef;
}
