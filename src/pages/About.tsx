import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

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

  return (
    <div className="section-padding spacing-professional">
      {/* Hero Section */}
      <section className="w-full min-h-[50vh] bg-cover bg-center relative flex items-center justify-center section-padding" style={{ backgroundImage: `url('/pexels-kseniachernaya-5691642.jpg')` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="relative w-full text-center z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-responsive font-bold text-white mb-6">À Propos de <span className="text-primary">LIGHT BULB</span></h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-professional">Votre partenaire de confiance pour tous vos besoins en électricité au Maroc.</p>
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