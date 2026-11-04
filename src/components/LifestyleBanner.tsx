import Image from "next/image";
import { details } from "@/content/site";

export default function LifestyleBanner() {
  return (
    <section aria-labelledby="details-title" className="surface-walnut on-dark relative overflow-hidden text-cream">
      {/* desktop: full-bleed campaign image with the copy laid over the open kraft surface */}
      <div
        className="relative hidden aspect-[4.4/1] w-full overflow-hidden lg:block"
        style={{ background: "linear-gradient(180deg, #9d6f44, #c69767 24%, #bf9061 48%, #7d5c3e 73%, #67482d)" }}
      >
        {/* the full shot at its natural ratio, anchored left; the kraft surface continues past its right edge */}
        <Image
          src="/images/packaging-banner.webp"
          alt={details.imageAlt}
          width={1245}
          height={371}
          sizes="77vw"
          quality={90}
          className="absolute inset-y-0 left-0 h-full w-auto max-w-none [mask-image:linear-gradient(to_right,#000_80%,transparent)]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_60%,rgba(31,23,18,0.55)_85%)]" />
        <div className="absolute right-[max(var(--gutter),5vw)] top-1/2 w-[22vw] min-w-[17rem] -translate-y-1/2">
          <Copy id="details-title" size="text-[clamp(2.1rem,2.9vw,3.6rem)]" />
        </div>
      </div>

      {/* mobile & tablet: the campaign shot fills the section; copy rests on its shaded lower half */}
      <div className="relative flex aspect-[700/1244] flex-col justify-end overflow-hidden sm:aspect-[4/5] lg:hidden">
        <Image
          src="/images/packaging-box-tall.webp"
          alt={details.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* warm the cool grey kraft toward the desktop banner's tone */}
        <div className="pointer-events-none absolute inset-0 bg-[#c69767] opacity-35 mix-blend-multiply" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(103,72,45,0)_0%,rgba(103,72,45,0)_34%,rgba(103,72,45,0.85)_56%,rgba(88,61,39,0.97)_76%,#563b26_100%)]" />
        <div className="relative px-[var(--gutter)] pb-12 pt-10">
          <Copy size="text-[clamp(2.3rem,10vw,3.4rem)]" />
        </div>
      </div>
    </section>
  );
}

function Copy({ id, size = "text-[clamp(2.7rem,4.4vw,4.3rem)]" }: { id?: string; size?: string }) {
  return (
    <>
      <p className="eyebrow mb-6 text-blush" data-reveal>
        {details.eyebrow}
      </p>
      <h2 id={id} className={`display ${size}`} data-reveal-group>
        {details.headline.map((l, i) => (
          <span key={l} className="line-mask">
            <span style={{ "--d": `${i * 130}ms` } as React.CSSProperties}>{l}</span>
          </span>
        ))}
      </h2>
      <div className="rule-draw my-7 h-px w-14 bg-blush" style={{ "--d": "350ms" } as React.CSSProperties} />
      <p className="max-w-[20rem] text-[1rem] leading-[1.75] text-cream/90" data-reveal style={{ "--d": "250ms" } as React.CSSProperties}>
        {details.copy}
      </p>
    </>
  );
}
