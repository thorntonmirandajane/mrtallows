"use client";

import { useEffect, useRef, useState } from "react";
import { getImageProps } from "next/image";
import { hero } from "@/content/site";
import { prefersReducedMotion } from "@/lib/motion";

export default function Hero() {
  const [ready, setReady] = useState(false);
  const imgWrap = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);

  const common = { alt: hero.imageAlt, sizes: "100vw", priority: true, quality: 85 };
  // images are served unoptimized, so each <source> points straight at its file
  const desktop = "/images/hero-desktop.webp";
  const mobile = "/images/hero-mobile.webp";
  const { props: img } = getImageProps({ ...common, src: mobile, width: 941, height: 1432 });

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  // gentle parallax: image drifts slower than the page, copy lifts and fades.
  // Desktop only: on phones the copy sits below the image and the browser bar resizing
  // the viewport mid-scroll makes scroll-linked motion jitter.
  useEffect(() => {
    if (prefersReducedMotion() || !window.matchMedia("(min-width: 768px)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = Math.min(window.scrollY, window.innerHeight * 1.2);
      if (imgWrap.current) imgWrap.current.style.transform = `translate3d(0, ${(y * 0.22).toFixed(1)}px, 0)`;
      if (copy.current) {
        copy.current.style.transform = `translate3d(0, ${(y * -0.08).toFixed(1)}px, 0)`;
        copy.current.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.75)));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className={`relative flex h-[calc(var(--header-h)+100vw*1432/941)] flex-col overflow-hidden bg-cream md:h-[min(86svh,44vw)] md:min-h-[420px] md:bg-[linear-gradient(180deg,#c1a081,#cfb092_25%,#d3b595_50%,#cdaf91_75%,#c4a687)] ${
        ready ? "hero-ready" : ""
      }`}
    >
      {/* paper grain over the extended left margin */}
      <div className="surface-grain pointer-events-none absolute inset-0 hidden md:block" />
      <div ref={imgWrap} className="absolute inset-x-0 bottom-0 top-[var(--header-h)] will-change-transform md:top-0">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} sizes="80vw" />
          <source media="(max-width: 767px)" srcSet={mobile} sizes="100vw" />
          <img
            {...img}
            alt={hero.imageAlt}
            className="hero-img absolute inset-0 h-full w-full object-cover object-bottom md:inset-x-auto md:w-auto md:object-fill md:right-0 md:top-0 md:h-full md:w-auto md:max-w-none md:[mask-image:linear-gradient(to_right,transparent,#000_12%)]"
          />
        </picture>
        {/* soft wash so type sits on calm paper */}
        <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(38%_70%_at_10%_55%,rgba(240,232,220,0.55),transparent_75%)] md:block" />
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-36 bg-gradient-to-b from-[rgba(240,232,220,0.55)] to-transparent md:block" />
      </div>

      <div
        ref={copy}
        className="relative flex w-full min-w-0 flex-1 flex-col justify-end px-[var(--gutter)] pb-[5vw] pt-[calc(var(--header-h)+4vw)] md:justify-center md:px-[max(var(--gutter),5vw)] md:pb-[2vw] md:pt-[calc(var(--header-h)+1vw)]"
      >
        <div>
          <h1 id="hero-title" className="display text-[clamp(1.6rem,8.6vw,3rem)] text-walnut md:text-[clamp(2.4rem,3.7vw,4.6rem)]">
            {hero.headline.map((line, i) => (
              <span key={line} className="line-mask max-md:inline-block max-md:pr-[0.24em] max-md:last:pr-0">
                <span style={{ "--d": `${650 + i * 140}ms` } as React.CSSProperties}>{line}</span>
              </span>
            ))}
          </h1>
        </div>
        {/* mobile: everything sits on the tabletop below the burger */}
        <div className="mt-2 md:mt-0">
          <p
            className="hero-fade mb-4 max-w-[22rem] text-[0.92rem] leading-[1.55] text-ink md:mb-[1.8vw] md:mt-[1.4vw] md:max-w-[max(15rem,23vw)] md:text-[clamp(0.95rem,1.05vw,1.15rem)]"
            style={{ "--d": "1150ms" } as React.CSSProperties}
          >
            {hero.copy}
          </p>
          <div className="grid grid-cols-2 gap-2.5 md:flex">
            <a href={hero.primary.href} className="btn btn-solid btn-compact btn-split hero-fade" style={{ "--d": "1350ms" } as React.CSSProperties}>
              {hero.primary.label}
            </a>
            <a href={hero.secondary.href} className="btn btn-outline btn-compact btn-split hero-fade" style={{ "--d": "1450ms" } as React.CSSProperties}>
              {hero.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
