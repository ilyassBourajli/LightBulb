import React, { useState, useEffect } from 'react';
import { Cookie, X, Check } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-yellow-400 shadow-2xl p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Cookie className="w-8 h-8 text-yellow-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Cookies et Confidentialité</h3>
              <p className="text-sm text-gray-600">
                Nous utilisons des cookies techniques nécessaires au bon fonctionnement du site. 
                Aucun cookie de tracking n'est utilisé. En continuant, vous acceptez notre utilisation des cookies.
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={acceptCookies}
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Check className="w-4 h-4 mr-2" />
              Accepter
            </button>
            <button
              onClick={declineCookies}
              className="inline-flex items-center bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <X className="w-4 h-4 mr-2" />
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;