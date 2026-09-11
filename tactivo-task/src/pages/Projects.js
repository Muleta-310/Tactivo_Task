import React from 'react';
import ProcessSection from '../components/ProcessSection';

const PROJECTS = [
  { tag: 'CCTV DEPLOYMENT — 2026', title: 'Placeholder: Retail camera rollout', body: '[Replace with scope: number of cameras, sites covered, and outcome.]' },
  { tag: 'NETWORKING — 2026', title: 'Placeholder: Office network redesign', body: '[Replace with scope: cabling run, switch/router setup, downtime avoided.]' },
  { tag: 'WEB DEVELOPMENT — 2026', title: 'Placeholder: Corporate website', body: '[Replace with scope: pages built, CMS used, launch date.]' },
  { tag: 'CCTV DEPLOYMENT — 2025', title: 'Placeholder: Warehouse surveillance', body: '[Replace with scope.]' },
  { tag: 'IT SUPPORT — 2025', title: 'Placeholder: Managed support contract', body: '[Replace with scope.]' },
  { tag: 'NETWORKING — 2025', title: 'Placeholder: Fibre installation', body: '[Replace with scope.]' },
];

const PROJECT_STEPS = [
  {
    title: 'Site visit & assessment',
    body: 'We walk the site to understand coverage needs, cabling paths and network requirements.',
    img: '/brand/hero-office.jpg',
  },
  {
    title: 'Proposal & quote',
    body: 'A written scope and quote covering equipment, labour and timeline.',
    img: '/services/card-dev.jpg',
  },
  {
    title: 'Installation',
    body: 'Cameras, cabling or web build carried out on the agreed schedule.',
    img: '/services/card-network.jpg',
  },
  {
    title: 'Handover & support',
    body: 'Walkthrough of the finished system, with ongoing support afterward.',
    img: '/services/card-support.jpg',
  },
];

export default function Projects() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="section-label">PROJECTS</span>
          <h1>Recent installations and builds.</h1>
          <p style={{ color: '#c7cec9', maxWidth: '60ch' }}>
            [Replace each entry below with a real project: client name (or anonymised), scope of
            work, and photos once available.]
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid-3 container" style={{ padding: '0 28px' }}>
          {PROJECTS.map((p) => (
            <div className="card" key={p.title}>
              <span className="tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <ProcessSection
        eyebrow="HOW A PROJECT RUNS"
        heading="A controlled path from first call to handover."
        subtext="Four practical stages, presented with the detail your team needs to keep moving."
        steps={PROJECT_STEPS}
        defaultActive={0}
      />
    </>
  );
}
