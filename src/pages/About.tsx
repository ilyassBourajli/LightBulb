import React from 'react';
import { Award, Shield, Clock, Target, ArrowRight, Users, Truck, Zap, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="w-full">
      {/* Section Hero avec image de fond */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img 
            src="/hero.jpg" 
            alt="Matériel électrique professionnel Light Bulb" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Contenu overlay */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-clip-text text-transparent drop-shadow-xl animate-fade-in-up tracking-wide">
              À Propos de Light Bulb
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white drop-shadow-lg">
              Plus de 20 ans d'expertise en matériel électrique
            </p>
            <p className="text-base md:text-lg mb-8 text-gray-200 drop-shadow-lg">
              Votre partenaire de confiance à Mohammedia et partout au Maroc
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 text-lg"
              >
                Demander un devis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 text-lg border-2 border-yellow-300"
              >
                Nos services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Qui sommes-nous avec fond dégradé */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-600 mb-4">Qui sommes-nous ?</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            <strong>Light Bulb</strong> est votre partenaire de confiance en matériel électrique, basé à Mohammedia et intervenant partout au Maroc.<br />
            Plus de 20 ans d'expérience au service des particuliers et des professionnels.
          </p>
          <p className="italic text-gray-600 text-lg">Entreprise familiale animée par la passion de l'électricité et le sens du service.</p>
        </div>
      </section>

      {/* Section Notre Mission & Nos Valeurs */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-yellow-600 mb-6 text-center">Notre Mission & Nos Valeurs</h2>
          <p className="text-gray-700 text-center mb-12 text-lg">
            Nous nous engageons à fournir des solutions électriques de qualité tout en respectant nos valeurs fondamentales.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Carte Excellence */}
            <div className="bg-white border-2 border-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 animate-fade-in-up">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-2xl text-white mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  Nous nous engageons à fournir des services de la plus haute qualité avec des matériaux certifiés.
                </p>
              </div>
            </div>

            {/* Carte Confiance */}
            <div className="bg-white border-2 border-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-2xl text-white mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Confiance</h3>
                <p className="text-gray-600 text-sm">
                  Nos clients nous font confiance pour leurs projets les plus importants depuis plus de 20 ans.
                </p>
              </div>
            </div>

            {/* Carte Réactivité */}
            <div className="bg-white border-2 border-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-2xl text-white mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Réactivité</h3>
                <p className="text-gray-600 text-sm">
                  Service client disponible et interventions rapides pour tous vos besoins urgents.
                </p>
              </div>
            </div>

            {/* Carte Précision */}
            <div className="bg-white border-2 border-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-2xl text-white mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Précision</h3>
                <p className="text-gray-600 text-sm">
                  Chaque installation est réalisée avec précision selon les normes marocaines et internationales.
                </p>
              </div>
            </div>
          </div>

          {/* Images côte à côte */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img 
                src="/entrepot.jpg" 
                alt="Entrepôt Light Bulb - Stock important de matériel électrique" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-800 mb-2">Notre Entrepôt</h3>
                <p className="text-gray-600 text-sm">Stock important pour une livraison rapide partout au Maroc</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <img 
                src="/equipe.jpg" 
                alt="Équipe Light Bulb - Passionnés d'électricité" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-800 mb-2">Notre Équipe</h3>
                <p className="text-gray-600 text-sm">Passionnés d'électricité, toujours à l'écoute de nos clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi choisir Light Bulb - Cartes */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-yellow-600 mb-8 text-center">Pourquoi choisir Light Bulb ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Carte Expertise */}
            <div className="bg-white border-2 border-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-yellow-500 rounded-xl text-white mb-4">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Expertise Reconnue</h3>
                <p className="text-gray-600 text-sm">
                  Plus de 20 ans d'expérience et conseils personnalisés pour tous vos projets.
                </p>
              </div>
            </div>

            {/* Carte Entreprise Familiale */}
            <div className="bg-white border-2 border-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-yellow-500 rounded-xl text-white mb-4">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Entreprise Familiale</h3>
                <p className="text-gray-600 text-sm">
                  Proche de ses clients, avec un service personnalisé et une écoute attentive.
                </p>
              </div>
            </div>

            {/* Carte Livraison Rapide */}
            <div className="bg-white border-2 border-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-yellow-500 rounded-xl text-white mb-4">
                  <Truck className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Livraison Rapide</h3>
                <p className="text-gray-600 text-sm">
                  Stock local important pour une disponibilité immédiate et une livraison express.
                </p>
              </div>
            </div>

            {/* Carte Solutions Adaptées */}
            <div className="bg-white border-2 border-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-yellow-500 rounded-xl text-white mb-4">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Solutions Adaptées</h3>
                <p className="text-gray-600 text-sm">
                  Solutions pour tous les besoins, particuliers ou professionnels, sur mesure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre engagement au Maroc - Mise en valeur */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60">
            <h2 className="text-3xl font-bold text-yellow-600 mb-6 text-center">Notre engagement au Maroc</h2>
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-yellow-600 mr-3" />
              <span className="text-lg font-semibold text-gray-800">Mohammedia - Tout le Maroc</span>
            </div>
            <p className="text-gray-700 text-center text-lg leading-relaxed">
              Implantés à Mohammedia, nous livrons et accompagnons nos clients sur tout le territoire marocain. 
              Notre mission : rendre le matériel électrique de qualité accessible à tous, avec un service irréprochable 
              et une écoute attentive. Chaque membre de notre équipe est engagé à offrir un service de proximité, 
              comme si chaque client faisait partie de la famille.
            </p>
          </div>
        </div>
      </section>

      {/* Section Contact & Call-to-action */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow-600 mb-6">Contactez-nous</h2>
          <p className="text-gray-700 text-lg mb-8">
            Nous répondons par téléphone, WhatsApp, e-mail ou directement en magasin.<br />
            Besoin d'un conseil, d'un devis ou d'un produit spécifique ?
          </p>
          
          {/* Icônes de contact */}
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="tel:+212 661 06 74 91" 
              className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors duration-300 cursor-pointer"
            >
              <Phone className="w-5 h-5 mr-2 text-yellow-600" />
              <span className="text-sm">Téléphone</span>
            </a>
            <a 
              href="mailto:contact@lightbulb.ma" 
              className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors duration-300 cursor-pointer"
            >
              <Mail className="w-5 h-5 mr-2 text-yellow-600" />
              <span className="text-sm">Email</span>
            </a>
            <a 
              href="https://www.google.com/maps/dir//Light+Bulb+N%C2%B0+248+Hassania+2+bloc+B,+RDC+Bd+de+Riyad+Mohamm%C3%A9dia/@33.6751623,-7.3918596,1876m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0xda7b1d1bad02a91:0xd8b7db26cdd93cd1!2m2!1d-7.3918596!2d33.6751623?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors duration-300 cursor-pointer"
            >
              <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
              <span className="text-sm">En magasin</span>
            </a>
          </div>

          <p className="font-semibold text-gray-800 mb-8">
            Contactez-nous dès maintenant : nous sommes à votre écoute.
          </p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 text-lg"
          >
            Demander un devis
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer SEO */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-white border-t border-gray-200">
        <div className="w-full max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            <strong>Light Bulb</strong> vous accompagne dans tous vos projets électriques à Mohammedia, Casablanca, Tanger, Marrakech et partout au Maroc. 
            Votre partenaire de confiance pour tous vos besoins en matériel électrique de qualité.
          </p>
        </div>
      </section>
    </div>
  );
}
