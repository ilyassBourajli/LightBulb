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
import { Link, useLocation } from 'react-router-dom';

const heroImages = [
  { src: '/hero.jpg', caption: 'Tableau électrique moderne' },
  { src: '/arm.jpg', caption: 'Installation professionnelle' },
  { src: '/pexels-kseniachernaya-5691642.jpg', caption: 'Matériel de qualité' },
  { src: '/pexels-lamiko-3616745.jpg', caption: 'Solutions innovantes' },
  { src: '/prise entrer.jpg', caption: 'Prises sécurisées' },
  { src: '/Card.jpg', caption: 'Finitions impeccables' },
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear field error when user starts typing
    if (fieldErrors[e.target.name]) {
      setFieldErrors({
        ...fieldErrors,
        [e.target.name]: false,
      });
    }
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
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      value: '+212 661 067 491',
      href: 'tel:+212661067491',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'contact@lightbulb.ma',
      href: 'mailto:contact@lightbulb.ma',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'En magasin',
      value: 'Mohammedia, Maroc',
      href: 'https://www.google.com/maps/dir//Light+Bulb+N%C2%B0+248+Hassania+2+bloc+B,+RDC+Bd+de+Riyad+Mohamm%C3%A9dia/@33.6751623,-7.3918596,1876m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0xda7b1d1bad02a91:0xd8b7db26cdd93cd1!2m2!1d-7.3918596!2d33.6751623?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D',
      color: 'from-red-500 to-red-600',
    },
  ];

  const validateField = (name: string, value: string) => {
    if (!value.trim()) {
      setFieldErrors({
        ...fieldErrors,
        [name]: true,
      });
      return false;
    }
    return true;
  };

  const handleWhatsApp = () => {
    const requiredFields = ['name', 'email', 'phone', 'subject', 'message'];
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (!validateField(field, formData[field as keyof typeof formData])) {
        hasErrors = true;
      }
    });

    if (hasErrors) {
      return;
    }

    const message = `Bonjour ! Je suis ${formData.name}.

Email: ${formData.email}
Téléphone: ${formData.phone}

Sujet: ${formData.subject}

Message: ${formData.message}

Je souhaite recevoir un devis personnalisé.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/212661067491?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const location = useLocation();

  // Scroll to devis section when hash is present
  useEffect(() => {
    if (location.hash === '#devis') {
      const devisSection = document.getElementById('devis');
      if (devisSection) {
        setTimeout(() => {
          devisSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location.hash]);

  // Animation effect for devis section
  useEffect(() => {
    const targetElement = document.getElementById('devis');
    if (targetElement && location.hash === '#devis') {
      // Add initial animation classes
      targetElement.classList.add('animate-slide-down');
      
      // Add staggered animation to form elements
      const formElements = targetElement.querySelectorAll('input, textarea, button, label');
      formElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-fade-in-up');
        }, 200 + (index * 100));
      });
    }
  }, [location.hash]);

  return (
    <div className="w-full">
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
              Contactez
            </span>
            <br />
            <span className="text-white drop-shadow-2xl font-black">
              Nous
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-6xl mx-auto mb-8 leading-relaxed animate-fade-in-up font-medium px-4" style={{ animationDelay: '0.4s' }}>
            <span className="bg-black/40 backdrop-blur-sm px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl leading-relaxed">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </span>
          </p>
          
          {/* Contact Methods Preview */}
          <div className="flex items-center gap-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">Téléphone</div>
              <div className="text-sm md:text-base text-white/80">+212 661 067 491</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">Email</div>
              <div className="text-sm md:text-base text-white/80">contact@lightbulb.ma</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">WhatsApp</div>
              <div className="text-sm md:text-base text-white/80">Disponible 24/7</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/contact#devis"
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex items-center gap-3 text-lg"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              to="/services#services"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl border-2 border-white/30 hover:border-white/50 shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex items-center gap-3 text-lg"
            >
              <span>Nos services</span>
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

      {/* Contact Info Cards */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-yellow-300 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 group hover:-translate-y-2"
              >
                <div className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${info.color} rounded-full text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {info.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section id="devis" className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-yellow-50 transform transition-all duration-800">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white border-2 border-yellow-300 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 group hover:-translate-y-2 transform transition-all duration-800">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                  Envoyez-nous un message
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors duration-300 ${
                      fieldErrors.name
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/50'
                        : 'border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50'
                    }`}
                    placeholder="Votre nom complet"
                  />
                  {fieldErrors.name && (
                    <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors duration-300 ${
                      fieldErrors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/50'
                        : 'border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50'
                    }`}
                    placeholder="votre@email.com"
                  />
                  {fieldErrors.email && (
                    <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors duration-300 ${
                      fieldErrors.phone
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/50'
                        : 'border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50'
                    }`}
                    placeholder="Votre numéro de téléphone"
                  />
                  {fieldErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors duration-300 ${
                      fieldErrors.subject
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/50'
                        : 'border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50'
                    }`}
                    placeholder="Sujet de votre demande"
                  />
                  {fieldErrors.subject && (
                    <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors duration-300 resize-none ${
                      fieldErrors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/50'
                        : 'border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50'
                    }`}
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                  {fieldErrors.message && (
                    <p className="text-red-500 text-sm mt-1">Ce champ est requis</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer la demande
                      </div>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      WhatsApp
                    </div>
                  </button>
                </div>

                {isSubmitted && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <p className="text-green-700 font-medium">
                      Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Map Card */}
            <div className="bg-white border-2 border-yellow-300 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-400/60 group hover:-translate-y-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                  Notre localisation
                </h2>
              </div>
              
              <div className="bg-gray-200 rounded-xl h-64 sm:h-80 mb-6 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2 group-hover:text-yellow-500 transition-colors duration-300" />
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Carte interactive
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3 group hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 group-hover:text-yellow-600 transition-colors duration-300">
                      Adresse
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Mohammedia, Maroc
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 group-hover:text-yellow-600 transition-colors duration-300">
                      Horaires
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Lundi - Vendredi: 8h - 18h
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      Samedi: 8h - 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
