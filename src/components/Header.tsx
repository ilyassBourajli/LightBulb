import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface NavigationItem {
  name: string;
  href: string;
}

interface Language {
  code: string;
  label: string;
  flag: string;
}

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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
          aria-label="Aller à la page d'accueil"
        >
          <img
            src="/LogoLb.png"
            alt="Light Bulb Logo"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <img
            src="/LogoAndName - Copy.png"
            alt="Light Bulb Name Logo"
            className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Centered Navigation - Desktop */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 z-10">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-link text-base font-bold transition-all duration-300 hover:bg-yellow-50 focus-ring ${
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
              aria-label="Sélectionner la langue"
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
            className="lg:hidden p-3 rounded-full text-gray-700 hover:text-yellow-600 bg-yellow-100 hover:bg-yellow-200 transition-all duration-300 transform hover:scale-110 focus-ring shadow-lg border-2 border-yellow-200"
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
          >
            <div className="transition-all duration-300">
              {isMenuOpen ? (
                <X size={24} className="duration-300" />
              ) : (
                <Menu size={24} className="duration-300" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[9999] no-print ${isMenuOpen ? 'block' : 'hidden'}`} ref={menuRef}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 transition-opacity duration-500 backdrop-blur-lg"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <div className={`mobile-menu overflow-y-auto bg-gradient-to-br from-white via-yellow-50 to-white flex flex-col ${isMenuOpen ? 'open' : ''}`}>
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 pt-8 sm:pt-10 pb-6 border-b-2 border-yellow-200/50">
            <div className="flex items-center gap-3">
              <img
                src="/LogoLb.png"
                alt="Light Bulb Logo"
                className="h-10 w-auto object-contain"
              />
              <img
                src="/LogoAndName - Copy.png"
                alt="Light Bulb Name Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-3 rounded-full text-gray-700 hover:text-yellow-600 bg-yellow-100 hover:bg-yellow-200 transition-all duration-300 focus-ring hover:scale-110 shadow-lg"
              aria-label="Fermer le menu"
            >
              <X size={24} className="sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 w-full max-w-sm mx-auto px-6 sm:px-8 py-8 flex-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`mobile-menu-link w-full text-center py-4 px-6 rounded-2xl font-semibold text-lg sm:text-xl transform hover:scale-105 focus-ring transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isActive(item.href)
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-yellow-300/50'
                    : 'bg-white text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 border-2 border-transparent hover:border-yellow-300'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Selector - Mobile */}
          <div className="flex items-center gap-3 sm:gap-4 justify-center py-8 border-t-2 border-yellow-200/50 px-6 sm:px-8">
            <div className="flex gap-2 sm:gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 sm:px-5 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-bold border-2 transition-all duration-300 focus-ring hover:scale-105 shadow-md hover:shadow-lg ${
                    i18n.language === lang.code
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white border-yellow-400 shadow-yellow-300/50'
                      : 'bg-white text-gray-700 border-yellow-300 hover:bg-yellow-50 hover:border-yellow-400'
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
      </div>
    </header>
  );
};

export default Header;
