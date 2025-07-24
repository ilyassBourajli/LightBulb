import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ShoppingCart, 
  Wrench, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const mainServices = [
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Vente & Distribution",
      subtitle: "Matériel Électrique Professionnel",
      description: "Large gamme de matériel électrique de qualité : câbles, disjoncteurs, tableaux électriques, éclairage, prises et interrupteurs.",
      features: [
        "Marques européennes certifiées",
        "Stock permanent disponible",
        "Conseils techniques personnalisés",
        "Livraison rapide partout au Maroc",
        "Tarifs préférentiels professionnels"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Installation Électrique",
      subtitle: "Résidentiel & Commercial",
      description: "Installation complète de systèmes électriques neufs ou rénovation d'installations existantes selon les normes en vigueur.",
      features: [
        "Étude et conception sur mesure",
        "Installation tableaux électriques",
        "Câblage et raccordements",
        "Mise en conformité",
        "Test et mise en service"
      ],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Maintenance & Dépannage",
      subtitle: "Service 24h/7j",
      description: "Services de maintenance préventive et interventions d'urgence pour assurer la continuité de vos équipements électriques.",
      features: [
        "Dépannage d'urgence 24h/7j",
        "Maintenance préventive programmée",
        "Diagnostic et réparation",
        "Remplacement de composants",
        "Contrats de maintenance"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Travaux Divers",
      subtitle: "Solutions Complètes",
      description: "Tous types de travaux électriques : éclairage, prises, interrupteurs, mise à la terre, protection contre la foudre.",
      features: [
        "Éclairage intérieur et extérieur",
        "Installation prises et interrupteurs",
        "Mise à la terre et protection",
        "Automatisation et domotique",
        "Conformité et certification"
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const additionalServices = [
    "Études et conseils techniques",
    "Devis gratuits et détaillés",
    "Garantie sur tous nos travaux",
    "Formation et accompagnement",
    "Service après-vente réactif"
  ];

  return (
    <div className="section-padding spacing-professional">
      {/* Hero Section */}
      <section className="w-full min-h-[60vh] bg-cover bg-center relative flex items-center justify-center section-padding" style={{ backgroundImage: `url('/pexels-lamiko-3616745.jpg')` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="relative w-full text-center z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-responsive font-bold text-white mb-4">Nos <span className="text-primary">Services</span></h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 text-professional">De la vente de matériel électrique aux travaux d'installation et de maintenance, LIGHT BULB vous accompagne dans tous vos projets électriques.</p>
          <Link to="/contact" className="btn-primary">Demander un Devis</Link>
        </div>
      </section>

      {/* Main Services */}
      <section className="w-full py-20 bg-cover bg-center relative" style={{ backgroundImage: `url('/arm.jpg')` }}>
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-white/80" aria-hidden="true"></div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="card card-hover flex flex-col justify-between min-h-[420px] bg-white text-secondary border-[2px] border-blue-500 rounded-2xl shadow-blue-400/40 shadow-lg animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-blue-400/50 hover:shadow-2xl p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl text-white mb-6 mx-auto md:mx-0">
                  {React.cloneElement(service.icon, { className: 'w-10 h-10 text-white' })}
                </div>
                <h2 className="text-2xl font-bold text-secondary mb-1 text-center md:text-left">{service.title}</h2>
                <p className="text-lg text-primary font-semibold mb-2 text-center md:text-left">{service.subtitle}</p>
                <p className="text-base text-brand-blue mb-4 text-center md:text-left">{service.description}</p>
                <ul className="text-secondary text-left space-y-1 mb-4 pl-4 list-disc">
                  {service.features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
              </div>
              <Link
                to="/contact"
                className="bg-primary text-brand-blue px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary animate-fade-in-up mt-4 hover:bg-brand-soft-blue hover:text-primary"
              >
                Demander un Devis
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="w-full py-20 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-4">Services Complémentaires</h2>
          <p className="text-xl text-brand-blue max-w-3xl mx-auto">En plus de nos services principaux, nous offrons un accompagnement complet pour la réussite de vos projets.</p>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div
            key={index}
            className="bg-white border border-primary rounded-xl p-6 shadow-blue-400/40 shadow-lg flex items-center gap-3 animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-blue-400/50 hover:shadow-2xl"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CheckCircle className="w-8 h-8 text-primary" />
            <span className="text-secondary font-medium text-lg">{service}</span>
          </div>
          
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-4">Notre Processus de Travail</h2>
          <p className="text-xl text-brand-blue max-w-3xl mx-auto">
            Une approche méthodique pour garantir la qualité et la satisfaction client.
          </p>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Consultation", description: "Analyse de vos besoins et visite sur site" },
            { step: "02", title: "Devis", description: "Proposition détaillée et transparente" },
            { step: "03", title: "Réalisation", description: "Exécution professionnelle des travaux" },
            { step: "04", title: "Suivi", description: "Service après-vente et maintenance" }
          ].map((process, index) => (
            <div
            key={index}
            className="bg-white border border-primary rounded-2xl p-8 shadow-blue-400/40 shadow-lg flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-blue-400/50 hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center text-xl font-bold mb-4">
               {process.step}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{process.title}</h3>
              <p className="text-secondary text-center">{process.description}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Emergency Service */}
      <section className="w-full py-20 bg-white flex items-center justify-center">
        <div className="bg-red-600 rounded-2xl p-12 text-center text-white shadow-md animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full" style={{ maxWidth: '98%', margin: '0 auto', animationDelay: '200ms' }}>
          <Clock className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">Service d'Urgence 24h/7j</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Panne électrique ? Problème urgent ? Notre équipe intervient rapidement pour rétablir votre installation électrique.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+212523000000" className="bg-white text-red-600 border-2 border-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group animate-fade-in-up hover:bg-primary hover:text-red-700 hover:border-primary">Appeler Maintenant</a>
            <Link to="/contact" className="border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center group animate-fade-in-up">Contact Urgence</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-white flex items-center justify-center">
        <div className="bg-primary rounded-2xl p-12 text-center text-secondary shadow-md animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full" style={{ maxWidth: '98%', margin: '0 auto' }}>
          <h2 className="text-3xl font-bold mb-4">Prêt à Démarrer Votre Projet ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contactez LIGHT BULB dès aujourd'hui pour un devis gratuit et personnalisé.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-secondary hover:bg-primary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group animate-fade-in-up">Obtenir un Devis Gratuit <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
            <a href="tel:+212523000000" className="border-2 border-secondary hover:bg-secondary hover:text-white text-secondary px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center group animate-fade-in-up">Appeler Maintenant</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;