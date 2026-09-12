import React from 'react';
import ProcessSection from '../components/ProcessSection';

export default function Home() {
  return (
    <>
      <section
        className="brand-hero"
        style={{ backgroundImage: "url('/brand/hero-office.jpg')" }}
      >
        <div className="brand-hero-inner">
          <div className="brand-hero-content">
            <span className="brand-hero-eyebrow">TECHNOLOGY / RESILIENT OPERATIONS</span>
            <h1>We don't simply want to consume technology. We want to create it.</h1>
            <p>Practical digital capability for organizations shaping what comes next.</p>
            <div className="brand-hero-ctas">
              <a href="#/contact" className="brand-btn-primary">
                Start a conversation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
              <a href="#/about" className="brand-link-arrow">
                Discover Tactivo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="section find-section">
        <div className="container find-grid">
          <div>
            <span className="section-label">FIND TACTIVO</span>
            <h2>Now at 873-A/2/C/1 BH Kasupe Road, Ferngrove.</h2>
            <p>
              Find the Tactivo team at 873-A/2/C/1 BH Kasupe Road, Ferngrove, Lusaka, for your
              forecourt, facility, or connected systems upgrade.
            </p>
            <a href="#/contact" className="brand-btn-primary" style={{ color: '#fff' }}>
              Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
          <div className="find-map">
            <iframe
              title="Tactivo Technologies location"
              src="https://maps.google.com/maps?q=873-A%2F2%2FC%2F1%20BH%20Kasupe%20Road%2C%20Ferngrove%2C%20Lusaka&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 30, flexWrap: 'wrap' }}>
          <div>
            <span className="section-label">GET STARTED</span>
            <h2 style={{ margin: 0 }}>Have a site that needs cameras, cabling or a website?</h2>
          </div>
          <a href="#/contact" className="btn btn-primary">Request a quote</a>
        </div>
      </section>
    </>
  );
}
