import React, { useState } from 'react';

export default function Contact() {
  const [note, setNote] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setNote("This form isn't connected to email yet — wire it up before launch.");
  }

  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="section-label">CONTACT</span>
          <h1>Tell us about the site.</h1>
          <p style={{ color: '#c7cec9', maxWidth: '60ch' }}>
            Send a few details and we'll follow up to schedule a site visit or call.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <span className="section-label">GET IN TOUCH</span>
            <h2>Contact details</h2>
            <p><strong>Location</strong><br />Lusaka, Zambia</p>
            <p><strong>Email</strong><br />tactivotechnologies@gmail.com</p>
            <p><strong>Phone</strong><br />+260 977 526 354</p>
          </div>
          <div>
            <span className="section-label">REQUEST A QUOTE</span>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required />
              </div>
              <div className="field">
                <label htmlFor="service">What do you need?</label>
                <input id="service" type="text" placeholder="e.g. CCTV, networking, website" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ border: 0, cursor: 'pointer' }}>
                Send message
              </button>
              {note && (
                <p className="mono" style={{ fontSize: '.82rem', color: 'var(--accent)', marginTop: 14 }}>
                  {note}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
