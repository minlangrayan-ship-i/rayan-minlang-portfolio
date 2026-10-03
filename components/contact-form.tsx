'use client';
import { useState, type FormEvent } from 'react';
import { portfolio } from '@/data/portfolio';
export function ContactForm() {
  const [feedback, setFeedback] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!portfolio.contact.email) { setFeedback('L’adresse email de Rayan n’a pas encore été renseignée. Aucun message n’a été envoyé.'); return; }
    const data = new FormData(event.currentTarget);
    const body = `Nom : ${data.get('name')}\nEmail : ${data.get('email')}\nEntreprise : ${data.get('company') || 'Non précisée'}\n\n${data.get('message')}`;
    window.location.href = `mailto:${portfolio.contact.email}?subject=${encodeURIComponent(`Contact portfolio — ${data.get('name')}`)}&body=${encodeURIComponent(body)}`;
    setFeedback('Votre messagerie va s’ouvrir avec le message préparé. Validez l’envoi dans votre application email.');
  }
  return <form className="contact-form" onSubmit={submit}><div className="form-row"><label>Nom <input name="name" autoComplete="name" required maxLength={120} placeholder="Votre nom" /></label><label>Email <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="vous@entreprise.fr" /></label></div><label>Entreprise <span className="optional">(facultatif)</span><input name="company" autoComplete="organization" maxLength={150} placeholder="Votre entreprise" /></label><label>Message <textarea name="message" rows={5} required maxLength={5000} placeholder="Votre opportunité, votre projet, ou simplement un premier échange…" /></label><p className="form-info">{portfolio.contact.email ? 'Ce formulaire prépare un email dans votre messagerie. Aucune donnée n’est stockée sur ce site.' : 'Adresse email à renseigner : l’envoi sera disponible après ajout des coordonnées.'}</p><button className="button primary" type="submit">Préparer mon email <span>↗</span></button><p role="status" className="form-feedback">{feedback}</p></form>;
}
