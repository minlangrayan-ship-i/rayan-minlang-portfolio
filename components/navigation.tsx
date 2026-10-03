'use client';
import { useState } from 'react';
import { portfolio } from '@/data/portfolio';
const links = [{ href: '#engineering-journey', label: 'Parcours' }, { href: '#competences', label: 'Compétences' }, { href: '#projets', label: 'Projets' }, { href: '#apropos', label: 'À propos' }];
export function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="header"><div className="wrap nav"><a className="brand" href="#accueil" aria-label={`${portfolio.name}, accueil`}>{portfolio.initials}<span>.</span></a><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Fermer ×' : 'Menu ☰'}</button><nav id="navigation" className={open ? 'nav-links open' : 'nav-links'} aria-label="Navigation principale">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Parlons ensemble <span>↗</span></a></nav></div></header>;
}
