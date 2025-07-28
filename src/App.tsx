import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import PlanSite from './pages/PlanSite';
import WhatsAppButton from './components/WhatsAppButton';
import './i18n';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full animate-spin"></div>
      <span className="text-gray-600 font-medium">Chargement...</span>
    </div>
  </div>
);

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
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);
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
           phoneNumber="212661067491"
           message="Bonjour ! Je suis intéressé(e) par vos services et j’aimerais en savoir plus."
          />
        <Footer />
      </div>
    </Router>
  );
}

export default App;