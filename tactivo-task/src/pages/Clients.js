import React from 'react';

export default function Clients() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="section-label">CLIENTS</span>
          <h1>Organisations we've worked with.</h1>
          <p style={{ color: '#c7cec9', maxWidth: '60ch' }}>
            [Replace with real client names/logos once you have permission to display them.]
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="logo-row">
            <div className="logo-cell"><img src="/clients/vivo-energy.png" alt="Vivo Energy" /></div>
            <div className="logo-cell"><img className="logo-lg" src="/clients/toyota.jpg" alt="Toyota Zambia" /></div>
            <div className="logo-cell"><img className="logo-lg" src="/clients/shaann.jpg" alt="Shaann Carriers & General Dealers" /></div>
            <div className="logo-cell"><img src="/clients/sapphire.png" alt="Sapphire Energy Company" /></div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="logo-cell" key={i}>CLIENT LOGO</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container quote">
          <p>"Placeholder testimonial — replace with an actual quote from a client once you have one on record."</p>
          <cite>— PLACEHOLDER CLIENT, PLACEHOLDER COMPANY</cite>
        </div>
      </section>
    </>
  );
}
