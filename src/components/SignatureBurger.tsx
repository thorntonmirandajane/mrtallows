import ComparisonSlider from "./ComparisonSlider";
import { burgerNotes, burgerNotesMobile, signature } from "@/content/site";

export default function SignatureBurger() {
  const intro = (
    <>
      <p className="eyebrow mb-3 text-rust" data-reveal>
        {signature.eyebrow}
      </p>
      <h2 id="signature-title" className="display text-[clamp(1.8rem,8.4vw,2.3rem)] text-ink md:text-[clamp(2.2rem,3.3vw,3.5rem)]" data-reveal-group>
        {signature.headline.map((l, i) => (
          <span key={l} className="line-mask">
            <span style={{ "--d": `${i * 120}ms` } as React.CSSProperties}>{l}</span>
          </span>
        ))}
      </h2>
      <p className="mt-2 max-w-[19rem] text-[0.88rem] leading-[1.5] text-ink/90 md:mt-3 md:text-[0.95rem] md:leading-[1.6]" data-reveal style={{ "--d": "150ms" } as React.CSSProperties}>
        {signature.copy}
      </p>
      <a href={signature.cta.href} className="btn btn-solid btn-compact pointer-events-auto mt-4 md:mt-5" data-reveal style={{ "--d": "250ms" } as React.CSSProperties}>
        {signature.cta.label}
      </a>
    </>
  );

  return (
    <section aria-labelledby="signature-title" className="surface-limestone relative overflow-hidden !bg-[#e6d1b9]">
      {/* below xl: copy sits above the slider */}
      <div className="mx-auto hidden max-w-[var(--container)] px-[var(--gutter)] pt-[clamp(2.25rem,4vw,3rem)] md:block xl:hidden">{intro}</div>

      {/* desktop: the slider fills the section; copy overlays the open wall on the left */}
      <div className="relative mx-auto hidden max-w-[1760px] md:block">
        <ComparisonSlider
          className="[mask-image:linear-gradient(to_bottom,transparent,#000_4%,#000_95%,transparent)]"
          sizes="90vw"
          inset={0.16}
          rest={57}
          photo={{ src: "/images/slider-photo.webp", alt: signature.photoAlt, width: 1660, height: 780 }}
          sketch={{ src: "/images/slider-sketch.webp", alt: signature.sketchAlt, width: 1660, height: 780 }}
          notes={burgerNotes}
          labels={["", "Sketched"]}
          labelInset="6%"
        />
        <div className="pointer-events-none absolute left-[var(--edge)] top-[7%] hidden xl:block min-[1760px]:left-[calc(var(--edge)-(100vw-1760px)/2)]">{intro}</div>
      </div>

      {/* mobile: copy on the limestone, then the slider, whose top fades up from that same color */}
      <div className="bg-[#dbcbb8] md:hidden">
        <div className="relative z-10 px-[var(--gutter)] pt-10">{intro}</div>
        <ComparisonSlider
          className="mt-[calc(-1.5rem-54vw)]"
          sizes="(min-width: 768px) 1px, 100vw"
          photo={{ src: "/images/slider-photo-mobile.webp", alt: signature.photoAlt, width: 1380, height: 1780 }}
          sketch={{ src: "/images/slider-sketch-mobile.webp", alt: signature.sketchAlt, width: 1380, height: 1780 }}
          notes={burgerNotesMobile}
          noteSize={54}
          textZone={900 / 1780}
          rest={47}
          labels={["", ""]}
        />
      </div>
    </section>
  );
}
