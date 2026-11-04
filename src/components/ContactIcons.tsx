import { contact } from "@/content/site";

const icons: Record<string, React.ReactNode> = {
  phone: (
    <path d="M6.6 3.5h2.6l1.3 3.7-1.8 1.2a9.5 9.5 0 0 0 4.9 4.9l1.2-1.8 3.7 1.3v2.6a1.8 1.8 0 0 1-2 1.8A14.3 14.3 0 0 1 4.8 5.5a1.8 1.8 0 0 1 1.8-2Z" />
  ),
  location: (
    <>
      <path d="M11 19.5s6-5.3 6-10.2a6 6 0 0 0-12 0c0 4.9 6 10.2 6 10.2Z" />
      <circle cx="11" cy="9.3" r="2.2" />
    </>
  ),
  email: (
    <>
      <rect x="3.5" y="5.5" width="15" height="11" rx="1.2" />
      <path d="m4 6.5 7 5.5 7-5.5" />
    </>
  ),
};

/** Small hairline icon buttons for phone, location and email. */
export default function ContactIcons({ className = "", size = "h-10 w-10" }: { className?: string; size?: string }) {
  return (
    <ul className={`flex items-center gap-1.5 ${className}`} aria-label="Contact">
      {contact.map((c) => (
        <li key={c.id}>
          <a
            href={c.href}
            aria-label={c.label}
            title={c.label}
            className={`flex ${size} items-center justify-center rounded-full border border-walnut/30 bg-cream/90 text-walnut-deep shadow-[0_2px_10px_-4px_rgba(31,23,18,0.35)] backdrop-blur-sm transition-colors duration-500 hover:border-forest hover:bg-forest hover:text-cream`}
          >
            <svg width="17" height="17" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
              {icons[c.id]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
