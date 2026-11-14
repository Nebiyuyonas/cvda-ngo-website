import type { Metadata } from "next";
import { Young_Serif, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heading = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-young-serif", // Renamed to avoid conflict
  display: "swap",
});

const body = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-atkinson", // Renamed to avoid conflict
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Common Vision for Development Association (CVDA)",
    template: "%s | CVDA",
  },
  description:
    "CVDA is an indigenous Ethiopian NGO, established in 2005, working in health, education, agriculture, and environmental conservation.",
  openGraph: {
    siteName: "CVDA",
    type: "website",
    images: ["/images/hero-community.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ochre focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}