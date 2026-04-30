import type { Metadata, Viewport } from "next";
import { Noto_Serif_JP, Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: false,
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://kimutoshiki.github.io/hayashiryuki";
const TITLE = "おやじの隠れ家｜純国産無垢材の高級木材キットハウス";
const DESCRIPTION =
  "趣味のセカンドハウスが、欲しかった。日本の木でつくる、自分だけの隠れ家。グッドデザイン賞受賞、288万円〜の純国産無垢材キットガレージ・キットハウス。";

export const viewport: Viewport = {
  themeColor: "#2D4A3E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s｜おやじの隠れ家",
  },
  description: DESCRIPTION,
  keywords: [
    "キットハウス",
    "キットガレージ",
    "無垢材",
    "ガレージライフ",
    "セカンドハウス",
    "板倉工法",
    "おやじの隠れ家",
    "フレックス唐津",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "おやじの隠れ家",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      { url: "/og-image.svg", width: 1200, height: 630, alt: "おやじの隠れ家 — 純国産無垢材の高級キットハウス" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJp.variable} ${notoSansJp.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base text-text">{children}</body>
    </html>
  );
}
