import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Calendar,
  MapPin,
  User,
  Award,
  TrendingUp,
  Users,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Added Link import

const heroImages = [
  { src: '/hero.jpg', caption: 'Tableau électrique moderne' },
  { src: '/arm.jpg', caption: 'Installation professionnelle' },
  { src: '/pexels-kseniachernaya-5691642.jpg', caption: 'Matériel de qualité' },
  { src: '/pexels-lamiko-3616745.jpg', caption: 'Solutions innovantes' },
  { src: '/prise entrer.jpg', caption: 'Prises sécurisées' },
  { src: '/prise.jpg', caption: 'Finitions impeccables' },
];

const Projects = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('projects.all_projects') },
    { id: 'residential', name: t('projects.residential') },
    { id: 'commercial', name: t('projects.commercial') },
    { id: 'industrial', name: t('projects.industrial') },
  ];

  const projects = [
    {
      id: 1,
      title: t('projects.project_1_title'),
      category: 'residential',
      location: 'Maroc',
      client: 'Famille Benali',
      date: 'Mars 2024',
      description: t('projects.project_1_description'),
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Tableau électrique moderne',
        'Éclairage LED',
        'Système domotique',
        'Prises USB intégrées',
      ],
    },
    {
      id: 2,
      title: t('projects.project_2_title'),
      category: 'commercial',
      location: 'Mohammedia Centre',
      client: 'Restaurant Casa Marina',
      date: 'Février 2024',
      description: t('projects.project_2_description'),
      image:
        'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Mise aux normes',
        'Éclairage professionnel',
        'Circuits spécialisés',
        'Sécurité renforcée',
      ],
    },
    {
      id: 3,
      title: t('projects.project_3_title'),
      category: 'industrial',
      location: 'Zone Industrielle Mohammedia',
      client: 'Société ATLAS',
      date: 'Janvier 2024',
      description: t('projects.project_3_description'),
      image:
        'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Tableaux industriels',
        'Éclairage haute performance',
        'Circuits de puissance',
        'Maintenance préventive',
      ],
    },
    {
      id: 4,
      title: t('projects.project_4_title'),
      category: 'commercial',
      location: 'Casablanca',
      client: 'Entreprise TechCorp',
      date: 'Décembre 2023',
      description: t('projects.project_4_description'),
      image:
        'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Bureaux connectés',
        'Éclairage intelligent',
        'Prises modulaires',
        'Câblage réseau',
      ],
    },
    {
      id: 5,
      title: t('projects.project_5_title'),
      category: 'residential',
      location: 'Maroc',
      client: 'M. et Mme Alaoui',
      date: 'Novembre 2023',
      description: t('projects.project_5_description'),
      image:
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Contrôle intelligent',
        "Éclairage d'ambiance",
        'Prises design',
        'Sécurité intégrée',
      ],
    },
    {
      id: 6,
      title: t('projects.project_6_title'),
      category: 'commercial',
      location: 'Mohammedia',
      client: 'Galerie Commerciale',
      date: 'Octobre 2023',
      description: t('projects.project_6_description'),
      image:
        'https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Éclairage commercial',
        'Systèmes de sécurité',
        'Distribution électrique',
        "Éclairage d'urgence",
      ],
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
            Nos <span className="ml-2 font-extrabold text-white drop-shadow-md">Réalisations</span>
          </h1>
          <p className="text-body-large text-white/95 max-w-4xl mx-auto mb-4 leading-relaxed lg:bg-black/20 lg:rounded-2xl lg:px-8 lg:py-4 lg:backdrop-blur-professional animate-fade-in-up text-shadow">
            Découvrez quelques-uns de nos projets récents qui témoignent de notre expertise et de la qualité de nos installations électriques.
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
          <div className="absolute left-0 right-0 flex justify-between items-center px-4 top-1/2 -translate-y-1/2 pointer-events-none select-none">
            <button
              onClick={goToPrev}
              aria-label="Image précédente"
              className="pointer-events-auto carousel-control"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              aria-label="Image suivante"
              className="pointer-events-auto carousel-control"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center gap-3 mt-12 mb-4">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => triggerFade(idx)}
                aria-label={`Aller à l'image ${idx + 1}`}
                className={`carousel-dot ${heroIndex === idx ? 'active' : 'inactive'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="w-full py-12 bg-[#ffffff]">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cad0dd] animate-fade-in-up ${
                selectedCategory === category.id
                  ? 'bg-[#f9ed9f] text-black scale-105 shadow-md'
                  : 'bg-[#fffeee] text-[#333] hover:bg-[#f9ed9f] hover:text-black'
              }`}
              tabIndex={0}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-20 bg-[#f4f5f8]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.image || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cad0dd] animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 hover:shadow-2xl border-2 border-yellow-300"
              style={{ animationDelay: `${index * 100}ms` }}
              tabIndex={0}
              aria-label={`Voir le projet ${project.title}`}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === 'residential'
                        ? 'bg-blue-100 text-blue-800'
                        : project.category === 'commercial'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {project.category === 'residential'
                      ? t('projects.residential')
                      : project.category === 'commercial'
                      ? t('projects.commercial')
                      : t('projects.industrial')}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-[#000] mb-2"
                  style={{ fontSize: '1.35rem' }}
                >
                  {project.title}
                </h3>
                <p className="text-[#7d7d7d] mb-4">{project.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-base text-[#7d7d7d]">
                    <User className="w-5 h-5 mr-2" />
                    {project.client}
                  </div>
                  <div className="flex items-center text-base text-[#7d7d7d]">
                    <MapPin className="w-5 h-5 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-base text-[#7d7d7d]">
                    <Calendar className="w-5 h-5 mr-2" />
                    {project.date}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-base font-semibold text-[#000] mb-2">
                    {t('projects.features')}:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#f9ed9f] text-[#333] text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 bg-[#eef0f4]">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <Award className="w-12 h-12 mb-2 text-[#f9ed9f]" />
            <div className="text-3xl font-bold text-[#333]">500+</div>
            <div className="text-[#7d7d7d] text-base font-semibold">
              Projets Réalisés
            </div>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="w-12 h-12 mb-2 text-[#f9ed9f]" />
            <div className="text-3xl font-bold text-[#333]">20+</div>
            <div className="text-[#7d7d7d] text-base font-semibold">
              Années d'Expérience
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 mb-2 text-[#f9ed9f]" />
            <div className="text-3xl font-bold text-[#333]">100%</div>
            <div className="text-[#7d7d7d] text-base font-semibold">
              Clients Satisfaits
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 mb-2 text-[#f9ed9f]" />
            <div className="text-3xl font-bold text-[#333]">24h</div>
            <div className="text-[#7d7d7d] text-base font-semibold">
              Service d'Urgence
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-[#f9ed9f] text-center w-full px-0">
        <div className="w-full">
          <h2 className="text-4xl font-bold text-[#000] mb-4">
            Votre Projet Sera le Prochain ?
          </h2>
          <p className="text-xl text-[#7d7d7d] mb-8 max-w-2xl mx-auto">
            Rejoignez nos clients satisfaits et confiez-nous votre projet
            électrique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white px-8 py-4 rounded-xl font-extrabold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 animate-fade-in-up mt-2"
            >
              Demander un Devis
            </Link>
            <a
              href="/services"
              className="border-2 border-black hover:bg-black hover:text-white text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              Voir Nos Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
