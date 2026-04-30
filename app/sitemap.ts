import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://kimutoshiki.github.io/hayashiryuki";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { path: "/", priority: 1, freq: "monthly" as const },
    { path: "/spec/", priority: 0.9, freq: "monthly" as const },
    { path: "/flow/", priority: 0.8, freq: "monthly" as const },
    { path: "/gallery/", priority: 0.8, freq: "monthly" as const },
    { path: "/media/", priority: 0.6, freq: "monthly" as const },
    { path: "/agency/", priority: 0.7, freq: "monthly" as const },
    { path: "/contact/", priority: 0.9, freq: "monthly" as const },
    { path: "/privacy/", priority: 0.3, freq: "yearly" as const },
  ];
  return pages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
