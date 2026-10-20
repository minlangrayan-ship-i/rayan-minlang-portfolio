import { portfolio, projects } from '@/data/portfolio';
export function Ventures() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const status = portfolio.entrepreneur;
  const ventures = projects.filter(project => project.category === 'Entrepreneurship');
  const [flagship, ...others] = ventures;
  return <>
    <article className="snee-card" aria-labelledby="snee-title"><div><p className="eyebrow">JUSTIFICATIF · {status.year}</p><h3 id="snee-title">{status.title}</h3><p>{status.description}</p><small>Délivré par le {status.issuer}, sous l’égide du {status.authority}.</small><a className="button primary" href={`${base}${status.document}`} target="_blank" rel="noopener noreferrer">Voir l’attestation <span aria-hidden="true">↗</span><span className="sr-only"> (image, nouvel onglet)</span></a></div><a className="snee-proof" href={`${base}${status.document}`} target="_blank" rel="noopener noreferrer" aria-label="Agrandir l’attestation du statut national étudiant-entrepreneur"><img src={`${base}${status.document}`} alt="Attestation du statut national étudiant-entrepreneur 2026-2027 délivrée à Frédéric Rayan Minlang Ngba" width={1102} height={772} loading="lazy" /></a></article>
    <article className="venture-flagship" aria-labelledby="venture-flagship"><div><p className="eyebrow">INITIATIVE PHARE · {flagship.stage}</p><h3 id="venture-flagship">{flagship.name}</h3><p className="venture-pitch">{flagship.pitch}</p><p>{flagship.description}</p><h4>Mon rôle</h4><p>{flagship.role}</p><div className="project-links">{flagship.demo && <a className="button primary" href={flagship.demo} target="_blank" rel="noopener noreferrer">Visiter AfroAtlas <span aria-hidden="true">↗</span><span className="sr-only"> (nouvel onglet)</span></a>}{flagship.github && <a className="text-link" href={flagship.github} target="_blank" rel="noopener noreferrer">Voir le code <span aria-hidden="true">↗</span></a>}</div></div>{flagship.outcome && <ul className="venture-outcome" aria-label="Résultats">{flagship.outcome.map(item => <li key={item}>{item}</li>)}</ul>}</article>
    <div className="venture-grid">{others.map(project => <article key={project.id}><span className="venture-index">{project.stage?.toUpperCase()}</span><h3>{project.name}</h3><p>{project.description}</p><h4>Mon rôle</h4><p>{project.role}</p></article>)}</div>
  </>;
}
