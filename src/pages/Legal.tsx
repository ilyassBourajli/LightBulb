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
  Server
} from 'lucide-react';

const Legal = () => {
  const { t } = useTranslation();

  const legalSections = [
    {
      title: t('informations_entreprise_title'),
      icon: Building2,
      color: 'bg-blue-500',
      items: [
        { label: t('raison_sociale'), value: t('raison_sociale_value') },
        { label: t('forme_juridique'), value: t('forme_juridique_value') },
        { label: t('adresse'), value: t('adresse_value') },
        { label: t('telephone'), value: t('telephone_value') },
        { label: t('email'), value: t('email_value') },
        { label: t('numero_immatriculation'), value: t('numero_immatriculation_value') },
        { label: t('numero_tva'), value: t('numero_tva_value') },
      ]
    },
    {
      title: t('directeur_publication_title'),
      icon: User,
      color: 'bg-green-500',
      items: [
        { label: t('gerant_value'), value: t('directeur_publication_value') },
      ]
    },
    {
      title: t('hebergement_site_title'),
      icon: Server,
      color: 'bg-purple-500',
      items: [
        { label: t('hebergeur'), value: t('hebergeur_value') },
        { label: t('adresse_hebergement'), value: t('adresse_hebergement_value') },
      ]
    }
  ];

  const legalDocuments = [
    {
      title: t('propriete_intellectuelle_title'),
      icon: FileText,
      color: 'bg-yellow-500',
      content: t('propriete_intellectuelle_value')
    },
    {
      title: t('protection_donnees_personnelles_title'),
      icon: Shield,
      color: 'bg-red-500',
      content: t('protection_donnees_personnelles_value')
    },
    {
      title: t('cookies_title'),
      icon: Lock,
      color: 'bg-indigo-500',
      content: t('cookies_value')
    },
    {
      title: t('responsabilite_title'),
      icon: AlertCircle,
      color: 'bg-orange-500',
      content: t('responsabilite_value')
    },
    {
      title: t('droit_applicable_title'),
      icon: Globe,
      color: 'bg-teal-500',
      content: t('droit_applicable_value')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t('mentions_legales_title')}
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t('legal.legal_info_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Information Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {legalSections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${section.color} rounded-xl flex items-center justify-center`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{section.title}</h3>
                </div>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <p className="font-semibold text-gray-800 mb-1">{item.label}</p>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${document.color} rounded-xl flex items-center justify-center`}>
                    <document.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{document.title}</h3>
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
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <Mail className="w-8 h-8" />
              <h3 className="text-2xl font-bold">{t('contact_title')}</h3>
            </div>
            <p className="text-lg mb-6">
              {t('contact_value')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>{t('contact_email_value')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>{t('contact_telephone_value')}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>{t('contact_courrier_value')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Update */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-600">
                {t('derniere_mise_a_jour_value', { date: new Date().toLocaleDateString('fr-FR') })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Legal Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              {t('legal.useful_links_title')}
            </h3>
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
