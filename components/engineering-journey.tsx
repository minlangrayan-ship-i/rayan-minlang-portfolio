import { portfolio } from '@/data/portfolio';
export function EngineeringJourney() {
  return <ol className="engineering-journey" aria-label="Progression et objectifs professionnels">{portfolio.engineeringJourney.map((step, index) => <li key={step.title} className={`journey-step journey-${step.state}`}><div className="journey-marker"><span>{step.state === 'complete' ? '✓' : `0${index + 1}`}</span></div><p className="journey-status">{step.status}</p><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>;
}
