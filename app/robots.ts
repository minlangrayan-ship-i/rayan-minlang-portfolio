import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  return url ? { rules: { userAgent: '*', allow: '/' }, sitemap: `${new URL(url).href.replace(/\/$/, '')}/sitemap.xml` } : { rules: { userAgent: '*', disallow: '/' } };
}
