"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import ContactIcons from "./ContactIcons";
import { nav, order } from "@/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Hide on a deliberate scroll down, reveal on a deliberate scroll up. Small deltas (trackpads, smooth-scroll
  // easing) only add to a running total, so the header never flickers between states mid-scroll.
  useEffect(() => {
    let raf = 0;
    let travel = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const dy = y - lastY.current;
      lastY.current = y;
      setScrolled((was) => (was ? y > 16 : y > 48));
      if (y < 640) {
        travel = 0;
        setHidden(false);
        return;
      }
      if (dy === 0) return;
      travel = Math.sign(dy) === Math.sign(travel) ? travel + dy : dy;
      if (travel > 60) setHidden(true);
      else if (travel < -30) setHidden(false);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    lastY.current = window.scrollY;
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,box-shadow] duration-500 ease-[var(--ease-luxe)] will-change-transform ${
        hidden && !open ? "-translate-y-full" : ""
      } ${solid ? `bg-[#dbcbb8] ${open ? "shadow-none" : "shadow-[0_1px_0_rgba(42,37,31,0.08)]"}` : "bg-[#dbcbb8] shadow-none md:bg-[#dbcbb8]/0"}`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-cream focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div
        className={`mx-auto flex items-center px-[var(--gutter)] md:px-[max(var(--gutter),5vw)] transition-[height] duration-700 ease-[var(--ease-luxe)] ${
          scrolled ? "h-[68px]" : "h-[var(--header-h)]"
        }`}
      >
        <a href="#top" className="text-forest" aria-label="Mr. Tallow's, back to top">
          <Logo className={`transition-[width] duration-700 ease-[var(--ease-luxe)] ${scrolled ? "w-[64px]" : "w-[78px]"}`} />
        </a>

        <nav aria-label="Primary" className="ml-14 hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-walnut transition-colors hover:text-forest">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <ContactIcons className="mr-2 hidden md:flex" />
          <a href={order.href} className="btn btn-solid hidden !h-11 sm:inline-flex">
            {order.label}
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="relative flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`absolute h-px w-6 transition-[transform,background-color] duration-500 ${solid ? "bg-ink" : "bg-ink md:bg-cream"} ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
            <span className={`absolute h-px w-6 transition-[transform,background-color] duration-500 ${solid ? "bg-ink" : "bg-ink md:bg-cream"} ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 bg-[#dbcbb8] ${scrolled ? "top-[68px] h-[calc(100svh-68px)]" : "top-[var(--header-h)] h-[calc(100svh-var(--header-h))]"} transition-[opacity,visibility] duration-700 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
        {...(!open && { inert: true })}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col justify-between px-[var(--gutter)] pb-10 pt-12">
          <ul className="space-y-2">
            {nav.map((item, i) => (
              <li key={item.href} className="overflow-hidden">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display block py-1.5 text-[2.1rem] text-ink transition-transform duration-[900ms] ease-[var(--ease-luxe)]"
                  style={{ transform: open ? "none" : "translateY(110%)", transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-6">
            <div className="h-px w-full bg-ink/15" />
            <div className="flex items-center justify-between">
              <p className="eyebrow text-muted">Opening soon in Florida</p>
              <ContactIcons size="h-11 w-11" />
            </div>
            <a href={order.href} onClick={() => setOpen(false)} className="btn btn-solid w-full justify-between">
              {order.label}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
