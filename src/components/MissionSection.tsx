"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { mission } from "@/content/site";

/** Once the list is in view, each "No ___" is struck through in turn.
 * (Reduced-motion users get the end state instantly via the global transition override.) */
export default function MissionSection() {
  const list = useRef<HTMLUListElement>(null);
  const [on, setOn] = useState(false);
  const STEP = 520; // ms between strikes

  useEffect(() => {
    const el = list.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const ease = "cubic-bezier(0.65, 0, 0.35, 1)";

  return (
    <section id="mission" aria-labelledby="mission-title" className="surface-stone relative overflow-hidden pb-10 pt-4 lg:py-0">
      <div className="mx-auto w-full max-w-[1560px] px-[var(--gutter)] lg:pr-[max(var(--gutter),5vw)]">
        <div className="relative flex flex-col gap-8 lg:min-h-[clamp(500px,40vw,700px)] lg:justify-center lg:py-6">
          <div
            className="relative order-2 mx-auto -mt-[26vw] -mb-[6vw] w-[200%] lg:order-none lg:mb-0 lg:mt-0 max-w-none -translate-x-[8%] lg:absolute lg:left-1/2 lg:top-1/2 lg:mx-0 lg:w-[min(1600px,115vw)] lg:-translate-x-[90%] lg:-translate-y-1/2"
          >
            <span className="pointer-events-none absolute bottom-[4%] left-[18%] h-[16%] w-[70%] rounded-[50%] bg-[radial-gradient(closest-side,rgba(90,64,42,0.22),transparent)] blur-md" aria-hidden="true" />
            <Image
              src="/images/mission-burger.webp"
              alt="Cheeseburger with melted cheddar beside hand-cut fries and flaky salt on kraft paper"
              width={1305}
              height={705}
              sizes="(min-width: 1024px) 100vw, 180vw"
              className="relative h-auto w-full opacity-[0.93] [filter:saturate(0.85)_brightness(1.04)] [mask-image:radial-gradient(75%_80%_at_58%_46%,#000_62%,transparent_100%)]"
            />
          </div>
          <div className="relative z-10 order-1 pt-8 lg:order-none lg:ml-auto lg:mt-0 lg:pt-0 lg:w-[min(46%,640px)] lg:text-right">
            <p className="eyebrow mb-3 text-rust max-lg:!translate-y-0 max-lg:![transform:none] max-lg:!opacity-100" data-reveal>
              {mission.eyebrow}
            </p>
            <h2 id="mission-title" className="display text-[clamp(2.3rem,3.3vw,3.5rem)] leading-[1.04] text-ink max-lg:!translate-y-0 max-lg:![transform:none] max-lg:!opacity-100" data-reveal style={{ "--d": "90ms" } as React.CSSProperties}>
              {mission.headline}
            </h2>
            <div className="mt-[clamp(1.25rem,2.4vw,1.75rem)]" />
            <ul ref={list} className="space-y-1 text-left lg:ml-auto lg:w-fit" aria-label="What we leave out">
              {mission.nos.map((item, i) => {
                const delay = 300 + i * STEP;
                return (
                  <li key={item.label} className="lg:text-right">
                    <p className="display whitespace-nowrap text-[clamp(1.3rem,5.4vw,2.6rem)] leading-[1.15] text-ink">
                      No{" "}
                      <span
                        className="relative inline-block"
                        style={{ color: on ? "rgba(42,37,31,0.6)" : "rgba(42,37,31,1)", transition: `color 600ms ${ease} ${delay + 250}ms` }}
                      >
                        {item.label}
                        <svg
                          className="pointer-events-none absolute -left-[3%] top-[54%] h-[0.3em] w-[106%] -translate-y-1/2 overflow-visible text-blush"
                          viewBox="0 0 100 10"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                          style={{ clipPath: on ? "inset(-60% 0 -60% 0)" : "inset(-60% 100% -60% 0)", transition: `clip-path 560ms ${ease} ${delay}ms` }}
                        >
                          <path d="M1 6.5C18 4.5 34 7.2 52 5.2S84 3.8 99 4.6" fill="none" stroke="currentColor" strokeWidth="0.08em" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                        </svg>
                      </span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
