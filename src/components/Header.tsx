import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/a-propos' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.projects'), href: '/realisations' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Add state for language dropdown
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg border-b border-[#cad0dd] transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between md:items-center py-4 gap-2 md:gap-0">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cad0dd]">
          <img src="/LogoLb.png" alt="Light Bulb Logo" className="w-20 h-20 object-contain" />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold transition-all duration-300 group-hover:text-primary flex items-center space-x-1" style={{ color: '#223366' }}>
              <span>LIGHT</span>
              <span className="font-black text-primary" style={{ textShadow: '2px 2px 0px #223366' }}>BULB</span>
            </h1>
            <div className="text-xs text-[#7d7d7d] transition-all duration-300 group-hover:text-primary space-y-0.5">
              <p>VENTE & DISTRIBUTION</p>
              <p>de matériel électrique</p>
              <p>TRAVAUX DIVERS</p>
            </div>
          </div>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-4">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                ${isActive(item.href)
                  ? 'bg-primary/10 text-primary font-extrabold underline underline-offset-[8px] decoration-4 decoration-yellow-400 border border-yellow-300 shadow-md'
                  : 'text-secondary hover:text-primary hover:underline hover:underline-offset-4 hover:bg-white border border-transparent hover:border-primary'}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* CTA Button moved right next to language icon */}
        <div className="hidden md:flex items-center gap-4 ml-4">
          <Link
            to="/contact"
            className="bg-primary hover:bg-white text-secondary px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary animate-fade-in-right"
          >
            Devis Gratuit
          </Link>
          {/* Instagram Icon */}
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-primary bg-white text-secondary hover:bg-pink-500 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1-6.25 6.25 6.25 6.25 0 0 1 6.25-6.25zm0 1.5a4.75 4.75 0 1 0 4.75 4.75A4.75 4.75 0 0 0 12 5.25zm6.5 1.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
          </a>
          {/* Facebook Icon */}
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-primary bg-white text-secondary hover:bg-blue-600 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          {/* LinkedIn Icon */}
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-primary bg-white text-secondary hover:bg-blue-800 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.062-1.867-3.062-1.868 0-2.154 1.459-2.154 2.967v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.594v5.602z"/></svg>
          </a>
          {/* Language Switcher Dropdown (already present) */}
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown((v) => !v)}
              className="p-2 rounded-full border border-primary bg-white text-secondary hover:bg-primary hover:text-secondary transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Changer la langue"
            >
              <Globe className="w-6 h-6" />
            </button>
            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50 flex flex-col">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { i18n.changeLanguage(lang.code); setShowLangDropdown(false); }}
                    className={`px-4 py-2 text-left text-sm font-semibold transition-all duration-200 hover:bg-primary hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${i18n.language === lang.code ? 'bg-primary text-secondary' : 'text-secondary'}`}
                    aria-current={i18n.language === lang.code ? 'true' : undefined}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#333333] hover:text-black hover:bg-[#fffeee] transition-all duration-300 transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cad0dd]"
          aria-label="Toggle menu"
        >
          <div className="transition-all duration-300">
            {isMenuOpen ? <X size={24} className="animate-fade-in-up" /> : <Menu size={24} className="animate-fade-in-up" />}
          </div>
        </button>
      </div>
      {/* Mobile Navigation - slide-in from right with backdrop */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300" onClick={() => setIsMenuOpen(false)} aria-hidden="true"></div>
          <div className="fixed inset-0 bg-white flex flex-col min-h-screen animate-slide-in-right overflow-y-auto">
            <div className="flex items-center justify-between px-6 pt-6 pb-2">
              <div />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-secondary hover:text-primary bg-gray-100 hover:bg-gray-200 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Fermer le menu"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col items-center flex-1 justify-center space-y-6 w-full max-w-xs mx-auto">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full text-center px-4 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                    ${isActive(item.href)
                      ? 'bg-primary/10 text-primary font-extrabold underline underline-offset-[8px] decoration-4 decoration-yellow-400 border border-yellow-300 shadow-md'
                      : 'text-secondary hover:text-primary hover:underline hover:underline-offset-4 hover:bg-white border border-transparent hover:border-primary'}
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3 justify-center py-6 border-t border-gray-200 mt-auto">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`px-4 py-2 rounded text-base font-semibold border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                    ${i18n.language === lang.code ? 'bg-primary text-secondary border-primary font-bold' : 'bg-white text-secondary border-primary hover:bg-primary hover:text-white'}`}
                  aria-current={i18n.language === lang.code ? 'true' : undefined}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;