import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Clock, Users, CheckCircle, Star, Award, TrendingUp } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  // --- Data Arrays ---
  const services = [
    {
      icon: <Zap className="w-8 h-8" />, title: t('home.services.0.title'), description: t('home.services.0.description'), color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />, title: t('home.services.1.title'), description: t('home.services.1.description'), color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Clock className="w-8 h-8" />, title: t('home.services.2.title'), description: t('home.services.2.description'), color: "from-green-500 to-green-600"
    }
  ];

  const features = [
    t('home.features.0'), t('home.features.1'), t('home.features.2'), t('home.features.3'), t('home.features.4'), t('home.features.5'),
  ];

  const testimonials = [
    {
      name: t('home.testimonials.0.name'), company: t('home.testimonials.0.company'), text: t('home.testimonials.0.text'), rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: t('home.testimonials.1.name'), company: t('home.testimonials.1.company'), text: t('home.testimonials.1.text'), rating: 5, avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "500+", label: t('home.stats.0'), icon: <Award className="w-6 h-6" /> },
    { number: "20+", label: t('home.stats.1'), icon: <TrendingUp className="w-6 h-6" /> },
    { number: "100%", label: t('home.stats.2'), icon: <Users className="w-6 h-6" /> },
    { number: "24h", label: t('home.stats.3'), icon: <Clock className="w-6 h-6" /> }
  ];

  // --- Render ---
  return (
    <div className="section-padding spacing-professional">
      {/* 1. Hero Section */}
      <section className="w-full min-h-[80vh] bg-cover bg-center relative flex items-center justify-center section-padding" style={{ backgroundImage: `url('/pexels-kseniachernaya-5691642.jpg')` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="relative w-full flex flex-col items-center justify-center gap-8 z-10 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-responsive font-bold leading-tight mb-4 text-white">
            Votre Expert en <span className="text-primary">Électricité</span> au Maroc
          </h1>
          <p className="text-xl text-primary/90 text-professional mb-6">
            LIGHT BULB vous accompagne dans tous vos projets électriques partout au Maroc : vente de matériel, installation, maintenance et dépannage.
          </p>
          <div className="btn-group-professional justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center justify-center group animate-fade-in-up">Demander un Devis <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
            <Link to="/services" className="btn-secondary inline-flex items-center justify-center group animate-fade-in-up">Nos Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="w-full py-16 bg-[#f9fafb]">
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

      {/* 3. Services Section */}
      <section className="w-full py-24 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000] mb-6">Nos Services</h2>
          <p className="text-xl text-[#7d7d7d] max-w-3xl mx-auto leading-relaxed" style={{ lineHeight: '1.7' }}>
           Vente, installation et maintenance électrique professionnelles.<br />
            Nous couvrons tous vos besoins avec professionnalisme.
          </p>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            let iconBg = '';
            if (index === 0) iconBg = 'bg-blue-500';
            else if (index === 1) iconBg = 'bg-yellow-500';
            else if (index === 2) iconBg = 'bg-green-500';

            return (
            <div
              key={index}
              className="flex flex-col items-center min-h-[260px] bg-white text-secondary border border-yellow-100 outline outline-1 outline-yellow-300 rounded-2xl shadow-blue-400/40 shadow-lg animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-blue-400/50 hover:shadow-2xl p-8"
              style={{ animationDelay: `${index * 100}ms` }}>
              <div
                className={`inline-flex items-center justify-center w-12 h-12 ${iconBg} rounded-xl text-white mb-6 text-2xl shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#000] mb-2 text-center">{service.title}</h3>
              <p className="text-[#7d7d7d] mb-6 text-center max-w-xs mx-auto text-base">{service.description}</p>

              <Link
                to="/contact"
                className="bg-primary hover:bg-brand-blue hover:text-primary text-secondary w-48 mx-auto px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-md hover:shadow-blue-500/40 transform hover:-translate-y-1 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary animate-fade-in-up mt-auto">
                Demander un Devis
              </Link>
            </div>
            );
          })}
        </div>

      </section>

      {/* 4. Why Choose Us Section */}
      
      <section className="py-24 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      
            {/* 4.1 Left Column */}
            <div className="space-y-10 animate-fade-in-left">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6 tracking-tight relative inline-block">
                  Pourquoi Choisir <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-md transition-all duration-300 hover:from-yellow-500 hover:to-yellow-700 hover:scale-105 hover:drop-shadow-xl cursor-pointer">LIGHT BULB</span>
                  <span className="text-primary"> ?</span>
                  <span className="block w-20 h-1 bg-yellow-400 rounded-full mt-3 ml-1"></span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Notre expertise et notre engagement envers la qualité font de nous le partenaire idéal pour tous vos projets électriques à Mohammedia.
                </p>
              </div>

              {/* 4.2 Right Column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Plus de 10 ans d'expérience",
                  "Équipe certifiée et qualifiée",
                  "Matériel de qualité européenne",
                  "Service client réactif",
                  "Devis gratuit sous 24h",
                  "Garantie sur tous nos travaux",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 border border-yellow-400 outline outline-1 outline-yellow-100 rounded-xl shadow-sm bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-200 group">
                    <svg
                      className="w-5 h-5 text-yellow-500 mt-1 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800 font-medium group-hover:text-yellow-700 transition-all duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4.3 Right Stats Card */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-10 shadow-xl animate-fade-in-right transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-200">
              <div className="bg-white rounded-2xl p-10 text-center shadow-inner">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6 transition-all duration-300 hover:scale-110">
                  <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 14c2.21 0 4 1.79 4 4v1H4v-1c0-2.21 1.79-4 4-4h8zM12 2a5 5 0 110 10 5 5 0 010-10z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-extrabold text-gray-900 mb-2">500+</h3>
                <p className="text-lg text-gray-600 mb-6">Clients Satisfaits</p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current hover:scale-110 transition-transform duration-200"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.055 3.24a1 1 0 00.95.69h3.402c.969 0 1.371 1.24.588 1.81l-2.754 2a1 1 0 00-.364 1.118l1.055 3.24c.3.921-.755 1.688-1.538 1.118l-2.754-2a1 1 0 00-1.176 0l-2.754 2c-.783.57-1.838-.197-1.538-1.118l1.055-3.24a1 1 0 00-.364-1.118l-2.754-2c-.783-.57-.38-1.81.588-1.81h3.402a1 1 0 00.95-.69l1.055-3.24z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500">Note moyenne de nos clients</p>
              </div>
            </div>
          </div> 
        </div>
      </section>


      
      {/* 6. CTA Section (Enhanced) */}
      <section className="w-full py-24 relative flex items-center justify-center min-h-[600px] bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('/public/pexels-kseniachernaya-5691642.jpg')` }}>
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent pointer-events-none" aria-hidden="true"></div>
        <div className="relative z-10 w-full max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-200 rounded-3xl p-10 md:p-14 text-center text-[#000] shadow-[0_12px_48px_0_rgba(59,130,246,0.25),0_2px_8px_0_rgba(0,0,0,0.10)] transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-300 animate-fade-in-up">
            {/* Trust Badge & Testimonial */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                20+ ans d'expérience
              </span>
              <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-1 rounded-full shadow-sm">
                ★★★★★ <span>Excellent service !</span>
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight drop-shadow-sm">
              Prêt à Démarrer Votre Projet ?
            </h2>
            {/* Quick Benefits */}
            <ul className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 text-base font-medium text-gray-800">
              <li className="flex items-center gap-2"><span className="text-green-500">✅</span> Devis 100% gratuit</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✅</span> Intervention sous 24 h</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✅</span> Équipe certifiée & agréée</li>
            </ul>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contactez <span className="font-bold text-yellow-700">LIGHT BULB</span> dès aujourd'hui pour un devis gratuit et personnalisé.<br className="hidden md:block" />
              Notre équipe d'experts est prête à vous accompagner.
            </p>
            <p className="text-base md:text-lg text-blue-900 mb-6 max-w-2xl mx-auto leading-relaxed font-semibold">
              LIGHT BULB intervient partout au Maroc, pour vos projets résidentiels et professionnels.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 mb-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 group min-h-[48px] min-w-[220px]"
                aria-label="Obtenir un Devis Gratuit">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" /></svg>
                Obtenir un Devis Gratuit
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+212661067491"
                className="inline-flex items-center justify-center border-2 border-gray-800 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-sm min-h-[48px] min-w-[220px]"
                aria-label="Appeler le +212661067491">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.789 1.106l1.387 2.773a2 2 0 01-.327 2.327l-1.07 1.07a16.001 16.001 0 006.586 6.586l1.07-1.07a2 2 0 012.327-.327l2.773 1.387A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" /></svg>
                Appeler Maintenant
              </a>
            </div>
            {/* Lead Form */}
            <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto" autoComplete="off" onSubmit={e => { e.preventDefault(); /* handle submit here */ }}>
              <input
                type="text"
                name="name"
                required
                placeholder="Votre nom"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all text-base mb-2 sm:mb-0"
                aria-label="Votre nom"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Votre email ou téléphone"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all text-base mb-2 sm:mb-0"
                aria-label="Votre email ou téléphone"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 min-h-[48px]"
                aria-label="Envoyer le formulaire de contact"
              >
                Envoyer
              </button>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  const name = (document.querySelector('input[name="name"]') as HTMLInputElement)?.value || '';
                  const email = (document.querySelector('input[name="email"]') as HTMLInputElement)?.value || '';
                  const msg = encodeURIComponent(`Bonjour, je souhaite un devis.\nNom: ${name}\nEmail/Téléphone: ${email}`);
                  window.open(`https://wa.me/212661067491?text=${msg}`, '_blank');
                }}
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 min-h-[48px]"
                aria-label="Envoyer via WhatsApp"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A12.07 12.07 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.69.97.99-3.59-.24-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.54 0 4.93.99 6.74 2.76A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                WhatsApp
              </a>
            </form>
          </div>
        </div>
      </section>

      {/* 7. Cities Served Section */}
      <section className="w-full py-12 bg-white flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Nous intervenons dans toutes les villes du Maroc :</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              'Casablanca', 'Rabat', 'Tanger', 'Fès', 'Agadir', 'Nador', 'Ouarzazate', 'Marrakech', 'Oujda', 'Kenitra', 'El Jadida', 'Tétouan', 'Safi', 'Khouribga', '...et plus'
            ].map(city => (
              <span
                key={city}
                className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-800 font-semibold px-4 py-2 rounded-full shadow-sm text-base md:text-lg transition-all duration-200 cursor-pointer hover:bg-yellow-400 hover:text-white group hover:-translate-y-1"
              >
                <svg className="w-5 h-5 text-green-500 transition-transform duration-200 group-hover:scale-125 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
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