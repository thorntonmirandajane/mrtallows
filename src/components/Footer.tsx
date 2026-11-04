import Logo from "./Logo";
import { location, nav, site, socials } from "@/content/site";

const icons: Record<string, React.ReactNode> = {
  Instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" />
    </svg>
  ),
  TikTok: (
    <svg width="17" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.8 2.3 4.6 5 4.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="on-dark relative text-cream">
      <div className="h-1 bg-rust" aria-hidden="true" />
      <div className="surface-forest">
        <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] pb-10 pt-[clamp(3rem,5vw,4.5rem)]">
          <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-16">
            <div className="flex items-start gap-8">
              <Logo className="w-[84px] text-cream md:w-[104px]" />
            </div>
            <div className="md:border-l md:border-cream/15 md:pl-14">
              <p className="display max-w-[22rem] text-[1.4rem] leading-[1.25] text-cream/90 md:text-[1.75rem]">{site.tagline}</p>
              <p className="eyebrow mt-6 text-[0.6rem] text-cream/70">
                {location.street ? `${location.street} · ${location.cityState}` : `Opening soon in ${location.region}`}
              </p>
            </div>
            <div className="flex flex-col gap-10 md:items-end">
              <nav aria-label="Footer">
                <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:flex-wrap">
                  {nav.map((n) => (
                    <li key={n.href}>
                      <a href={n.href} className="nav-link eyebrow text-[0.64rem] text-cream/90 transition-colors hover:text-cream">
                        {n.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <ul className="flex gap-3" aria-label="Social">
                {socials.map((s) => (
                  <li key={s.label}>
                    {s.href ? (
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition-colors hover:border-cream hover:bg-cream hover:text-forest-deep"
                      >
                        {icons[s.label]}
                      </a>
                    ) : (
                      <span
                        title={`${s.label} coming soon`}
                        aria-label={`${s.label} coming soon`}
                        className="flex h-10 w-10 cursor-default items-center justify-center rounded-full border border-dashed border-cream/20 text-cream/40"
                      >
                        {icons[s.label]}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col md:mt-16 justify-between gap-3 border-t border-cream/12 pt-6 text-[0.72rem] text-cream/70 sm:flex-row">
            <p>© {new Date().getFullYear()} Mr. Tallow&rsquo;s. All rights reserved.</p>
            <p>Clean ingredients. Beef tallow. A better kind of fast food.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
