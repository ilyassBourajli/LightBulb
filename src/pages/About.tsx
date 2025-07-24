import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const heroImages = [
  { src: '/hero.jpg', caption: 'Tableau électrique moderne' },
  { src: '/arm.jpg', caption: 'Installation professionnelle' },
  { src: '/pexels-kseniachernaya-5691642.jpg', caption: 'Matériel de qualité' },
  { src: '/pexels-lamiko-3616745.jpg', caption: 'Solutions innovantes' },
  { src: '/prise entrer.jpg', caption: 'Prises sécurisées' },
  { src: '/prise.jpg', caption: 'Finitions impeccables' },
];

const About = () => {
  const { t } = useTranslation();
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: t('about.values.0.title'),
      description: t('about.values.0.description'),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('about.values.1.title'),
      description: t('about.values.1.description'),
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t('about.values.2.title'),
      description: t('about.values.2.description'),
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('about.values.3.title'),
      description: t('about.values.3.description'),
    }
  ];

  // Carousel logic (same as Home)
  const [heroIndex, setHeroIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [fade, setFade] = useState(true);

  const triggerFade = useCallback((nextIndex: number) => {
    setFade(false);
    setTimeout(() => {
      setPrevIndex(heroIndex);
      setHeroIndex(nextIndex);
      setFade(true);
    }, 300);
  }, [heroIndex]);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      triggerFade((heroIndex + 1) % heroImages.length);
    }, 5000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [heroIndex, triggerFade]);

  const goToPrev = () => triggerFade((heroIndex - 1 + heroImages.length) % heroImages.length);
  const goToNext = () => triggerFade((heroIndex + 1) % heroImages.length);

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="w-full min-h-[60vh] bg-cover bg-center relative flex items-center justify-center transition-all duration-700" >
        {/* Crossfade Background Images */}
        <div className="absolute inset-0 z-0">
          <div
            className={`absolute inset-0 transition-all duration-700 ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            style={{ backgroundImage: `url('${heroImages[heroIndex].src}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            aria-hidden="true"
          />
          {heroIndex !== prevIndex && (
            <div
              className={`absolute inset-0 transition-all duration-700 opacity-0 scale-100`}
              style={{ backgroundImage: `url('${heroImages[prevIndex].src}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              aria-hidden="true"
            />
          )}
        </div>
        {/* Top dark overlay for text readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-transparent pointer-events-none" aria-hidden="true"></div>
        <div className="relative w-full text-center z-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4">
          <h1 className="text-responsive font-black mb-2 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in-up">
            À Propos de <span className="text-white bg-none">LIGHT BULB</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-2 text-professional leading-relaxed lg:bg-black/30 lg:rounded-xl lg:px-6 lg:py-3 lg:backdrop-blur-md animate-fade-in-up">
            Votre partenaire de confiance pour tous vos besoins en électricité au Maroc.
          </p>
          {/* Caption and Button Grouped */}
          {heroImages[heroIndex].caption && (
            <div className="flex flex-col items-center gap-2 mt-2 mb-4">
              <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent drop-shadow-xl animate-scale-in">
                {heroImages[heroIndex].caption}
              </div>
            </div>
          )}
          {/* Carousel Controls */}
          <div className="absolute left-0 right-0 flex justify-between items-center px-4 top-1/2 -translate-y-1/2 pointer-events-none select-none">
            <button onClick={goToPrev} aria-label="Image précédente" className="pointer-events-auto bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={goToNext} aria-label="Image suivante" className="pointer-events-auto bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10 mb-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => triggerFade(idx)}
                aria-label={`Aller à l'image ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-200 border-2 ${heroIndex === idx ? 'bg-yellow-400 border-yellow-400' : 'bg-white/60 border-white/60'} focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400`}
              />
            ))}
          </div>
          <Link to="/contact" className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white px-8 py-4 rounded-xl font-extrabold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 animate-fade-in-up mt-2">
            Demander un Devis
          </Link>
        </div>
      </section>

      {/* Company Story */}
      <section className="w-full py-24 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-6">Notre Histoire</h2>
            <div className="space-y-4 text-brand-blue">
              <p>Fondée à Mohammedia, LIGHT BULB est née de la passion pour l'excellence dans le domaine électrique. Depuis nos débuts, nous nous sommes imposés comme une référence dans la vente de matériel électrique et les services d'installation.</p>
              <p>Notre équipe d'experts qualifiés met son savoir-faire au service des particuliers, entreprises et collectivités partout au Maroc. Nous combinons tradition artisanale marocaine et technologies modernes pour offrir des solutions électriques durables et fiables.</p>
              <p>Nous connaissons parfaitement les spécificités locales et les besoins de notre clientèle à travers tout le Maroc. Cette proximité nous permet d'offrir un service personnalisé et réactif.</p>
            </div>
          </div>
          <div className="bg-secondary border border-primary rounded-2xl p-8 shadow-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-primary">Années d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-primary">Projets réalisés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24h</div>
                <div className="text-primary">Délai de réponse</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-primary">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="w-full py-24 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-4">Notre Mission & Nos Valeurs</h2>
          <p className="text-xl text-brand-blue max-w-3xl mx-auto">Nous nous engageons à fournir des solutions électriques de qualité tout en respectant nos valeurs fondamentales.</p>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="card card-hover flex flex-col items-center animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white text-secondary border-primary" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-primary mb-4 flex justify-center">{React.cloneElement(value.icon, { className: 'w-12 h-12' })}</div>
              <h3 className="text-xl font-semibold text-secondary mb-3" style={{ fontSize: '1.25rem' }}>{value.title}</h3>
              <p className="text-brand-blue">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="w-full py-24 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary rounded-2xl p-12 shadow-md inline-block transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-secondary mb-6">Notre Mission</h2>
            <p className="text-xl text-brand-blue max-w-4xl mx-auto leading-relaxed">
              Être le partenaire électrique de référence à Mohammedia en offrant des produits de qualité, des services professionnels et un accompagnement personnalisé pour chaque projet, du plus simple au plus complexe.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="w-full py-24 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-6">Notre Expertise</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2" style={{ fontSize: '1.15rem' }}>Matériel Électrique Professionnel</h3>
                  <p className="text-brand-blue">Distribution de matériel électrique de marques reconnues, conformes aux normes marocaines et européennes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2" style={{ fontSize: '1.15rem' }}>Installation & Mise en Service</h3>
                  <p className="text-brand-blue">Installation complète d'équipements électriques pour résidentiel, commercial et industriel.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2" style={{ fontSize: '1.15rem' }}>Maintenance & Dépannage</h3>
                  <p className="text-brand-blue">Services de maintenance préventive et interventions d'urgence 24h/7j pour assurer la continuité de vos activités.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary border border-primary rounded-2xl p-8 shadow-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications & Agréments</h3>
            <div className="space-y-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-primary" />
                  <span className="text-white text-base">{t(`about.certifications.item${i}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;