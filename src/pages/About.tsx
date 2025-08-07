import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Award,
  Shield,
  Clock,
  Target,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOHelmet from '../components/SEOHelmet';

const About = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [fade, setFade] = useState(true);
  const [prevIndex, setPrevIndex] = useState(0);
  const location = useLocation();
  const { t } = useTranslation();

  const heroImages = [
    { src: '/hero.jpg', caption: 'Notre équipe' },
    { src: '/arm.jpg', caption: 'Matériel de qualité' },
    { src: '/pexels-kseniachernaya-5691642.jpg', caption: 'Installation professionnelle' },
    { src: '/pexels-lamiko-3616745.jpg', caption: 'Solutions innovantes' },
    { src: '/prise entrer.jpg', caption: 'Prises sécurisées' },
    { src: '/Card.jpg', caption: 'Finitions impeccables' },
  ];

  const triggerFade = useCallback(
    (nextIndex: number) => {
    setFade(false);
    setTimeout(() => {
      setPrevIndex(heroIndex);
      setHeroIndex(nextIndex);
      setFade(true);
      }, 250);
    },
    [heroIndex]
  );

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      triggerFade((heroIndex + 1) % heroImages.length);
    }, 6000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [heroIndex, triggerFade]);

  const goToPrev = () =>
    triggerFade((heroIndex - 1 + heroImages.length) % heroImages.length);
  const goToNext = () => triggerFade((heroIndex + 1) % heroImages.length);

  // Scroll to about section when hash is present
  useEffect(() => {
    if (location.hash === '#about') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        setTimeout(() => {
          aboutSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location.hash]);

  // Animation effect for about section
  useEffect(() => {
    const targetElement = document.getElementById('about');
    if (targetElement && location.hash === '#about') {
      // Add initial animation classes
      targetElement.classList.add('animate-slide-down');
      
      // Add staggered animation to about cards
      const aboutCards = targetElement.querySelectorAll('.about-card');
      aboutCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate-fade-in-up');
        }, 200 + (index * 150));
      });
    }
  }, [location.hash]);

  // Preload images to prevent CLS
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = ['/hero.jpg'].map((src) => {
        return new Promise((resolve) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = resolve;
          image.src = src;
        });
      });
      
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };
    
    preloadImages();
  }, []);

  return (
    <div className="w-full">
      <SEOHelmet
        title="À propos de LIGHT BULB - Votre partenaire électricité au Maroc"
        description="Découvrez l’histoire, la mission et les valeurs de LIGHT BULB. Plus de 20 ans d’expertise en matériel électrique à Mohammedia et dans tout le Maroc."
        keywords="à propos Light Bulb, histoire entreprise électrique, expertise électricité Maroc, Mohammedia électricien, valeurs entreprise"
        image="/LogoLb.png"
        url={typeof window !== 'undefined' ? window.location.href : ''}
      />
      {/* Hero Section */}
      <section className="w-full h-[70vh] min-h-[600px] bg-cover bg-center relative flex items-center justify-center transition-all duration-700 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
            aria-hidden="true"
          />
        
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
              {t('about.hero.title')}
            </span>
            <br />
            <span className="text-white drop-shadow-2xl font-black">
              {t('about.hero.company')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-6xl mx-auto mb-8 leading-relaxed animate-fade-in-up font-medium px-4" style={{ animationDelay: '0.4s' }}>
            <span className="bg-black/40 backdrop-blur-sm px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl leading-relaxed">
              {t('about.hero.description')}
            </span>
          </p>
          
          {/* Stats Preview */}
          <div className="flex items-center gap-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">20+</div>
              <div className="text-sm md:text-base text-white/80">{t('about.companyStory.stats.years')}</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">Tout</div>
              <div className="text-sm md:text-base text-white/80">Le Maroc</div>
              </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">100%</div>
              <div className="text-sm md:text-base text-white/80">Satisfaction</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/contact#devis"
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex items-center gap-3 text-lg"
            >
              <span>{t('contact.title')}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              to="/services#services"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl border-2 border-white/30 hover:border-white/50 shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex items-center gap-3 text-lg"
            >
              <span>{t('services.title')}</span>
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

      {/* Qui sommes-nous ? */}
      <section id="about" className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white transform transition-all duration-800">
        <div className="w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-600 mb-8 text-center">
            {t('about.companyStory.title')}
          </h2>
          <div className="text-center space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <strong>{t('about.companyStory.description.part1')}</strong> {t('about.companyStory.description.part2')}
            </p>
            <p className="italic text-gray-600 text-lg">
              {t('about.companyStory.values.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Notre Mission & Nos Valeurs */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-yellow-600 mb-6 text-center">
            {t('about.missionValues.title')}
          </h2>
          <p className="text-gray-700 text-center mb-12 text-lg">
            {t('about.missionValues.description')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Carte Excellence */}
            <div className="about-card bg-white border-2 border-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 group hover:-translate-y-2 transform transition-all duration-800">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-2xl text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Award className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">Excellence</h2>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {t('about.missionValues.excellence.description')}
                </p>
              </div>
            </div>

            {/* Carte Confiance */}
            <div className="about-card bg-white border-2 border-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 group hover:-translate-y-2 transform transition-all duration-800">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-2xl text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Shield className="w-8 h-8" />
          </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">Confiance</h2>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {t('about.missionValues.confidence.description')}
                </p>
              </div>
            </div>

            {/* Carte Réactivité */}
            <div className="about-card bg-white border-2 border-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 group hover:-translate-y-2 transform transition-all duration-800">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-2xl text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Clock className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">Réactivité</h2>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {t('about.missionValues.responsiveness.description')}
                </p>
              </div>
            </div>

            {/* Carte Précision */}
            <div className="about-card bg-white border-2 border-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 group hover:-translate-y-2 transform transition-all duration-800">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-2xl text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Target className="w-8 h-8" />
              </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">Précision</h2>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {t('about.missionValues.precision.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Light Bulb ? */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-yellow-600 mb-8 text-center">
            {t('about.whyChooseUs.title')}
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 group hover:translate-x-2 transition-all duration-300">
              <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <p className="text-lg text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                {t('about.whyChooseUs.expertise.description')}
              </p>
            </div>
            <div className="flex items-start space-x-3 group hover:translate-x-2 transition-all duration-300">
              <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <p className="text-lg text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                {t('about.whyChooseUs.familyBusiness.description')}
              </p>
            </div>
            <div className="flex items-start space-x-3 group hover:translate-x-2 transition-all duration-300">
              <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
              <p className="text-lg text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                {t('about.whyChooseUs.fastDelivery.description')}
              </p>
            </div>
            <div className="flex items-start space-x-3 group hover:translate-x-2 transition-all duration-300">
              <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
              <p className="text-lg text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                {t('about.whyChooseUs.customizedSolutions.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre engagement au Maroc */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="w-full flex justify-center">
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/30 group hover:-translate-y-2 max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-yellow-600 mb-6 group-hover:text-yellow-700 transition-colors duration-300">
                {t('about.ourCommitment.title')}
              </h2>
              <div className="flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-yellow-600 mr-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                <span className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{t('about.ourCommitment.location')}</span>
              </div>
              <p className="text-gray-700 text-center text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {t('about.ourCommitment.description')}
              </p>
            </div>
          </div>
                </div>
      </section>

      {/* Contactez-nous */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-gray-50 via-yellow-50 to-gray-100">
        <div className="w-full text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            {t('contact.title')}
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            {t('contact.description.part1')}<br />
            <span className="font-semibold text-gray-800">{t('contact.description.part2')}</span>
          </p>
          
          <p className="font-semibold text-gray-800 mb-10 text-lg">
            {t('contact.callToAction')}
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="tel:+212661067491"
              className="group flex items-center justify-center space-x-3 text-gray-600 hover:text-yellow-600 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5 text-yellow-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
              <span className="text-sm font-semibold">{t('contact.phone')}</span>
            </a>
            
            <a
              href="mailto:contact@lightbulb.ma"
              className="group flex items-center justify-center space-x-3 text-gray-600 hover:text-yellow-600 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 text-yellow-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
              <span className="text-sm font-semibold">{t('contact.email')}</span>
            </a>
            
            <a
              href="https://www.google.com/maps/dir//Light+Bulb+N%C2%B0+248+Hassania+2+bloc+B,+RDC+Bd+de+Riyad+Mohamm%C3%A9dia/@33.6751623,-7.3918596,1876m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0xda7b1d1bad02a91:0xd8b7db26cdd93cd1!2m2!1d-7.3918596!2d33.6751623?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center space-x-3 text-gray-600 hover:text-yellow-600 transition-all duration-300 hover:scale-105"
            >
              <MapPin className="w-5 h-5 text-yellow-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
              <span className="text-sm font-semibold">{t('contact.address')}</span>
            </a>
            </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact#devis"
              className="group relative inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-5 px-10 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-yellow-400/50 transition-all duration-500 text-lg hover:scale-110 hover:-translate-y-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                {t('contact.devis')}
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 group-hover:from-yellow-400/30 group-hover:to-orange-400/30 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
