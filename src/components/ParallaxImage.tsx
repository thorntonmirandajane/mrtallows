"use client";

import Image from "next/image";
import { useParallax } from "@/lib/motion";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  speed?: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

/** An image that drifts slightly inside its frame as the page scrolls. */
export default function ParallaxImage({ src, alt, sizes, speed = 0.08, className = "", imgClassName = "", priority }: Props) {
  const ref = useParallax<HTMLDivElement>(speed);
  return (
    <div className={`overflow-hidden ${/\b(absolute|fixed)\b/.test(className) ? "" : "relative"} ${className}`}>
      <div ref={ref} className="absolute inset-[-5%_0] will-change-transform">
        <Image src={src} alt={alt} fill sizes={sizes} quality={88} priority={priority} className={`object-cover ${imgClassName}`} />
      </div>
    </div>
  );
}
