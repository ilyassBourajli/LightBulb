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
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-primary bg-white text-secondary hover:bg-pink-500 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1-6.25 6.25 6.25 6.25 0 0 1 6.25-6.25zm0 1.5a4.75 4.75 0 1 0 4.75 4.75A4.75 4.75 0 0 0 12 5.25zm6.5 1.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-primary bg-white text-secondary hover:bg-blue-600 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-primary bg-white text-secondary hover:bg-blue-800 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.062-1.867-3.062-1.868 0-2.154 1.459-2.154 2.967v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.594v5.602z"/></svg>
              </a>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <Link to="/mentions-legales" className="text-secondary hover:text-primary text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">Mentions légales</Link>
              <Link to="/politique-confidentialite" className="text-secondary hover:text-primary text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">Politique de confidentialité</Link>
              <Link to="/conditions-utilisation" className="text-secondary hover:text-primary text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">Conditions d'utilisation</Link>
            </div>
            {/* Mini Contact Form */}
            <form className="flex flex-col gap-2 mt-6 w-full max-w-xs" autoComplete="off" onSubmit={e => { e.preventDefault(); /* handle submit here */ }}>
              <input type="text" name="footer_name" required placeholder="Votre nom" className="px-3 py-2 rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all text-sm" aria-label="Votre nom" />
              <input type="email" name="footer_email" required placeholder="Votre email" className="px-3 py-2 rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all text-sm" aria-label="Votre email" />
              <textarea name="footer_message" required placeholder="Votre message" className="px-3 py-2 rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all text-sm" aria-label="Votre message" rows={2} />
              <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400">Envoyer</button>
            </form>
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