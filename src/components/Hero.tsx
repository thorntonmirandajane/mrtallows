"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { hero } from "@/content/site";
import { prefersReducedMotion } from "@/lib/motion";

export default function Hero() {
  const [ready, setReady] = useState(false);
  const imgWrap = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);

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
      className={`relative flex flex-col overflow-hidden bg-[linear-gradient(180deg,#e6d4bf,#e3cfb9_40%)] pt-[var(--header-h)] md:h-[calc(100vw*941/1672)] md:max-h-[calc(100svh-90px)] md:min-h-[560px] md:justify-end md:bg-none md:bg-[#d6c4ae] md:pt-0 ${ready ? "hero-ready" : ""}`}
    >
      {/* desktop: full studio composite behind everything */}
      <div ref={imgWrap} className="pointer-events-none absolute inset-0 hidden will-change-transform md:block">
        <img
          src="/images/hero-desktop.webp"
          alt={hero.imageAlt}
          width={2506}
          height={1412}
          fetchPriority="high"
          className="hero-img absolute inset-0 h-full w-full object-cover object-[50%_100%]"
        />
      </div>

      {/* the brand mark: centered on phones, upper left on desktop */}
      <div
        className="hero-fade relative z-10 order-1 ml-auto mr-[var(--gutter)] mt-[5vw] w-[62vw] text-cream md:mr-0 md:absolute md:order-none md:ml-0 md:mt-0 [filter:drop-shadow(0_1px_3px_rgba(90,64,40,0.22))] md:right-auto md:left-[max(var(--gutter),5vw)] md:top-[calc(var(--header-h)+1.5vw)] md:w-[28vw] xl:w-[min(31vw,600px)]"
        style={{ "--d": "300ms" } as React.CSSProperties}
      >
        <Logo className="w-full" />
      </div>

      {/* copy: under the logo on phones, bottom left on desktop */}
      <div
        ref={copy}
        className="relative z-10 order-3 w-full bg-[#dcc1a6] px-[var(--gutter)] pb-8 pt-1 md:order-none md:bg-transparent md:pt-0 md:pb-0 md:max-w-[min(48vw,820px)] md:px-0 md:pb-[clamp(2.5rem,6vh,4.5rem)] md:pl-[max(var(--gutter),5vw)] md:pt-0"
      >
        <h1 id="hero-title" className="display whitespace-nowrap leading-[1.04] text-[calc((100vw-2*var(--gutter))/13.8)] text-walnut md:text-[clamp(1.8rem,2.6vw,3.2rem)]">
          {hero.headline.map((line, i) => (
            <span key={line} className="line-mask inline-block pr-[0.24em] last:pr-0">
              <span style={{ "--d": `${650 + i * 140}ms` } as React.CSSProperties}>{line}</span>
            </span>
          ))}
        </h1>
        <p
          className="hero-fade mb-4 mt-2 whitespace-nowrap text-[calc((100vw-2*var(--gutter))/30.5)] leading-[1.55] text-ink md:mb-[1.6vw] md:mt-[0.8vw] md:text-[clamp(0.9rem,1.1vw,1.15rem)]"
          style={{ "--d": "1150ms" } as React.CSSProperties}
        >
          {hero.copy}
        </p>
        <div className="grid grid-cols-2 gap-2.5 md:max-w-[38vw] md:max-xl:[&_.btn]:px-3 md:max-xl:[&_.btn]:text-[0.62rem] md:max-xl:[&_.btn]:tracking-[0.1em] xl:flex xl:max-w-none">
          <a href={hero.primary.href} className="btn btn-solid btn-compact btn-split hero-fade" style={{ "--d": "1350ms" } as React.CSSProperties}>
            {hero.primary.label}
          </a>
          <a href={hero.secondary.href} className="btn btn-outline btn-compact btn-split hero-fade" style={{ "--d": "1450ms" } as React.CSSProperties}>
            {hero.secondary.label}
          </a>
        </div>
      </div>

      {/* phones: the food sits below the copy, fading in from the wall */}
      <img
        src="/images/hero-mobile.webp"
        alt=""
        aria-hidden="true"
        width={941}
        height={730}
        className="hero-img relative order-2 -mt-[22vw] block h-auto w-full md:hidden"
      />
    </section>
  );
}
