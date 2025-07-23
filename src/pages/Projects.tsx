import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, User, Award, TrendingUp, Users, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('projects.all_projects') },
    { id: 'residential', name: t('projects.residential') },
    { id: 'commercial', name: t('projects.commercial') },
    { id: 'industrial', name: t('projects.industrial') }
  ];

  const projects = [
    {
      id: 1,
      title: t('projects.project_1_title'),
      category: "residential",
      location: "Maroc",
      client: "Famille Benali",
      date: "Mars 2024",
      description: t('projects.project_1_description'),
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Tableau électrique moderne", "Éclairage LED", "Système domotique", "Prises USB intégrées"]
    },
    {
      id: 2,
      title: t('projects.project_2_title'),
      category: "commercial",
      location: "Mohammedia Centre",
      client: "Restaurant Casa Marina",
      date: "Février 2024",
      description: t('projects.project_2_description'),
      image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Mise aux normes", "Éclairage professionnel", "Circuits spécialisés", "Sécurité renforcée"]
    },
    {
      id: 3,
      title: t('projects.project_3_title'),
      category: "industrial",
      location: "Zone Industrielle Mohammedia",
      client: "Société ATLAS",
      date: "Janvier 2024",
      description: t('projects.project_3_description'),
      image: "https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Tableaux industriels", "Éclairage haute performance", "Circuits de puissance", "Maintenance préventive"]
    },
    {
      id: 4,
      title: t('projects.project_4_title'),
      category: "commercial",
      location: "Casablanca",
      client: "Entreprise TechCorp",
      date: "Décembre 2023",
      description: t('projects.project_4_description'),
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Bureaux connectés", "Éclairage intelligent", "Prises modulaires", "Câblage réseau"]
    },
    {
      id: 5,
      title: t('projects.project_5_title'),
      category: "residential",
      location: "Maroc",
      client: "M. et Mme Alaoui",
      date: "Novembre 2023",
      description: t('projects.project_5_description'),
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Contrôle intelligent", "Éclairage d'ambiance", "Prises design", "Sécurité intégrée"]
    },
    {
      id: 6,
      title: t('projects.project_6_title'),
      category: "commercial",
      location: "Mohammedia",
      client: "Galerie Commerciale",
      date: "Octobre 2023",
      description: t('projects.project_6_description'),
      image: "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Éclairage commercial", "Systèmes de sécurité", "Distribution électrique", "Éclairage d'urgence"]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="section-padding spacing-professional">
      {/* Hero Section */}
      <section className="w-full min-h-[60vh] bg-cover bg-center relative flex items-center justify-center section-padding" style={{ backgroundImage: `url('/armoire.jpg')` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="relative w-full text-center z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-responsive font-bold text-[#fff] mb-4">Nos <span className="text-[#f9ed9f]">Réalisations</span></h1>
          <p className="text-xl text-[#f9ed9f]/90 max-w-3xl mx-auto text-professional">Découvrez quelques-uns de nos projets récents qui témoignent de notre expertise et de la qualité de nos installations électriques.</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="w-full py-12 bg-[#ffffff]">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cad0dd] animate-fade-in-up ${selectedCategory === category.id ? 'bg-[#f9ed9f] text-black scale-105 shadow-md' : 'bg-[#fffeee] text-[#333] hover:bg-[#f9ed9f] hover:text-black'}`}
              tabIndex={0}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-20 bg-[#f4f5f8]">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <a key={project.id} href={project.image || '#'} target="_blank" rel="noopener noreferrer" className="card card-hover block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cad0dd] animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ animationDelay: `${index * 100}ms` }} tabIndex={0} aria-label={`Voir le projet ${project.title}`}> 
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.category === 'residential' ? 'bg-blue-100 text-blue-800' : project.category === 'commercial' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>{project.category === 'residential' ? t('projects.residential') : project.category === 'commercial' ? t('projects.commercial') : t('projects.industrial')}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#000] mb-2" style={{ fontSize: '1.35rem' }}>{project.title}</h3>
                <p className="text-[#7d7d7d] mb-4">{project.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-base text-[#7d7d7d]">
                    <User className="w-5 h-5 mr-2" />{project.client}
                  </div>
                  <div className="flex items-center text-base text-[#7d7d7d]">
                    <MapPin className="w-5 h-5 mr-2" />{project.location}
                  </div>
                  <div className="flex items-center text-base text-[#7d7d7d]">
                    <Calendar className="w-5 h-5 mr-2" />{project.date}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-base font-semibold text-[#000] mb-2">{t('projects.features')}:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-[#f9ed9f] text-[#333] text-sm rounded-full">{feature}</span>
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
            <div className="text-[#7d7d7d] text-base font-semibold">Projets Réalisés</div>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="w-12 h-12 mb-2 text-[#f9ed9f]" />
            <div className="text-3xl font-bold text-[#333]">20+</div>
            <div className="text-[#7d7d7d] text-base font-semibold">Années d'Expérience</div>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 mb-2 text-[#f9ed9f]" />
            <div className="text-3xl font-bold text-[#333]">100%</div>
            <div className="text-[#7d7d7d] text-base font-semibold">Clients Satisfaits</div>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 mb-2 text-[#f9ed9f]" />
            <div className="text-3xl font-bold text-[#333]">24h</div>
            <div className="text-[#7d7d7d] text-base font-semibold">Service d'Urgence</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-[#f9ed9f] text-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#000] mb-4">Votre Projet Sera le Prochain ?</h2>
          <p className="text-xl text-[#7d7d7d] mb-8 max-w-2xl mx-auto">Rejoignez nos clients satisfaits et confiez-nous votre projet électrique.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-black hover:bg-[#333] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">Demander un Devis <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></a>
            <a href="/services" className="border-2 border-black hover:bg-black hover:text-white text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">Voir Nos Services</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;