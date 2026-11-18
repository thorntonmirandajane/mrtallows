import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { people } from "@/content/site";

export const metadata: Metadata = {
  title: "The People",
  description: "Meet the people behind Mr. Tallow's, starting with Shon Foster, the chef who created the recipes.",
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function ThePeople() {
  return (
    <>
      <SmoothScroll />
      <Header home={false} />
      <main id="main">
        {/* hero: kitchen photo on the left fading into the homepage wall, copy right-aligned on the right */}
        <section aria-labelledby="people-title" className="relative flex flex-col overflow-hidden border-b border-rust/50 bg-[#d1baad] bg-[url(/people/wall.webp)] bg-cover bg-[center_top] md:h-[max(520px,min(38vw,calc(100svh-40px)))] md:justify-end">
          <div className="relative aspect-[3/2] w-full md:absolute md:left-0 md:top-0 md:aspect-auto md:h-[121%] md:w-[60%]">
            <Image
              src="/people/kitchen.webp"
              alt={people.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 60vw, 100vw"
              quality={86}
              className="object-cover object-[30%_50%] [mask-image:linear-gradient(to_bottom,#000_30%,rgba(0,0,0,0.6)_56%,rgba(0,0,0,0.2)_78%,transparent_95%)] md:[mask-image:linear-gradient(to_right,#000_55%,transparent_98%)]"
            />
          </div>
          {/* sketch still life (basket of potatoes, skillet) in the homepage hero's tan-and-cream palette */}
          {/* warm amber light from the upper right, like the homepage hero */}
          
          {/* phones: the same watermark, softly lit, behind the copy under the photo */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[78vw] md:hidden">
            <Image src="/people/still-life.webp" alt="" width={1400} height={700} className="absolute -left-[10%] top-[52%] h-auto w-[84%] opacity-[0.45]" />
            <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_20%_60%,rgba(255,196,120,0.28),transparent_75%)] mix-blend-soft-light [background-position:0_40%]" />
          </div>
          <Image src="/people/still-life.webp" alt="" width={1400} height={700} priority className="pointer-events-none absolute -scale-x-100 opacity-[0.5] right-[-1%] top-[0.75rem] h-auto w-[clamp(22rem,38vw,40rem)] max-md:hidden" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_55%_at_86%_14%,rgba(255,196,120,0.30),rgba(255,196,120,0.10)_45%,transparent_75%)] mix-blend-soft-light max-md:hidden" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(34%_46%_at_88%_10%,rgba(250,214,160,0.18),transparent_70%)] max-md:hidden" />
          <div className="relative -mt-[13vw] w-full px-[var(--gutter)] pb-9 pt-0 md:mt-0 md:px-[max(var(--gutter),5vw)] md:pb-[clamp(2.25rem,3.5vw,3.25rem)] md:pt-[calc(var(--header-h)+1rem)]">
            <div className="ml-auto max-w-[36rem] text-right md:w-[50%] md:max-w-none">
              <p className="eyebrow text-rust" data-reveal>
                {people.eyebrow}
              </p>
              <h1 id="people-title" className="display mt-4 md:whitespace-nowrap text-[clamp(2.3rem,4.4vw,4.4rem)] font-[640] leading-[1] tracking-[-0.025em] text-ink" data-reveal-group>
                {people.headline.map((l, i) => (
                  <span key={l} className="line-mask">
                    <span style={d(i * 130)}>{l}</span>
                  </span>
                ))}
              </h1>
              <p className="ml-auto mt-5 max-w-[30rem] [text-wrap:balance] text-[1rem] leading-[1.55] text-ink md:text-[1.15rem]" data-reveal style={d(250)}>
                {people.intro}
              </p>
            </div>
          </div>
        </section>

        {/* one numbered profile per person */}
        <section aria-label="Team" className="surface-limewash relative overflow-clip">
          {/* subtle limewash texture lifted from the homepage hero wall */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[url(/people/limewash.webp)] bg-[length:1100px_auto] bg-repeat opacity-100 mix-blend-overlay" />
          <div className="relative mx-auto max-w-[76rem] px-[var(--gutter)]">
            {people.team.map((p, n) => (
              <article key={p.id} aria-labelledby={`${p.id}-name`} className="border-b border-rust/40 py-[clamp(2.75rem,5vw,4rem)]">
                <p className="eyebrow text-rust" data-reveal>
                  {String(n + 1).padStart(2, "0")} / {p.name}
                </p>
                <div className="mt-[5.5rem] grid items-start gap-8 md:mt-[clamp(5rem,7vw,6rem)] min-[1420px]:!mt-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-[clamp(2rem,4vw,3.5rem)]">
                  <figure className="relative" data-reveal>
                    {/* handwritten note in the same hand, color and arrow as the signature burger callouts */}
                    <svg viewBox="0 0 250 120" aria-hidden="true" className="pointer-events-none absolute -left-[3%] -top-[clamp(4.25rem,8vw,5.5rem)] w-[clamp(10rem,17vw,12.5rem)] overflow-visible text-[#5a3420] min-[1420px]:hidden">
                      <text className="hand note-fade" style={d(500)} fill="currentColor" fontSize="30" transform="rotate(-6 10 40)">
                        <tspan x="10" y="40">the man behind</tspan>
                        <tspan x="34" y="72">the menu</tspan>
                      </text>
                      <path d="M150 62 Q205 55 212 112" pathLength={1} className="draw-path" style={{ "--len": 1, "--d": "900ms" } as React.CSSProperties} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M201 101 L212 112 L220 99" pathLength={1} className="draw-path" style={{ "--len": 1, "--d": "1900ms" } as React.CSSProperties} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {/* wide screens: the note sits in the margin to the left of the photo, arrow pointing in */}
                    <svg viewBox="0 0 210 150" aria-hidden="true" className="pointer-events-none absolute right-[calc(100%-0.6rem)] top-[7%] hidden w-[10.5rem] overflow-visible text-[#5a3420] min-[1420px]:block">
                      <text className="hand note-fade" style={d(500)} fill="currentColor" fontSize="30" transform="rotate(-6 0 40)">
                        <tspan x="0" y="40">the man behind</tspan>
                        <tspan x="24" y="72">the menu</tspan>
                      </text>
                      <path d="M120 92 Q140 132 200 124" pathLength={1} className="draw-path" style={{ "--len": 1, "--d": "900ms" } as React.CSSProperties} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M188 115 L200 124 L188 132" pathLength={1} className="draw-path" style={{ "--len": 1, "--d": "1900ms" } as React.CSSProperties} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="border border-walnut/50 p-[clamp(0.45rem,1vw,0.7rem)]">
                      <Image src={p.image} alt={p.alt} width={900} height={1250} sizes="(min-width: 768px) 30rem, 90vw" quality={88} className="block h-auto w-full" />
                    </div>
                  </figure>

                  <div>
                    <h2 id={`${p.id}-name`} className="display text-[clamp(2.4rem,4.6vw,3.8rem)] font-[640] leading-[0.98] tracking-[-0.025em] text-ink" data-reveal style={d(80)}>
                      {p.name}
                    </h2>
                    <p className="mt-4 inline-block -rotate-1 bg-blush px-4 py-1.5 text-[0.95rem] italic tracking-[0.02em] text-cream" data-reveal style={d(140)}>
                      {p.role}
                    </p>
                    <div className="mt-6 max-w-[40rem] space-y-4 text-[0.98rem] leading-[1.6] text-ink" data-reveal style={d(200)}>
                      {p.bio.map((b) => (
                        <p key={b}>{b}</p>
                      ))}
                    </div>

                    <div className="mt-8 rounded-xl border border-walnut/15 bg-cream/45 px-[clamp(1.1rem,2.2vw,1.75rem)] py-[clamp(1.25rem,2.2vw,1.75rem)] shadow-[0_10px_30px_-18px_rgba(58,42,32,0.35)]" aria-label="Recognition">
                      {/* timeline, oldest first: across on desktop, down the left on phones */}
                      <ol className="relative grid gap-6 md:grid-cols-4 md:gap-[clamp(0.6rem,1.4vw,1.1rem)]">
                        <span aria-hidden="true" className="rule-draw absolute bottom-2 left-[6px] top-2 w-px bg-walnut/40 md:bottom-auto md:left-0 md:right-0 md:top-[calc(1.35rem+0.95rem)] md:h-px md:w-auto" />
                        {[...p.recognition].reverse().map((r, i) => (
                          <li key={r.year} data-reveal style={d(200 + i * 150)} className="relative pl-8 md:pl-0">
                            <p className="display text-[1.35rem] font-[430] leading-none text-rust">{r.year}</p>
                            <span aria-hidden="true" className="absolute left-0 top-[0.3rem] h-[13px] w-[13px] rounded-full border-2 border-[#d9c9b4] bg-rust shadow-[0_0_0_1px_rgba(154,90,50,0.5)] md:static md:mt-[0.5rem] md:block" />
                            <p className="display mt-1.5 text-[1.05rem] font-[640] leading-[1.12] text-ink md:mt-3 md:text-[clamp(0.92rem,1.2vw,1.05rem)]">{r.title}</p>
                            <p className="mt-1 text-[0.8rem] leading-[1.35] text-muted">{r.from}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="h-[clamp(2rem,4vw,3rem)]" />
        </section>

      </main>
      <Footer home={false} />
    </>
  );
}
