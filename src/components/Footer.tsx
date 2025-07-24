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
    <footer className="bg-[#232323] text-white pt-12 pb-6 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-10">
        {/* Ressources */}
        <div>
          <h4 className="text-xs font-bold uppercase mb-4 tracking-widest">RESSOURCES</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:underline">Nous contacter</Link></li>
            <li><a href="#faq" className="hover:underline">FAQ - Questions fréquentes</a></li>
            <li className="flex items-center gap-2 mt-2 text-xs text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 0 1 8 0v2m-4-4v4m-4 4h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2z" /></svg>
              Accessibilité sourds ou malentendants
            </li>
          </ul>
        </div>
        {/* Site Internet */}
        <div>
          <h4 className="text-xs font-bold uppercase mb-4 tracking-widest">SITE INTERNET</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/plan-du-site" className="hover:underline">Plan du site</Link></li>
            <li><a href="#incident" className="hover:underline">Incident sécurité</a></li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h4 className="text-xs font-bold uppercase mb-4 tracking-widest">NEWSLETTER</h4>
          <p className="text-xs text-gray-300 mb-3">Recevez par e-mail la newsletter Light Bulb : Découvrez en avant-première les nouveautés et innovations. Laissez-vous inspirer et restez toujours au courant !</p>
          <Link to="#newsletter" className="inline-flex items-center text-sm font-semibold hover:underline group">
            S'inscrire <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        {/* Réseaux Sociaux */}
        <div>
          <h4 className="text-xs font-bold uppercase mb-4 tracking-widest">RÉSEAUX SOCIAUX</h4>
          <div className="flex space-x-3 mt-2">
            <a href="" className="bg-white/10 hover:bg-white/20 p-2 rounded transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="" className="bg-white/10 hover:bg-white/20 p-2 rounded transition-colors" aria-label="Instagram"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1-6.25 6.25 6.25 6.25 0 0 1 6.25-6.25zm0 1.5a4.75 4.75 0 1 0 4.75 4.75A4.75 4.75 0 0 0 12 5.25zm6.5 1.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg></a>
            <a href="" className="bg-white/10 hover:bg-white/20 p-2 rounded transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <a href="" className="bg-white/10 hover:bg-white/20 p-2 rounded transition-colors" aria-label="YouTube"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.072 0 12 0 12s0 3.928.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.928 24 12 24 12s0-3.928-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            <a href="" className="bg-white/10 hover:bg-white/20 p-2 rounded transition-colors" aria-label="TikTok"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.004 2.003c.001-.001.001-.001 0 0zm6.993 2.001c-.001 0-.001 0 0 0zm2.001 6.995c0-.001 0-.001 0 0zm-2.001 6.997c.001 0 .001 0 0 0zm-6.993 2.001c0 .001 0 .001 0 0zm-6.995-2.001c.001 0 .001 0 0 0zm-2.001-6.997c0 .001 0 .001 0 0zm2.001-6.995c-.001 0-.001 0 0 0zm6.995-2.001c0-.001 0-.001 0 0zm0 0c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18.001c-4.418 0-8.001-3.583-8.001-8.001s3.583-8.001 8.001-8.001 8.001 3.583 8.001 8.001-3.583 8.001-8.001 8.001zm2.001-13.001h-2v6.001c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2c.552 0 1 .447 1 1h2c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3c1.654 0 3-1.346 3-3v-4.001h2v-2z"/></svg></a>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 mt-6 text-xs text-gray-400 gap-2">
        <div>© Light Bulb 2024 - Tous droits réservés</div>
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          <span>#Améliorons les vies</span>
          <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
          <a href="#accessibilite" className="hover:underline">Accessibilité</a>
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