import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Privacy from './components/Privacy';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Features />
      <Privacy />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
