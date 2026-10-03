import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  return url ? [{ url: new URL(url).href, changeFrequency: 'monthly', priority: 1 }] : [];
}
