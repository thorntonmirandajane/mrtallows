"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { experience, hotspots } from "@/content/site";

type Spot = (typeof hotspots)[number];
type Variant = "wide" | "tall";

const IMAGES = {
  wide: { src: "/images/interior-wide.webp", width: 1448, height: 1086 },
  // phones show the full photo too, just at its natural 4:3 shape
  tall: { src: "/images/interior-wide.webp", width: 1448, height: 1086 },
};
const ZOOM = 1.16;
/** desktop frame proportion; the 4:3 photo is cropped to fit (hotspots follow the crop) */
const FRAME_RATIO = 1.8;

/** Maps image-space percentages to frame-space percentages under object-fit: cover. */
function useCoverMap(ref: React.RefObject<HTMLDivElement | null>, ratio: number) {
  const [box, setBox] = useState({ w: 1, h: 1 / ratio });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setBox({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return (p: { x: number; y: number }) => {
    if (!box.w || !box.h) return p; // not laid out (e.g. display: none)
    const wide = box.w / box.h > ratio;
    const iw = wide ? box.w : box.h * ratio;
    const ih = wide ? box.w / ratio : box.h;
    const x = ((box.w - iw) / 2 + (p.x / 100) * iw) / box.w;
    const y = ((box.h - ih) / 2 + (p.y / 100) * ih) / box.h;
    return { x: Math.min(95, Math.max(5, x * 100)), y: Math.min(94, Math.max(6, y * 100)) };
  };
}

function Stage({
  variant,
  active,
  onSelect,
  className = "",
  fill = false,
}: {
  variant: Variant;
  active: Spot | null;
  onSelect: (s: Spot | null) => void;
  className?: string;
  /** fill the parent's height and crop the image instead of keeping its aspect ratio */
  fill?: boolean;
}) {
  const img = IMAGES[variant];
  const frame = useRef<HTMLDivElement>(null);
  const map = useCoverMap(frame, img.width / img.height);
  const origin = active ? map(active[variant]) : { x: 50, y: 50 };
  const scale = active ? ZOOM : 1;
  // where each hotspot lands once the image is scaled around the active one
  const place = (raw: { x: number; y: number }) => {
    const p = map(raw);
    return { left: `${origin.x + (p.x - origin.x) * scale}%`, top: `${origin.y + (p.y - origin.y) * scale}%` };
  };

  return (
    <div ref={frame} className={`relative overflow-hidden ${className}`} style={fill ? undefined : { aspectRatio: `${img.width} / ${img.height}` }}>
      <div
        className="absolute inset-0 transition-transform duration-[1400ms] ease-[var(--ease-luxe)] will-change-transform"
        style={{ transform: `scale(${scale})`, transformOrigin: `${origin.x}% ${origin.y}%` }}
      >
        <Image src={img.src} alt={experience.imageAlt} fill sizes={variant === "wide" ? "68vw" : "100vw"} quality={90} className="object-cover" />
      </div>
      {/* atmosphere: deepen the edges so the amber light glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_55%_35%,transparent_45%,rgba(20,14,10,0.55))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[rgba(31,23,18,0.85)] to-transparent" />
      <div
        className={`pointer-events-none absolute inset-0 bg-walnut-deep/30 transition-opacity duration-1000 ${active ? "opacity-100" : "opacity-0"}`}
      />

      {hotspots.map((s, i) => {
        const on = active?.id === s.id;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelect(on ? null : s)}
            aria-pressed={on}
            aria-label={`${s.title}: ${on ? "hide" : "show"} detail`}
            className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-[1400ms] ease-[var(--ease-luxe)]"
            style={place(s[variant])}
          >
            <span className="relative flex h-11 w-11 items-center justify-center">
              {!active && (
                <span
                  className="absolute inset-[9px] rounded-full border border-cream/70 animate-[halo_2.8s_var(--ease-soft)_infinite]"
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
              )}
              <span
                className={`relative flex h-[26px] w-[26px] items-center justify-center rounded-full border backdrop-blur-[3px] transition-all duration-500 ease-[var(--ease-luxe)] ${
                  on
                    ? "scale-110 border-cream bg-cream text-walnut"
                    : "border-cream/80 bg-walnut-deep/25 text-cream group-hover:scale-110 group-hover:bg-cream/20"
                }`}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className={`transition-transform duration-500 ${on ? "rotate-45" : ""}`}>
                  <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1" />
                </svg>
              </span>
            </span>
            {/* hover label (desktop) */}
            {variant === "wide" && !on && (
              <span className="eyebrow pointer-events-none absolute left-full top-1/2 ml-1 -translate-y-1/2 translate-x-[-6px] whitespace-nowrap text-[0.6rem] text-cream opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
                {s.title}
              </span>
            )}
          </button>
        );
      })}

      {/* desktop detail card, placed beside the active hotspot */}
      {variant === "wide" && <DetailCard spot={active} at={active ? map(active.wide) : null} onClose={() => onSelect(null)} />}
    </div>
  );
}

function CloseUp({ spot, variant, className = "" }: { spot: Spot; variant: Variant; className?: string }) {
  const p = spot[variant];
  return (
    <div
      aria-hidden="true"
      className={`bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${IMAGES[variant].src})`,
        backgroundSize: variant === "wide" ? "330% auto" : "210% auto",
        backgroundPosition: `${p.x}% ${p.y}%`,
      }}
    />
  );
}

function DetailCard({ spot, at, onClose }: { spot: Spot | null; at: { x: number; y: number } | null; onClose: () => void }) {
  // keep the last detail rendered while the card fades out
  const [shown, setShown] = useState<{ spot: Spot; at: { x: number; y: number } } | null>(null);
  if (spot && at && (shown?.spot !== spot || shown.at.x !== at.x || shown.at.y !== at.y)) setShown({ spot, at });
  if (!shown) return null;
  const { x, y } = shown.at;
  const right = x < 55;
  return (
    <div
      role="dialog"
      aria-label={shown.spot.title}
      className={`absolute z-20 w-[min(300px,34%)] overflow-hidden rounded-[12px] bg-cream text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] transition-[opacity,transform] duration-700 ease-[var(--ease-luxe)] ${
        spot ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
      style={{
        top: `clamp(5%, calc(${y}% - 110px), 40%)`,
        ...(right ? { left: `calc(${x}% + 44px)` } : { right: `calc(${100 - x}% + 44px)` }),
      }}
    >
      <CloseUp spot={shown.spot} variant="wide" className="h-[110px] w-full" />
      <div className="p-6 pt-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="eyebrow text-forest">{shown.spot.title}</h3>
          <button type="button" onClick={onClose} aria-label="Close detail" className="-mr-2 -mt-2 p-2 text-ink/50 transition-colors hover:text-ink">
            <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden="true">
              <path d="M1 1l9 9M10 1l-9 9" stroke="currentColor" strokeWidth="1.1" />
            </svg>
          </button>
        </div>
        <p className="text-[0.9rem] leading-[1.7] text-ink/90">{shown.spot.copy}</p>
      </div>
    </div>
  );
}

function BottomSheet({ spot, onClose, onStep }: { spot: Spot | null; onClose: () => void; onStep: (d: 1 | -1) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [shown, setShown] = useState<Spot | null>(spot);
  if (spot && spot !== shown) setShown(spot);
  useEffect(() => {
    if (spot) closeRef.current?.focus({ preventScroll: true });
  }, [spot]);
  const idx = shown ? hotspots.findIndex((h) => h.id === shown.id) : 0;

  return (
    <div
      className={`fixed inset-0 z-[60] transition-[visibility] duration-700 lg:hidden ${spot ? "visible" : "pointer-events-none invisible"}`}
      aria-hidden={!spot}
      {...(!spot && { inert: true })}
    >
      <div onClick={onClose} className={`absolute inset-0 bg-walnut-deep/50 transition-opacity duration-500 ${spot ? "opacity-100" : "opacity-0"}`} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={shown?.title}
        className={`surface-cream absolute inset-x-0 bottom-0 rounded-t-[18px] pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-[var(--ease-luxe)] ${
          spot ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto mb-1 mt-3 h-1 w-10 rounded-full bg-ink/15" />
        {shown && (
          <div className="px-[var(--gutter)] pt-4">
            <div className="flex gap-5">
              <CloseUp spot={shown} variant="tall" className="h-24 w-24 shrink-0 rounded-[8px]" />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between">
                  <p className="eyebrow mb-1 text-[0.6rem] text-muted">
                    {String(idx + 1).padStart(2, "0")} / {String(hotspots.length).padStart(2, "0")}
                  </p>
                  <button ref={closeRef} type="button" onClick={onClose} aria-label="Close detail" className="-mr-2 -mt-2 p-2 text-ink/60">
                    <svg width="12" height="12" viewBox="0 0 11 11" aria-hidden="true">
                      <path d="M1 1l9 9M10 1l-9 9" stroke="currentColor" strokeWidth="1.1" />
                    </svg>
                  </button>
                </div>
                <h3 className="display text-[1.85rem] text-ink">{shown.title}</h3>
              </div>
            </div>
            <p className="mt-4 text-[0.95rem] leading-[1.7] text-ink/90">{shown.copy}</p>
            <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
              <button type="button" onClick={() => onStep(-1)} className="eyebrow py-2 text-forest">
                ← Previous
              </button>
              <button type="button" onClick={() => onStep(1)} className="eyebrow py-2 text-forest">
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ExperienceHotspots() {
  const [active, setActive] = useState<Spot | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const step = (d: 1 | -1) => {
    const i = hotspots.findIndex((h) => h.id === active?.id);
    setActive(hotspots[(i + d + hotspots.length) % hotspots.length]);
  };

  return (
    <section id="experience" aria-labelledby="experience-title" className="on-dark relative overflow-hidden bg-walnut text-cream">
      <div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(19rem,1fr)]">
        {/* the room fills the section; the panel sits flush beside it */}
        <div data-reveal-group className="relative hidden min-w-0 lg:block">
          {/* spacer sets the natural image height; the row grows if the panel is taller */}
          <div style={{ paddingTop: `${100 / FRAME_RATIO}%` }} />
          <div className="img-reveal absolute inset-0">
            <Stage variant="wide" fill active={active} onSelect={setActive} className="h-full" />
          </div>
        </div>
        <div className="lg:hidden" data-reveal-group>
          <div className="img-reveal">
            <Stage variant="tall" active={active} onSelect={setActive} />
          </div>
        </div>

        <div className="relative z-10 order-first px-[var(--gutter)] pb-8 pt-[clamp(2.5rem,5vw,3.5rem)] lg:order-none lg:flex lg:flex-col lg:justify-center lg:px-[clamp(1.75rem,3vw,3.25rem)] lg:py-8">
          <p className="eyebrow mb-4 text-blush" data-reveal>
            {experience.eyebrow}
          </p>
          <h2 id="experience-title" className="display text-[clamp(2.3rem,3.2vw,3.3rem)] text-cream" data-reveal-group>
            {experience.headline.map((l, i) => (
              <span key={l} className="line-mask">
                <span style={{ "--d": `${i * 120}ms` } as React.CSSProperties}>{l}</span>
              </span>
            ))}
          </h2>
          <p className="mt-4 max-w-[22rem] text-[0.95rem] leading-[1.65] text-cream/90" data-reveal style={{ "--d": "180ms" } as React.CSSProperties}>
            {experience.copy}
          </p>
          <ul className="mt-6 hidden border-t border-cream/15 lg:block" data-reveal style={{ "--d": "260ms" } as React.CSSProperties}>
            {hotspots.map((s) => {
              const on = active?.id === s.id;
              return (
                <li key={s.id} className="border-b border-cream/15">
                  <button type="button" onClick={() => setActive(on ? null : s)} aria-pressed={on} className="group flex w-full items-center gap-4 py-[0.9rem] text-left">
                    <span
                      className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        on ? "border-blush bg-blush text-walnut" : "border-cream/40 text-cream group-hover:border-blush group-hover:text-blush"
                      }`}
                    >
                      <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true" className={`transition-transform duration-500 ${on ? "rotate-45" : ""}`}>
                        <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.3" />
                      </svg>
                    </span>
                    <span className={`eyebrow text-[0.68rem] tracking-[0.2em] transition-colors duration-500 ${on ? "text-blush" : "text-cream group-hover:text-blush"}`}>{s.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="eyebrow mt-5 text-[0.6rem] text-cream/70 lg:hidden">Tap the markers to explore the room</p>
        </div>
      </div>
      <BottomSheet spot={active} onClose={() => setActive(null)} onStep={step} />
    </section>
  );
}
