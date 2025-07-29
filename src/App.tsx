import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import PlanSite from './pages/PlanSite';
import WhatsAppButton from './components/WhatsAppButton';
import './i18n';

// Loading component with logo in center
const LoadingSpinner = () => <LoadingScreen isInitial={false} />;

// ScrollToTop component to automatically scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const { i18n } = useTranslation();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  // Initial loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsInitialLoading(false);
        setIsTransitioning(false);
      }, 500); // Transition duration
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Show initial loading screen
  if (isInitialLoading) {
    return (
      <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <LoadingScreen isInitial={true} />
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white w-full">
        <Header />
        <main className="relative w-full">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/realisations" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<Legal />} />
              <Route path="/plan-du-site" element={<PlanSite />} />
            </Routes>
          </Suspense>
        </main>
        {/* WhatsApp Floating Button - visible on all pages */}
          {/* WhatsApp Floating Button */}
          <WhatsAppButton 
           phoneNumber="+212661067491"
           message="Bonjour ! Je suis intéressé(e) par vos services et j'aimerais en savoir plus."
          />
        <Footer />
      </div>
    </Router>
  );
}

export default App;