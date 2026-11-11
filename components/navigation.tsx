'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, List, Moon, Sun, X } from '@phosphor-icons/react';
import { portfolio } from '@/data/portfolio';
const links = [{ href: '#engineering-journey', label: 'Parcours' }, { href: '#projets', label: 'Projets' }, { href: '#gestion', label: 'Certification PPM' }, { href: '#entrepreneuriat', label: 'Initiatives' }, { href: '#engagements', label: 'Engagements' }];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => { setDark(document.documentElement.dataset.theme === 'dark'); }, []);
  useEffect(() => {
    if (!open) return;
    function close(event: globalThis.KeyboardEvent) { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  function changeTheme() {
    const next = !dark; setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    try { localStorage.setItem('portfolio-theme', next ? 'dark' : 'light'); } catch { /* Theme works without storage. */ }
  }
  return <header className="header"><div className="wrap nav"><a className="brand" href="#accueil" aria-label={`${portfolio.name}, accueil`}>{portfolio.initials}<span>.</span><small>Rayan Minlang</small></a><div className="nav-controls"><button className="theme-toggle" type="button" onClick={changeTheme} aria-label={dark ? 'Activer le thème clair' : 'Activer le thème sombre'} aria-pressed={dark}>{dark ? <Sun size={21} aria-hidden="true" /> : <Moon size={21} aria-hidden="true" />}</button><button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Fermer' : 'Menu'}{open ? <X size={20} aria-hidden="true" /> : <List size={20} aria-hidden="true" />}</button></div><nav id="navigation" className={open ? 'nav-links open' : 'nav-links'} aria-label="Navigation principale">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Échangeons <ArrowUpRight size={17} aria-hidden="true" /></a></nav></div></header>;
}
