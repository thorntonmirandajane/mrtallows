"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Arrow from "./Arrow";
import { menu } from "@/content/site";

type Item = (typeof menu.items)[number];

function ItemDialog({ item, onClose }: { item: Item | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  // keep the last item rendered while the dialog closes
  const [shown, setShown] = useState<Item | null>(null);
  if (item && item !== shown) setShown(item);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item && !d.open) d.showModal();
    else if (!item && d.open) d.close();
  }, [item]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto w-[min(440px,calc(100vw-2rem))] max-w-none overflow-hidden rounded-[14px] bg-transparent p-0 backdrop:bg-walnut-deep/55 backdrop:backdrop-blur-[2px] open:animate-[dialog-in_0.7s_var(--ease-luxe)]"
    >
      {shown && (
        <div className="surface-cream relative flex max-h-[calc(100svh-2rem)] flex-col overflow-y-auto rounded-[14px]">
          <div className="relative aspect-[8/7] shrink-0">
            <Image src={shown.image} alt={shown.alt} fill sizes="440px" className="object-contain px-8 pt-10" />
          </div>
          <div className="flex flex-col px-8 pb-8 pt-4 text-center">
            <button type="button" onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 p-3 text-ink/50 transition-colors hover:text-ink">
              <svg width="12" height="12" viewBox="0 0 11 11" aria-hidden="true">
                <path d="M1 1l9 9M10 1l-9 9" stroke="currentColor" strokeWidth="1.1" />
              </svg>
            </button>
            <p className="eyebrow mb-2 text-forest">Featured Menu</p>
            <h3 className="display text-[2.3rem] text-ink">{shown.name}</h3>
            <span className="mx-auto mt-3 block h-px w-8 bg-blush" />
            <p className="mx-auto mt-4 max-w-[20rem] text-[0.95rem] leading-[1.65] text-ink/90 [text-wrap:balance]">{shown.copy}</p>
            <dl className="mt-6 space-y-3 border-t border-ink/10 pt-5 text-left text-[0.85rem]">
              <div className="flex justify-between gap-6">
                <dt className="eyebrow text-[0.62rem] text-muted">Ingredients</dt>
                <dd className="text-ink/90">To be confirmed</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="eyebrow text-[0.62rem] text-muted">Price</dt>
                <dd className="text-ink/90">{shown.price ?? "Announced at opening"}</dd>
              </div>
            </dl>
            <p className="hand pt-6 text-[1.2rem] text-walnut/60">menu still in the test kitchen</p>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function FeaturedMenu() {
  const [open, setOpen] = useState<Item | null>(null);

  return (
    <section id="menu" aria-labelledby="menu-title" className="surface-limewash relative py-12 md:py-[clamp(1.5rem,2.5vw,2.25rem)]">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <header className="mb-[clamp(0.25rem,1vw,0.75rem)] text-center">
          <p className="eyebrow mb-2 text-rust" data-reveal>
            {menu.eyebrow}
          </p>
          <h2 id="menu-title" className="display text-[clamp(2.3rem,4.4vw,3.9rem)] text-ink" data-reveal style={{ "--d": "90ms" } as React.CSSProperties}>
            {menu.headline}
          </h2>
          <p className="mt-1 text-[1rem] text-muted" data-reveal style={{ "--d": "180ms" } as React.CSSProperties}>
            {menu.copy}
          </p>
        </header>

        <ul className="grid grid-cols-2 gap-x-[clamp(0.75rem,2vw,2rem)] gap-y-8 lg:grid-cols-4">
          {menu.items.map((item, i) => (
            <li key={item.id} data-reveal style={{ "--d": `${i * 110}ms` } as React.CSSProperties} className="flex">
              <button type="button" onClick={() => setOpen(item)} className="group flex w-full flex-col items-center text-center" aria-label={`${item.name}: view details`}>
                <div className="relative aspect-[8/7] w-full">
                  {/* contact shadow so the cutout sits on the wall's ledge */}
                  <span className="absolute bottom-[3%] left-1/2 h-[9%] w-[62%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(58,42,32,0.32),transparent)] transition-[transform,opacity] duration-[1200ms] ease-[var(--ease-luxe)] group-hover:scale-x-90 group-hover:opacity-70" />
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 46vw"
                    quality={90}
                    className="object-contain transition-transform duration-[1200ms] ease-[var(--ease-luxe)] group-hover:-translate-y-2 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="display mt-2 text-[clamp(1.35rem,1.9vw,1.75rem)] text-ink">{item.name}</h3>
                <span className="mx-auto mt-2 block h-px w-8 bg-blush transition-[width,background-color] duration-700 ease-[var(--ease-luxe)] group-hover:w-14 group-hover:bg-rust" />
                <p className="mx-auto mt-3 max-w-[17rem] text-[0.86rem] leading-[1.6] text-muted">{item.copy}</p>
                <span className="eyebrow mt-auto inline-flex items-center gap-2 pt-3 text-[0.66rem] font-semibold text-forest-deep transition-all duration-500 group-hover:gap-3">
                  View Details <Arrow className="w-3" />
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-2 text-center md:mt-[clamp(1.25rem,2vw,1.75rem)]" data-reveal>
          {menu.cta.href ? (
            <a href={menu.cta.href} className="btn btn-outline">
              {menu.cta.label}
            </a>
          ) : (
            <span aria-disabled="true" className="btn btn-outline pointer-events-none cursor-default opacity-60">
              {menu.cta.label}
            </span>
          )}
          <p className="max-w-sm text-[0.74rem] leading-relaxed text-muted">{menu.note}</p>
        </div>
      </div>
      <ItemDialog item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
