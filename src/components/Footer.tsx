import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Company Info */}
          <div className="flex flex-col items-start space-y-6 text-left">
            <img src="/LogoAndName.png" alt="Light Bulb Logo" className="w-40 h-40 object-contain drop-shadow-2xl ml-8" />
            <p className="text-gray-300 max-w-xs leading-relaxed">
              {t('footer.company.more')}
            </p>
            <a href="tel:+212523000000" className="bg-primary hover:bg-white text-secondary px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              <Phone className="w-5 h-5" />
              <span>Appeler Maintenant</span>
            </a>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col items-start space-y-6">
            <h4 className="text-lg font-semibold text-white">{t('footer.links.title')}</h4>
            <ul className="space-y-3">
              {[{ name: t('nav.home'), href: '/' },
                { name: t('nav.about'), href: '/a-propos' },
                { name: t('nav.services'), href: '/services' },
                { name: t('nav.products'), href: '/produits' },
                { name: t('nav.projects'), href: '/realisations' },
                { name: t('nav.contact'), href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white hover:text-primary transition-all duration-200 flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col items-start space-y-6">
            <h4 className="text-lg font-semibold text-white">{t('footer.contact.title')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <p className="text-gray-300 text-base">{t('footer.contact.address.1')}</p>
                  <p className="text-gray-300 text-base">{t('footer.contact.address.2')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <a href="tel:+212523000000" className="text-gray-300 text-base hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  {t('footer.contact.phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <a href="mailto:contact@lightbbulb.ma" className="text-white text-base hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  {t('footer.contact.email')}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-gray-300 text-base">{t('footer.contact.hours')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 LIGHT BULB. {t('footer.copyright')}
          </p>
          <div className="flex space-x-6">
            <Link to="/mentions-legales" className="text-secondary hover:text-primary text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
      {/* Back to Top Button */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 left-6 z-50 bg-gray-200 hover:bg-gray-300 text-gray-500 rounded-full shadow p-2 flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cad0dd]" aria-label="Remonter en haut">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;