import { portfolio } from '@/data/portfolio';
export function SocialLinks({ includeCv = false }: { includeCv?: boolean }) {
  const links = [{ label: 'LinkedIn', href: portfolio.contact.linkedin }, { label: 'GitHub', href: portfolio.contact.github }, { label: 'Email', href: portfolio.contact.email ? `mailto:${portfolio.contact.email}` : null }, ...(includeCv ? [{ label: 'Télécharger mon CV', href: portfolio.contact.cv }] : [])];
  return <div className="social-links">{links.filter(link => link.href).map(link => <a key={link.label} href={link.href!} target={link.label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer" download={link.label.includes('CV') || undefined}>{link.label} ↗</a>)}</div>;
}
