import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="flex items-center space-x-3">
      <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full animate-spin"></div>
      <span className="text-gray-600 font-medium">Chargement...</span>
    </div>
  </div>
);

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);
  return (
    <Router>
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
            </Routes>
          </Suspense>
        </main>
        {/* WhatsApp Floating Button - visible on all pages */}
          <a
            href="https://wa.me/212661067491"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="fixed bottom-4 right-4 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            fill="white"
            width="35"
            height="35"
          >
            <path d="M16 0C7.2 0 0 7.2 0 16c0 2.8.7 5.4 2 7.7L0 32l8.6-2.3C11 31.3 13.5 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm0 29c-2.3 0-4.6-.6-6.6-1.7l-.5-.3-5.1 1.4 1.4-5-.3-.5C3.6 20.6 3 18.3 3 16 3 9.4 9.4 3 16 3s13 6.4 13 13-6.4 13-13 13zm7.4-9.3c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.7-.2-1 .2-.3.4-1.2 1.4-1.4 1.6s-.5.2-.9 0c-2.5-1.2-4.2-3.5-4.8-4.1-.3-.4-.1-.6.2-.9.2-.3.5-.6.7-1 .2-.3.1-.6 0-.8s-1.2-2.9-1.6-4c-.4-1.1-.8-.9-1-.9h-.8c-.2 0-.6.1-.9.4-.4.4-1.5 1.5-1.5 3.7s1.6 4.6 1.9 5.1c.2.3 3.3 5.2 8 7 1.2.5 2.1.8 2.9 1 1.2.4 2.3.3 3.2.2.9-.1 2.9-1.2 3.3-2.3.4-1.1.4-2.1.3-2.3s-.4-.3-.8-.5z"/>
          </svg>
        </a>

        <Footer />
      </div>
    </Router>
  );
}

export default App;