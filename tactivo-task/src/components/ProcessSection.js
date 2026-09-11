import React, { useState } from 'react';

const DEFAULT_STEPS = [
  {
    title: 'Site assessment',
    body: 'We survey the forecourt, back office and network before proposing a build.',
    img: '/brand/hero-office.jpg',
  },
  {
    title: 'Installation',
    body: 'Hardware is mounted, cabled and configured to spec.',
    img: '/services/card-network.jpg',
  },
  {
    title: 'Integration & testing',
    body: 'Systems are linked to Maestro and load-tested end to end.',
    img: '/services/card-maestro.jpg',
  },
  {
    title: 'Training & handover',
    body: 'Your staff are trained on daily operation before go-live.',
    img: '/services/step-training.jpg',
  },
  {
    title: 'Ongoing support',
    body: 'Scheduled maintenance and rapid-response callouts follow.',
    img: '/services/card-support.jpg',
  },
];

export default function ProcessSection({
  eyebrow = 'HOW WE DELIVER',
  heading = 'A controlled path from site assessment to sign-off.',
  subtext = 'Five practical stages, presented with the detail your team needs to keep moving.',
  steps = DEFAULT_STEPS,
  defaultActive = 0,
}) {
  const [active, setActive] = useState(Math.min(defaultActive, steps.length - 1));

  function prev() {
    setActive((a) => (a - 1 + steps.length) % steps.length);
  }
  function next() {
    setActive((a) => (a + 1) % steps.length);
  }

  const current = steps[active];

  return (
    <section className="process-section">
      <div className="container">
        <span className="process-eyebrow">{eyebrow}</span>
        <h2>{heading}</h2>
        <p>{subtext}</p>

        <div className="process-feature">
          <div className="process-feature-photo">
            <img src={current.img} alt={current.title} />
          </div>
          <div className="process-feature-body">
            <span className="process-feature-num">{String(active + 1).padStart(2, '0')}</span>
            <h3>{current.title}</h3>
            <p>{current.body}</p>

            <div className="process-nav">
              <button className="process-nav-btn" aria-label="Previous stage" onClick={prev}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div className="process-dots">
                {steps.map((s, i) => (
                  <button
                    key={s.title}
                    className={`process-dot${i === active ? ' active' : ''}`}
                    aria-label={`Go to ${s.title}`}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
              <button className="process-nav-btn" aria-label="Next stage" onClick={next}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="process-steps">
          {steps.map((s, i) => (
            <button
              key={s.title}
              className={`process-step-card${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
