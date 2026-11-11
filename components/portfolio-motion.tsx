'use client';

import { useEffect } from 'react';

export function PortfolioMotion() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    if (!reduced.matches && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.animate([{ opacity: 0.35, transform: 'translateY(22px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 560, easing: 'cubic-bezier(.2,.7,.3,1)' });
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0.08 });
      document.querySelectorAll('[data-reveal], .section-heading, .skill-card, .project-card, .journey-step').forEach(element => observer?.observe(element));
    }
    let frame = 0;
    const progress = document.querySelector<HTMLProgressElement>('#reading-progress');
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.value = height > 0 ? (window.scrollY / height) * 100 : 0;
      frame = 0;
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update(); window.addEventListener('scroll', scroll, { passive: true }); window.addEventListener('resize', scroll);
    const onReduced = () => { if (reduced.matches) { observer?.disconnect(); document.getAnimations().forEach(animation => animation.cancel()); } };
    reduced.addEventListener('change', onReduced);
    return () => { observer?.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); reduced.removeEventListener('change', onReduced); };
  }, []);
  return <progress id="reading-progress" className="reading-progress" value="0" max="100" aria-hidden="true" />;
}
