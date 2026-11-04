import Image from "next/image";
import { philosophy } from "@/content/site";

export default function PhilosophySection() {
  return (
    <section
      aria-labelledby="philosophy-title"
      className="relative flex flex-col overflow-hidden lg:block"
      style={
        {
          background: "linear-gradient(180deg, #e8d3bd 0%, #dcc4a8 15%, #e2cfbc 35%, #e6d4c3 60%, #d5c4b3 78%, #b2a294 100%)",
          // photo width: as wide as possible while leaving the copy column clear
          "--img-w": "min(72vw, calc(100vw - var(--edge) - 26rem))",
        } as React.CSSProperties
      }
    >
      {/* the full still life, anchored right at its natural ratio; its wall and table continue to the left */}
      <div className="relative order-last lg:absolute lg:inset-y-0 lg:right-0 lg:w-[var(--img-w)]">
        <Image
          src="/images/packaging-scene.webp"
          alt={philosophy.imageAlt}
          width={1672}
          height={941}
          sizes="(min-width: 1024px) 72vw, 100vw"
          quality={90}
          className="h-auto w-full lg:h-full lg:object-cover lg:object-left lg:[mask-image:linear-gradient(to_right,transparent,#000_16%)]"
        />
      </div>

      <div className="relative mx-auto flex max-w-[1500px] flex-col gap-8 px-[var(--gutter)] py-8 lg:min-h-[calc(var(--img-w)*941/1672)] lg:max-w-none lg:justify-center lg:py-10 lg:pl-[var(--edge)] lg:pr-0">
        <div className="lg:max-w-[22rem]">
          <p className="eyebrow mb-4 text-rust" data-reveal>
            {philosophy.eyebrow}
          </p>
          <h2 id="philosophy-title" className="display text-[clamp(2.3rem,3.1vw,3.4rem)] text-ink" data-reveal-group>
            {philosophy.headline.map((l, i) => (
              <span key={l} className="line-mask">
                <span style={{ "--d": `${i * 130}ms` } as React.CSSProperties}>{l}</span>
              </span>
            ))}
          </h2>
          <div className="rule-draw mb-4 mt-5 h-[2px] w-9 bg-blush" style={{ "--d": "450ms" } as React.CSSProperties} />
          <p className="max-w-[19rem] text-[0.95rem] leading-[1.6] text-ink" data-reveal style={{ "--d": "300ms" } as React.CSSProperties}>
            {philosophy.copy}
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-3 lg:max-w-[21rem] lg:grid-cols-1 lg:gap-4" data-reveal-group>
          {philosophy.statements.map((s, i) => (
            <li key={s.title} data-reveal style={{ "--d": `${200 + i * 140}ms` } as React.CSSProperties}>
              <h3 className="eyebrow mb-1.5 text-ink">{s.title}</h3>
              <p className="text-[0.9rem] leading-[1.55] text-ink">{s.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
