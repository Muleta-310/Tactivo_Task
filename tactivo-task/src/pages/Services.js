import React from 'react';

const ICONS = {
  cctv: <path d="M4 8l6-3 6 3v5c0 4-2.5 6.5-6 8-3.5-1.5-6-4-6-8V8z" />,
  lock: <><rect x="5" y="11" width="14" height="9" rx="1.5" /><path d="M8 11V7a4 4 0 018 0v4" /></>,
  suite: <><circle cx="9" cy="9" r="3" /><path d="M9 12v6M6 20h6" /></>,
  code: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />,
  network: <><rect x="9" y="3" width="6" height="4" rx="1" /><rect x="3" y="17" width="6" height="4" rx="1" /><rect x="15" y="17" width="6" height="4" rx="1" /><path d="M12 7v6M12 13H6v4M12 13h6v4" /></>,
  fuel: <><path d="M6 20V6a2 2 0 012-2h4a2 2 0 012 2v14" /><path d="M6 20h8M14 9h2a2 2 0 012 2v4a1.5 1.5 0 003 0V9l-2-2" /></>,
  pin: <><path d="M12 21s-6-5.5-6-10a6 6 0 1112 0c0 4.5-6 10-6 10z" /><circle cx="12" cy="11" r="2" /></>,
  headset: <><path d="M4 13v-1a8 8 0 0116 0v1" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /><path d="M20 19a3 3 0 01-3 3h-3" /></>,
};

const SERVICES = [
  {
    key: 'cctv',
    img: '/services/card-cctv.jpg',
    title: ['CCTV', 'SURVEILLANCE'],
    tagline: 'Smart monitoring. Complete protection.',
    features: [
      { icon: ICONS.cctv, label: '24/7 MONITORING' },
      { icon: ICONS.cctv, label: 'HIGH DEFINITION' },
      { icon: ICONS.cctv, label: 'REMOTE ACCESS' },
    ],
  },
  {
    key: 'access',
    img: '/services/card-access.jpg',
    title: ['ACCESS', 'CONTROL'],
    tagline: 'Secure access. Smarter workplaces.',
    features: [
      { icon: ICONS.lock, label: 'MANAGE ACCESS' },
      { icon: ICONS.lock, label: 'ENHANCED SECURITY' },
      { icon: ICONS.lock, label: 'ACCESS LOGS' },
      { icon: ICONS.lock, label: 'MULTIPLE DOORS' },
    ],
  },
  {
    key: 'maestro',
    img: '/services/card-maestro.jpg',
    title: ['MAESTRO', 'SOFTWARE SUITE'],
    tagline: 'Powerful software. Smarter operations.',
    features: [
      { icon: ICONS.suite, label: 'SMART MANAGEMENT' },
      { icon: ICONS.suite, label: 'REAL-TIME INSIGHTS' },
      { icon: ICONS.suite, label: 'CLOUD BASED' },
      { icon: ICONS.suite, label: 'SCALABLE SOLUTIONS' },
    ],
  },
  {
    key: 'dev',
    img: '/services/card-dev.jpg',
    title: ['CUSTOMIZED', 'SOFTWARE DEVELOPMENT'],
    tagline: 'Tailored solutions. Built for your business.',
    features: [
      { icon: ICONS.code, label: 'TAILORED SOLUTIONS' },
      { icon: ICONS.code, label: 'SCALABLE & FLEXIBLE' },
      { icon: ICONS.code, label: 'INNOVATIVE TECH' },
      { icon: ICONS.code, label: 'BUILT FOR GROWTH' },
    ],
  },
  {
    key: 'network',
    img: '/services/card-network.jpg',
    title: ['NETWORK', 'INSTALLATION'],
    tagline: 'Reliable networks. Seamless connectivity.',
    features: [
      { icon: ICONS.network, label: 'FAST & RELIABLE' },
      { icon: ICONS.network, label: 'SECURE NETWORKS' },
      { icon: ICONS.network, label: 'EXPERT INSTALLATION' },
      { icon: ICONS.network, label: 'OPTIMIZED PERFORMANCE' },
    ],
  },
  {
    key: 'fuel',
    img: '/services/card-fuel.jpg',
    title: ['FUEL', 'AUTOMATION'],
    tagline: 'Automate. Monitor. Optimize your forecourt.',
    features: [
      { icon: ICONS.fuel, label: 'ACCURATE FUELING' },
      { icon: ICONS.fuel, label: 'TANK MONITORING' },
      { icon: ICONS.fuel, label: 'REAL-TIME REPORTS' },
      { icon: ICONS.fuel, label: 'IMPROVED EFFICIENCY' },
    ],
  },
  {
    key: 'telematics',
    img: '/services/card-telematics.jpg',
    title: ['TELEMATICS'],
    tagline: 'Track. Monitor. Optimize your fleet.',
    features: [
      { icon: ICONS.pin, label: 'REAL-TIME TRACKING' },
      { icon: ICONS.pin, label: 'VEHICLE HEALTH' },
      { icon: ICONS.pin, label: 'DRIVER BEHAVIOR' },
      { icon: ICONS.pin, label: 'FLEET REPORTS' },
    ],
  },
  {
    key: 'support',
    img: '/services/card-support.jpg',
    title: ['SUPPORT &', 'MAINTENANCE'],
    tagline: "We're here when you need us.",
    features: [
      { icon: ICONS.headset, label: '24/7 SUPPORT' },
      { icon: ICONS.headset, label: 'PREVENTIVE MAINTENANCE' },
      { icon: ICONS.headset, label: 'QUICK ISSUE RESOLUTION' },
      { icon: ICONS.headset, label: 'MAXIMUM UPTIME' },
    ],
  },
];

const TRUST = [
  {
    title: 'EXPERT TEAM',
    body: 'Skilled professionals delivering excellence.',
    icon: <><circle cx="9" cy="8" r="3" /><circle cx="16" cy="9" r="2.5" /><path d="M3 20c0-3 3-5 6-5s6 2 6 5M14 15c2.5 0 5 1.7 5 5" /></>,
  },
  {
    title: 'PROVEN SOLUTIONS',
    body: 'Trusted by businesses across industries.',
    icon: <><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></>,
  },
  {
    title: 'INNOVATIVE TECHNOLOGY',
    body: 'Cutting-edge solutions for your success.',
    icon: <><path d="M4 19h4M8 19v-3M12 19V9M16 19v-6M20 19V5" /></>,
  },
  {
    title: 'COMMITTED PARTNER',
    body: 'Your growth is our priority.',
    icon: <><path d="M8 12l3 3 5-6" /><path d="M4 8l4-3 4 3-4 3-4-3z" /><path d="M12 8l4-3 4 3-4 3-4-3z" /></>,
  },
];

function ServiceCard({ service }) {
  return (
    <div className="svc-card">
      <div className="svc-card-photo">
        <img src={service.img} alt={service.title.join(' ')} loading="lazy" />
      </div>
      <div className="svc-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {service.features[0].icon}
        </svg>
      </div>
      <div className="svc-card-body">
        <h3>
          {service.title[0]}
          {service.title[1] && <span>{service.title[1]}</span>}
        </h3>
        <p className="svc-tagline">{service.tagline}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="section-label">SERVICES</span>
          <h1>Solutions designed with the customer in mind.</h1>
          <p style={{ color: '#c7cec9', maxWidth: '60ch' }}>
            Eight core service lines, delivered by one team — from the camera on the wall to the
            software running your operation.
          </p>
          <div className="innovation-tag">
            <span className="innovation-tag-label">Innovation in Action</span>
            <span className="innovation-tag-sep">—</span>
            <span className="innovation-tag-text">Turning ideas into practical solutions.</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-grid">
            {SERVICES.map((s) => (
              <ServiceCard service={s} key={s.key} />
            ))}
          </div>

          <div className="svc-trust" style={{ marginTop: 32 }}>
            {TRUST.map((t) => (
              <div className="svc-trust-item" key={t.title}>
                <div className="svc-trust-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {t.icon}
                  </svg>
                </div>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 30, flexWrap: 'wrap' }}>
          <div>
            <span className="section-label">NOT SURE WHERE TO START?</span>
            <h2 style={{ margin: 0 }}>Tell us what the site needs and we'll scope it.</h2>
          </div>
          <a href="#/contact" className="brand-btn-primary" style={{ color: '#fff' }}>
            Request a quote
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </section>
      <section className="section maestro-section">
        <div className="container">
          <span className="maestro-eyebrow">MAESTRO ECOSYSTEM</span>
          <h2>One suite for clearer operations.</h2>
          <p>Maestro connects software, metering, oversight, and fuel-retail intelligence.</p>

          <div className="maestro-grid">
            <div className="maestro-card">
              <div className="maestro-card-logo">
                <img src="/maestro/software.jpg" alt="Maestro Software" />
              </div>
              <p>Software tools for smarter fuel management, reconciliation, and reporting.</p>
            </div>
            <div className="maestro-card">
              <div className="maestro-card-logo">
                <img src="/maestro/central.jpg" alt="Maestro Central" />
              </div>
              <p>Central visibility for teams managing multiple sites and systems.</p>
            </div>
            <div className="maestro-card">
              <div className="maestro-card-logo">
                <img src="/maestro/taxi.jpg" alt="Maestro Taxi Metering" />
              </div>
              <p>Specialised metering intelligence for precise, service-ready operations.</p>
            </div>
            <div className="maestro-card">
              <div className="maestro-card-logo">
                <img src="/maestro/otp.jpg" alt="Maestro By OTP" />
              </div>
              <p>A connected platform layer for reliable, accountable site operations.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
