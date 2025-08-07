import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award,
  X,
  MapPin,
  Calendar,
  DollarSign,
  Star,
} from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';

const heroImages = [
  { src: '/hero.jpg', caption: 'Tableau électrique moderne' },
  { src: '/arm.jpg', caption: 'Installation professionnelle' },
  { src: '/pexels-kseniachernaya-5691642.jpg', caption: 'Matériel de qualité' },
  { src: '/pexels-lamiko-3616745.jpg', caption: 'Solutions innovantes' },
  { src: '/prise entrer.jpg', caption: 'Prises sécurisées' },
  { src: '/Card.jpg', caption: 'Finitions impeccables' },
];

interface Project {
  title: string;
  category: string;
  description: string;
  features: string[];
  duration: string;
  client: string;
  image: string;
  location?: string;
  budget?: string;
  rating?: number;
  completionDate?: string;
  teamSize?: string;
  challenges?: string[];
  solutions?: string[];
  testimonials?: string;
}

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: 'Installation Électrique Résidentielle',
      category: 'Résidentiel',
      description: 'Installation complète d\'un système électrique pour une villa moderne à Casablanca.',
      features: ['Tableau électrique principal', 'Éclairage LED', 'Prises sécurisées', 'Mise à la terre'],
      duration: '3 semaines',
      client: 'Villa Al Mansour',
      image: '/Card.jpg',
      location: 'Casablanca, Maroc',
      budget: '45,000 MAD',
      rating: 5,
      completionDate: 'Mars 2024',
      teamSize: '4 électriciens',
      challenges: ['Intégration avec l\'architecture existante', 'Respect des normes de sécurité'],
      solutions: ['Planification détaillée avec l\'architecte', 'Utilisation de matériaux certifiés'],
      testimonials: '"Une installation parfaite, dans les délais et le budget. Équipe très professionnelle."'
    },
    {
      title: 'Système Électrique Commercial',
      category: 'Commercial',
      description: 'Mise en place d\'un système électrique pour un centre commercial à Rabat.',
      features: ['Tableaux de distribution', 'Éclairage commercial', 'Système de sécurité', 'Automatisation'],
      duration: '6 semaines',
      client: 'Centre Commercial Al Madina',
      image: '/Card.jpg',
      location: 'Rabat, Maroc',
      budget: '120,000 MAD',
      rating: 5,
      completionDate: 'Février 2024',
      teamSize: '6 électriciens',
      challenges: ['Gestion de la complexité du projet', 'Coordination avec plusieurs corps de métier'],
      solutions: ['Planning rigoureux', 'Communication quotidienne avec le client'],
      testimonials: '"Projet complexe mené à bien avec brio. Excellente coordination d\'équipe."'
    },
    {
      title: 'Rénovation Électrique Industrielle',
      category: 'Industriel',
      description: 'Modernisation complète de l\'installation électrique d\'une usine à Tanger.',
      features: ['Mise aux normes', 'Nouveaux tableaux', 'Câblage industriel', 'Protection renforcée'],
      duration: '8 semaines',
      client: 'Usine Textile Atlas',
      image: '/Card.jpg',
      location: 'Tanger, Maroc',
      budget: '280,000 MAD',
      rating: 5,
      completionDate: 'Janvier 2024',
      teamSize: '8 électriciens',
      challenges: ['Travail en milieu industriel', 'Minimisation des arrêts de production'],
      solutions: ['Travail en équipes décalées', 'Planification minutieuse'],
      testimonials: '"Rénovation réussie sans interruption majeure de la production. Excellent travail."'
    },
    {
      title: 'Installation Domotique',
      category: 'Domotique',
      description: 'Système domotique complet pour une résidence de luxe à Marrakech.',
      features: ['Contrôle centralisé', 'Éclairage intelligent', 'Sécurité automatisée', 'Interface mobile'],
      duration: '4 semaines',
      client: 'Résidence Palm Grove',
      image: '/Card.jpg',
      location: 'Marrakech, Maroc',
      budget: '85,000 MAD',
      rating: 5,
      completionDate: 'Décembre 2023',
      teamSize: '3 spécialistes domotique',
      challenges: ['Intégration de technologies avancées', 'Formation du personnel'],
      solutions: ['Technologies de pointe', 'Formation complète incluse'],
      testimonials: '"Système domotique exceptionnel. La technologie au service du confort."'
    },
    {
      title: 'Éclairage Public LED',
      category: 'Public',
      description: 'Installation d\'éclairage LED pour les rues principales de Mohammedia.',
      features: ['Éclairage LED haute efficacité', 'Contrôle à distance', 'Économies d\'énergie', 'Maintenance réduite'],
      duration: '5 semaines',
      client: 'Municipalité de Mohammedia',
      image: '/Card.jpg',
      location: 'Mohammedia, Maroc',
      budget: '350,000 MAD',
      rating: 5,
      completionDate: 'Novembre 2023',
      teamSize: '5 électriciens',
      challenges: ['Travail en milieu urbain', 'Coordination avec les services municipaux'],
      solutions: ['Planning nocturne', 'Communication avec les autorités'],
      testimonials: '"Éclairage moderne et économique. Les citoyens sont satisfaits."'
    },
    {
      title: 'Système de Sécurité Électrique',
      category: 'Sécurité',
      description: 'Installation d\'un système de sécurité électrique pour une banque à Agadir.',
      features: ['Système d\'alarme', 'Caméras de surveillance', 'Contrôle d\'accès', 'Monitoring 24/7'],
      duration: '3 semaines',
      client: 'Banque Populaire',
      image: '/Card.jpg',
      location: 'Agadir, Maroc',
      budget: '95,000 MAD',
      rating: 5,
      completionDate: 'Octobre 2023',
      teamSize: '4 spécialistes sécurité',
      challenges: ['Sécurité renforcée', 'Conformité bancaire'],
      solutions: ['Technologies de sécurité avancées', 'Certification des installations'],
      testimonials: '"Système de sécurité fiable et professionnel. Conformité parfaite."'
    },
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

  // Modal functions
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  // Handle escape key for modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeProjectModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Scroll to projects section when hash is present
  useEffect(() => {
    if (location.hash === '#projects') {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        setTimeout(() => {
          projectsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location.hash]);

  // Animation effect for projects section
  useEffect(() => {
    const targetElement = document.getElementById('projects');
    if (targetElement && location.hash === '#projects') {
      // Add initial animation classes
      targetElement.classList.add('animate-slide-down');
      
      // Add staggered animation to project cards
      const projectCards = targetElement.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate-fade-in-up');
        }, 200 + (index * 150));
      });
    }
  }, [location.hash]);

  return (
    <div className="w-full">
      <SEOHelmet
        title="Réalisations LIGHT BULB - Projets électriques au Maroc"
        description="Découvrez nos réalisations : installations électriques résidentielles, commerciales et industrielles partout au Maroc. Qualité, sécurité et satisfaction garantie."
        keywords="réalisations électriques Maroc, projets électriques, installations résidentielles, installations commerciales, installations industrielles, portfolio électricien"
        image="/LogoLb.png"
        url={typeof window !== 'undefined' ? window.location.href : ''}
      />
      {/* Hero Section */}
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
              {t('projects.our_realizations')}
            </span>
            <br />
            <span className="text-white drop-shadow-2xl font-black">
              {t('projects.our_realizations')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-6xl mx-auto mb-8 leading-relaxed animate-fade-in-up font-medium px-4" style={{ animationDelay: '0.4s' }}>
            <span className="bg-black/40 backdrop-blur-sm px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl leading-relaxed">
              {t('projects.discover_some_of_our_recent_projects')}
            </span>
          </p>
          
          {/* Project Types Preview */}
          <div className="flex items-center gap-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">{t('projects.residential')}</div>
              <div className="text-sm md:text-base text-white/80">Maisons & Appartements</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">{t('projects.commercial')}</div>
              <div className="text-sm md:text-base text-white/80">Bureaux & Magasins</div>
              </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">{t('projects.industrial')}</div>
              <div className="text-sm md:text-base text-white/80">Usines & Entrepôts</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/contact#devis"
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex items-center gap-3 text-lg"
            >
              <span>{t('projects.request_a_quote')}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              to="/services#services"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl border-2 border-white/30 hover:border-white/50 shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex items-center gap-3 text-lg"
            >
              <span>{t('projects.see_our_services')}</span>
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

      {/* Projects Grid */}
      <section id="projects" className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="w-full">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {t('projects.our_realizations')}
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-yellow-500 rounded mx-auto mb-8"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              {t('projects.discover_some_of_our_recent_projects')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card bg-white border-2 border-yellow-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 group hover:-translate-y-2 overflow-hidden transform transition-all duration-800 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                {/* Project Image */}
                <div className="w-full h-48 bg-gray-200 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200 transition-colors duration-300">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <Clock className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    {project.title}
                  </h2>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                      {t('projects.features')}:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 group-hover:translate-x-1 transition-all duration-300">
                          <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <Users className="w-4 h-4" />
                      <span>{project.client}</span>
                    </div>
                    
                    <div className="inline-flex items-center text-sm text-yellow-800 hover:text-yellow-700 font-semibold transition-colors duration-300 group-hover:translate-x-2">
                      {t('projects.see_details')}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm project-modal-backdrop"
            onClick={closeProjectModal}
            aria-hidden="true"
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto project-modal">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b-2 border-yellow-200 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  {selectedProject.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                onClick={closeProjectModal}
                className="p-2 rounded-full text-gray-500 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-300 focus-ring"
                aria-label="Fermer la modal"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Modal Body */}
              <div className="p-6">
              {/* Project Image */}
              <div className="w-full h-64 sm:h-80 bg-gray-200 rounded-xl overflow-hidden mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Basic Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium">{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium">Terminé en {selectedProject.completionDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium">Durée: {selectedProject.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium">Équipe: {selectedProject.teamSize}</span>
                  </div>
                </div>
                
                {/* Financial Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium">Budget: {selectedProject.budget}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium">Client: {selectedProject.client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium">Note: {selectedProject.rating}/5</span>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 mb-3">{t('projects.project_description')}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
              
              {/* Features */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 mb-4">{t('projects.technical_features')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
          ))}
        </div>
              </div>
              
              {/* Challenges & Solutions */}
              {selectedProject.challenges && selectedProject.solutions && (
                <div className="mb-8">
                  <h2 className="text-lg font-bold text-gray-800 mb-4">{t('projects.challenges_and_solutions')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-red-600 mb-3">{t('projects.challenges_encountered')}</h3>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-600 mb-3">{t('projects.applied_solutions')}</h3>
                      <ul className="space-y-2">
                        {selectedProject.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Testimonial */}
              {selectedProject.testimonials && (
                <div className="mb-8 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border-l-4 border-yellow-400">
                  <h2 className="text-lg font-bold text-gray-800 mb-3">{t('projects.client_testimonial')}</h2>
                  <blockquote className="text-gray-700 italic">
                    "{selectedProject.testimonials}"
                  </blockquote>
          </div>
              )}
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t-2 border-yellow-200">
                <Link
                  to="/contact#devis"
                  onClick={closeProjectModal}
                  className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  {t('projects.request_similar_quote')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <button
                  onClick={closeProjectModal}
                  className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  {t('projects.close')}
                </button>
          </div>
          </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="w-full text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            {t('projects.your_next_project')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t('projects.contact_us_to_discuss_your_project')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact#devis"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:-translate-y-1"
            >
              {t('projects.request_a_quote')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/services#services"
              className="inline-flex items-center bg-transparent text-white border-2 border-white hover:bg-white hover:text-yellow-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:-translate-y-1"
            >
              {t('projects.see_our_services')}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
