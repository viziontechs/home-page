import React from 'react';
import './Features.css';

const features = [
  {
    title: 'Scene Description',
    desc: 'Proactive ambient narration powered by a local LLM on the Jetson Orin. No internet connection required — ever.',
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /></svg>
    ),
  },
  {
    title: 'OCR Reading',
    desc: 'Point at any text — menus, signs, documents — and Vizion reads it aloud in real time via built-in TTS.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M4 7V4h16v3" /><path d="M9 20h6" /><path d="M12 4v16" /></svg>
    ),
  },
  {
    title: 'Face Recognition',
    desc: 'Consent-gated contact recognition. Vizion identifies people you know and whispers their name — privately, locally.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
  },
  {
    title: 'Voice Interaction',
    desc: 'Talk naturally. Vizion listens, reasons, and responds through the built-in speaker — hands-free, always ready.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
    ),
  },
  {
    title: 'Multi-Mode Profiles',
    desc: 'Accessibility, Student, and Work modes. Each profile tailors what Vizion notices, narrates, and remembers.',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>
    ),
  },
  {
    title: 'Edge AI Hardware',
    desc: 'Powered by the NVIDIA Jetson Orin. All inference runs on your personal brick — no SaaS, no data harvesting.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-label">What Vizion does</div>
      <h2 className="section-heading">Your world,<br />intelligently described.</h2>
      <div className="features-grid">
        {features.map((f) => (
          <div className="feat" key={f.title}>
            <div className="feat-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
