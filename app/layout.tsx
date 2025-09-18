import "./global.css";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import { AOS } from "./components/global";
import { Montserrat } from "next/font/google";
import type { Metadata, Viewport } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const franklinGothic = localFont({
  src: [
    {
      path: "./fonts/ITC Franklin Gothic Std/ITC Franklin Gothic Std Book/ITC Franklin Gothic Std Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ITC Franklin Gothic Std/ITC Franklin Gothic Std Book Italic/ITC Franklin Gothic Std Book Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/ITC Franklin Gothic Std/ITC Franklin Gothic Std Medium/ITC Franklin Gothic Std Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ITC Franklin Gothic Std/ITC Franklin Gothic Std Medium Italic/ITC Franklin Gothic Std Medium Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/ITC Franklin Gothic Std/ITC Franklin Gothic Std Demi/ITC Franklin Gothic Std Demi.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ITC Franklin Gothic Std/ITC Franklin Gothic Std Demi Italic/ITC Franklin Gothic Std Demi Italic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/ITC Franklin Gothic Std/ITC Franklin Gothic Std Heavy/ITC Franklin Gothic Std Heavy.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/ITC Franklin Gothic Std/ITC Franklin Gothic Std Heavy Italic/ITC Franklin Gothic Std Heavy Italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-franklin",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://plourg.com"),
  icons: {
    icon: "/images/favicon.png",
  },
  title: "Plourg — Sell, Connect, Earn on Campus",
  description:
    "Plourg is a campus‑focused marketplace to buy, sell, and connect with trusted local vendors. Join our waitlist to get early access.",
  applicationName: "Plourg",
  authors: [{ name: "Plourg" }],
  keywords: [
    "Plourg",
    "campus marketplace",
    "buy and sell",
    "connect",
    "students",
    "vendors",
    "waitlist",
  ],
  creator: "Plourg",
  publisher: "Plourg",
  generator: "Next.js",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://plourg.com",
    title: "Plourg — Sell, Connect, Earn on Campus",
    siteName: "Plourg",
    locale: "en_US",
    images: [
      {
        url: "/images/Vector 1.png",
        width: 1200,
        height: 630,
        alt: "Plourg preview",
      },
    ],
  },
  twitter: {
    site: "@plourg",
    creator: "@plourg",
    title: "Plourg — Sell, Connect, Earn on Campus",
    description:
      "Buy, sell, and connect with local vendors around campus. Join the waitlist.",
    card: "summary_large_image",
    images: ["/images/Vector 1.png"],
  },
  appleWebApp: {
    capable: true,
    title: "Plourg",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract:
    "A platform that makes it easy to buy, sell, or find anything you need on and around campus — fast, simple, and stress‑free.",
  category: "Marketplace",
  classification: "Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${montserrat.className} ${geistMono.variable} ${franklinGothic.variable} antialiased`}
      >
        <Toaster richColors />
        <AOS />
        {children}
      </body>
    </html>
  );
}
