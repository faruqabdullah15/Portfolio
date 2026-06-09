import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolio.name} | Portfolio`,
  description: portfolio.shortDescription,
  keywords: [
    portfolio.name,
    ...portfolio.expertise.techStack.slice(0, 6),
    "portfolio",
    "software engineer",
  ],
  authors: [{ name: portfolio.name }],
  openGraph: {
    title: `${portfolio.name} | Portfolio`,
    description: portfolio.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0f] text-zinc-100">{children}</body>
    </html>
  );
}
