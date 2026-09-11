import React from 'react';

const TEAM = [
  { role: 'FOUNDER / DIRECTOR', name: 'Placeholder Name', bio: '[Replace with a short bio.]' },
  { role: 'LEAD TECHNICIAN, CCTV & NETWORKING', name: 'Placeholder Name', bio: '[Replace with a short bio.]' },
  { role: 'WEB DEVELOPER', name: 'Placeholder Name', bio: '[Replace with a short bio.]' },
];

export default function Team() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="section-label">TEAM</span>
          <h1>The people behind the installs.</h1>
          <p style={{ color: '#c7cec9', maxWidth: '60ch' }}>
            [Replace names, titles and bios below with the real team. Photos are placeholders.]
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="field-gallery">
            <img src="/team/field/field-1.jpg" alt="Tactivo technicians on a lift, installing site lighting" />
            <img src="/team/field/field-2.jpg" alt="Tactivo technicians running cable on-site" />
            <img src="/team/field/field-3.jpg" alt="Tactivo technician handing up cable during installation" />
            <img src="/team/field/field-4.jpg" alt="Tactivo technician wiring a control panel" />
            <img src="/team/field/field-5.jpg" alt="Tactivo technician with tools by the service van" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container who-we-are">
          <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>WHO WE ARE</span>
          <h2>More than a technology company.</h2>
          <p className="who-we-are-copy">
            Tactivo Technologies is a team of innovators, problem-solvers, engineers,
            developers, technicians and professionals united by a single conviction:
            technology should solve real problems and create real value. That belief has
            shaped our journey from the start — one built on hard work, resilience,
            continuous learning and a lasting commitment to innovation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-label">PEOPLE / LEADERSHIP</span>
            <h2>Our Leadership</h2>
            <p>Meet the experts shaping what comes next.</p>
          </div>

          <div className="leadership-card">
            <div className="leadership-photo">
              <img src="/team/managing-director.jpg" alt="Mr. Tommy Muloboko" />
              <span className="leadership-badge">01</span>
            </div>
            <div className="leadership-body">
              <span className="leadership-kicker-small">TACTIVO TECHNOLOGIES</span>
              <h3>Mr. Tommy Muloboko</h3>
              <span className="leadership-role">MANAGING DIRECTOR</span>
              <p>
                [Replace with Mr. Muloboko's real bio — his background, and what guides his
                leadership at Tactivo.]
              </p>
              <a href="#/contact" className="leadership-link">
                Connect with the team
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>

          <div className="team-photo-banner">
            <img src="/team/team-group.jpg" alt="The Tactivo Technologies team" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="grid-3 container" style={{ padding: '0 28px' }}>
          {TEAM.map((person) => (
            <div className="person" key={person.role}>
              <div className="person-photo">PHOTO</div>
              <div className="person-body">
                <h3>{person.name}</h3>
                <span className="person-role">{person.role}</span>
                <p>{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
