import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { NavigationItem, Language, HeaderProps } from '../types/navigation';

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const navigation: NavigationItem[] = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/a-propos' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.projects'), href: '/realisations' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const languages: Language[] = [
    { code: 'fr', label: 'FR', flag: '🇫🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'ar', label: 'AR', flag: '🇸🇦' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside for language dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setShowLangDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setShowLangDropdown(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <header 
      className={`w-full sticky top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white backdrop-blur-lg shadow-xl border-b border-yellow-200' 
          : 'bg-white backdrop-blur-lg shadow-xl border-b border-yellow-200'
      } ${className}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3 min-h-[56px] border-b border-gray-200 relative">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex flex-row items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-lg p-1 transition-all duration-200"
          aria-label="Go to homepage"
        >
          <img 
            src="/LogoLb.png" 
            alt="Light Bulb Logo" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <img 
            src="/LogoAndName - Copy.png" 
            alt="Light Bulb Name Logo" 
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>
        {/* Centered Navigation */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 z-10">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                isActive(item.href) 
                  ? 'text-yellow-600 font-bold underline underline-offset-4 decoration-yellow-400' 
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Right Actions (language, hamburger) */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Language Selector - Desktop */}
          <div className="hidden md:block relative ml-4" ref={langDropdownRef}>
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition-all duration-200"
              aria-haspopup="true"
              aria-expanded={showLangDropdown}
            >
              <Globe className="w-4 h-4" />
              <span>{currentLanguage.label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showLangDropdown ? 'rotate-180' : ''}`} />
            </button>

            {/* Language Dropdown */}
            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 animate-in slide-in-from-top-2 duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setShowLangDropdown(false);
                    }}
                    className={`flex items-center justify-center w-full px-4 py-2 text-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-150 ${
                      i18n.language === lang.code ? 'text-yellow-600 bg-yellow-50 font-bold' : 'text-gray-700'
                    }`}
                  >
                    <span className="font-medium">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger menu for mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-300 transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="transition-all duration-300">
              {isMenuOpen ? (
                <X size={24} className="animate-in spin-in-180 duration-300" />
              ) : (
                <Menu size={24} className="animate-in fade-in duration-300" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 transition-opacity duration-300 animate-in fade-in" 
            onClick={() => setIsMenuOpen(false)} 
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-0 bg-white flex flex-col min-h-screen animate-in slide-in-from-right duration-300 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-2">
              <div />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-gray-700 hover:text-yellow-600 bg-gray-100 hover:bg-yellow-50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col items-center flex-1 justify-center space-y-6 w-full max-w-xs mx-auto">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full text-center px-4 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                    isActive(item.href)
                      ? 'bg-yellow-50 text-yellow-600 font-extrabold underline underline-offset-[8px] decoration-4 decoration-yellow-400 border border-yellow-300 shadow-md'
                      : 'text-gray-700 hover:text-yellow-600 hover:underline hover:underline-offset-4 hover:bg-white border border-transparent hover:border-yellow-400'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Language Selector - Mobile */}
            <div className="flex items-center gap-3 justify-center py-6 border-t border-gray-200 mt-auto">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded text-base font-semibold border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                    i18n.language === lang.code 
                      ? 'bg-yellow-400 text-gray-800 border-yellow-400 font-bold' 
                      : 'bg-white text-gray-700 border-yellow-400 hover:bg-yellow-400 hover:text-gray-800'
                  }`}
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