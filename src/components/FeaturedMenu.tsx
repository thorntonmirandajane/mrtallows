"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Arrow from "./Arrow";
import { menu } from "@/content/site";

type Item = (typeof menu.groups)[number]["items"][number];

function ItemDialog({
  item,
  onClose,
}: {
  item: Item | null;
  onClose: () => void;
}) {
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
            <Image
              src={shown.image}
              alt={shown.alt}
              fill
              sizes="440px"
              className="object-contain px-8 pt-10"
            />
          </div>
          <div className="flex flex-col px-8 pb-8 pt-4 text-center">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 p-3 text-ink/50 transition-colors hover:text-ink"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 11 11"
                aria-hidden="true"
              >
                <path
                  d="M1 1l9 9M10 1l-9 9"
                  stroke="currentColor"
                  strokeWidth="1.1"
                />
              </svg>
            </button>
            <p className="eyebrow mb-2 text-forest">{menu.eyebrow}</p>
            <h3 className="display text-[2.3rem] text-ink">{shown.name}</h3>
            <span className="mx-auto mt-3 block h-px w-8 bg-blush" />
            <p className="mx-auto mt-4 max-w-[20rem] text-[0.95rem] leading-[1.65] text-ink/90 [text-wrap:balance]">
              {shown.copy}
            </p>
            {shown.price && (
              <p className="display mt-5 text-[1.6rem] text-rust">
                {shown.price}
              </p>
            )}
            <p className="hand mx-auto mt-4 max-w-[20rem] border-t border-ink/10 pt-4 text-[1.2rem] leading-snug text-walnut/80">
              {shown.detail}
            </p>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function FeaturedMenu() {
  const [open, setOpen] = useState<Item | null>(null);

  return (
    <section
      id="menu"
      aria-labelledby="menu-title"
      className="surface-limewash relative py-12 md:pb-[clamp(3rem,6vw,5rem)] md:pt-[clamp(1.5rem,2.5vw,2.25rem)]"
    >
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <header className="mb-[clamp(0.25rem,1vw,0.75rem)] text-center">
          <p className="eyebrow mb-2 text-rust" data-reveal>
            {menu.eyebrow}
          </p>
          <h2
            id="menu-title"
            className="display text-[clamp(2.3rem,4.4vw,3.9rem)] text-ink"
            data-reveal
            style={{ "--d": "90ms" } as React.CSSProperties}
          >
            {menu.headline}
          </h2>
          <p
            className="mt-1 text-[1rem] text-muted"
            data-reveal
            style={{ "--d": "180ms" } as React.CSSProperties}
          >
            {menu.copy}
          </p>
        </header>

        {menu.groups.map((group) => (
          <div
            key={group.title}
            className="mt-[clamp(2.5rem,5vw,4rem)] first:mt-[clamp(0.75rem,2vw,1.5rem)]"
          >
            {/* heading set between two rules, like a break on a printed menu */}
            <div
              className="mx-auto mb-[clamp(0.75rem,1.5vw,1.25rem)] flex max-w-[44rem] items-center gap-[clamp(0.75rem,2vw,1.5rem)]"
              data-reveal
            >
              <span className="h-px flex-1 bg-rust/35" aria-hidden="true" />
              <h3 className="display shrink-0 text-center text-[clamp(1.5rem,2.4vw,2rem)] text-rust">
                {group.title}
              </h3>
              <span className="h-px flex-1 bg-rust/35" aria-hidden="true" />
            </div>
            <ul
              className={`flex flex-wrap justify-center gap-y-8 ${
                "compact" in group
                  ? "mx-auto max-w-[52rem] gap-x-[clamp(0.5rem,2vw,2rem)]"
                  : "trio" in group
                    ? "gap-x-[clamp(0.5rem,2vw,2rem)]"
                    : "gap-x-[clamp(0.75rem,2vw,2rem)]"
              }`}
            >
              {group.items.map((item, i) => (
                <li
                  key={item.id}
                  data-reveal
                  style={{ "--d": `${i * 110}ms` } as React.CSSProperties}
                  className={`flex ${
                    "compact" in group
                      ? "w-[calc(25%-clamp(0.5rem,2vw,2rem)*3/4)]"
                      : "trio" in group
                        ? "w-[calc(33.333%-clamp(0.5rem,2vw,2rem)*2/3)] lg:w-[calc(25%-clamp(0.5rem,2vw,2rem)*3/4)]"
                        : "w-[calc(50%-clamp(0.75rem,2vw,2rem)/2)] lg:w-[calc(25%-clamp(0.75rem,2vw,2rem)*3/4)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(item)}
                    className="group flex w-full flex-col items-center text-center"
                    aria-label={`${item.name}: view details`}
                  >
                    <div className={`relative aspect-[8/7] ${"compact" in group ? "mx-auto w-[88%] md:w-[72%]" : "trio" in group ? "w-full" : "mx-auto w-[76%] md:w-full"}`}>
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
                    {/* maker line sits above the name; every card in that row leaves room for it so titles stay level */}
                    <h3
                      className={`display relative text-ink ${
                        group.items.some((it) => "maker" in it) ? "mt-[1.15rem] md:mt-[1.5rem]" : "mt-2"
                      } ${
                        "compact" in group
                          ? "text-[clamp(0.85rem,3.4vw,1.35rem)] leading-[1.15]"
                          : "trio" in group
                            ? "text-[clamp(0.95rem,4vw,1.35rem)] leading-[1.15] md:text-[clamp(1.35rem,1.9vw,1.75rem)] md:leading-[1.04]"
                            : "text-[clamp(1.1rem,4.6vw,1.35rem)] md:text-[clamp(1.35rem,1.9vw,1.75rem)]"
                      }`}
                    >
                      {"lines" in item && item.lines
                        ? item.lines.map((l, k) => (
                            <span key={l} className="block">
                              {l}
                              {k === 0 && " "}
                            </span>
                          ))
                        : "cardName" in item && item.cardName
                          ? item.cardName
                          : item.name}
                      {"maker" in item && item.maker && (
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 whitespace-nowrap pb-0.5 font-sans text-[0.62rem] italic leading-tight tracking-normal text-muted md:text-[0.8rem]">
                          {item.maker}
                        </span>
                      )}
                    </h3>
                    {item.price && (
                      <p className={`eyebrow mt-1 text-rust ${"compact" in group || "trio" in group ? "text-[0.6rem] tracking-[0.12em] md:text-[0.72rem] md:tracking-[0.18em]" : "text-[0.64rem] tracking-[0.16em] md:text-[0.72rem] md:tracking-[0.18em]"}`}>
                        {item.price}
                      </p>
                    )}
                    <span className="mx-auto mt-2 block h-px w-8 bg-blush transition-[width,background-color] duration-700 ease-[var(--ease-luxe)] group-hover:w-14 group-hover:bg-rust" />
                    <span
                      className={`eyebrow mt-auto inline-flex items-center gap-2 pt-3 font-semibold text-forest-deep transition-all duration-500 group-hover:gap-3 ${
                        "compact" in group
                          ? "text-[0.56rem] tracking-[0.12em] md:text-[0.62rem]"
                          : "trio" in group
                            ? "text-[0.56rem] tracking-[0.12em] md:text-[0.66rem] md:tracking-[0.28em]"
                            : "text-[0.58rem] tracking-[0.2em] md:text-[0.66rem] md:tracking-[0.28em]"
                      }`}
                    >
                      {"compact" in group ? (
                        "Details"
                      ) : "trio" in group ? (
                        <>
                          <span className="md:hidden">Details</span>
                          <span className="hidden md:inline">View Details</span>
                        </>
                      ) : (
                        "View Details"
                      )}{" "}
                      <Arrow className="w-3" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p
          className="mt-[clamp(2rem,4vw,3rem)] text-center text-[0.74rem] leading-relaxed text-muted"
          data-reveal
        >
          {menu.note}
        </p>
      </div>
      <ItemDialog item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
