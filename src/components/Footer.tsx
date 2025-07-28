import React, { useEffect, useState } from 'react';
import { ArrowRight, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-white to-yellow-50 text-gray-800 pt-16 pb-8 border-t border-yellow-200/50 w-full">
      <div className="w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 px-8 sm:px-12 lg:px-20">
          {/* Logo Section - Enhanced */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-4 mb-6 group">
              <div className="relative">
                <img
                  src="/LogoLb.png"
                  alt="Light Bulb Logo"
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <img
                src="/LogoAndName - Copy.png"
                alt="Light Bulb Name"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-gray-600 text-center lg:text-left leading-relaxed max-w-sm">
              Découvrez l'innovation et laissez-vous inspirer par nos solutions
              créatives qui
              <span className="font-semibold text-yellow-600">
                {' '}
                transforment les idées en réalité
              </span>
              .
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-yellow-600">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              #Améliorons les vies
            </div>
          </div>

          {/* Resources Section */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase mb-6 tracking-wider text-gray-800 relative">
              RESSOURCES
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-yellow-400"></div>
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/contact#devis"
                  className="text-gray-600 hover:text-yellow-600 transition-all duration-200 hover:translate-x-1 inline-block group"
                >
                  <span className="border-b border-transparent group-hover:border-yellow-600 transition-colors duration-200">
                    Nous contacter
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-yellow-600 transition-all duration-200 hover:translate-x-1 inline-block group"
                >
                  <span className="border-b border-transparent group-hover:border-yellow-600 transition-colors duration-200">
                    FAQ - Questions fréquentes
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-gray-600 hover:text-yellow-600 transition-all duration-200 hover:translate-x-1 inline-block group"
                >
                  <span className="border-b border-transparent group-hover:border-yellow-600 transition-colors duration-200">
                    Support technique
                  </span>
                </a>
              </li>
            </ul>

            <div className="mt-6 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <svg
                  className="w-4 h-4 mt-0.5 text-yellow-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Accessibilité sourds ou malentendants</span>
              </div>
            </div>
          </div>

          {/* Site Internet Section */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase mb-6 tracking-wider text-gray-800 relative">
              SITE INTERNET
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-yellow-400"></div>
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/plan-du-site"
                  className="text-gray-600 hover:text-yellow-600 transition-all duration-200 hover:translate-x-1 inline-block group"
                >
                  <span className="border-b border-transparent group-hover:border-yellow-600 transition-colors duration-200">
                    Plan du site
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#incident"
                  className="text-gray-600 hover:text-yellow-600 transition-all duration-200 hover:translate-x-1 inline-block group"
                >
                  <span className="border-b border-transparent group-hover:border-yellow-600 transition-colors duration-200">
                    Incident sécurité
                  </span>
                </a>
              </li>
              <li>
                <Link
                  to="/mentions-legales"
                  className="text-gray-600 hover:text-yellow-600 transition-all duration-200 hover:translate-x-1 inline-block group"
                >
                  <span className="border-b border-transparent group-hover:border-yellow-600 transition-colors duration-200">
                    Mentions légales
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#accessibilite"
                  className="text-gray-600 hover:text-yellow-600 transition-all duration-200 hover:translate-x-1 inline-block group"
                >
                  <span className="border-b border-transparent group-hover:border-yellow-600 transition-colors duration-200">
                    Accessibilité
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social Section */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase mb-6 tracking-wider text-gray-800 relative">
              NEWSLETTER & RÉSEAUX
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-yellow-400"></div>
            </h4>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200 mb-6">
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Recevez par e-mail la newsletter Light Bulb : Découvrez en
                avant-première les
                <span className="font-semibold text-yellow-700">
                  {' '}
                  nouveautés et innovations
                </span>
                . Laissez-vous inspirer et restez toujours au courant !
              </p>
              <a
                href="#newsletter"
                className="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg group"
              >
                S'inscrire maintenant
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase mb-4 tracking-wider text-gray-700">
                SUIVEZ-NOUS
              </h5>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#facebook"
                  className="group bg-white hover:bg-blue-50 p-3 rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-200 transition-all duration-200 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                </a>
                <a
                  href="https://www.instagram.com/bulb7677?igsh=MXNkbTFwaml1c3FvOA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white hover:bg-pink-50 p-3 rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-pink-200 transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-pink-600 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1-6.25 6.25 6.25 6.25 0 0 1 6.25-6.25zm0 1.5a4.75 4.75 0 1 0 4.75 4.75A4.75 4.75 0 0 0 12 7.25zm6.5 1.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/light-bulb-741a9833b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white hover:bg-blue-50 p-3 rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-200 transition-all duration-200 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                </a>
                <a
                  href="https://www.tiktok.com/@light20bulb?_t=ZM-8yJ0bgD9ZWo&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white hover:bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:scale-110"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-yellow-200 pt-8 text-sm gap-4 px-8 sm:px-12 lg:px-20">
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span>© Light Bulb 2024 - Tous droits réservés</span>
          </div>
          <div className="flex items-center gap-6 text-gray-500">
            <span className="text-xs">Fait avec ❤️ au Maroc</span>
          </div>
        </div>
      </div>

      {/* Enhanced Back to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl p-4 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300 group"
          aria-label="Remonter en haut"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;
