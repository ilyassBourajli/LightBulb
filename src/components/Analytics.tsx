import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const Analytics: React.FC = () => {
  useEffect(() => {
    // Initialize Google Analytics
    const initGA = () => {
      // Only in production
      if (process.env.NODE_ENV !== 'production') {
        return;
      }

      // Replace with your actual GA4 measurement ID
      const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

      // Create script tag
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Track page views
    const trackPageView = (url: string) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', 'G-XXXXXXXXXX', {
          page_path: url,
        });
      }
    };

    // Track events
    const trackEvent = (action: string, category: string, label?: string, value?: number) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }
    };

    // Initialize analytics
    initGA();

    // Track initial page view
    trackPageView(window.location.pathname);

    // Track route changes (for SPA)
    const handleRouteChange = () => {
      trackPageView(window.location.pathname);
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);

    // Track common interactions
    const trackInteractions = () => {
      // Track WhatsApp button clicks
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.closest('[href*="wa.me"]')) {
          trackEvent('click', 'contact', 'whatsapp_button');
        }
        if (target.closest('[href*="tel:"]')) {
          trackEvent('click', 'contact', 'phone_call');
        }
        if (target.closest('[href*="mailto:"]')) {
          trackEvent('click', 'contact', 'email');
        }
      });

      // Track form submissions
      document.addEventListener('submit', (e) => {
        const form = e.target as HTMLFormElement;
        if (form.querySelector('[name="message"]')) {
          trackEvent('submit', 'form', 'contact_form');
        }
      });
    };

    trackInteractions();

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
};

export default Analytics;