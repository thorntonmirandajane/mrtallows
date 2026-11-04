"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

type Img = { src: string; alt: string; width: number; height: number };
export type Note = { text: string[]; at: number[]; from: number[]; to: number[]; bend: number };

type Props = {
  photo: Img;
  sketch: Img;
  notes?: Note[];
  sizes: string;
  className?: string;
  /** labels for each side, shown at the bottom corners */
  labels?: [string, string];
  /** keeps the corner labels clear of any edge fade applied by the parent */
  labelInset?: string;
  /** fraction of the frame left empty on the left (images shift right and fade in), e.g. room for overlaid copy */
  inset?: number;
  /** resting divider position in percent; set it on the subject's center */
  rest?: number;
  /** handwritten note size in image units */
  noteSize?: number;
  /** fraction of the frame at the top reserved for overlaid copy; the divider starts below it */
  textZone?: number;
};

const clamp = (v: number, lo = 0, hi = 100) => Math.min(hi, Math.max(lo, v));

/** Quadratic curve from `from` to `to`, bowed by `bend`, ending in an open arrowhead. */
function arrowPaths(n: Note) {
  const [x1, y1] = n.from;
  const [x2, y2] = n.to;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  const cx = mx + (-(y2 - y1) / len) * n.bend;
  const cy = my + ((x2 - x1) / len) * n.bend;
  const a = Math.atan2(y2 - cy, x2 - cx);
  const h = 15;
  const head = [a + Math.PI - 0.5, a + Math.PI + 0.5].map((t) => `M${x2 + Math.cos(t) * h},${y2 + Math.sin(t) * h} L${x2},${y2}`);
  return { curve: `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`, head: head.join(" ") };
}

export default function ComparisonSlider({ photo, sketch, notes, sizes, className = "", labels = ["Plated", "Sketched"], labelInset = "1.25rem", inset = 0, rest = 50, noteSize = 46, textZone = 0 }: Props) {
  const frame = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(rest);
  const [dragging, setDragging] = useState(false);
  const [inView, setInView] = useState(false);
  const touched = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const r = frame.current!.getBoundingClientRect();
    setPos(clamp(((clientX - r.left) / r.width) * 100, 2, 98));
  }, []);

  // one quiet demonstration sweep when the slider first comes into view
  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        setInView(true);
        if (prefersReducedMotion()) return;
        const keys = [rest, rest - 20, rest + 16, rest];
        const seg = 900;
        const start = performance.now() + 500;
        const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
        const step = (now: number) => {
          if (touched.current) return;
          const t = Math.max(0, now - start);
          const i = Math.min(Math.floor(t / seg), keys.length - 2);
          const local = Math.min(1, (t - i * seg) / seg);
          setPos(keys[i] + (keys[i + 1] - keys[i]) * ease(local));
          if (t < seg * (keys.length - 1)) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.55 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [rest]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    touched.current = true;
    setDragging(true);
    frame.current!.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging) setFromClientX(e.clientX);
  };
  const endDrag = () => setDragging(false);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey || e.key.startsWith("Page") ? 10 : 2;
    const map: Record<string, number> = {
      ArrowLeft: pos - step,
      ArrowDown: pos - step,
      PageDown: pos - step,
      ArrowRight: pos + step,
      ArrowUp: pos + step,
      PageUp: pos + step,
      Home: 2,
      End: 98,
    };
    if (e.key in map) {
      e.preventDefault();
      touched.current = true;
      setPos(clamp(map[e.key], 2, 98));
    }
  };

  return (
    <div
      ref={frame}
      className={`relative select-none touch-pan-y ${dragging ? "cursor-grabbing" : "cursor-ew-resize"} ${inView ? "is-in" : ""} ${className}`}
      style={{ aspectRatio: `${photo.width / (1 - inset)} / ${photo.height}` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {/* sketch underneath, photograph clipped over it; both shifted right by `inset` and feathered in */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0"
        style={{
          left: `${inset * 100}%`,
          ...(inset > 0 && { maskImage: "linear-gradient(to right, transparent, #000 14%, #000 95%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, #000 14%, #000 95%, transparent)" }),
        }}
      >
        <Image src={sketch.src} alt={sketch.alt} fill sizes={sizes} quality={88} draggable={false} className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${clamp(((100 - pos) / (1 - inset)), 0, 100)}% 0 0)` }}>
          <Image src={photo.src} alt={photo.alt} fill sizes={sizes} quality={88} draggable={false} className="object-cover" />
        </div>
      </div>

      {notes && (
        <svg
          viewBox={`0 0 ${photo.width / (1 - inset)} ${photo.height}`}
          className="pointer-events-none absolute inset-0 h-full w-full text-[#5a3420]"
          aria-hidden="true"
        >
          <g transform={`translate(${(photo.width / (1 - inset)) * inset} 0)`}>
          {notes.map((n, i) => {
            const { curve, head } = arrowPaths(n);
            const d = { "--d": `${700 + i * 180}ms` } as React.CSSProperties;
            return (
              <g key={n.text.join(" ")}>
                <path d={curve} pathLength={1} className="draw-path" style={{ ...d, "--len": 1 } as React.CSSProperties} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                <path d={head} pathLength={1} className="draw-path" style={{ "--len": 1, "--d": `${1500 + i * 180}ms` } as React.CSSProperties} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                <text x={n.at[0]} y={n.at[1]} className="hand note-fade" style={{ ...d, fontSize: noteSize }} fill="currentColor">
                  {n.text.map((t, j) => (
                    <tspan key={t} x={n.at[0]} dy={j === 0 ? 0 : noteSize}>
                      {t}
                    </tspan>
                  ))}
                </text>
              </g>
            );
          })}
          </g>
        </svg>
      )}

      <span className="eyebrow pointer-events-none absolute bottom-[6%] text-[0.6rem] text-walnut/70 transition-opacity duration-500" style={{ left: labelInset, opacity: labels[0] && pos > 18 ? 1 : 0 }}>
        {labels[0]}
      </span>
      <span className="eyebrow pointer-events-none absolute bottom-[6%] text-[0.6rem] text-walnut/70 transition-opacity duration-500" style={{ right: labelInset, opacity: pos < 82 ? 1 : 0 }}>
        {labels[1]}
      </span>

      {/* divider + handle */}
      <div className="pointer-events-none absolute bottom-0 w-px -translate-x-1/2 bg-cream/90 shadow-[0_0_0_0.5px_rgba(58,42,32,0.15)]" style={{ left: `${pos}%`, top: `${textZone * 100}%` }} />
      <div
        role="slider"
        tabIndex={0}
        aria-label="Compare the photograph with the illustration"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${Math.round(pos)}% photograph`}
        onKeyDown={onKeyDown}
        className={`absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-walnut/25 bg-cream/90 text-walnut shadow-[0_8px_30px_-10px_rgba(58,42,32,0.45)] backdrop-blur-sm transition-[transform,box-shadow] duration-500 ease-[var(--ease-luxe)] hover:scale-105 ${
          dragging ? "scale-95" : ""
        }`}
        style={{ left: `${pos}%`, top: `${(textZone + (1 - textZone) / 2) * 100}%` }}
      >
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none" aria-hidden="true">
          <path d="M6 1 1 6l5 5M20 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
