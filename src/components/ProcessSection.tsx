import Image from "next/image";
import { process } from "@/content/site";

/** "1 in 3" stat, then the four steps from ingredient to bag, in the brand's engraved style. Sits above Our Mission. */
export default function ProcessSection() {
  return (
    <section aria-labelledby="process-title" className="surface-limewash relative overflow-hidden py-[clamp(2rem,3.5vw,3rem)]">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <div className="grid items-center gap-8 md:grid-cols-[auto_1px_minmax(0,1fr)] md:gap-[clamp(2rem,4vw,4rem)]" data-reveal-group>
          <figure className="mx-auto w-[min(56vw,230px)] md:w-[clamp(190px,19vw,260px)]" data-reveal>
            <div className="flex items-end justify-center gap-[8%]" aria-hidden="true">
              {[0, 1, 2].map((k) => (
                <svg key={k} viewBox="0 0 60 120" className={`w-[26%] ${k === 0 ? "text-calke" : "text-cream"}`}>
                  <circle cx="30" cy="13" r="12" fill="currentColor" />
                  <path d="M20 30h20a14 14 0 0 1 14 14v34a4 4 0 0 1-4 4h-6v32a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V82h-6a4 4 0 0 1-4-4V44a14 14 0 0 1 14-14z" fill="currentColor" />
                </svg>
              ))}
            </div>
            <figcaption className="mt-5 flex items-center gap-4">
              <span className="h-px flex-1 bg-rust/40" aria-hidden="true" />
              <span className="display text-[clamp(2.6rem,4.4vw,4rem)] font-[600] leading-none text-ink">1 in 3</span>
              <span className="h-px flex-1 bg-rust/40" aria-hidden="true" />
            </figcaption>
          </figure>

          <span className="hidden h-[80%] w-px self-center bg-walnut/30 md:block" aria-hidden="true" />

          <div className="text-center md:text-left">
            <h2 id="process-title" className="display text-[clamp(1.8rem,3.2vw,3rem)] leading-[1.1] text-ink [text-wrap:balance]" data-reveal style={{ "--d": "100ms" } as React.CSSProperties}>
              {process.stat}
            </h2>
            <p className="mt-4 text-[1rem] leading-[1.6] text-ink md:text-[1.1rem]" data-reveal style={{ "--d": "200ms" } as React.CSSProperties}>
              {process.close[0]}
              <br />
              {process.close[1]} {process.close[2]}
            </p>
          </div>
        </div>

        <ol className="mt-[clamp(0.75rem,1.5vw,1.25rem)] grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-[clamp(1.5rem,3vw,3rem)]">
          {process.steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col items-center text-center" data-reveal style={{ "--d": `${i * 120}ms` } as React.CSSProperties}>
              <div className="relative flex aspect-[5/4] w-full items-end justify-center">
                <Image
                  src={`/illustrations/${step.image}.webp`}
                  alt={step.alt}
                  width={640}
                  height={520}
                  sizes="(min-width: 1024px) 22vw, 44vw"
                  className="max-h-full w-auto max-w-[92%] object-contain opacity-[0.62] mix-blend-multiply [filter:contrast(0.85)_sepia(0.2)]"
                />
              </div>
              <div className="relative mt-5 flex w-full justify-center">
                <span className="display flex h-9 w-9 items-center justify-center rounded-full bg-calke text-[1.05rem] font-[600] text-cream" aria-hidden="true">
                  {i + 1}
                </span>
                {/* arrow centered in the gap to the next step */}
                {i < process.steps.length - 1 && (
                  <svg
                    className="absolute right-[calc(clamp(1.5rem,3vw,3rem)/-2)] top-1/2 hidden w-[clamp(2.25rem,4vw,3.5rem)] -translate-y-1/2 translate-x-1/2 text-walnut/60 lg:block"
                    viewBox="0 0 60 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M1 6h56M51 1l6 5-6 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <h3 className="eyebrow mt-4 text-rust">{step.title}</h3>
              <p className="mt-2 max-w-[15rem] text-[0.9rem] leading-[1.55] text-ink/90 md:text-[0.95rem]">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
