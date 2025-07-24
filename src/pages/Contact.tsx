import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const heroImages = [
  { src: '/hero.jpg', caption: 'Tableau électrique moderne' },
  { src: '/arm.jpg', caption: 'Installation professionnelle' },
  { src: '/pexels-kseniachernaya-5691642.jpg', caption: 'Matériel de qualité' },
  { src: '/pexels-lamiko-3616745.jpg', caption: 'Solutions innovantes' },
  { src: '/prise entrer.jpg', caption: 'Prises sécurisées' },
  { src: '/prise.jpg', caption: 'Finitions impeccables' },
];

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Carousel logic (same as Home/About)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.cards.0.title'),
      details: [t('contact.cards.0.line1'), t('contact.cards.0.line2')],
      link: "https://maps.google.com/?q=Maroc",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.cards.1.title'),
      details: [t('contact.cards.1.line1'), t('contact.cards.1.line2')],
      link: "tel:+212661067491",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.cards.2.title'),
      details: [t('contact.cards.2.line1'), t('contact.cards.2.line2')],
      link: "mailto:Bulb.light.2020@gmail.com",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('contact.cards.3.title'),
      details: [t('contact.cards.3.line1'), t('contact.cards.3.line2')],
      link: null,
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const services = [
    "Vente de matériel électrique",
    "Installation électrique",
    "Maintenance et dépannage",
    "Travaux divers",
    "Consultation technique",
    "Service d'urgence"
  ];

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
            Contactez <span className="text-white bg-none">Nous</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-2 text-professional leading-relaxed lg:bg-black/30 lg:rounded-xl lg:px-6 lg:py-3 lg:backdrop-blur-md animate-fade-in-up">
            Besoin d'un devis, d'un conseil ou d'une intervention ? Notre équipe est à votre disposition.
          </p>
          {/* Caption and Button Grouped */}
          {heroImages[heroIndex].caption && (
            <div className="flex flex-col items-center gap-2 mt-2 mb-4">
              <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent drop-shadow-xl animate-scale-in">
                {heroImages[heroIndex].caption}
              </div>
            </div>
          )}
          {/* Carousel Controls and Dots remain unchanged */}
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
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="card card-hover flex flex-col items-center justify-center animate-fade-in-up transition-all duration-300 shadow-blue-400/40 shadow-lg hover:scale-105 hover:shadow-blue-400/50 hover:shadow-2xl bg-white text-secondary border border-yellow-200 outline outline-1 outline-yellow-300 rounded-2xl p-5 min-h-[170px]" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl text-white mb-4`}>
                  {React.cloneElement(info.icon, { className: 'w-8 h-8 text-white' })}
                </div>
                <h3 className="text-lg font-semibold text-secondary" style={{ fontSize: '1.25rem' }}>{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-brand-blue text-base">
                      {info.link && detailIndex === 0 ? (
                        <a href={info.link} className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">{detail}</a>
                      ) : detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      {/* Contact Form & Map */}
      <section className="w-full py-20 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-primary">
              <div className="flex items-center space-x-3 mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-xl text-white">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-secondary">Demander un Devis Gratuit</h2>
                  <p className="text-brand-blue">Réponse garantie sous 24h</p>
                </div>
              </div>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3 animate-fade-in-up">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800">
                    {t('contact.form.message_sent')}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary"
                      placeholder={t('contact.form.name_placeholder')}
                    />
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary"
                      placeholder={t('contact.form.phone_placeholder')}
                    />
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary"
                    placeholder={t('contact.form.email_placeholder')}
                  />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.service_type')}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary"
                  >
                    <option value="">{t('contact.form.select_service')}</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none hover:border-primary"
                    placeholder={t('contact.form.message_placeholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-white text-secondary px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in-up"
                  style={{ animationDelay: '700ms' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-secondary mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Envoyer la Demande
                    </>
                  )}
                </button>
              </form>

              <p className="mt-4 text-sm text-brand-blue text-center">* Champs obligatoires - Réponse garantie sous 24h</p>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Google Maps */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-primary animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary rounded-xl text-white">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Notre Localisation</h3>
                </div>
                <div className="aspect-video bg-background rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3320.3051406025384!2d-7.394577!3d33.6751622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b1d1bad02a91%3A0xd8b7db26cdd93cd1!2sLight%20Bulb!5e0!3m2!1sfr!2sma!4v1753194988138!5m2!1sfr!2sma"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('contact.map.location_title')}
                  ></iframe>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-600 rounded-3xl p-8 text-white animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold">Service d'Urgence 24h/7j</h3>
                </div>
                <p className="mb-6">Panne électrique ? Problème urgent ? Notre équipe intervient rapidement.</p>
                <a href="tel:+212661067491" className="bg-white text-red-600 border-2 border-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-primary hover:text-red-700 hover:border-primary">
                  <Phone className="w-5 h-5" />
                  <span>Appeler Maintenant</span>
                </a>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Contact;