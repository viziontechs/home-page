import React from 'react';
import './CTA.css';

export default function CTA() {
  return (
    <div className="cta-section">
      <div className="section-label">Get involved</div>
      <h2 className="section-heading">
        Be first to see<br />the world through{' '}
        <em className="accent">Vizion.</em>
      </h2>
      <p className="cta-sub">
        We're building for the blind and low-vision community. Join the
        waitlist and help shape the future of accessible AI.
      </p>
      <a href="mailto:hello@viziontechs.com" className="btn-primary">
        hello@viziontechs.com
      </a>
    </div>
  );
}
