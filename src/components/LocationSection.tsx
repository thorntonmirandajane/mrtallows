import Image from "next/image";
import { location, visit } from "@/content/site";

/** Until a verified address exists, directions open a map search for the brand in the region. */
const directionsHref =
  location.mapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${location.name} ${location.region}`)}`;

export default function LocationSection() {
  const comingSoon = location.status === "coming-soon";

  return (
    <section id="visit" aria-labelledby="visit-title" className="surface-cream relative overflow-hidden py-[clamp(2rem,3.5vw,3rem)]">
      <div className="mx-auto grid max-w-[var(--container)] items-center gap-8 px-[var(--gutter)] lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <p className="eyebrow mb-4 text-ink" data-reveal>
            {visit.eyebrow}
          </p>
          <h2 id="visit-title" className="display text-[clamp(2.4rem,3.8vw,3.8rem)] text-ink" data-reveal-group>
            {visit.headline.map((l, i) => (
              <span key={l} className="line-mask">
                <span style={{ "--d": `${i * 130}ms` } as React.CSSProperties}>{l}</span>
              </span>
            ))}
          </h2>
          <p className="mt-4 max-w-[22rem] text-[0.95rem] leading-[1.6] text-ink/90" data-reveal style={{ "--d": "200ms" } as React.CSSProperties}>
            {visit.copy}
          </p>
        </div>

        <div
          data-reveal
          style={{ "--d": "150ms" } as React.CSSProperties}
          className="grid overflow-hidden rounded-[14px] border border-ink/15 bg-cream shadow-[0_24px_50px_-34px_rgba(58,42,32,0.45)] sm:grid-cols-[1fr_1fr]"
        >
          <div className="flex flex-col p-6 md:p-8">
            <h3 className="display text-[1.75rem] text-ink">{comingSoon ? `Opening in ${location.region}` : location.name}</h3>
            <p className="eyebrow mt-1 text-[0.6rem] text-ink">Visit our first location</p>

            <dl className="mt-6 space-y-4 text-[0.88rem] text-ink">
              <div className="flex gap-3">
                <dt className="sr-only">Address</dt>
                <PinIcon />
                <dd className="leading-snug">
                  {location.street ? (
                    <>
                      {location.street}
                      <br />
                      {location.cityState}
                    </>
                  ) : (
                    <>
                      Address coming soon
                      <br />
                      {location.region}
                    </>
                  )}
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="sr-only">Hours</dt>
                <ClockIcon />
                <dd className="leading-snug">
                  {location.hours ? (
                    location.hours
                  ) : (
                    <>
                      Hours coming soon
                      <br />
                      Announced at opening
                    </>
                  )}
                </dd>
              </div>
            </dl>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-full bg-forest px-5 text-[0.8rem] font-medium text-cream transition-colors duration-500 hover:bg-forest-deep"
              >
                Get Directions
              </a>
              <a
                href="#experience"
                className="inline-flex h-10 items-center rounded-full border border-ink/60 px-5 text-[0.8rem] font-medium text-ink transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-cream"
              >
                See the Space
              </a>
            </div>
          </div>

          <div className="group relative aspect-[16/9] overflow-hidden sm:aspect-auto sm:min-h-[220px]">
            <Image
              src="/images/map-concept.webp"
              alt="Stylized map in muted sage and sand tones with a forest-green Mr. Tallow's pin"
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-[55%_50%] transition-transform duration-[2000ms] ease-[var(--ease-luxe)] group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg className="mt-0.5 shrink-0 text-ink" width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
      <path d="M8 17s6-5.2 6-10A6 6 0 0 0 2 7c0 4.8 6 10 6 10Z" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="8" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="mt-0.5 shrink-0 text-ink" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 4v4l2.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
