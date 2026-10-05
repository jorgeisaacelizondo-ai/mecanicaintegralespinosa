import React, { useState, useEffect } from 'react';
import { AuthProvider } from './shared/context/AuthContext';
import LandingPage from './landing/LandingPage';
import PortalApp from './portal/PortalApp';

export default function App() {
  const [view, setView] = useState(() => {
    // Si la URL tiene #portal o /portal abre directo el portal
    return window.location.hash === '#portal' ? 'portal' : 'landing';
  });

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#portal') {
        setView('portal');
      } else if (window.location.hash === '#landing' || window.location.hash === '') {
        setView('landing');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToPortal = () => {
    window.location.hash = '#portal';
    setView('portal');
  };

  const navigateToLanding = () => {
    window.location.hash = '';
    setView('landing');
  };

  return (
    <AuthProvider>
      {view === 'portal' ? (
        <PortalApp onBackToLanding={navigateToLanding} />
      ) : (
        <LandingPage onOpenPortal={navigateToPortal} />
      )}
    </AuthProvider>
  );
}

