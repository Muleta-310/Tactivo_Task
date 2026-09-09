import React, { useState, useRef, useEffect } from 'react';

export default function Header({ currentPage }) {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, []);

  function closeMenus() {
    setOpen(false);
    setAboutOpen(false);
  }

  return (
    <>
      <div className="brand-topbar">
        <span>TECHNOLOGY FOR RESILIENT OPERATIONS</span>
        <a href="mailto:tactivotechnologies@gmail.com" className="topbar-email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          <span className="full">tactivotechnologies@gmail.com</span>
        </a>
      </div>

      <header className="brand-header">
        <nav className="brand-nav">
          <a href="#/" className="brand-logo" onClick={closeMenus}>
            <img src="/brand/logo-mark.png" alt="Tactivo Technologies" />
            <span className="wordmark">Tactivo <span>Technologies</span></span>
          </a>

          <ul className={`brand-links${open ? ' open' : ''}`}>
            <li>
              <a href="#/" className={currentPage === 'home' ? 'active' : ''} onClick={closeMenus}>
                Home
              </a>
            </li>
            <li ref={aboutRef}>
              <button
                className="brand-dropdown-toggle"
                aria-expanded={aboutOpen}
                onClick={(e) => { e.stopPropagation(); setAboutOpen(!aboutOpen); }}
              >
                About
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {aboutOpen && (
                <div className="brand-dropdown-menu">
                  <a href="#/about" onClick={closeMenus}>Our Story</a>
                  <a href="#/about" onClick={closeMenus}>Mission &amp; Vision</a>
                </div>
              )}
            </li>
            <li><a href="#/team" className={currentPage === 'team' ? 'active' : ''} onClick={closeMenus}>Team</a></li>
            <li><a href="#/clients" className={currentPage === 'clients' ? 'active' : ''} onClick={closeMenus}>Clients</a></li>
            <li><a href="#/projects" className={currentPage === 'projects' ? 'active' : ''} onClick={closeMenus}>Projects</a></li>
            <li><a href="#/services" className={currentPage === 'services' ? 'active' : ''} onClick={closeMenus}>Services</a></li>
            <li><a href="#/contact" className={currentPage === 'contact' ? 'active' : ''} onClick={closeMenus}>Contact Us</a></li>
          </ul>

          <a href="#/contact" className="brand-cta">
            Contact Us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>

          <button className="brand-nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
    </>
  );
}
