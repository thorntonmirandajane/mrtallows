import MenuDivider from "./MenuDivider";
import { fullMenu } from "@/content/site";

/** The whole menu, set like a printed card: categories in rust, prices on dotted leaders. */
export default function FullMenuSection() {
  return (
    <section id="full-menu" aria-labelledby="full-menu-title" className="surface-cream relative pb-[clamp(3rem,6vw,5.5rem)] pt-[clamp(2rem,3.5vw,2.75rem)]">
      <div className="mx-auto max-w-[1100px] px-[var(--gutter)]">
        <MenuDivider className="mb-5" />
        <p className="eyebrow mb-3 text-center text-rust" data-reveal>
          The Menu
        </p>
        <h2 id="full-menu-title" className="display text-center text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1] text-ink" data-reveal-group>
          {fullMenu.headline.map((l, i) => (
            <span key={l} className="line-mask">
              <span style={{ "--d": `${i * 130}ms` } as React.CSSProperties}>{l}</span>
            </span>
          ))}
        </h2>

        <div className="mt-[clamp(2rem,4vw,3.5rem)] grid gap-x-[clamp(2rem,6vw,5rem)] gap-y-10 md:grid-cols-2">
          {fullMenu.sections.map((sec, i) => (
            <section key={sec.title} data-reveal style={{ "--d": `${i * 110}ms` } as React.CSSProperties}>
              <h3 className="display text-[clamp(1.5rem,2.4vw,2rem)] text-rust">{sec.title}</h3>
              <ul className="mt-3 space-y-2">
                {sec.items.map((it) => (
                  <li key={it.name} className="flex items-baseline gap-2 text-[1rem] text-ink md:text-[1.05rem]">
                    <span>{it.name}</span>
                    {it.price && (
                      <>
                        <span className="mb-1 flex-1 border-b border-dotted border-ink/30" aria-hidden="true" />
                        <span className="tabular-nums">{it.price}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.9rem] leading-[1.65] text-muted">{sec.copy}</p>
            </section>
          ))}
        </div>

        <MenuDivider className="mt-[clamp(2.5rem,5vw,3.5rem)]" />
      </div>
    </section>
  );
}
