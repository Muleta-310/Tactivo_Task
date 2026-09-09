import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Clients from './pages/Clients';
import Contact from './pages/Contact';

const ROUTES = {
  '': { page: 'home', Component: Home },
  '/': { page: 'home', Component: Home },
  '/about': { page: 'about', Component: About },
  '/services': { page: 'services', Component: Services },
  '/projects': { page: 'projects', Component: Projects },
  '/team': { page: 'team', Component: Team },
  '/clients': { page: 'clients', Component: Clients },
  '/contact': { page: 'contact', Component: Contact },
};

function getPath() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash === '' ? '/' : hash;
}

export default function App() {
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onHashChange = () => {
      setPath(getPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const route = ROUTES[path] || ROUTES['/'];
  const { page, Component } = route;

  return (
    <>
      <Header currentPage={page} />
      <main>
        <Component />
      </main>
      <Footer />
    </>
  );
}
