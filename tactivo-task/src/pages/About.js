import React from 'react';

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="section-label">ABOUT US</span>
          <h1>An IT company that started with a single job on-site.</h1>
          <p style={{ color: '#c7cec9', maxWidth: '60ch' }}>
            Tactivo Technologies grew out of hands-on fieldwork — installing cameras, running
            cable, and fixing networks — into a full IT partner for businesses across Lusaka.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2" style={{ background: 'none', gap: 60 }}>
          <div>
            <span className="section-label">OUR STORY</span>
            <h2>Placeholder company history</h2>
            <p>[Replace with Tactivo's real founding story: when the company started, what the first projects looked like, and how the CCTV, networking and web development sides of the business came together.]</p>
            <p>[Replace with a paragraph on how the team has grown and what's changed since the early projects.]</p>
          </div>
          <div>
            <span className="section-label">HOW WE WORK</span>
            <h2>Representing the Tactivo name.</h2>
            <p style={{ fontWeight: 600, color: 'var(--ink)' }}>Our reputation is built one interaction at a time.</p>
            <ul className="dot-list">
              <li>When we enter a customer's premises, we represent the entire company.</li>
              <li>The quality of our work, communication and problem-solving shapes our reputation.</li>
              <li>Professionalism and customer service must be visible in everything we do.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="section-label">WHAT WE DO</span>
            <h2>End-to-end technology, built for the way you operate.</h2>
            <p>
              From the camera on the wall to the software behind it, Tactivo delivers security,
              connectivity, automation and support as one accountable team — not a chain of
              subcontractors. Every engagement draws on the same field-tested capability, whatever
              the size of the site.
            </p>
          </div>
          <div className="wwd-grid">
            <div className="wwd-card">
              <span className="wwd-num">01</span>
              <h4>Security &amp; Access</h4>
              <p>CCTV surveillance and access control systems that keep sites, staff and assets protected around the clock.</p>
            </div>
            <div className="wwd-card">
              <span className="wwd-num">02</span>
              <h4>Networking &amp; Infrastructure</h4>
              <p>Structured cabling, network installation and IT support that keep operations connected and running.</p>
            </div>
            <div className="wwd-card">
              <span className="wwd-num">03</span>
              <h4>Software &amp; Automation</h4>
              <p>The Maestro suite and custom software development, built to manage, monitor and optimise your operations.</p>
            </div>
            <div className="wwd-card">
              <span className="wwd-num">04</span>
              <h4>Fleet &amp; Field Intelligence</h4>
              <p>Fuel automation and telematics that bring real-time visibility to forecourts and vehicles alike.</p>
            </div>
          </div>
          <a href="#/services" className="leadership-link" style={{ marginTop: 30, display: 'inline-flex' }}>
            See all services
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container value-block">
          <div>
            <span className="section-label">OUR VISION</span>
            <h2>Create technology. Lead innovation.</h2>
          </div>
          <div className="value-list">
            <div className="value-item">
              <span className="num">01</span>
              <p>Build Tactivo Technologies into a leading African technology and innovation company.</p>
            </div>
            <div className="value-item">
              <span className="num">02</span>
              <p>Develop solutions that can compete in Zambia, across Africa and on the global stage.</p>
            </div>
            <div className="value-item">
              <span className="num">03</span>
              <p>Demonstrate that world-class technology can be designed, developed and supported in Zambia.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container value-block">
          <div>
            <span className="section-label">OUR MISSION</span>
            <h2>Solutions designed with the customer in mind.</h2>
          </div>
          <div className="value-list">
            <p className="value-intro">
              Our mission is to deliver technology that creates real value and helps
              organizations solve real business and operational challenges.
            </p>
            <div className="value-item">
              <span className="num">01</span>
              <p>Design reliable, innovative and customer-focused technology solutions.</p>
            </div>
            <div className="value-item">
              <span className="num">02</span>
              <p>Solve real business and operational challenges.</p>
            </div>
            <div className="value-item">
              <span className="num">03</span>
              <p>Combine software, automation, hardware, data and operational intelligence to improve efficiency and visibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt culture-section">
        <div className="container">
          <div className="section-head">
            <span className="section-label">THE TACTIVO CULTURE</span>
            <h2>What we expect from ourselves every day.</h2>
            <p>
              Our culture is built through the standards we bring to every customer, every
              project, and every interaction.
            </p>
          </div>

          <div className="culture-grid">
            <div className="culture-card">
              <div className="culture-top">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M14.5 9.5l-2 5-3 1.5 2-5 3-1.5z" /></svg>
                <span className="num">01</span>
              </div>
              <h4>Hard work</h4>
              <p>We bring energy, resilience, and commitment to the work in front of us.</p>
            </div>
            <div className="culture-card">
              <div className="culture-top">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>
                <span className="num">02</span>
              </div>
              <h4>Integrity</h4>
              <p>We act honestly, take responsibility, and do what is right.</p>
            </div>
            <div className="culture-card">
              <div className="culture-top">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7l8-4 8 4-8 4-8-4z" /><path d="M4 12l8 4 8-4M4 17l8 4 8-4" /></svg>
                <span className="num">03</span>
              </div>
              <h4>Professionalism</h4>
              <p>We make the quality of our work and service visible in every detail.</p>
            </div>
            <div className="culture-card">
              <div className="culture-top">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 12l3 3 5-6" /><path d="M4 9l3-2 3 2-3 2-3-2z" /><path d="M14 9l3-2 3 2-3 2-3-2z" /></svg>
                <span className="num">04</span>
              </div>
              <h4>Accountability</h4>
              <p>We take ownership of outcomes and keep our commitments.</p>
            </div>
            <div className="culture-card">
              <div className="culture-top">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3" /><circle cx="16" cy="9" r="2.5" /><path d="M3 20c0-3 3-5 6-5s6 2 6 5M14 15c2.5 0 5 1.7 5 5" /></svg>
                <span className="num">05</span>
              </div>
              <h4>Teamwork</h4>
              <p>We build better solutions by working together across roles and disciplines.</p>
            </div>
            <div className="culture-card">
              <div className="culture-top">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9z" /></svg>
                <span className="num">06</span>
              </div>
              <h4>Continuous learning</h4>
              <p>We keep learning, growing, and becoming better at what we do.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
