import type { Metadata, Viewport } from "next";
import { Outfit, Anton } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "Delta Prime Event | Tổ chức sự kiện chuyên nghiệp tại Đà Nẵng",
    template: "%s | Delta Prime Event",
  },
  description:
    "Delta Prime Event chuyên tổ chức sự kiện doanh nghiệp, hội nghị, hội thảo, khai trương, activation, roadshow, gala dinner và ra mắt sản phẩm tại Đà Nẵng.",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Delta Prime Event | Event Agency tại Đà Nẵng",
    description:
      "Tổ chức sự kiện doanh nghiệp, hội nghị, hội thảo, khai trương, activation, roadshow và gala dinner tại Đà Nẵng.",
    images: [
      {
        url: absoluteUrl("/images/bg.jpg"),
        width: 1200,
        height: 630,
        alt: "Delta Prime Event - công ty tổ chức sự kiện tại Đà Nẵng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delta Prime Event | Tổ chức sự kiện tại Đà Nẵng",
    description:
      "Giải pháp tổ chức sự kiện doanh nghiệp, hội nghị, activation, roadshow và gala dinner tại Đà Nẵng.",
    images: [absoluteUrl("/images/bg.jpg")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "event services",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08040f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${outfit.variable} ${anton.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
