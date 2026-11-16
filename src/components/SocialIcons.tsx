import { socials } from "@/content/site";

export const socialIcons: Record<string, React.ReactNode> = {
  Instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
    </svg>
  ),
  TikTok: (
    <svg width="19" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.8 2.3 4.6 5 4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

/** Header icon buttons for the social accounts; an account without a link yet shows as "coming soon". */
export default function SocialIcons({ className = "", size = "h-10 w-10" }: { className?: string; size?: string }) {
  const base = `flex ${size} items-center justify-center rounded-full border border-walnut/30 bg-cream/90 text-walnut-deep shadow-[0_2px_10px_-4px_rgba(31,23,18,0.35)] backdrop-blur-sm`;
  return (
    <ul className={`flex items-center gap-1.5 ${className}`} aria-label="Social">
      {socials.map((s) => (
        <li key={s.label}>
          {s.href ? (
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.label}
              className={`${base} transition-colors duration-500 hover:border-forest hover:bg-forest hover:text-cream`}
            >
              {socialIcons[s.label]}
            </a>
          ) : (
            <span aria-label={`${s.label} (coming soon)`} title={`${s.label} coming soon`} className={`${base} cursor-default`}>
              {socialIcons[s.label]}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
