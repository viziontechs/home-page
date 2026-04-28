import React from 'react';
import './Privacy.css';

const privacyItems = [
  'All processing happens on-device via local LLM',
  'Zero cloud dependency — works fully offline',
  '24-hour data TTL — nothing stored beyond a day',
  'Work profile captures nothing at all',
  'Facial recognition is contact-only, consent-gated',
  'No subscription, no telemetry, no advertising',
];

const auditRows = [
  { label: 'Camera feed',      badge: 'Local only', type: 'local' },
  { label: 'Voice audio',      badge: 'Local only', type: 'local' },
  { label: 'LLM inference',    badge: 'On-device',  type: 'local' },
  { label: 'Face data',        badge: '24h TTL',    type: 'ttl'   },
  { label: 'Cloud uploads',    badge: 'Never',      type: 'none'  },
  { label: 'Third-party APIs', badge: 'Never',      type: 'none'  },
  { label: 'Analytics / ads',  badge: 'Never',      type: 'none'  },
];

export default function Privacy() {
  return (
    <div className="privacy-strip" id="privacy">
      <div className="privacy-inner">
        <div className="privacy-left">
          <div className="section-label">Privacy by design</div>
          <h2 className="section-heading">Your data never<br />leaves your hands.</h2>
          <ul className="privacy-list">
            {privacyItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="privacy-visual">
          <div className="audit-title">Data flow audit</div>
          {auditRows.map((row) => (
            <div className="pv-row" key={row.label}>
              <span className="pv-label">{row.label}</span>
              <span className={`pv-badge ${row.type}`}>{row.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
