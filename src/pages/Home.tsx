import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Award,
  TrendingUp,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const heroImages = [
  { src: '/acceuil 1.jpg', caption: 'Tableau électrique moderne' },
  { src: '/aceuill 2.jpg', caption: 'Installation professionnelle' },
  { src: '/Last.jpg', caption: 'Matériel de qualité' },
  { src: '/prise entrer.jpg', caption: 'Solutions innovantes' },
  { src: '/arm.jpg', caption: 'Prises sécurisées' },
  { src: '/Card.jpg', caption: 'Finitions impeccables' },
];

const Home = () => {
  const { t } = useTranslation();

  // --- Data Arrays ---
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('home.services.0.title'),
      description: t('home.services.0.description'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('home.services.1.title'),
      description: t('home.services.1.description'),
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t('home.services.2.title'),
      description: t('home.services.2.description'),
      color: 'from-green-500 to-green-600',
    },
  ];

  const [heroIndex, setHeroIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [fade, setFade] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  // Instead of a single background image div, render both the current and previous image, and crossfade them.
  const [prevIndex, setPrevIndex] = useState(0);

  // Preload images to prevent CLS
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = heroImages.map((img) => {
        return new Promise((resolve) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = () => {
            console.warn(`Failed to load image: ${img.src}`);
            resolve; // Continue even if some images fail
          };
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

  // --- Render ---
  return (
    <div>
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
              {t('home.hero.title')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-6xl mx-auto mb-8 leading-relaxed animate-fade-in-up font-medium px-4" style={{ animationDelay: '0.4s' }}>
            <span className="bg-black/40 backdrop-blur-sm px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl leading-relaxed">
              {t('home.hero.subtitle')}
            </span>
          </p>
          
          {/* Caption */}
          {heroImages[heroIndex].caption && (
            <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="inline-flex items-center gap-2 bg-yellow-500/90 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold shadow-2xl">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                {heroImages[heroIndex].caption}
              </div>
            </div>
          )}
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/contact#devis"
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex items-center gap-3 text-lg"
            >
              <span>{t('home.hero.quote')}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              to="/services#services"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl border-2 border-white/30 hover:border-white/50 shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex items-center gap-3 text-lg"
            >
              <span>{t('home.hero.services')}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
          
          {/* Stats Preview */}
          <div className="flex items-center gap-8 mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">20+</div>
              <div className="text-sm md:text-base text-white/80">{t('home.stats.1')}</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">1000+</div>
              <div className="text-sm md:text-base text-white/80">{t('home.stats.2')}</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">24/7</div>
              <div className="text-sm md:text-base text-white/80">{t('home.stats.3')}</div>
            </div>
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

      {/* 2. Stats Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="stat-card border-2 border-yellow-400 bg-gradient-to-br from-white via-yellow-50 to-white rounded-3xl shadow-md hover:shadow-2xl hover:shadow-yellow-200/60 hover:border-yellow-500 transition-all duration-500 group hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-yellow-400 rounded-full shadow-lg mb-4 relative group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="absolute inset-0 rounded-full border-4 border-white opacity-80"></div>
                <TrendingUp className="w-7 h-7 sm:w-10 sm:h-10 text-white relative z-10" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">20+</h3>
              <p className="text-base sm:text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t('home.stats.1')}</p>
            </div>
            <div className="stat-card border-2 border-yellow-400 bg-gradient-to-br from-white via-yellow-50 to-white rounded-3xl shadow-md hover:shadow-2xl hover:shadow-yellow-200/60 hover:border-yellow-500 transition-all duration-500 group hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-yellow-400 rounded-full shadow-lg mb-4 relative group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="absolute inset-0 rounded-full border-4 border-white opacity-80"></div>
                <Users className="w-7 h-7 sm:w-10 sm:h-10 text-white relative z-10" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">1000+</h3>
              <p className="text-base sm:text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t('home.stats.2')}</p>
            </div>
            <div className="stat-card border-2 border-yellow-400 bg-gradient-to-br from-white via-yellow-50 to-white rounded-3xl shadow-md hover:shadow-2xl hover:shadow-yellow-200/60 hover:border-yellow-500 transition-all duration-500 group hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-yellow-400 rounded-full shadow-lg mb-4 relative group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="absolute inset-0 rounded-full border-4 border-white opacity-80"></div>
                <CheckCircle className="w-7 h-7 sm:w-10 sm:h-10 text-white relative z-10" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">500+</h3>
              <p className="text-base sm:text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t('home.stats.0')}</p>
            </div>
            <div className="stat-card border-2 border-yellow-400 bg-gradient-to-br from-white via-yellow-50 to-white rounded-3xl shadow-md hover:shadow-2xl hover:shadow-yellow-200/60 hover:border-yellow-500 transition-all duration-500 group hover:scale-105 hover:-translate-y-2">
              <div className="flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-yellow-400 rounded-full shadow-lg mb-4 relative group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="absolute inset-0 rounded-full border-4 border-white opacity-80"></div>
                <Zap className="w-7 h-7 sm:w-10 sm:h-10 text-white relative z-10" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">24/7</h3>
              <p className="text-base sm:text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t('home.stats.3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="w-full">
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-600 to-orange-500 bg-clip-text text-transparent drop-shadow-xl mb-4">
              Nos Services Principaux
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-500/90 font-medium max-w-2xl mx-auto">
              Des solutions électriques complètes pour tous vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white via-yellow-50 to-white border-2 border-yellow-400 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:shadow-yellow-200/60 hover:border-yellow-500 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 flex flex-col"
              >
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-yellow-400 rounded-xl shadow-lg mb-6 relative group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="absolute inset-0 rounded-xl border-2 border-white opacity-70"></span>
                  <span className="relative z-10">{service.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                <Link
                  to="/services#services"
                  className="inline-flex items-center text-sm sm:text-base text-yellow-600 hover:text-yellow-700 font-semibold transition-colors duration-300 group-hover:translate-x-2"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Pourquoi Choisir Light Bulb ?
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-yellow-500 rounded mb-8"></div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                      Expertise Reconnue
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Plus de 20 ans d'expérience dans le matériel électrique
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                      Service Personnalisé
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Conseils techniques adaptés à vos besoins spécifiques
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                      Qualité Garantie
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Matériel certifié et garantie sur tous nos produits
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-2xl p-6 sm:p-8 lg:p-12 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/30 transition-all duration-500 group">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-yellow-500 rounded-full text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mx-auto">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  Excellence
                </h3>
                <p className="text-lg sm:text-xl text-gray-700 mb-6 group-hover:text-gray-800 transition-colors duration-300">
                  Notre engagement quotidien
                </p>
                <div className="flex items-center justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="w-full text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact#devis"
              className="btn-primary animate-fade-in-up flex items-center gap-2 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/services#services"
              className="inline-flex items-center bg-transparent text-white border-2 border-white hover:bg-white hover:text-yellow-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:-translate-y-1"
            >
              Voir nos services
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
