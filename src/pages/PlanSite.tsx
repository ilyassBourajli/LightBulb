import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Home, 
  Info, 
  Settings, 
  FolderOpen, 
  Phone, 
  FileText,
  MapPin,
  Users,
  Mail,
  Globe,
  Shield,
  Heart
} from 'lucide-react';
import Meta from '../components/Meta';

const PlanSite = () => {
  const { t } = useTranslation();

  const siteMapData = [
    {
      title: t('planSite.mainPages'),
      description: t('planSite.mainPagesDescription'),
      links: [
        { name: t('planSite.pages.home.name'), path: '/', icon: Home, description: t('planSite.pages.home.description') },
        { name: t('planSite.pages.about.name'), path: '/a-propos#about', icon: Info, description: t('planSite.pages.about.description') },
        { name: t('planSite.pages.services.name'), path: '/services#services', icon: Settings, description: t('planSite.pages.services.description') },
        { name: t('planSite.pages.projects.name'), path: '/realisations#projects', icon: FolderOpen, description: t('planSite.pages.projects.description') },
        { name: t('planSite.pages.contact.name'), path: '/contact#devis', icon: Phone, description: t('planSite.pages.contact.description') },
      ]
    },
    {
      title: t('planSite.legalInfo'),
      description: t('planSite.legalInfoDescription'),
      links: [
        { name: t('planSite.pages.legal.name'), path: '/mentions-legales', icon: FileText, description: t('planSite.pages.legal.description') },
        { name: t('planSite.pages.sitemap.name'), path: '/plan-du-site', icon: MapPin, description: t('planSite.pages.sitemap.description') },
      ]
    },
    {
      title: t('planSite.specializedServices'),
      description: t('planSite.specializedServicesDescription'),
      links: [
        { name: t('planSite.pages.installation.name'), path: '/services#installation', icon: Settings, description: t('planSite.pages.installation.description') },
        { name: t('planSite.pages.maintenance.name'), path: '/services#maintenance', icon: Shield, description: t('planSite.pages.maintenance.description') },
        { name: t('planSite.pages.material.name'), path: '/services#materiel', icon: Settings, description: t('planSite.pages.material.description') },
        { name: t('planSite.pages.emergency.name'), path: '/contact#urgence', icon: Phone, description: t('planSite.pages.emergency.description') },
      ]
    }
  ];

  const quickAccess = [
    { name: t('planSite.requestQuote'), path: '/contact#devis', icon: Mail, color: 'bg-yellow-500' },
    { name: t('planSite.pages.services.name'), path: '/services#services', icon: Settings, color: 'bg-blue-500' },
    { name: t('planSite.pages.projects.name'), path: '/realisations#projects', icon: FolderOpen, color: 'bg-green-500' },
    { name: t('planSite.contactUs'), path: '/contact#contact', icon: Phone, color: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <Meta
        title="Plan du site LIGHT BULB - Navigation et accès rapide"
        description="Trouvez rapidement toutes les pages et services de LIGHT BULB grâce au plan du site. Navigation simplifiée et accès direct à l’information."
        image="/LogoLb.png"
        url={typeof window !== 'undefined' ? window.location.href : ''}
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8">
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                {t('planSite.title')}
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t('planSite.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {t('planSite.quickAccess')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccess.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {item.name}
                </h3>
                <div className="w-8 h-1 bg-yellow-400 rounded-full group-hover:w-12 transition-all duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Site Map Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {siteMapData.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{section.description}</p>
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.path}
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-yellow-50 transition-all duration-300 border border-transparent hover:border-yellow-200"
                    >
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300 flex-shrink-0">
                        <link.icon className="w-4 h-4 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                          {link.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {link.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <Heart className="w-8 h-8" />
              <h2 className="text-2xl font-bold">{t('planSite.needHelp')}</h2>
            </div>
            <p className="text-lg mb-6">
              {t('planSite.needHelpDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact#devis"
                className="inline-flex items-center justify-center bg-white text-yellow-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('planSite.requestQuote')}
              </Link>
              <Link
                to="/contact#contact"
                className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white font-semibold py-3 px-6 rounded-xl hover:bg-white hover:text-yellow-600 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('planSite.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">
            {t('planSite.footerNote')}
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-sm text-gray-500">{t('planSite.madeWithLove')}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanSite;
