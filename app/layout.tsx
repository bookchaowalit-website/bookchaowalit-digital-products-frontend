import type { Metadata } from "next";
import { Bebas_Neue, DM_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const display = Bebas_Neue({ weight: "400", variable: "--font-display", subsets: ["latin"] });
const mono = DM_Mono({ weight: ["400", "500"], variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = { title: "The Shelf — Digital Products", description: "A local-first digital goods storefront demo.", metadataBase: new URL("https://digital-products.bookchaowalit.com") };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${mono.variable}`}>
    {/* THESIS: A digital goods demo should feel like a deliberate edition counter, not a generic card store. OWN-WORLD: saturated blue, orange, yellow, and black print-shop ink with condensed display type and a paper order slip. STORY: visitors browse honest sample goods, add them to a local slip, and understand checkout is unavailable. FIRST VIEWPORT: the shelf headline sits beside the live slip; the primary action is Add to slip in each edition row. FORM: edition desk / candidate 3 / seed 89b3a519. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance */}
    <Analytics /><SpeedInsights />{children}
  </body></html>;
}
