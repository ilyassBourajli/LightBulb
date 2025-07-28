import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type {
  NavigationItem,
  Language,
  HeaderProps,
} from '../types/navigation';

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
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
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

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <header
      className={`w-full sticky top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-professional shadow-professional border-b border-yellow-200/50'
          : 'bg-white/95 backdrop-blur-professional shadow-professional border-b border-yellow-200/50'
      } ${className}`}
    >
      <div className="w-full responsive-padding flex items-center justify-between py-4 min-h-[64px] relative">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-row items-center gap-4 group focus-ring rounded-xl p-2 transition-all duration-300 hover:scale-105"
          aria-label="Go to homepage"
        >
          <img
            src="/LogoLb.png"
            alt="Light Bulb Logo"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110 animate-float"
          />
          <img
            src="/LogoAndName - Copy.png"
            alt="Light Bulb Name Logo"
            className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
        {/* Centered Navigation */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 z-10">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-link text-base font-bold transition-all duration-300 hover:bg-yellow-50 focus-ring animate-fade-in-up ${
                isActive(item.href)
                  ? 'active'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Right Actions (language, hamburger) */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Language Selector - Desktop */}
          <div className="hidden md:block relative" ref={langDropdownRef}>
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="language-selector"
              aria-haspopup="true"
              aria-expanded={showLangDropdown}
            >
              <Globe className="w-5 h-5" />
              <span>{currentLanguage.label}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  showLangDropdown ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Language Dropdown */}
            {showLangDropdown && (
              <div className="language-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setShowLangDropdown(false);
                    }}
                    className={`language-option ${
                      i18n.language === lang.code
                        ? 'active'
                        : 'text-gray-700'
                    }`}
                  >
                    <span className="font-bold">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger menu for mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-300 transform hover:scale-110 focus-ring"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="transition-all duration-300">
              {isMenuOpen ? (
                <X size={28} className="duration-300" />
              ) : (
                <Menu size={28} className="duration-300" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 no-print">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 transition-opacity duration-300 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="mobile-menu overflow-y-auto bg-white">
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 sm:pt-8 pb-4">
              <div />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-3 rounded-xl text-gray-700 hover:text-yellow-600 bg-gray-100 hover:bg-yellow-50 transition-all duration-300 focus-ring hover:scale-110"
                aria-label="Close menu"
              >
                <X size={28} className="sm:w-8 sm:h-8" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col items-center flex-1 justify-center space-y-6 sm:space-y-8 w-full max-w-sm mx-auto px-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`mobile-menu-link text-lg sm:text-xl transform hover:scale-105 focus-ring ${
                    isActive(item.href)
                      ? 'active shadow-lg'
                      : 'text-gray-700 hover:text-yellow-600 shadow-md hover:shadow-lg'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Language Selector - Mobile */}
            <div className="flex items-center gap-3 sm:gap-4 justify-center py-6 sm:py-8 border-t-2 border-gray-200 mt-auto px-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-base sm:text-lg font-bold border-2 transition-all duration-300 focus-ring hover:scale-105 ${
                    i18n.language === lang.code
                      ? 'bg-yellow-400 text-gray-800 border-yellow-400 shadow-lg'
                      : 'bg-white text-gray-700 border-yellow-400 hover:bg-yellow-400 hover:text-gray-800 shadow-md hover:shadow-lg'
                  }`}
                  aria-current={
                    i18n.language === lang.code ? 'true' : undefined
                  }
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
