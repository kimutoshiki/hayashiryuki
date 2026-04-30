// Resolve a public asset path against the configured basePath.
// Required because raw <img src> is not auto-prefixed by Next.js basePath
// (only next/image and next/link are). Use this helper anywhere you write
// a static asset URL.
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}
