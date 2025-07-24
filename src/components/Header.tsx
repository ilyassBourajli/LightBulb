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
    <header className="w-full sticky top-0 left-0 z-50 bg-white backdrop-blur-lg shadow-xl border-b border-yellow-200 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3 min-h-[56px] border-b border-gray-200">
        {/* Logo */}
        <Link to="/" className="flex flex-row items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cad0dd]">
          <img src="/LogoLb.png" alt="Light Bulb Logo" className="h-10 w-auto object-contain" />
          <img src="/LogoAndName - Copy.png" alt="Light Bulb Name Logo" className="h-9 w-auto object-contain" />
        </Link>
        {/* Desktop Navigation */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 hover:bg-gray-100 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${isActive(item.href) ? 'text-primary font-bold underline underline-offset-4' : 'text-secondary'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Hamburger menu for mobile */}
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