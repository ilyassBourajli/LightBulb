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
  { src: '/acceuil 5.jpg', caption: 'Prises sécurisées' },
  { src: '/prise.jpg', caption: 'Finitions impeccables' },
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
  // Instead of a single background image div, render both the current and previous image, and crossfade them.
  const [prevIndex, setPrevIndex] = useState(0);

  const triggerFade = useCallback(
    (nextIndex: number) => {
      setFade(false);
      setTimeout(() => {
        setPrevIndex(heroIndex);
        setHeroIndex(nextIndex);
        setFade(true);
      }, 300);
    },
    [heroIndex]
  );

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      triggerFade((heroIndex + 1) % heroImages.length);
    }, 5000);
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
      <section className="w-full min-h-[60vh] bg-cover bg-center relative flex items-center justify-center transition-all duration-700">
        {/* Crossfade Background Images */}
        <div className="absolute inset-0 z-0">
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              fade ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url('${heroImages[heroIndex].src}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />
          {heroIndex !== prevIndex && (
            <div
              className={`absolute inset-0 transition-all duration-700 opacity-0 scale-100`}
              style={{
                backgroundImage: `url('${heroImages[prevIndex].src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              aria-hidden="true"
            />
          )}
        </div>
        {/* Top dark overlay for text readability */}
        <div
          className="absolute inset-0 z-10 hero-overlay pointer-events-none"
          aria-hidden="true"
        ></div>
        <div className="relative w-full flex flex-col items-center justify-center gap-6 z-20 responsive-padding text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-clip-text text-transparent drop-shadow-xl animate-fade-in-up tracking-wide">
            Solutions <span className="ml-2 font-extrabold text-white drop-shadow-md">Électriques Professionnelles</span>
          </h1>
          <p className="text-body-large text-white/95 max-w-4xl mx-auto mb-4 leading-relaxed lg:bg-black/20 lg:rounded-2xl lg:px-8 lg:py-4 lg:backdrop-blur-professional animate-fade-in-up text-shadow">
            Pour Résidences et Entreprises : sécurité, innovation et expertise à
            votre service.
          </p>
          {/* Caption and Button Grouped */}
          {heroImages[heroIndex].caption && (
            <div className="flex flex-col items-center gap-4 mt-4 mb-6">
              <div className="heading-tertiary bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent text-shadow-lg animate-scale-in animate-float">
                {heroImages[heroIndex].caption}
              </div>
              <div className="btn-group-professional mt-4">
                <Link
                  to="/contact"
                  className="btn-primary animate-fade-in-up flex items-center gap-2 animate-pulse-glow"
                >
                  Demander un devis
                  <ArrowRight
                    className="w-5 h-5 ml-2 flex-shrink-0"
                    style={{ verticalAlign: 'middle' }}
                  />
                </Link>
                <Link
                  to="/services"
                  className="btn-secondary animate-fade-in-up flex items-center gap-2"
                >
                  Nos services
                  <ArrowRight
                    className="w-5 h-5 ml-2 flex-shrink-0"
                    style={{ verticalAlign: 'middle' }}
                  />
                </Link>
              </div>
            </div>
          )}
          {/* Carousel Controls */}
          <div className="absolute left-0 right-0 flex justify-between items-center px-4 top-1/2 -translate-y-1/2 pointer-events-none select-none">
            <button
              onClick={goToPrev}
              aria-label="Image précédente"
              className="pointer-events-auto carousel-control"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              aria-label="Image suivante"
              className="pointer-events-auto carousel-control"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          {/* Dots - move below main content */}
          <div className="flex justify-center gap-3 mt-12 mb-4">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => triggerFade(idx)}
                aria-label={`Aller à l'image ${idx + 1}`}
                className={`carousel-dot ${
                  heroIndex === idx
                    ? 'active'
                    : 'inactive'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="section-padding-sm bg-gradient-to-br from-gray-50 to-white w-full px-0">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-center">
          <div className="stat-card text-center animate-fade-in-up hover:shadow-blue-400/60 hover:shadow-2xl transition-all duration-300 border-2 border-yellow-300 p-4 sm:p-6">
            <Award className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-yellow-500 mx-auto animate-float" />
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 sm:mb-2">500+</div>
            <div className="text-sm sm:text-base text-gray-600 font-semibold">
              Projets Réalisés
            </div>
          </div>
          <div className="stat-card text-center animate-fade-in-up hover:shadow-blue-400/60 hover:shadow-2xl transition-all duration-300 border-2 border-yellow-300 p-4 sm:p-6" style={{ animationDelay: '100ms' }}>
            <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-yellow-500 mx-auto animate-float" style={{ animationDelay: '0.5s' }} />
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 sm:mb-2">20+</div>
            <div className="text-sm sm:text-base text-gray-600 font-semibold">
              Années d'Expérience
            </div>
          </div>
          <div className="stat-card text-center animate-fade-in-up hover:shadow-blue-400/60 hover:shadow-2xl transition-all duration-300 border-2 border-yellow-300 p-4 sm:p-6" style={{ animationDelay: '200ms' }}>
            <Users className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-yellow-500 mx-auto animate-float" style={{ animationDelay: '1s' }} />
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 sm:mb-2">100%</div>
            <div className="text-sm sm:text-base text-gray-600 font-semibold">
              Clients Satisfaits
            </div>
          </div>
          <div className="stat-card text-center animate-fade-in-up hover:shadow-blue-400/60 hover:shadow-2xl transition-all duration-300 border-2 border-yellow-300 p-4 sm:p-6" style={{ animationDelay: '300ms' }}>
            <Clock className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-yellow-500 mx-auto animate-float" style={{ animationDelay: '1.5s' }} />
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 sm:mb-2">24h</div>
            <div className="text-sm sm:text-base text-gray-600 font-semibold">
              Service d'Urgence
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="section-padding bg-white w-full px-0">
        <div className="w-full text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
          <h2 className="heading-secondary text-gray-900 mb-6 sm:mb-8 animate-fade-in-up">
            Nos Services
          </h2>
          <p className="text-body-large text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Vente, installation et maintenance électrique professionnelles.
            <br className="hidden sm:block" />
            Nous couvrons tous vos besoins avec professionnalisme.
          </p>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 justify-center">
          {services.map((service, index) => {
            let iconBg = '';
            if (index === 0) iconBg = 'bg-blue-500';
            else if (index === 1) iconBg = 'bg-yellow-500';
            else if (index === 2) iconBg = 'bg-green-500';

            return (
              <div
                key={index}
                className="service-card min-h-[280px] sm:min-h-[320px] text-center animate-fade-in-up hover:shadow-blue-400/60 hover:shadow-2xl transition-all duration-300 border-2 border-yellow-300 p-6 sm:p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`service-card-icon ${iconBg} mb-6 sm:mb-8 mx-auto w-16 h-16 sm:w-20 sm:h-20`}
                >
                  {React.cloneElement(service.icon, { className: 'w-8 h-8 sm:w-10 sm:h-10 text-white' })}
                </div>

                <h3 className="heading-tertiary text-gray-900 mb-3 sm:mb-4 text-lg sm:text-xl">
                  {service.title}
                </h3>
                <p className="text-body text-gray-600 mb-6 sm:mb-8 max-w-sm mx-auto text-sm sm:text-base">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="btn-primary mt-auto text-sm sm:text-base px-6 sm:px-8 py-3"
                >
                  Demander un Devis
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white w-full px-0">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* 4.1 Left Column */}
          <div className="space-y-professional-lg animate-fade-in-left flex-1 w-full">
            <div>
              <h2 className="heading-primary text-gray-900 mb-6 sm:mb-8 relative inline-block text-2xl sm:text-3xl lg:text-4xl">
                Pourquoi Choisir{' '}
                <span className="gradient-text cursor-pointer hover:scale-105 transition-transform duration-300">
                  LIGHT BULB
                </span>
                <span className="text-yellow-500"> ?</span>
                <span className="block w-16 sm:w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-3 sm:mt-4"></span>
              </h2>
              <p className="text-body-large text-gray-600 leading-relaxed max-w-2xl text-sm sm:text-base">
                Notre expertise et notre engagement envers la qualité font de
                nous le partenaire idéal pour tous vos projets électriques à
                Mohammedia.
              </p>
            </div>
            {/* 4.2 Right Column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Plus de 10 ans d'expérience",
                'Équipe certifiée et qualifiée',
                'Matériel de qualité européenne',
                'Service client réactif',
                'Devis gratuit sous 24h',
                'Garantie sur tous nos travaux',
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white border-2 border-yellow-300 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-400/60 transition-all duration-300 hover:scale-[1.02] hover:border-yellow-400 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-800 font-semibold group-hover:text-yellow-700 transition-all duration-300 text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* 4.3 Right Stats Card */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl animate-fade-in-right hover:scale-105 transition-all duration-500 hover:shadow-yellow-500/25 hover:shadow-blue-400/60 flex-1 w-full border-2 border-yellow-300">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-yellow-100 rounded-full mb-6 sm:mb-8 transition-all duration-300 hover:scale-110 animate-float">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 14c2.21 0 4 1.79 4 4v1H4v-1c0-2.21 1.79-4 4-4h8zM12 2a5 5 0 110 10 5 5 0 010-10z" />
                </svg>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-2 sm:mb-3">
                500+
              </h3>
              <p className="text-lg sm:text-xl font-semibold text-gray-600 mb-6 sm:mb-8">Clients Satisfaits</p>
              <div className="flex justify-center space-x-1 sm:space-x-2 mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 fill-current hover:scale-125 transition-transform duration-200 cursor-pointer"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.055 3.24a1 1 0 00.95.69h3.402c.969 0 1.371 1.24.588 1.81l-2.754 2a1 1 0 00-.364 1.118l1.055 3.24c.3.921-.755 1.688-1.538 1.118l-2.754-2a1 1 0 00-1.176 0l-2.754 2c-.783.57-1.838-.197-1.538-1.118l1.055-3.24a1 1 0 00-.364-1.118l-2.754-2c-.783-.57-.38-1.81.588-1.81h3.402a1 1 0 00.95-.69l1.055-3.24z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base font-medium text-gray-500">
                Note moyenne de nos clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section (Enhanced) */}
      <section
        className="section-padding relative flex items-center justify-center min-h-[700px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('/public/pexels-kseniachernaya-5691642.jpg')`,
        }}
      >
        {/* Overlay for contrast */}
        <div
          className="absolute inset-0 hero-overlay pointer-events-none"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 w-full max-w-5xl mx-auto responsive-padding">
          <div className="cta-section bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-gray-900 animate-fade-in-up transition-all duration-300 hover:shadow-blue-400/60 hover:shadow-2xl border-2 border-yellow-200 animate-fade-in-up">
            {/* Trust Badge & Testimonial */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <span className="inline-flex items-center gap-3 bg-blue-100 text-blue-800 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CheckCircle className="w-6 h-6 text-blue-500" />
                20+ ans d'expérience
              </span>
              <span className="inline-flex items-center gap-3 bg-yellow-100 text-yellow-800 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                ★★★★★ <span>Excellent service !</span>
              </span>
            </div>
            <h2 className="heading-secondary text-gray-900 mb-8 text-shadow">
              Prêt à Démarrer Votre Projet ?
            </h2>
            {/* Quick Benefits */}
            <ul className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-lg font-semibold text-gray-800">
              <li className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                <span className="text-green-500 text-xl">✅</span> Devis 100% gratuit
              </li>
              <li className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                <span className="text-green-500 text-xl">✅</span> Intervention sous 24h
              </li>
              <li className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                <span className="text-green-500 text-xl">✅</span> Équipe certifiée &
                agréée
              </li>
            </ul>
            <p className="text-body-large text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Contactez{' '}
              <span className="font-black text-yellow-700">LIGHT BULB</span> dès
              aujourd'hui pour un devis gratuit et personnalisé.
              <br className="hidden md:block" />
              Notre équipe d'experts est prête à vous accompagner.
            </p>
            <p className="text-body-large text-blue-900 mb-10 max-w-3xl mx-auto leading-relaxed font-bold">
              LIGHT BULB intervient partout au Maroc, pour vos projets
              résidentiels et professionnels.
            </p>
            {/* CTA Buttons */}
            <div className="btn-group-professional mb-12 gap-4">
              <Link
                to="/contact"
                className="btn-primary group min-w-[250px] h-[64px] flex items-center justify-center text-lg shadow-lg"
                aria-label="Obtenir un Devis Gratuit"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z"
                  />
                </svg>
                Obtenir un Devis Gratuit
                <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+212661067491"
                className="btn-secondary min-w-[250px] h-[64px] flex items-center justify-center text-lg shadow-lg border-2 border-yellow-200 hover:border-yellow-400"
                aria-label="Appeler le +212661067491"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.789 1.106l1.387 2.773a2 2 0 01-.327 2.327l-1.07 1.07a16.001 16.001 0 006.586 6.586l1.07-1.07a2 2 0 012.327-.327l2.773 1.387A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z"
                  />
                </svg>
                Appeler Maintenant
              </a>
            </div>
            {/* Lead Form */}
            <form
              className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl mx-auto"
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault(); /* handle submit here */
              }}
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Votre nom"
                className="form-input-professional flex-1 mb-4 sm:mb-0"
                aria-label="Votre nom"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Votre email ou téléphone"
                className="form-input-professional flex-1 mb-4 sm:mb-0"
                aria-label="Votre email ou téléphone"
              />
              <button
                type="submit"
                className="btn-primary px-8 py-4 mb-4 sm:mb-0"
                aria-label="Envoyer le formulaire de contact"
              >
                Envoyer
              </button>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const name =
                    (
                      document.querySelector(
                        'input[name="name"]'
                      ) as HTMLInputElement
                    )?.value || '';
                  const email =
                    (
                      document.querySelector(
                        'input[name="email"]'
                      ) as HTMLInputElement
                    )?.value || '';
                  const msg = encodeURIComponent(
                    `Bonjour, je souhaite un devis.\nNom: ${name}\nEmail/Téléphone: ${email}`
                  );
                  window.open(
                    `https://wa.me/212661067491?text=${msg}`,
                    '_blank'
                  );
                }}
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400/50"
                aria-label="Envoyer via WhatsApp"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A12.07 12.07 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.69.97.99-3.59-.24-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.54 0 4.93.99 6.74 2.76A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                </svg>
                WhatsApp
              </a>
            </form>
          </div>
        </div>
      </section>

      {/* 7. Cities Served Section */}
      <section className="section-padding-sm bg-white">
        <div className="container-professional text-center">
          <h3 className="heading-tertiary text-gray-900 mb-12 animate-fade-in-up">
            Nous intervenons dans toutes les villes du Maroc :
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'Casablanca',
              'Rabat',
              'Tanger',
              'Fès',
              'Agadir',
              'Nador',
              'Ouarzazate',
              'Marrakech',
              'Oujda',
              'Kenitra',
              'El Jadida',
              'Tétouan',
              'Safi',
              'Khouribga',
              '...et plus',
            ].map((city, index) => (
              <span
                key={city}
                className="inline-flex items-center gap-3 bg-yellow-50 border-2 border-yellow-200 text-yellow-800 font-bold px-6 py-3 rounded-full shadow-lg text-lg transition-all duration-300 cursor-pointer hover:bg-yellow-400 hover:text-white group hover:-translate-y-2 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <svg
                  className="w-6 h-6 text-green-500 transition-all duration-300 group-hover:scale-125 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
