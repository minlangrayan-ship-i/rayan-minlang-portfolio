import { ArrowUpRight, FilePdf, MicrophoneStage } from '@phosphor-icons/react/dist/ssr';
import { portfolio } from '@/data/portfolio';

export function EloquenceCard() {
  const activity = portfolio.eloquence;
  const documentUrl = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${activity.document}`;
  return <article className="eloquence-card" aria-labelledby="eloquence-title" data-reveal>
    <div className="eloquence-intro"><div><p className="eyebrow">COMMUNICATION & LEADERSHIP</p><h3 id="eloquence-title">{activity.title}</h3><time dateTime={activity.dateTime}>{activity.date}</time></div><MicrophoneStage size={64} weight="duotone" aria-hidden="true" /></div>
    <div className="eloquence-story"><div><p className="story-lead">Une idée prend de la force<br /><em>quand on sait la transmettre.</em></p><p>{activity.context}</p></div><div><h4>Ce que cette expérience m’a apporté</h4><p>{activity.contribution}</p><div className="tags" aria-label="Compétences associées">{activity.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div></div>
    <ol className="eloquence-stages" aria-label="Déroulement du concours">{activity.stages.map((stage, index) => <li key={stage.title}><span className="stage-number">0{index + 1}</span><h4>{stage.title}</h4><p>{stage.text}</p></li>)}</ol>
    <div className="eloquence-document"><p><FilePdf size={23} aria-hidden="true" /><span><strong>Attestation de participation</strong>8e édition · décembre 2023</span></p><a href={documentUrl} target="_blank" rel="noopener noreferrer" className="button secondary">Voir l’attestation <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> (PDF, nouvel onglet)</span></a></div>
  </article>;
}
