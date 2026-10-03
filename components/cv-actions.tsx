import { portfolio } from '@/data/portfolio';
export function CvActions() {
  if (!portfolio.contact.cv) return null;
  const url = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${portfolio.contact.cv}`;
  return <div className="cv-block"><p className="cv-caption">{portfolio.cvPositioning}</p><div className="cv-actions"><a className="button primary" href={url} download="rayan-minlang-cv.pdf">Télécharger mon CV <span aria-hidden="true">↓</span></a><a className="button secondary" href={url} target="_blank" rel="noopener noreferrer">Voir mon CV <span aria-hidden="true">↗</span><span className="sr-only"> (PDF, nouvel onglet)</span></a></div></div>;
}
