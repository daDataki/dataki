import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SafariClassHandler from "@/components/only-safari/SafariClassHandler";
import Image from "next/image";
import "./globals.css";
import "aos/dist/aos.css";
import { WhatsappIcon } from "@/components/icons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dataki | Growth & Business Partner",
  description:
    "We help companies shape and bring to life their marketing & business needs. We focus on Design & Creativity, Data Analytics, Branding & Marketing Solutions, Content Strategies and Technological Developments.",
  icons: {
    icon: "/logo-dataki.svg",
    shortcut: "/logo-dataki.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SafariClassHandler />
        {children}

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/5491138260308"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chatear por WhatsApp"
          className="wa-float"
        >
          <WhatsappIcon />
        </a>
      </body>
    </html>
  );
}
