/** A short centered rule, like the break on a printed menu. */
export default function MenuDivider({ className = "" }: { className?: string }) {
  return <div className={`mx-auto h-px w-16 bg-rust/60 ${className}`} aria-hidden="true" />;
}
