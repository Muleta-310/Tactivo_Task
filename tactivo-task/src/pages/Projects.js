import React from 'react';

const PROJECTS = [
  { tag: 'CCTV DEPLOYMENT — 2026', title: 'Placeholder: Retail camera rollout', body: '[Replace with scope: number of cameras, sites covered, and outcome.]' },
  { tag: 'NETWORKING — 2026', title: 'Placeholder: Office network redesign', body: '[Replace with scope: cabling run, switch/router setup, downtime avoided.]' },
  { tag: 'WEB DEVELOPMENT — 2026', title: 'Placeholder: Corporate website', body: '[Replace with scope: pages built, CMS used, launch date.]' },
  { tag: 'CCTV DEPLOYMENT — 2025', title: 'Placeholder: Warehouse surveillance', body: '[Replace with scope.]' },
  { tag: 'IT SUPPORT — 2025', title: 'Placeholder: Managed support contract', body: '[Replace with scope.]' },
  { tag: 'NETWORKING — 2025', title: 'Placeholder: Fibre installation', body: '[Replace with scope.]' },
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

      <section className="section section-alt">
        <div className="container value-block">
          <div>
            <span className="section-label">HOW A PROJECT RUNS</span>
            <h2>From first call to handover.</h2>
          </div>
          <div className="value-list">
            <div className="value-item">
              <span className="num">01</span>
              <div>
                <p style={{ marginBottom: 6 }}>Site visit &amp; assessment</p>
                <span className="value-item-desc">We walk the site to understand coverage needs, cabling paths and network requirements.</span>
              </div>
            </div>
            <div className="value-item">
              <span className="num">02</span>
              <div>
                <p style={{ marginBottom: 6 }}>Proposal &amp; quote</p>
                <span className="value-item-desc">A written scope and quote covering equipment, labour and timeline.</span>
              </div>
            </div>
            <div className="value-item">
              <span className="num">03</span>
              <div>
                <p style={{ marginBottom: 6 }}>Installation</p>
                <span className="value-item-desc">Cameras, cabling or web build carried out on the agreed schedule.</span>
              </div>
            </div>
            <div className="value-item">
              <span className="num">04</span>
              <div>
                <p style={{ marginBottom: 6 }}>Handover &amp; support</p>
                <span className="value-item-desc">Walkthrough of the finished system, with ongoing support afterward.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
