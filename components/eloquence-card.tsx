import { portfolio } from '@/data/portfolio';
export function EloquenceCard() {
  const activity = portfolio.eloquence;
  const documentUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${activity.document}`;
  return <article className="eloquence-card" aria-labelledby="eloquence-title"><div><p className="eyebrow">COMMUNICATION & LEADERSHIP</p><h3 id="eloquence-title">{activity.title}</h3><time dateTime={activity.dateTime}>{activity.date}</time><p className="eloquence-description">{activity.description}</p><div className="tags" aria-label="Compétences associées">{activity.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div><div className="eloquence-document"><span className="document-symbol" aria-hidden="true">PDF</span><p>Attestation de participation</p><a href={documentUrl} target="_blank" rel="noopener noreferrer" className="button primary">Voir l’attestation <span aria-hidden="true">↗</span><span className="sr-only"> (PDF, nouvel onglet)</span></a></div></article>;
}
