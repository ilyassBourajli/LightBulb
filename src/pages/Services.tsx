import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Zap,
  ShoppingCart,
  Wrench,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const heroImages = [
  { src: '/hero.jpg', caption: 'Tableau électrique moderne' },
  { src: '/arm.jpg', caption: 'Installation professionnelle' },
  { src: '/pexels-kseniachernaya-5691642.jpg', caption: 'Matériel de qualité' },
  { src: '/pexels-lamiko-3616745.jpg', caption: 'Solutions innovantes' },
  { src: '/prise entrer.jpg', caption: 'Prises sécurisées' },
  { src: '/Card.jpg', caption: 'Finitions impeccables' },
];

const Services = () => {
  const mainServices = [
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'Vente & Distribution',
      subtitle: 'Matériel Électrique Professionnel',
      description:
        'Large gamme de matériel électrique de qualité : câbles, disjoncteurs, tableaux électriques, éclairage, prises et interrupteurs.',
      features: [
        'Marques européennes certifiées',
        'Stock permanent disponible',
        'Conseils techniques personnalisés',
        'Livraison rapide partout au Maroc',
        'Tarifs préférentiels professionnels',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Installation Électrique',
      subtitle: 'Résidentiel & Commercial',
      description:
        "Installation complète de systèmes électriques neufs ou rénovation d'installations existantes selon les normes en vigueur.",
      features: [
        'Étude et conception sur mesure',
        'Installation tableaux électriques',
        'Câblage et raccordements',
        'Mise en conformité',
        'Test et mise en service',
      ],
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Maintenance & Dépannage',
      subtitle: 'Service 24h/7j',
      description:
        "Services de maintenance préventive et interventions d'urgence pour assurer la continuité de vos équipements électriques.",
      features: [
        "Dépannage d'urgence 24h/7j",
        'Maintenance préventive programmée',
        'Diagnostic et réparation',
        'Remplacement de composants',
        'Contrats de maintenance',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Travaux Divers',
      subtitle: 'Solutions Complètes',
      description:
        'Tous types de travaux électriques : éclairage, prises, interrupteurs, mise à la terre, protection contre la foudre.',
      features: [
        'Éclairage intérieur et extérieur',
        'Installation prises et interrupteurs',
        'Mise à la terre et protection',
        'Automatisation et domotique',
        'Conformité et certification',
      ],
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const additionalServices = [
    'Études et conseils techniques',
    'Devis gratuits et détaillés',
    'Garantie sur tous nos travaux',
    'Formation et accompagnement',
    'Service après-vente réactif',
  ];

  // Carousel logic (same as Home/About)
  const [heroIndex, setHeroIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [fade, setFade] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images to prevent CLS
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = heroImages.map((img) => {
        return new Promise((resolve) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = resolve;
          image.src = img.src;
        });
      });
      
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };
    
    preloadImages();
  }, []);

  const triggerFade = useCallback(
    (nextIndex: number) => {
      setFade(false);
      setTimeout(() => {
        setPrevIndex(heroIndex);
        setHeroIndex(nextIndex);
        setFade(true);
      }, 250); // Réduit à 250ms pour une transition plus rapide
    },
    [heroIndex]
  );

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      triggerFade((heroIndex + 1) % heroImages.length);
    }, 6000); // Augmenté de 5000ms à 6000ms pour plus de temps de lecture
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [heroIndex, triggerFade]);

  const goToPrev = () =>
    triggerFade((heroIndex - 1 + heroImages.length) % heroImages.length);
  const goToNext = () => triggerFade((heroIndex + 1) % heroImages.length);

  const location = useLocation();

  // Scroll to services section when hash is present
  useEffect(() => {
    if (location.hash === '#services') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        setTimeout(() => {
          servicesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location.hash]);

  // Animation effect for services section
  useEffect(() => {
    const targetElement = document.getElementById('services');
    if (targetElement && location.hash === '#services') {
      // Add initial animation classes
      targetElement.classList.add('animate-slide-down');
      
      // Add staggered animation to service cards
      const serviceCards = targetElement.querySelectorAll('.service-card');
      serviceCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate-fade-in-up');
        }, 200 + (index * 150));
      });
    }
  }, [location.hash]);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="w-full h-[70vh] min-h-[600px] bg-cover bg-center relative flex items-center justify-center transition-all duration-700 overflow-hidden">
        {/* Simple Crossfade Background Images */}
        <div className="absolute inset-0 z-0">
          {/* Current Image */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${heroImages[heroIndex].src}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            aria-hidden="true"
          />
          {/* Previous Image for simple crossfade */}
          {heroIndex !== prevIndex && (
            <div
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                fade ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                backgroundImage: `url('${heroImages[prevIndex].src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              aria-hidden="true"
            />
          )}
        </div>
        
        {/* Enhanced Overlay with Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" aria-hidden="true"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        {/* Carousel Controls */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-between items-center px-4 sm:px-6 lg:px-8 pointer-events-none">
          <button
            onClick={goToPrev}
            className="carousel-control pointer-events-auto bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-black/70 focus-ring"
            aria-label="Image précédente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="carousel-control pointer-events-auto bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-black/70 focus-ring"
            aria-label="Image suivante"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Main Content */}
        <div className="relative w-full flex flex-col items-center justify-center gap-8 z-20 px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo Section */}
          <div className="flex items-center gap-4 mb-4 animate-fade-in-up">
            <img
              src="/LogoLb.png"
              alt="Light Bulb Logo"
              className="h-16 w-auto object-contain drop-shadow-2xl"
            />
            <img
              src="/LogoAndName - Copy.png"
              alt="Light Bulb Name Logo"
              className="h-14 w-auto object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
              Nos
            </span>
            <br />
            <span className="text-white drop-shadow-2xl font-black">
              Services
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-6xl mx-auto mb-8 leading-relaxed animate-fade-in-up font-medium px-4" style={{ animationDelay: '0.4s' }}>
            <span className="bg-black/40 backdrop-blur-sm px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl leading-relaxed">
              Solutions électriques complètes pour tous vos besoins professionnels et résidentiels
            </span>
          </p>
          
          {/* Service Categories Preview */}
          <div className="flex items-center gap-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">Installation</div>
              <div className="text-sm md:text-base text-white/80">Professionnelle</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">Maintenance</div>
              <div className="text-sm md:text-base text-white/80">Préventive</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">Urgence</div>
              <div className="text-sm md:text-base text-white/80">24/7</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/contact#devis"
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex items-center gap-3 text-lg"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              to="/projects#projects"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl border-2 border-white/30 hover:border-white/50 shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex items-center gap-3 text-lg"
            >
              <span>Voir nos réalisations</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
        
        {/* Carousel Dots - Moved outside main content */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex space-x-1 pointer-events-none">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => triggerFade(index)}
              className={`carousel-dot pointer-events-auto w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 focus-ring ${
                index === heroIndex
                  ? 'bg-yellow-400/80 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="w-full">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Services Principaux
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Des solutions adaptées à tous vos besoins électriques
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white border-2 border-yellow-300 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 group hover:-translate-y-2 transform transition-all duration-800"
              >
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg text-yellow-600 mb-4 group-hover:text-yellow-700 transition-colors duration-300">
                  {service.subtitle}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 group-hover:translate-x-2 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                      <span className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact#devis"
                  className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:-translate-y-1"
                >
                  Demander un devis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="w-full">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Services Complémentaires
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Des prestations supplémentaires pour vous accompagner
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-yellow-300 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 group hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                    {service}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="w-full">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Notre Processus
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Une approche structurée pour garantir votre satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '1', title: 'Consultation', desc: 'Analyse de vos besoins' },
              { step: '2', title: 'Devis', desc: 'Proposition détaillée' },
              { step: '3', title: 'Réalisation', desc: 'Exécution du projet' },
              { step: '4', title: 'Suivi', desc: 'Accompagnement continu' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-yellow-300 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 text-center group hover:-translate-y-2"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency & CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-yellow-50">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Emergency Card */}
            <div className="bg-white border-2 border-yellow-300 rounded-2xl p-8 sm:p-12 lg:p-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 group hover:-translate-y-2">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-red-500 rounded-full text-white mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  Urgence 24h/7j
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 group-hover:text-gray-700 transition-colors duration-300">
                  Intervention rapide pour tous vos problèmes électriques urgents
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:-translate-y-1"
                  >
                    Appel d'urgence
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white border-2 border-yellow-300 rounded-2xl p-8 sm:p-12 lg:p-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 group hover:-translate-y-2">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-yellow-500 rounded-full text-white mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  Prêt à Démarrer Votre Projet ?
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 group-hover:text-gray-700 transition-colors duration-300">
                  Contactez-nous pour un devis gratuit et personnalisé
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    to="/contact#devis"
                    className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:-translate-y-1"
                  >
                    Demander un devis
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
