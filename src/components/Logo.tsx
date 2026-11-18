/** The Mr. Tallows lockup, colored by `currentColor` through a mask of the supplied artwork. */
export default function Logo({ className = "", label = "Mr. Tallows" }: { className?: string; label?: string }) {
  return <span role="img" aria-label={label} className={`logo-mark ${className}`} />;
}
