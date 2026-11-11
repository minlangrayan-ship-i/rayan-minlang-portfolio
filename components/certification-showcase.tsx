'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import { ArrowDown, ArrowUpRight, CalendarCheck, FilePdf, SealCheck, UsersThree } from '@phosphor-icons/react';
import { ppmCertification as certification, visualCredits } from '@/data/certification';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function CertificationShowcase() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % certification.capabilities.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + certification.capabilities.length) % certification.capabilities.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = certification.capabilities.length - 1;
    else return;
    event.preventDefault(); setActive(next); tabs.current[next]?.focus();
  }
  return <>
    <article id="certifications" className="certification-feature" aria-labelledby="ppm-title" data-reveal>
      <div className="certification-copy">
        <p className="credential-badge"><SealCheck size={19} weight="duotone" aria-hidden="true" /> Formation certifiée · attestation disponible</p>
        <p className="eyebrow">{certification.shortName} / CADD Centre</p>
        <h3 id="ppm-title">La méthode derrière<br /><em>la réalisation.</em></h3>
        <p className="credential-name" lang="en">{certification.credential}</p>
        <p>{certification.description}</p>
        <dl className="credential-facts">
          <div><dt>Organisme</dt><dd>{certification.issuer} · {certification.location}</dd></div>
          <div><dt>Formation</dt><dd>{certification.period}</dd></div>
          <div><dt>Délivrée le</dt><dd><time dateTime={certification.issuedISO}>{certification.issued}</time></dd></div>
        </dl>
        <div className="document-actions">
          <a className="button primary" href={base + certification.document} target="_blank" rel="noopener noreferrer"><FilePdf size={20} aria-hidden="true" /> Voir ma certification <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (PDF, nouvel onglet)</span></a>
          <a className="button secondary" href={base + certification.document} download="certification-ppm-rayan-minlang.pdf">Télécharger <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <figure className="certificate-preview">
        <a href={base + certification.document} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir l’attestation PPM originale (PDF, nouvel onglet)"><img src={base + certification.preview} alt="Attestation CADD Centre et programme de la formation de Rayan Minlang en gestion de projet avec Microsoft Project." width="1095" height="774" loading="lazy" /></a>
        <figcaption><SealCheck size={18} aria-hidden="true" /> Le document original, consultable en un clic.</figcaption>
      </figure>
    </article>

    <div className="capability-heading"><div><p className="eyebrow">DE LA FORMATION À LA PRATIQUE</p><h3>Ce que je peux apporter à un projet.</h3></div><p>Explorez les compétences abordées dans le programme.</p></div>
    <div className="capability-explorer" data-reveal>
      <div className="capability-tabs" role="tablist" aria-label="Compétences de la certification PPM">{certification.capabilities.map((item, index) => <button key={item.id} id={`tab-${item.id}`} role="tab" aria-selected={index === active} aria-controls={`panel-${item.id}`} tabIndex={index === active ? 0 : -1} ref={element => { tabs.current[index] = element; }} onClick={() => setActive(index)} onKeyDown={event => navigate(event, index)}><span>0{index + 1}</span>{item.label}<ArrowUpRight size={19} aria-hidden="true" /></button>)}</div>
      {certification.capabilities.map((current, index) => <div className="capability-panel" id={`panel-${current.id}`} role="tabpanel" aria-labelledby={`tab-${current.id}`} tabIndex={0} key={current.id} hidden={index !== active}>
        <div className="capability-detail"><span className="capability-index" aria-hidden="true">0{active + 1}</span><h4>{current.title}</h4><p>{current.description}</p><p className="deliverable"><CalendarCheck size={22} weight="duotone" aria-hidden="true" /><span><strong>Livrable possible</strong>{current.deliverable}</span></p><div className="tags">{current.topics.map(topic => <span key={topic}>{topic}</span>)}</div></div>
        <figure className="teamwork-illustration"><img src={base + '/assets/images/coordination-equipe.webp'} width="1000" height="1000" alt="Illustration : une équipe assemble les pièces d’un même projet." loading="lazy" /><figcaption>Illustration · <a href={visualCredits.teamwork.source} target="_blank" rel="noopener noreferrer">Libreclipart</a> · <a href={visualCredits.teamwork.licenseUrl} target="_blank" rel="noopener noreferrer">CC0</a></figcaption></figure>
      </div>)}
    </div>
    <p className="scope-note"><UsersThree size={18} aria-hidden="true" /> Une base pour contribuer à la planification et au suivi d’un projet en équipe, à consolider par la pratique professionnelle.</p>
    <figure className="planning-example" data-reveal><div><p className="eyebrow">COMPRENDRE EN IMAGE</p><h4>Un planning raconte<br />l’ordre des choses.</h4><p>Dans cet exemple, A et B peuvent avancer en parallèle. C attend la fin de A. Les liens rendent les dépendances visibles avant de lancer le travail.</p></div><div><a href={base + '/assets/images/exemple-diagramme-gantt.png'} target="_blank" rel="noopener noreferrer" aria-label="Agrandir l’exemple de diagramme de Gantt (nouvel onglet)"><img src={base + '/assets/images/exemple-diagramme-gantt.png'} width="872" height="222" loading="lazy" alt="Exemple de Gantt : sept tâches A à G, avec des dépendances et des activités pouvant avancer en parallèle." /></a><figcaption>Illustration de méthode créée dans MindView, par <a href="https://commons.wikimedia.org/wiki/File:Gantt_chart_example.png" target="_blank" rel="noopener noreferrer">Vheilman · Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a> · image originale sans modification.</figcaption></div></figure>
    <MicrosoftProjectStory />
  </>;
}

function MicrosoftProjectStory() {
  const microsoft = visualCredits.microsoft;
  return <article className="project-tool-story" aria-labelledby="project-tool-title" data-reveal>
    <div className="tool-intro"><div><p className="eyebrow">L’OUTIL AU SERVICE DE LA MÉTHODE</p><h3 id="project-tool-title">Microsoft Project.<br /><em>Voir les liens. Anticiper les écarts.</em></h3></div><p>Un outil de planification pertinent lorsque les tâches, les ressources et les délais dépendent les uns des autres. Il aide à rendre ces contraintes visibles et à suivre un planning de référence.</p></div>
    <div className="tool-grid"><figure className="software-figure"><a href={base + '/assets/images/microsoft-project-chemin-critique.jpg'} target="_blank" rel="noopener noreferrer" aria-label="Agrandir la capture Microsoft Project (nouvel onglet)"><img src={base + '/assets/images/microsoft-project-chemin-critique.jpg'} alt="Capture officielle de Microsoft Project 2013 : option Tâches critiques et barres du diagramme de Gantt en rouge." width="291" height="247" loading="lazy" /></a><figcaption>Exemple pédagogique Microsoft Project 2013, publié par Microsoft. <a href={microsoft.source} target="_blank" rel="noopener noreferrer">Voir le guide et la source</a>. Ce planning illustre l’outil.</figcaption></figure><div className="tool-benefits"><div><span>01</span><h4>Rendre le planning lisible</h4><p>Le diagramme de Gantt relie les tâches à leurs dates et à leurs dépendances.</p></div><div><span>02</span><h4>Repérer les tâches critiques</h4><p>Le chemin critique aide à identifier les tâches susceptibles de décaler la date de fin.</p></div><div><span>03</span><h4>Suivre les moyens et l’avancement</h4><p>Les affectations, références et rapports aident à comparer le prévu et le réalisé.</p></div></div></div>
    <details className="editorial-details"><summary>Microsoft Project aujourd’hui : quel périmètre ?</summary><p>L’application de bureau reste une option pour la planification détaillée. Microsoft a fixé le retrait de Project Online au 30 septembre 2026 ; cette annonce ne concerne pas Project desktop ni Microsoft Planner. Le choix de l’outil dépend du projet et de l’environnement de l’équipe.</p><div className="source-links"><a href={microsoft.lifecycle} target="_blank" rel="noopener noreferrer">Annonce officielle Microsoft <ArrowUpRight size={14} aria-hidden="true" /></a><a href={microsoft.capabilities} target="_blank" rel="noopener noreferrer">Fonctionnalités de Project desktop <ArrowUpRight size={14} aria-hidden="true" /></a></div></details>
    <p className="asset-credit">© Microsoft. Used with permission from Microsoft. <a href={microsoft.permission} target="_blank" rel="noopener noreferrer">Conditions de réutilisation</a>. Visuel reproduit sans recadrage ; aucune affiliation avec Microsoft.</p>
  </article>;
}
