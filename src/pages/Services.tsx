import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
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
  { src: '/prise.jpg', caption: 'Finitions impeccables' },
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

  return (
    <div>
      {/* Hero Section with Carousel */}
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
            Nos <span className="ml-2 font-extrabold text-white drop-shadow-md">Services</span>
          </h1>
          <p className="text-body-large text-white/95 max-w-4xl mx-auto mb-4 leading-relaxed lg:bg-black/20 lg:rounded-2xl lg:px-8 lg:py-4 lg:backdrop-blur-professional animate-fade-in-up text-shadow">
            De la vente de matériel électrique aux travaux d'installation et de maintenance, LIGHT BULB vous accompagne dans tous vos projets électriques.
          </p>
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
                  <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" style={{ verticalAlign: 'middle' }} />
                </Link>
              </div>
            </div>
          )}
          <div className="absolute left-2 right-2 flex justify-between items-center top-1/2 -translate-y-1/2 pointer-events-none select-none sm:left-4 sm:right-4">
            <button
              onClick={goToPrev}
              aria-label="Image précédente"
              className="pointer-events-auto carousel-control w-10 h-10 sm:w-12 sm:h-12"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              aria-label="Image suivante"
              className="pointer-events-auto carousel-control w-10 h-10 sm:w-12 sm:h-12"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 mb-4">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => triggerFade(idx)}
                aria-label={`Aller à l'image ${idx + 1}`}
                className={`carousel-dot w-2 h-2 sm:w-3 sm:h-3 ${heroIndex === idx ? 'active' : 'inactive'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section
        className="w-full py-20 bg-cover bg-center relative w-full px-0"
        style={{ backgroundImage: `url('/arm.jpg')` }}
      >
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-white/80" aria-hidden="true"></div>
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 z-10 px-4 sm:px-6 lg:px-8">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="card card-hover flex flex-col justify-between min-h-[380px] sm:min-h-[420px] bg-white text-secondary border-2 border-yellow-300 rounded-2xl shadow-blue-400/40 shadow-lg animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 hover:shadow-2xl p-6 sm:p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-2xl text-white mb-4 sm:mb-6 mx-auto lg:mx-0">
                  {React.cloneElement(service.icon, {
                    className: 'w-8 h-8 sm:w-10 sm:h-10 text-white',
                  })}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-secondary mb-1 text-center lg:text-left">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg text-primary font-semibold mb-2 text-center lg:text-left">
                  {service.subtitle}
                </p>
                <p className="text-sm sm:text-base text-brand-blue mb-4 text-center lg:text-left">
                  {service.description}
                </p>
                <ul className="text-sm sm:text-base text-secondary text-left space-y-1 mb-4 pl-4 list-disc">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact"
                className="bg-primary text-brand-blue px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary animate-fade-in-up mt-4 hover:bg-brand-soft-blue hover:text-primary text-center"
              >
                Demander un Devis
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="w-full py-20 bg-background w-full px-0">
        <div className="w-full text-center mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
            Services Complémentaires
          </h2>
          <p className="text-lg sm:text-xl text-brand-blue max-w-3xl mx-auto">
            En plus de nos services principaux, nous offrons un accompagnement
            complet pour la réussite de vos projets.
          </p>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-yellow-300 rounded-xl p-4 sm:p-6 shadow-blue-400/40 shadow-lg flex items-center gap-3 animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
              <span className="text-secondary font-medium text-base sm:text-lg">
                {service}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 bg-background w-full px-0">
        <div className="w-full text-center mb-12 sm:mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
            Notre Processus de Travail
          </h2>
          <p className="text-lg sm:text-xl text-brand-blue max-w-3xl mx-auto">
            Une approche méthodique pour garantir la qualité et la satisfaction
            client.
          </p>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              step: '01',
              title: 'Consultation',
              description: 'Analyse de vos besoins et visite sur site',
            },
            {
              step: '02',
              title: 'Devis',
              description: 'Proposition détaillée et transparente',
            },
            {
              step: '03',
              title: 'Réalisation',
              description: 'Exécution professionnelle des travaux',
            },
            {
              step: '04',
              title: 'Suivi',
              description: 'Service après-vente et maintenance',
            },
          ].map((process, index) => (
            <div
              key={index}
              className="bg-white border-2 border-yellow-200 rounded-2xl p-6 sm:p-8 shadow-blue-400/40 shadow-lg flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 hover:shadow-2xl"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary text-secondary rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                {process.step}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 text-center">
                {process.title}
              </h3>
              <p className="text-sm sm:text-base text-secondary text-center">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency and CTA as side-by-side cards */}
      <section className="section-padding px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-stretch justify-center gap-6 sm:gap-8 w-full bg-yellow-50">
        {/* CTA Card first */}
        <div className="flex-1 bg-yellow-400 rounded-3xl shadow-2xl shadow-red-400/60 p-8 sm:p-12 lg:p-14 text-center text-secondary transition-transform duration-300 hover:scale-105 hover:shadow-blue-400/60 max-w-6xl w-full flex flex-col justify-center border-2 border-yellow-200">
          <h2 className="heading-secondary text-secondary mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">Prêt à Démarrer Votre Projet ?</h2>
          <p className="text-body-large mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl">
            Contactez LIGHT BULB dès aujourd'hui pour un devis gratuit et personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
            <Link
              to="/contact"
              className="btn-primary w-full sm:w-auto text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8 font-bold"
            >
              Obtenir un Devis Gratuit <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+212523000000"
              className="btn-secondary border-2 border-secondary text-secondary hover:bg-secondary hover:text-white w-full sm:w-auto text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8 font-bold"
            >
              Appeler Maintenant
            </a>
          </div>
        </div>
        {/* Emergency Card second */}
        <div className="flex-1 bg-red-600 rounded-3xl shadow-2xl shadow-yellow-400/60 p-8 sm:p-12 lg:p-14 text-center text-white transition-transform duration-300 hover:scale-105 hover:shadow-blue-400/60 max-w-6xl w-full flex flex-col justify-center border-2 border-yellow-200">
          <Clock className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 text-white" />
          <h2 className="heading-secondary text-white mb-6 sm:mb-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">Service d'Urgence 24h/7j</h2>
          <p className="text-body-large mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl">
            Panne électrique ? Problème urgent ? Notre équipe intervient rapidement pour rétablir votre installation électrique.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
            <a
              href="tel:+212523000000"
              className="btn-secondary bg-white text-red-600 border-2 border-white hover:bg-primary hover:text-white hover:border-white w-full sm:w-auto text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8 font-bold"
            >
              Appeler Maintenant
            </a>
            <Link
              to="/contact"
              className="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 w-full sm:w-auto text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8 font-bold"
            >
              Contact Urgence
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
