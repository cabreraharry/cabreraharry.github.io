import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { MotionProvider } from "@/components/providers/motion-provider";
import { SpotlightController } from "@/components/providers/spotlight-controller";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — WordPress & Full-Stack Developer · AI Engineer`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    siteName: `${siteConfig.name} — Portfolio`,
    title: `${siteConfig.name} — WordPress & Full-Stack Developer · AI Engineer`,
    description: siteConfig.description,
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${siteConfig.name} — portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — WordPress & Full-Stack Developer · AI Engineer`,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle || undefined,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-dvh">
        <div className="aurora-bg" aria-hidden />
        <div className="aurora-grain" aria-hidden />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary-strong focus:px-4 focus:py-2 focus:text-primary-fg"
        >
          Skip to content
        </a>

        <MotionProvider>
          <SmoothScroll>
            <Navbar />
            <main id="main">{children}</main>
            <Footer />
          </SmoothScroll>
        </MotionProvider>

        <SpotlightController />
        <Toaster theme="dark" position="bottom-right" richColors closeButton />
        <JsonLd />
      </body>
    </html>
  );
}
