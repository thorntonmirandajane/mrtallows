import Image from "next/image";
import { features } from "@/content/site";

export default function FeatureGrid() {
  return (
    <section id="difference" aria-labelledby="difference-title" className="surface-cream relative overflow-hidden py-[clamp(3rem,5.5vw,4.75rem)]">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <header className="mx-auto mb-[clamp(2rem,3.5vw,3rem)] max-w-3xl text-center">
          <p className="eyebrow mb-3 text-rust" data-reveal>
            Our Difference
          </p>
          <h2 id="difference-title" className="display text-[clamp(2.6rem,5.4vw,4.75rem)] text-ink" data-reveal style={{ "--d": "90ms" } as React.CSSProperties}>
            More Than Fast Food
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-muted" data-reveal style={{ "--d": "180ms" } as React.CSSProperties}>
            A higher standard for everyday classics.
          </p>
        </header>

        <ul data-reveal-group className="grid border-t border-ink/12 sm:grid-cols-2 sm:gap-y-12 sm:border-0 lg:grid-cols-4 lg:gap-y-0">
          {features.map((f, i) => (
            <li
              key={f.title}
              className="feature group relative grid cursor-default grid-cols-[6.5rem_1fr] items-center gap-x-5 border-b border-ink/12 py-5 sm:flex sm:flex-col sm:items-center sm:border-0 sm:px-6 sm:py-0 sm:text-center lg:px-8 [&:not(:first-child)]:lg:border-l [&:not(:first-child)]:lg:border-ink/12 sm:max-lg:[&:nth-child(even)]:border-l sm:max-lg:[&:nth-child(even)]:border-ink/12"
            >
              <div className="relative row-span-2 aspect-[8/5] w-full sm:mb-6 sm:h-[clamp(6rem,9.5vw,8.5rem)] sm:w-auto">
                <Image
                  src={f.icon}
                  alt=""
                  fill
                  sizes="240px"
                  className="icon-draw object-contain transition-[filter] duration-700 group-hover:[filter:brightness(0.82)]"
                  style={{ "--d": `${300 + i * 220}ms` } as React.CSSProperties}
                />
              </div>
              <h3 className="eyebrow relative self-end pb-2 text-[0.68rem] leading-[1.6] tracking-[0.22em] sm:self-auto sm:pb-3 sm:text-[0.72rem] sm:tracking-[0.26em] text-rust transition-colors duration-500 group-hover:text-walnut">
                {f.title}
                <span className="absolute bottom-0 left-0 h-px w-8 bg-blush sm:left-1/2 sm:w-10 sm:-translate-x-1/2 transition-[width,background-color] duration-700 ease-[var(--ease-luxe)] group-hover:w-16 group-hover:bg-rust" />
              </h3>
              <p className="mt-2 self-start text-[0.9rem] leading-[1.55] text-muted sm:mt-4 sm:max-w-[15rem] sm:self-auto sm:leading-[1.7] transition-colors duration-500 group-hover:text-ink">
                {f.copy}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
