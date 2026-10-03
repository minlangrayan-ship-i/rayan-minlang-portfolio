import type { ReactNode } from 'react';
export function Section({ id, number, eyebrow, title, children }: { id: string; number: string; eyebrow: string; title: string; children: ReactNode }) {
  return <section id={id} className="section wrap"><div className="section-heading"><div><p className="eyebrow">{number} / {eyebrow}</p><h2>{title}</h2></div><span className="section-line" aria-hidden="true" /></div>{children}</section>;
}
