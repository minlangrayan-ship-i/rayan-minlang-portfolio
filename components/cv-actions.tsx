import { portfolio } from '@/data/portfolio';
export function CvActions() {
  if (!portfolio.contact.cv) return null;
  const url = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${portfolio.contact.cv}`;
  return <div className="cv-block"><p className="cv-caption">{portfolio.cvPositioning}</p><div className="cv-actions"><a className="button primary" href={url} download="rayan-minlang-cv.pdf">Télécharger mon CV <span aria-hidden="true">↓</span></a><a className="button secondary" href={url} target="_blank" rel="noopener noreferrer">Voir mon CV <span aria-hidden="true">↗</span><span className="sr-only"> (PDF, nouvel onglet)</span></a></div><p className="cv-caption cv-targeted">CV ciblés : {portfolio.targetedCvs.map((cv, index) => <span key={cv.file}>{index > 0 && ' · '}<a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${cv.file}`} target="_blank" rel="noopener noreferrer">{cv.label}<span className="sr-only"> (PDF, nouvel onglet)</span></a></span>)}</p></div>;
}
