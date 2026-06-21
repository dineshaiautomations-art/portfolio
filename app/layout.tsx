import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/lib/data";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-Variable.ttf",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "300 700",
});

const inter = localFont({
  src: "./fonts/Inter-Variable.ttf",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Variable.ttf",
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: "100 800",
});

const siteUrl = "https://dineshd.dev"; // TODO: replace with real production domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.name} — AI Automation & Workflow Engineer`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "I build AI-powered workflows, intelligent agents, and automation systems that eliminate repetitive work, qualify leads, integrate your tools, and save hundreds of hours every month.",
  keywords: [
    "AI automation",
    "n8n expert",
    "workflow automation",
    "data engineer",
    "AI agents",
    "CRM automation",
    "business process automation",
    "freelance automation engineer",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} — AI Automation & Workflow Engineer`,
    description:
      "AI-powered workflows and automation systems that eliminate repetitive work, qualify leads, and save businesses hundreds of hours every month.",
    url: siteUrl,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — AI Automation & Workflow Engineer`,
    description:
      "AI-powered workflows and automation systems that eliminate repetitive work and scale businesses without hiring.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black text-ink-100 antialiased">{children}</body>
    </html>
  );
}
