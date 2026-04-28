import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#" className="logo">
        Vizi<span>on</span>
      </a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#privacy">Privacy</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
      <a href="#pricing" className="nav-cta">Join Waitlist</a>
    </nav>
  );
}
