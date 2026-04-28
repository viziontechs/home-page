import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge">Now in development · Est. 2025</div>

      <h1 className="hero-title">
        See the world<br /><em>differently.</em>
      </h1>

      <p className="hero-sub">
        AI-powered smart glasses built for people with visual impairments.
        Real-time scene understanding, OCR reading, and face recognition —
        all processed locally. No cloud. No subscription.
      </p>

      <div className="hero-actions">
        <a href="#pricing" className="btn-primary">Join the Waitlist</a>
        <a href="#features" className="btn-ghost">Learn how it works</a>
      </div>

      <div className="glasses-wrap">
        <svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg">
          {/* Bridge */}
          <rect x="290" y="88" width="60" height="8" rx="4" fill="#1a2030" stroke="rgba(0,229,192,0.3)" strokeWidth="1" />
          {/* Left lens */}
          <rect x="60" y="55" width="220" height="100" rx="18" fill="#0d1117" stroke="rgba(0,229,192,0.5)" strokeWidth="1.5" />
          {/* Right lens */}
          <rect x="360" y="55" width="220" height="100" rx="18" fill="#0d1117" stroke="rgba(0,229,192,0.5)" strokeWidth="1.5" />
          {/* Arms */}
          <line x1="60" y1="105" x2="10" y2="110" stroke="rgba(0,229,192,0.3)" strokeWidth="5" strokeLinecap="round" />
          <line x1="580" y1="105" x2="630" y2="110" stroke="rgba(0,229,192,0.3)" strokeWidth="5" strokeLinecap="round" />
          {/* Lens tints */}
          <rect x="70" y="65" width="200" height="80" rx="14" fill="rgba(0,229,192,0.03)" />
          <rect x="370" y="65" width="200" height="80" rx="14" fill="rgba(61,126,255,0.05)" />
          {/* Left HUD grid */}
          <line x1="75" y1="85" x2="265" y2="85" stroke="rgba(0,229,192,0.12)" strokeWidth="0.5" />
          <line x1="75" y1="100" x2="265" y2="100" stroke="rgba(0,229,192,0.12)" strokeWidth="0.5" />
          <line x1="75" y1="115" x2="265" y2="115" stroke="rgba(0,229,192,0.12)" strokeWidth="0.5" />
          <line x1="130" y1="65" x2="130" y2="145" stroke="rgba(0,229,192,0.08)" strokeWidth="0.5" />
          <line x1="170" y1="65" x2="170" y2="145" stroke="rgba(0,229,192,0.08)" strokeWidth="0.5" />
          <line x1="210" y1="65" x2="210" y2="145" stroke="rgba(0,229,192,0.08)" strokeWidth="0.5" />
          {/* Corner brackets */}
          <path d="M78,68 L78,78 M78,68 L92,68" stroke="#00e5c0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M262,68 L262,78 M262,68 L248,68" stroke="#00e5c0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M78,132 L78,122 M78,132 L92,132" stroke="#00e5c0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M262,132 L262,122 M262,132 L248,132" stroke="#00e5c0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* HUD text */}
          <text x="82" y="112" fill="rgba(0,229,192,0.6)" fontSize="7" fontFamily="monospace">SCENE ANALYSIS ACTIVE</text>
          {/* Right waveform bars */}
          <rect x="378" y="100" width="6" height="30" rx="2" fill="rgba(61,126,255,0.5)" />
          <rect x="390" y="88" width="6" height="42" rx="2" fill="rgba(61,126,255,0.7)" />
          <rect x="402" y="94" width="6" height="36" rx="2" fill="rgba(61,126,255,0.5)" />
          <rect x="414" y="82" width="6" height="48" rx="2" fill="rgba(0,229,192,0.8)" />
          <rect x="426" y="92" width="6" height="38" rx="2" fill="rgba(61,126,255,0.5)" />
          <rect x="438" y="98" width="6" height="32" rx="2" fill="rgba(61,126,255,0.4)" />
          <rect x="450" y="86" width="6" height="44" rx="2" fill="rgba(0,229,192,0.6)" />
          <rect x="462" y="96" width="6" height="34" rx="2" fill="rgba(61,126,255,0.5)" />
          <text x="376" y="148" fill="rgba(61,126,255,0.6)" fontSize="7" fontFamily="monospace">VOICE DETECTED · TTS READY</text>
          {/* Camera dots */}
          <circle cx="262" cy="78" r="4" fill="#00e5c0" opacity="0.9" />
          <circle cx="262" cy="78" r="7" fill="none" stroke="rgba(0,229,192,0.3)" strokeWidth="1" />
          <circle cx="378" cy="78" r="4" fill="#3d7eff" opacity="0.9" />
          <circle cx="378" cy="78" r="7" fill="none" stroke="rgba(61,126,255,0.3)" strokeWidth="1" />
        </svg>

        <div className="chips">
          <div className="chip" style={{ top: '10%', left: '5%' }}>↯ Edge AI</div>
          <div className="chip" style={{ top: '60%', right: '4%' }}>⊕ No Cloud</div>
          <div className="chip" style={{ bottom: '5%', left: '30%' }}>⬡ Local LLM</div>
        </div>
      </div>
    </section>
  );
}
