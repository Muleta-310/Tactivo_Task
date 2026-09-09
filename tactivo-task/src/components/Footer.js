import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <img
              src="/brand/logo-full.png"
              alt="Tactivo Technologies — Solutions designed with the customer in mind"
              style={{ height: 64, width: 'auto', marginBottom: 14 }}
            />
            <p style={{ color: '#b7c0bb', maxWidth: '34ch' }}>
              IT infrastructure, CCTV deployment and web development, based in Lusaka, Zambia.
            </p>
          </div>
          <div>
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#/about">About</a></li>
              <li><a href="#/team">Team</a></li>
              <li><a href="#/clients">Clients</a></li>
              <li><a href="#/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>SERVICES</h4>
            <ul>
              <li><a href="#/services">CCTV &amp; Surveillance</a></li>
              <li><a href="#/services">Network Infrastructure</a></li>
              <li><a href="#/services">Web Development</a></li>
              <li><a href="#/services">IT Support</a></li>
            </ul>
          </div>
          <div>
            <h4>CONTACT</h4>
            <ul>
              <li>Lusaka, Zambia</li>
              <li>tactivotechnologies@gmail.com</li>
              <li>+260 977 526 354</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Tactivo Technologies. All rights reserved.</span>
          <span>Placeholder content — replace before launch.</span>
        </div>
      </div>
    </footer>
  );
}
