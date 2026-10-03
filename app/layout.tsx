import type { Metadata } from 'next';
import { portfolio } from '@/data/portfolio';
import './globals.css';
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const siteUrl = rawUrl ? new URL(rawUrl).href : undefined;
const description = 'Rayan Minlang, élève-ingénieur en informatique à 3iL Ingénieurs. Développement Java, Python, SQL et gestion de projet. Recherche d’alternance, cap sur l’IA et la Data.';
export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: 'Rayan Minlang | Élève-ingénieur informatique · Alternance IA & Data', description,
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : { robots: { index: false, follow: false } }),
  openGraph: { title: 'Rayan Minlang — Construire les solutions de demain', description, type: 'website', locale: 'fr_FR', siteName: portfolio.name, ...(siteUrl ? { url: siteUrl } : {}) },
  twitter: { card: 'summary', title: 'Rayan Minlang | Informatique, IA & Data', description },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg` },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><a className="skip-link" href="#contenu">Aller au contenu</a>{children}</body></html>;
}
