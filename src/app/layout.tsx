import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/layout/LayoutShell";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ochfa.ca'),
  title: "OCHFA | One Community Home & Family Association",
  description: "OCHFA (Business Number: 702116732) is a registered nonprofit organization in Calgary, Alberta, providing newcomer support, English literacy programs, employment assistance, and community integration services for immigrant and refugee families.",
  keywords: ["newcomer support Calgary", "English literacy Calgary", "immigrant job support Alberta", "refugee families Calgary", "OCHFA", "community integration Alberta", "One Community Home Family Association", "nonprofit Calgary", "702116732"],
  openGraph: {
    title: "OCHFA | One Community Home & Family Association",
    description: "Supporting newcomers, immigrants, refugees, and families in Calgary, Alberta with English literacy, employment assistance, and community integration.",
    url: 'https://www.ochfa.ca',
    siteName: 'OCHFA',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'OCHFA Community Gathering',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "OCHFA | One Community Home & Family Association",
    description: "Supporting newcomers, immigrants, refugees, and families in Calgary, Alberta.",
    images: ['/images/hero-bg.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="ochfa" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}

