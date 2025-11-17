import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenomi Communication | Agence Web & Digital",
  description: "Kenomi Communication : Conception de sites web, branding, UX/UI design, SEO et accompagnement digital. Innovation, simplicité et précision.",
  keywords: ["agence web", "conception web", "branding", "UX/UI design", "SEO", "digital"],
  authors: [{ name: "Kenomi Communication" }],
  openGraph: {
    title: "Kenomi Communication | Agence Web & Digital",
    description: "Conception de sites web, branding, UX/UI design, SEO et accompagnement digital.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenomi Communication | Agence Web & Digital",
    description: "Conception de sites web, branding, UX/UI design, SEO et accompagnement digital.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
