import type { Metadata, Viewport } from "next";
import { Caveat, Fraunces, Inter } from "next/font/google";
import { location, site } from "@/content/site";
import "./globals.css";

// soft, rounded serif: echoes the warmth of the logo script while staying calm
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: ["500"], display: "swap" });

// Share-preview links must resolve on the live host. Render provides its URL at build and run time;
// once the custom domain is live, set SITE_URL on Render to it.
const baseUrl = process.env.SITE_URL ?? process.env.RENDER_EXTERNAL_URL ?? site.url;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  // preview deploys set NOINDEX=1 so search engines never pick up the unapproved copy
  ...(process.env.NOINDEX && { robots: { index: false, follow: false } }),
  title: {
    default: "Mr. Tallows | Rewriting American Fast Food",
    template: "%s | Mr. Tallows",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Mr. Tallows | Rewriting American Fast Food",
    description: site.description,
    images: [{ url: "/og-v2.jpg", width: 1200, height: 630, alt: "The Mr. Tallows logo beside a cheeseburger and fries on a walnut board against a limestone wall" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }, { url: "/brand/icon.png" }], apple: "/brand/apple-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#dbcbb8",
};

/**
 * Restaurant schema is intentionally limited to verified facts.
 * Add address, geo, openingHours and telephone once the location is confirmed.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  url: site.url,
  description: site.description,
  servesCuisine: ["Burgers", "American"],
  logo: `${site.url}/brand/logo-forest.png`,
  ...(location.street && {
    address: { "@type": "PostalAddress", streetAddress: location.street, addressLocality: location.locality, addressRegion: location.regionCode, addressCountry: "US" },
  }),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${caveat.variable}`}>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
