/** The Mr. Tallow's lockup, colored by `currentColor` through a mask of the supplied artwork. */
export default function Logo({ className = "", label = "Mr. Tallow's" }: { className?: string; label?: string }) {
  return <span role="img" aria-label={label} className={`logo-mark ${className}`} />;
}
