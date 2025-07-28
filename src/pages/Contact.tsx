import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
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

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: boolean}>({});

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.cards.0.title'),
      details: [t('contact.cards.0.line1'), t('contact.cards.0.line2')],
      link: 'https://www.google.com/maps/place/Light+Bulb/@33.6751634,-7.3925033,235m/data=!3m2!1e3!4b1!4m19!1m12!4m11!1m3!2m2!1d-7.3942887!2d33.6775522!1m6!1m2!1s0xda7b1d1bad02a91:0xd8b7db26cdd93cd1!2sLight+Bulb+N%C2%B0+248+Hassania+2+bloc+B,+RDC+Bd+de+Riyad+Mohamm%C3%A9dia!2m2!1d-7.3918596!2d33.6751623!3m5!1s0xda7b1d1bad02a91:0xd8b7db26cdd93cd1!8m2!3d33.6751623!4d-7.3918596!16s%2Fg%2F11mvp3hc5c?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.cards.1.title'),
      details: [t('contact.cards.1.line1'), t('contact.cards.1.line2')],
      link: 'tel:+212661067491',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.cards.2.title'),
      details: [t('contact.cards.2.line1'), t('contact.cards.2.line2')],
      link: 'mailto:Bulb.light.2020@gmail.com',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('contact.cards.3.title'),
      details: [t('contact.cards.3.line1'), t('contact.cards.3.line2')],
      link: null,
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  const services = [
    'Vente de matériel électrique',
    'Installation électrique',
    'Maintenance et dépannage',
    'Travaux divers',
    'Consultation technique',
    "Service d'urgence",
  ];

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
            Contactez <span className="ml-2 font-extrabold text-white drop-shadow-md">Nous</span>
          </h1>
          <p className="text-body-large text-white/95 max-w-4xl mx-auto mb-4 leading-relaxed lg:bg-black/20 lg:rounded-2xl lg:px-8 lg:py-4 lg:backdrop-blur-professional animate-fade-in-up text-shadow">
            Besoin d'un devis, d'un conseil ou d'une intervention ? Notre équipe est à votre disposition.
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

      {/* Contact Info Cards */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="card card-hover flex flex-col items-center justify-center animate-fade-in-up transition-all duration-300 shadow-blue-400/40 shadow-lg hover:scale-105 hover:shadow-blue-400/60 hover:shadow-2xl bg-white text-secondary border-2 border-yellow-300 outline outline-1 outline-yellow-300 rounded-2xl p-4 sm:p-5 min-h-[150px] sm:min-h-[170px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-xl text-white mb-3 sm:mb-4`}
              >
                {React.cloneElement(info.icon, {
                  className: 'w-6 h-6 sm:w-8 sm:h-8 text-white',
                })}
              </div>
              <h3
                className="text-base sm:text-lg font-semibold text-secondary text-center"
              >
                {info.title}
              </h3>
              <div className="space-y-1 text-center">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-brand-blue text-sm sm:text-base">
                    {info.link && detailIndex === 0 ? (
                      <a
                        href={info.link}
                        className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="w-full py-16 sm:py-20 bg-yellow-50 w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 hover:shadow-2xl border border-yellow-400">
            <div className="mb-6 sm:mb-8 text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-secondary mb-2">
                Demander un Devis Gratuit
              </h2>
              <p className="text-brand-blue mb-4 text-sm sm:text-base">Réponse garantie sous 24h</p>
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3 animate-fade-in-up">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 text-sm sm:text-base">
                    {t('contact.form.message_sent')}
                  </p>
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: '200ms' }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary text-sm sm:text-base ${
                      fieldErrors.name ? 'border-orange-500' : 'border-gray-300'
                    }`}
                    placeholder={t('contact.form.name_placeholder')}
                  />
                  {fieldErrors.name && (
                    <div className="mt-2 flex items-center space-x-2 text-orange-600 text-xs sm:text-sm">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>Veuillez remplir ce champ</span>
                    </div>
                  )}
                </div>
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: '300ms' }}
                >
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary ${
                      fieldErrors.phone ? 'border-orange-500' : 'border-gray-300'
                    }`}
                    placeholder={t('contact.form.phone_placeholder')}
                  />
                  {fieldErrors.phone && (
                    <div className="mt-2 flex items-center space-x-2 text-orange-600 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>Veuillez remplir ce champ</span>
                    </div>
                  )}
                </div>
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: '400ms' }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary ${
                    fieldErrors.email ? 'border-orange-500' : 'border-gray-300'
                  }`}
                  placeholder={t('contact.form.email_placeholder')}
                />
                {fieldErrors.email && (
                  <div className="mt-2 flex items-center space-x-2 text-orange-600 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>Veuillez remplir ce champ</span>
                  </div>
                )}
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: '500ms' }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t('contact.form.service_type')}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary ${
                    fieldErrors.subject ? 'border-orange-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">{t('contact.form.select_service')}</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {fieldErrors.subject && (
                  <div className="mt-2 flex items-center space-x-2 text-orange-600 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>Veuillez remplir ce champ</span>
                  </div>
                )}
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: '600ms' }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none hover:border-primary ${
                    fieldErrors.message ? 'border-orange-500' : 'border-gray-300'
                  }`}
                  placeholder={t('contact.form.message_placeholder')}
                />
                {fieldErrors.message && (
                  <div className="mt-2 flex items-center space-x-2 text-orange-600 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>Veuillez remplir ce champ</span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={(e) => {
                    e.preventDefault();
                    
                    // Check if all required fields are filled
                    const newFieldErrors: {[key: string]: boolean} = {};
                    if (!formData.name) newFieldErrors.name = true;
                    if (!formData.phone) newFieldErrors.phone = true;
                    if (!formData.email) newFieldErrors.email = true;
                    if (!formData.subject) newFieldErrors.subject = true;
                    if (!formData.message) newFieldErrors.message = true;
                    
                    if (Object.keys(newFieldErrors).length > 0) {
                      setFieldErrors(newFieldErrors);
                      return;
                    }
                    
                    setFieldErrors({});
                    
                    // If all fields are valid, proceed with form submission
                    handleSubmit(e);
                  }}
                  className="w-full bg-primary hover:bg-white text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in-up text-sm sm:text-base"
                  style={{ animationDelay: '700ms' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-secondary mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      Envoyer la Demande
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                   // Check if all required fields are filled
                   const newFieldErrors: {[key: string]: boolean} = {};
                   if (!formData.name) newFieldErrors.name = true;
                   if (!formData.phone) newFieldErrors.phone = true;
                   if (!formData.email) newFieldErrors.email = true;
                   if (!formData.subject) newFieldErrors.subject = true;
                   if (!formData.message) newFieldErrors.message = true;
                   
                   if (Object.keys(newFieldErrors).length > 0) {
                     setFieldErrors(newFieldErrors);
                     return;
                   }
                   
                   setFieldErrors({});
                   
                   const name = formData.name || '';
                   const phone = formData.phone || '';
                   const email = formData.email || '';
                   const service = formData.subject || '';
                   const message = formData.message || '';
                   
                   const whatsappMessage = `Bonjour, je souhaite un devis pour LIGHT BULB.

Nom: ${name}
Téléphone: ${phone}
Email: ${email}
Type de service: ${service}
Message: ${message}

Merci de me contacter pour un devis personnalisé.`;
                   
                   const encodedMessage = encodeURIComponent(whatsappMessage);
                   window.open(`https://wa.me/212661067491?text=${encodedMessage}`, '_blank');
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 animate-fade-in-up text-sm sm:text-base"
                  style={{ animationDelay: '800ms' }}
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A12.07 12.07 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.69.97.99-3.59-.24-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.54 0 4.93.99 6.74 2.76A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                  </svg>
                  Envoyer via WhatsApp
                </button>
               
               {/* Validation Error Message */}
               {/* This block is removed as per the edit hint to remove the old validation message */}
              </div>
            </form>
            <p className="mt-4 text-sm text-brand-blue text-center">
              * Champs obligatoires - Réponse garantie sous 24h
            </p>
          </div>

          {/* Right Column - Map and Emergency Service */}
          <div className="space-y-6">
            {/* Google Maps Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 hover:shadow-2xl border border-yellow-400"
              style={{ animationDelay: '200ms' }}
            >
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl text-white">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                  Notre Localisation
                </h3>
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

            {/* Emergency Service Card */}
            <div
              className="bg-red-600 rounded-3xl p-6 sm:p-8 text-white animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 hover:shadow-2xl border border-yellow-400"
              style={{ animationDelay: '300ms' }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                <h3 className="text-xl sm:text-2xl font-bold">Service d'Urgence 24h/7j</h3>
              </div>
              <p className="mb-6 text-sm sm:text-base">
                Panne électrique ? Problème urgent ? Notre équipe intervient
                rapidement.
              </p>
              <a
                href="tel:+212661067491"
                className="bg-white text-red-600 border-2 border-white px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-primary hover:text-red-700 hover:border-primary text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
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
