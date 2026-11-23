import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { socialIcons } from "@/components/SocialIcons";
import { people } from "@/content/site";

export const metadata: Metadata = {
  title: "The People",
  description: "Meet the people behind Mr. Tallows: co-founder Shon Foster, co-owner Dr. Paul Saladino and co-founder Ceadda Conover.",
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

/** icon buttons for a person's profiles (socials, podcast), grouped under small labels */
function LinkGroups({ p }: { p: (typeof people.team)[number] }) {
  if (!p.links) return null;
  return (
    <div className="mt-6 grid justify-start gap-x-[clamp(1.5rem,5vw,3.5rem)] sm:grid-cols-[auto_auto] gap-y-5 border-t border-walnut/20 pt-5" data-reveal style={d(480)}>
      {p.links.map((g) => (
        <div key={g.group}>
          <p className="eyebrow text-rust">{g.group}</p>
          <ul className="mt-3 flex items-center gap-2">
            {g.items.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} on ${l.label}`}
                  title={l.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-walnut/30 bg-cream/90 text-walnut-deep transition-colors duration-500 hover:border-forest hover:bg-forest hover:text-cream"
                >
                  {socialIcons[l.label]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** round outlined button used for profile and press links */
const pill =
  "flex h-10 items-center justify-center rounded-full border border-walnut/30 bg-cream/90 text-walnut-deep transition-colors duration-500 hover:border-forest hover:bg-forest hover:text-cream";

/** one press link: outlet, full headline, arrow */
function ArticleLink({ a, big = false }: { a: NonNullable<(typeof people.team)[number]["press"]>[number]; big?: boolean }) {
  return (
    <a href={a.href} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-4 py-2.5">
      <span>
        <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-muted">{a.outlet}</span>
        <span className={`display mt-1 block font-[560] leading-[1.28] text-ink transition-colors duration-300 group-hover:text-rust ${big ? "text-[1.02rem]" : "text-[0.92rem]"}`}>{a.title}</span>
      </span>
      <svg viewBox="0 0 16 16" aria-hidden="true" className="mt-4 h-3.5 w-3.5 shrink-0 text-rust transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 11 11 5M6 5h5v5" />
      </svg>
    </a>
  );
}

/** press coverage: the first article featured, the rest tucked in a dropdown so the column stays short */
function PressAccordion({ p }: { p: (typeof people.team)[number] }) {
  if (!p.press?.length) return null;
  const [featured, ...rest] = p.press;
  return (
    <div>
      <p className="eyebrow text-rust">Featured article</p>
      <ArticleLink a={featured} big />
      {rest.length > 0 && (
        <details className="group/press border-t border-walnut/15 pt-3">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
            <span className="eyebrow text-rust">More articles</span>
            <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-full border border-walnut/30 bg-cream/90 text-walnut-deep transition-transform duration-300 group-open/press:rotate-45">
              <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </span>
          </summary>
          <ul className="mt-1 divide-y divide-walnut/15">
            {rest.map((a) => (
              <li key={a.href}>
                <ArticleLink a={a} />
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}

const card =
  "mt-8 rounded-xl border border-walnut/15 bg-cream/45 px-[clamp(1.1rem,2.2vw,1.75rem)] py-[clamp(1.25rem,2.2vw,1.75rem)] shadow-[0_10px_30px_-18px_rgba(58,42,32,0.35)]";

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
            {people.team.map((p, n) => {
              // alternate sides: every second profile puts the photo on the right
              const flip = n % 2 === 1;
              return (
              <article key={p.id} aria-labelledby={`${p.id}-name`} className="border-b border-rust/40 py-[clamp(2.75rem,5vw,4rem)]">
                <p className="eyebrow text-rust" data-reveal>
                  {String(n + 1).padStart(2, "0")} / {p.name}
                </p>
                <div className={`mt-[5.5rem] grid items-start gap-8 md:mt-[clamp(5rem,7vw,6rem)] min-[1420px]:!mt-7 ${flip ? "md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]" : "md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]"} md:gap-[clamp(2rem,4vw,3.5rem)]`}>
                  <figure className={`relative ${flip ? "md:order-2" : ""}`} data-reveal>
                    {/* handwritten note in the same hand, color and arrow as the signature burger callouts */}
                    <svg viewBox="0 0 250 120" aria-hidden="true" className="pointer-events-none absolute -left-[3%] -top-[clamp(4.25rem,8vw,5.5rem)] w-[clamp(10rem,17vw,12.5rem)] overflow-visible text-[#5a3420] min-[1420px]:hidden">
                      <text className="hand note-fade" style={d(500)} fill="currentColor" fontSize="30" transform="rotate(-6 10 40)">
                        <tspan x="10" y="40">{p.note[0]}</tspan>
                        <tspan x="34" y="72">{p.note[1]}</tspan>
                      </text>
                      <path d="M150 62 Q205 55 212 112" pathLength={1} className="draw-path" style={{ "--len": 1, "--d": "900ms" } as React.CSSProperties} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M201 101 L212 112 L220 99" pathLength={1} className="draw-path" style={{ "--len": 1, "--d": "1900ms" } as React.CSSProperties} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {flip ? (
                      <>
                    {/* flipped: the note sits in the right margin, arrow pointing back at the photo */}
                    <svg viewBox="0 0 210 150" aria-hidden="true" className="pointer-events-none absolute left-[calc(100%-0.6rem)] top-[7%] hidden w-[10.5rem] overflow-visible text-[#5a3420] min-[1420px]:block">
                      <text className="hand note-fade" style={d(500)} fill="currentColor" fontSize="30" transform="rotate(5 30 40)">
                        <tspan x="30" y="40">{p.note[0]}</tspan>
                        <tspan x="54" y="72">{p.note[1]}</tspan>
                      </text>
                      <path d="M100 92 Q78 132 12 124" pathLength={1} className="draw-path" style={{ "--len": 1, "--d": "900ms" } as React.CSSProperties} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M24 115 L12 124 L24 132" pathLength={1} className="draw-path" style={{ "--len": 1, "--d": "1900ms" } as React.CSSProperties} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                      </>
                    ) : (
                      <>
                    {/* wide screens: the note sits in the margin to the left of the photo, arrow pointing in */}
                    <svg viewBox="0 0 210 150" aria-hidden="true" className="pointer-events-none absolute right-[calc(100%-0.6rem)] top-[7%] hidden w-[10.5rem] overflow-visible text-[#5a3420] min-[1420px]:block">
                      <text className="hand note-fade" style={d(500)} fill="currentColor" fontSize="30" transform="rotate(-6 0 40)">
                        <tspan x="0" y="40">{p.note[0]}</tspan>
                        <tspan x="24" y="72">{p.note[1]}</tspan>
                      </text>
                      <path d="M120 92 Q140 132 200 124" pathLength={1} className="draw-path" style={{ "--len": 1, "--d": "900ms" } as React.CSSProperties} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M188 115 L200 124 L188 132" pathLength={1} className="draw-path" style={{ "--len": 1, "--d": "1900ms" } as React.CSSProperties} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                      </>
                    )}
                    <div className="border border-walnut/50 p-[clamp(0.45rem,1vw,0.7rem)]">
                      <Image src={p.image} alt={p.alt} width={900} height={1250} sizes="(min-width: 768px) 30rem, 90vw" quality={88} className="block h-auto w-full" />
                    </div>
                    {/* snapshots pinned over the bottom of the portrait, like prints tucked into a frame */}
                    {p.snapshots && (
                      <div className="relative -mt-[24%] flex items-start justify-between px-[1%]">
                        {p.snapshots.map((s, i) => (
                          <div
                            key={s.src}
                            data-reveal
                            style={d(350 + i * 160)}
                            className={`w-[48%] border border-walnut/50 bg-[#d8c5b0] p-[clamp(0.35rem,0.8vw,0.55rem)] shadow-[0_12px_28px_-14px_rgba(58,42,32,0.45)] ${i % 2 ? "mt-[9%] rotate-[3.5deg] md:-mr-[4%]" : "-rotate-[4deg] md:-ml-[5%]"}`}
                          >
                            <Image src={s.src} alt={s.alt} width={640} height={520} sizes="(min-width: 768px) 15rem, 45vw" quality={85} className="block h-auto w-full" />
                          </div>
                        ))}
                      </div>
                    )}
                    {/* quote set straight on the page under the portrait */}
                    {p.quote && (
                      <figure className="relative mt-[clamp(1.5rem,2.6vw,2rem)] px-1" data-reveal style={d(260)}>
                        {/* big rust quote mark leading into the pull quote */}
                        <span aria-hidden="true" className="display block h-[0.5em] select-none text-[clamp(4.5rem,7vw,6rem)] font-[640] leading-[0.9] text-rust">&ldquo;</span>
                        <blockquote className="display relative [text-wrap:balance] text-[min(1.3rem,5.4vw)] font-[540] leading-[1.22] tracking-[-0.015em] text-ink md:text-[clamp(1.3rem,1.95vw,1.7rem)]">{p.quote.replace(/^[\u201c"]|[\u201d"]$/g, "")}</blockquote>
                        <figcaption className="relative mt-4 flex items-center gap-3">
                          <span aria-hidden="true" className="h-px w-6 bg-rust/60" />
                          <span className="eyebrow text-rust">{p.name}</span>
                          {p.links?.flatMap((g) => g.items).map((l) => (
                            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on ${l.label}`} title={l.handle ?? l.label} className={pill + " !h-8 w-8 !border-blush !bg-blush !text-cream hover:!border-forest hover:!bg-forest [&>svg]:h-4 [&>svg]:w-4"}>
                              {socialIcons[l.label]}
                            </a>
                          ))}
                        </figcaption>
                      </figure>
                    )}
                  </figure>

                  <div>
                    <h2 id={`${p.id}-name`} className="display text-[clamp(2.4rem,4.6vw,3.8rem)] font-[640] leading-[0.98] tracking-[-0.025em] text-ink" data-reveal style={d(80)}>
                      {p.title ?? p.name}
                    </h2>
                    <p className="mt-4 inline-block -rotate-1 bg-blush px-4 py-1.5 text-[0.95rem] italic tracking-[0.02em] text-cream" data-reveal style={d(140)}>
                      {p.role}
                    </p>
                    <div className="mt-6 max-w-[40rem] space-y-4 text-[0.98rem] leading-[1.6] text-ink" data-reveal style={d(200)}>
                      {p.bio.map((b) => (
                        <p key={b}>
                          {b.split(/\*\*(.+?)\*\*/).map((t, j) => (j % 2 ? <strong key={j} className="font-semibold">{t}</strong> : t))}
                        </p>
                      ))}
                    </div>




                    {p.press && (
                      <div className={card + " !py-[clamp(1rem,1.8vw,1.35rem)]"} data-reveal style={d(340)}>
                        <PressAccordion p={p} />
                      </div>
                    )}

                    {p.stat && (
                      <div className={card}>
                        <div className={`grid grid-cols-2 gap-x-4 gap-y-6 sm:items-end sm:gap-[clamp(1rem,2vw,1.75rem)] ${(p.facts?.length ?? 0) > 1 ? "sm:grid-cols-[1.4fr_1fr_1fr]" : "sm:grid-cols-[auto_auto] sm:justify-start sm:gap-x-[clamp(1.75rem,4vw,3rem)]"}`}>
                          <div data-reveal style={d(200)} className="col-span-2 sm:col-span-1">
                            <p className="display text-[clamp(3.6rem,6.5vw,5.25rem)] font-[430] leading-[0.85] tracking-[-0.02em] text-rust">{p.stat.value}</p>
                            <p className="mt-2 max-w-[15rem] text-[0.92rem] leading-[1.4] text-ink">{p.stat.label}</p>
                          </div>
                          {p.facts?.map((f, i) => (
                            <div key={f.label} data-reveal style={d(320 + i * 120)} className="border-l border-walnut/25 pl-[clamp(0.9rem,1.6vw,1.25rem)]">
                              <p className={`display font-[430] leading-none text-rust ${f.value.length > 4 ? "text-[clamp(1.3rem,2vw,1.6rem)]" : "text-[clamp(1.9rem,3vw,2.4rem)]"}`}>{f.value}</p>
                              <p className="mt-2 text-[0.75rem] leading-[1.35] text-muted">{f.label}</p>
                            </div>
                          ))}
                        </div>
                        <LinkGroups p={p} />
                        {p.brands && (
                          <div className="mt-6 border-t border-walnut/20 pt-5" data-reveal style={d(560)}>
                            <p className="eyebrow text-rust">Companies he built</p>
                            <ul className="mt-4 flex flex-wrap items-center gap-x-[clamp(1.75rem,4vw,3rem)] gap-y-4">
                              {p.brands.map((b) => (
                                <li key={b.name}>
                                  <a href={b.href} target="_blank" rel="noopener noreferrer" className="block opacity-80 transition-opacity hover:opacity-100">
                                    <Image src={b.logo} alt={b.name} width={b.width} height={b.height} className={`w-auto ${b.height / b.width > 0.3 ? "h-[3rem]" : "h-[2rem]"}`} />
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}


                    {p.recognition && (
                    <div className={card} aria-label="Recognition">
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
                    )}
                  </div>
                </div>
              </article>
              );
            })}
          </div>
          <div className="h-[clamp(2rem,4vw,3rem)]" />
        </section>

      </main>
      <Footer home={false} />
    </>
  );
}
