import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white p-4 rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300 group"
      aria-label="Remonter en haut de la page"
    >
      <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-200" />
    </button>
  );
};

export default ScrollToTop;