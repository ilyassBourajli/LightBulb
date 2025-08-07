import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/LogoLb.png',
        '/LogoAndName - Copy.png',
        '/hero.jpg',
        '/acceuil 1.jpg',
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Lazy load non-critical images
    const lazyLoadImages = () => {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    };

    // Optimize fonts
    const optimizeFonts = () => {
      const fontLink = document.createElement('link');
      fontLink.rel = 'preconnect';
      fontLink.href = 'https://fonts.googleapis.com';
      document.head.appendChild(fontLink);

      const fontLink2 = document.createElement('link');
      fontLink2.rel = 'preconnect';
      fontLink2.href = 'https://fonts.gstatic.com';
      fontLink2.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink2);
    };

    // Reduce layout shifts
    const reduceLayoutShifts = () => {
      // Add aspect ratio containers for images
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach((img) => {
        const wrapper = document.createElement('div');
        wrapper.style.aspectRatio = '16/9';
        wrapper.style.overflow = 'hidden';
        img.parentNode?.insertBefore(wrapper, img);
        wrapper.appendChild(img);
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeFonts();
    
    // Run after DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        lazyLoadImages();
        reduceLayoutShifts();
      });
    } else {
      lazyLoadImages();
      reduceLayoutShifts();
    }

    // Cleanup
    return () => {
      // Remove any event listeners if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;