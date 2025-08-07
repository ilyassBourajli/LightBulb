import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Building2,
  Shield,
  FileText,
  Mail,
  Phone,
  MapPin,
  Globe,
  Lock,
  AlertCircle,
  Calendar,
  User,
  Server,
  Briefcase,
  BadgeCheck,
  Landmark,
  ClipboardSignature,
  Info,
  Activity,
  AtSign
} from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';

const Legal = () => {
  const { t } = useTranslation();

  // Grouped cards for better structure
  type InfoItem = {
    label: string;
    value: string;
    icon: React.ElementType;
    badge?: boolean;
    highlight?: boolean;
    copy?: boolean;
    link?: string;
  };

  const identity: InfoItem[] = [
    { label: t('legal.raison_sociale'), value: t('legal.raison_sociale_value'), icon: Briefcase },
    { label: t('legal.statut_juridique'), value: t('legal.statut_juridique_value'), icon: BadgeCheck, badge: true },
    { label: t('legal.forme_juridique'), value: t('legal.forme_juridique_value'), icon: ClipboardSignature },
    { label: t('legal.activite'), value: t('legal.activite_value'), icon: Activity },
  ];
  const registration: InfoItem[] = [
    { label: t('legal.tribunal'), value: t('legal.tribunal_value'), icon: Landmark },
    { label: t('legal.numero_immatriculation'), value: t('legal.numero_immatriculation_value'), icon: Info, highlight: true },
    { label: t('legal.ice'), value: t('legal.ice_value'), icon: Info, highlight: true },
    { label: t('legal.numero_tva'), value: t('legal.numero_tva_value'), icon: Info },
  ];
  const contact: InfoItem[] = [
    { label: t('legal.adresse'), value: t('legal.adresse_value'), icon: MapPin, link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t('legal.adresse_value'))}` },
    { label: t('legal.telephone'), value: t('legal.telephone_value'), icon: Phone, link: `tel:${t('legal.telephone_value').replace(/[^+\d]/g, '')}` },
    { label: t('legal.email'), value: t('legal.email_value'), icon: AtSign, copy: true, link: `mailto:${t('legal.email_value')}` },
  ];

  const legalDocuments = [
    {
      title: t('legal.propriete_intellectuelle_title'),
      icon: FileText,
      color: 'bg-yellow-500',
      content: t('legal.propriete_intellectuelle_value')
    },
    {
      title: t('legal.protection_donnees_personnelles_title'),
      icon: Shield,
      color: 'bg-red-500',
      content: t('legal.protection_donnees_personnelles_value')
    },
    {
      title: t('legal.cookies_title'),
      icon: Lock,
      color: 'bg-indigo-500',
      content: t('legal.cookies_value')
    },
    {
      title: t('legal.responsabilite_title'),
      icon: AlertCircle,
      color: 'bg-orange-500',
      content: t('legal.responsabilite_value')
    },
    {
      title: t('legal.droit_applicable_title'),
      icon: Globe,
      color: 'bg-teal-500',
      content: t('legal.droit_applicable_value')
    }
  ];

  // Copy to clipboard handler
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <SEOHelmet
        title="Mentions légales LIGHT BULB - Informations légales et RGPD"
        description="Consultez les mentions légales de LIGHT BULB : identité, statut, propriété intellectuelle, protection des données, hébergement, responsabilité."
        keywords="mentions légales Light Bulb, informations légales, RGPD, protection données, propriété intellectuelle, responsabilité"
        image="/LogoLb.png"
        url={typeof window !== 'undefined' ? window.location.href : ''}
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t('legal.mentions_legales_title')}
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t('legal.legal_info_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Grouped Company Information Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Identité */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-blue-500" />
                <h2 className="text-xl font-bold text-gray-800">Identité de l'entreprise</h2>
              </div>
              <div className="space-y-4">
                {identity.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 border-b border-gray-100 pb-3 last:border-b-0">
                    <item.icon className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="font-semibold text-gray-800 mr-2">{item.label} :</span>
                      {item.badge ? (
                        <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded ml-1 align-middle">{item.value}</span>
                      ) : item.highlight ? (
                        <span className="text-blue-700 font-bold tracking-wide">{item.value}</span>
                      ) : (
                        <span className="text-gray-700">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Enregistrement */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <Landmark className="w-8 h-8 text-purple-500" />
                <h2 className="text-xl font-bold text-gray-800">Enregistrement & Statut</h2>
              </div>
              <div className="space-y-4">
                {registration.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 border-b border-gray-100 pb-3 last:border-b-0">
                    <item.icon className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="font-semibold text-gray-800 mr-2">{item.label} :</span>
                      {item.highlight ? (
                        <span className="text-purple-700 font-bold tracking-wide cursor-pointer hover:underline" onClick={() => handleCopy(item.value)} title="Copier">{item.value}</span>
                      ) : (
                        <span className="text-gray-700">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-green-500" />
                <h2 className="text-xl font-bold text-gray-800">Contact</h2>
              </div>
              <div className="space-y-4">
                {contact.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 border-b border-gray-100 pb-3 last:border-b-0">
                    <item.icon className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="font-semibold text-gray-800 mr-2">{item.label} :</span>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.label === t('legal.adresse') ? '_blank' : undefined}
                          rel={item.label === t('legal.adresse') ? 'noopener noreferrer' : undefined}
                          className={
                            item.copy
                              ? 'text-green-700 font-bold tracking-wide cursor-pointer hover:underline'
                              : 'text-blue-700 font-bold tracking-wide hover:underline'
                          }
                          onClick={item.copy ? () => handleCopy(item.value) : undefined}
                          title={item.copy ? 'Copier' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-700">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {t('legal.legal_documents_title')}
          </h2>
          <div className="space-y-8">
            {legalDocuments.map((document, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 animate-fade-in-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${document.color} rounded-xl flex items-center justify-center`}>
                    <document.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{document.title}</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">{document.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl p-8 text-white animate-fade-in-up shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <Mail className="w-8 h-8" />
              <h3 className="text-2xl font-bold">{t('legal.contact_title')}</h3>
            </div>
            <p className="text-base sm:text-lg mb-8">
              Pour toute question concernant ces mentions légales, contactez-nous :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm sm:text-base">
              {/* Email */}
              <div className="flex flex-col gap-1 group transition-all duration-200 hover:bg-white/10 rounded-xl p-2">
                <span className="flex items-center gap-2 font-semibold">
                  <Mail className="w-4 h-4 text-white" /> Par email&nbsp;:
                </span>
                <div className="flex items-center gap-2">
                  <a href={`mailto:${t('legal.email_value')}`} className="hover:underline text-white/90 font-mono break-all focus:outline-none focus:ring-2 focus:ring-white rounded" tabIndex={0}>
                    {t('legal.email_value')}
                  </a>
                  <button
                    onClick={() => navigator.clipboard.writeText(t('legal.email_value'))}
                    className="ml-1 px-2 py-1 rounded bg-white/20 hover:bg-white/30 text-xs text-white font-bold focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Copier l'email"
                    title="Copier l'email"
                  >
                    Copier
                  </button>
                </div>
              </div>
              {/* Téléphone */}
              <div className="flex flex-col gap-1 group transition-all duration-200 hover:bg-white/10 rounded-xl p-2">
                <span className="flex items-center gap-2 font-semibold">
                  <Phone className="w-4 h-4 text-white" /> Par téléphone&nbsp;:
                </span>
                <div className="flex items-center gap-2">
                  <a href={`tel:${t('legal.telephone_value').replace(/[^+\d]/g, '')}`} className="hover:underline text-white/90 font-mono focus:outline-none focus:ring-2 focus:ring-white rounded\" tabIndex={0}>
                    {t('legal.telephone_value')}
                  </a>
                  <button
                    onClick={() => navigator.clipboard.writeText(t('legal.telephone_value'))}
                    className="ml-1 px-2 py-1 rounded bg-white/20 hover:bg-white/30 text-xs text-white font-bold focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Copier le téléphone"
                    title="Copier le téléphone"
                  >
                    Copier
                  </button>
                </div>
              </div>
              {/* Adresse */}
              <div className="flex flex-col gap-1 group transition-all duration-200 hover:bg-white/10 rounded-xl p-2">
                <span className="flex items-center gap-2 font-semibold">
                  <MapPin className="w-4 h-4 text-white" /> Par courrier&nbsp;:
                </span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t('legal.adresse_value'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white/90 font-mono focus:outline-none focus:ring-2 focus:ring-white rounded"
                  tabIndex={0}
                >
                  {t('legal.adresse_value')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Legal Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-2xl p-8 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              {t('legal.useful_links_title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="/plan-du-site" className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="font-medium">{t('legal.site_map_link')}</span>
              </a>
              <a href="/contact" className="flex items-center gap-3 p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <Mail className="w-5 h-5 text-green-500" />
                <span className="font-medium">{t('legal.contact_link')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
