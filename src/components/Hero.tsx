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
  // Desktop only: on phones the browser bar resizing the viewport mid-scroll makes scroll-linked motion jitter.
  useEffect(() => {
    if (
      prefersReducedMotion() ||
      !window.matchMedia("(min-width: 768px)").matches
    )
      return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = Math.min(window.scrollY, window.innerHeight * 1.2);
      if (imgWrap.current)
        imgWrap.current.style.transform = `translate3d(0, ${(y * 0.22).toFixed(1)}px, 0)`;
      if (copy.current) {
        copy.current.style.transform = `translate3d(0, ${(y * -0.08).toFixed(1)}px, 0)`;
        copy.current.style.opacity = String(
          Math.max(0, 1 - y / (window.innerHeight * 0.75)),
        );
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
      className={`relative flex flex-col overflow-hidden bg-[linear-gradient(90deg,#d0c4bd,#d1baaa_45%,#d1bbac)] pt-[var(--header-h)] md:h-[calc(100vw*940/1932)] md:max-h-[calc(100svh-130px)] md:min-h-[570px] md:justify-center md:bg-none md:bg-[#d1baad] md:pt-[var(--header-h)] ${
        ready ? "hero-ready" : ""
      }`}
    >
      {/* desktop: the photo fills the frame, the open wall on the left holds the copy */}
      <div
        ref={imgWrap}
        className="pointer-events-none absolute inset-0 hidden will-change-transform md:block"
      >
        <img
          src="/images/hero-desktop.webp"
          alt={hero.imageAlt}
          width={1932}
          height={1087}
          fetchPriority="high"
          className="hero-img absolute inset-0 h-full w-full object-cover object-[100%_84%]"
        />
      </div>

      <div
        ref={copy}
        className="relative z-10 order-2 px-[var(--gutter)] pb-[7vw] pt-[1vw] md:order-none md:px-[max(var(--gutter),5vw)] md:pb-[3vw] md:pt-0"
      >
        <div
          className="hero-fade hidden text-forest md:block md:w-[min(34vw,58svh)] xl:w-[min(35vw,680px,58svh)]"
          style={{ "--d": "300ms" } as React.CSSProperties}
        >
          <Logo className="w-full" />
        </div>
        <h1
          id="hero-title"
          className="display whitespace-nowrap leading-[1.04] text-[calc((100vw-2*var(--gutter))/13.8)] text-walnut md:mt-[2.2vw] md:text-[clamp(1.8rem,2.7vw,3.4rem)]"
        >
          {hero.headline.map((line, i) => (
            <span
              key={line}
              className="line-mask inline-block pr-[0.24em] last:pr-0"
            >
              <span
                style={{ "--d": `${650 + i * 140}ms` } as React.CSSProperties}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>
        <p
          className="hero-fade mb-4 mt-2 whitespace-nowrap text-[calc((100vw-2*var(--gutter))/30.5)] leading-[1.55] text-ink md:mb-[1.6vw] md:mt-[0.8vw] md:text-[clamp(0.95rem,1.25vw,1.3rem)]"
          style={{ "--d": "1150ms" } as React.CSSProperties}
        >
          {hero.copy}
        </p>
        <div className="grid grid-cols-2 gap-2.5 md:flex">
          <a
            href={hero.primary.href}
            className="btn btn-solid btn-compact btn-split hero-fade"
            style={{ "--d": "1350ms" } as React.CSSProperties}
          >
            {hero.primary.label}
          </a>
          <a
            href={hero.secondary.href}
            className="btn btn-outline btn-compact btn-split hero-fade"
            style={{ "--d": "1450ms" } as React.CSSProperties}
          >
            {hero.secondary.label}
          </a>
        </div>
      </div>

      {/* phones: the photo comes first, the logo on its open wall, copy below */}
      <div className="relative order-1 -mt-[7vw] aspect-[1031/996] overflow-hidden md:hidden">
        <img
          src="/images/hero-mobile.webp"
          alt={hero.imageAlt}
          width={1031}
          height={1842}
          fetchPriority="high"
          className="hero-img -mt-[40vw] block h-auto w-full [mask-image:linear-gradient(to_bottom,#000_73.5%,transparent_76.5%)]"
        />
        <div
          className="hero-fade absolute left-[var(--gutter)] top-[10vw] w-[52vw] text-forest"
          style={{ "--d": "300ms" } as React.CSSProperties}
        >
          <Logo className="w-full" />
        </div>
      </div>
    </section>
  );
}
