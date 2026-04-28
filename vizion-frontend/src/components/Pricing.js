import React from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Hardware',
    price: '$800',
    note: 'One-time · includes glasses + AI brick',
    features: [
      'Vuzix Blade 2 smart glasses',
      'NVIDIA Jetson Orin compute brick',
      'All AI models pre-installed',
      'WiFi mesh, TTS, mic array',
    ],
    cta: { label: 'Join Waitlist', href: '#', ghost: true },
    featured: false,
  },
  {
    name: 'Software',
    price: '$0',
    note: 'Forever free · no subscription ever',
    features: [
      'All features unlocked at launch',
      'OTA updates via local network',
      'Multi-mode profiles',
      'Open source model swapping',
    ],
    cta: { label: 'Get Early Access', href: '#', ghost: false },
    featured: true,
    badge: 'Most popular',
  },
  {
    name: 'Enterprise / Research',
    price: 'Custom',
    note: 'Bulk orders, accessibility orgs, research labs',
    features: [
      'Volume pricing available',
      'Custom model fine-tuning',
      'Priority hardware access',
      'Integration support',
    ],
    cta: { label: 'Contact Us', href: 'mailto:hello@viziontechs.com', ghost: true },
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="section-label">Pricing</div>
      <h2 className="section-heading">One price.<br />No strings attached.</h2>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <div className={`plan ${plan.featured ? 'featured' : ''}`} key={plan.name}>
            {plan.badge && <div className="plan-badge">{plan.badge}</div>}
            <div className="plan-name">{plan.name}</div>
            <div className="plan-price">{plan.price !== 'Custom' && <sup>$</sup>}{plan.price === 'Custom' ? 'Custom' : plan.price.replace('$', '')}</div>
            <div className="plan-note">{plan.note}</div>
            <ul className="plan-features">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a href={plan.cta.href} className={plan.cta.ghost ? 'btn-ghost plan-btn' : 'btn-primary plan-btn'}>
              {plan.cta.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
