import React from 'react';
import { useTranslation } from 'react-i18next';

const Legal = () => {
  const { t } = useTranslation();
  return (
    <div className="section-padding spacing-professional">
      {/* Hero Section */}
      <section className="w-full min-h-[40vh] bg-cover bg-center relative flex items-center justify-center section-padding" style={{ backgroundImage: `url('/pexels-lamiko-3616745.jpg')` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="relative w-full text-center z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-responsive font-bold text-[#fff] mb-8">{t('mentions_legales_title')}</h1>
        </div>
      </section>

      <section className="w-full py-20 bg-[#f9fafb]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#ffffff] border border-[#cad0dd] rounded-xl p-8 shadow-lg space-y-8 text-base md:text-lg animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ animationDelay: '200ms', lineHeight: '1.7' }}>
            <section>
              <h2 className="text-2xl font-semibold text-[#000] mb-4" style={{ fontSize: '1.5rem' }}>{t('informations_entreprise_title')}</h2>
              <div className="space-y-2 text-[#333]">
                <p><strong>{t('raison_sociale')}:</strong> {t('raison_sociale_value')}</p>
                <p><strong>{t('forme_juridique')}:</strong> {t('forme_juridique_value')}</p>
                <p><strong>{t('adresse')}:</strong> {t('adresse_value')}</p>
                <p><strong>{t('telephone')}:</strong> {t('telephone_value')}</p>
                <p><strong>{t('email')}:</strong> {t('email_value')}</p>
                <p><strong>{t('numero_immatriculation')}:</strong> {t('numero_immatriculation_value')}</p>
                <p><strong>{t('numero_tva')}:</strong> {t('numero_tva_value')}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#000] mb-4">{t('directeur_publication_title')}</h2>
              <p className="text-[#333]">
                {t('directeur_publication_value')} - {t('gerant_value')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#000] mb-4">{t('hebergement_site_title')}</h2>
              <div className="space-y-2 text-[#333]">
                <p><strong>{t('hebergeur')}:</strong> {t('hebergeur_value')}</p>
                <p><strong>{t('adresse_hebergement')}:</strong> {t('adresse_hebergement_value')}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#000] mb-4">{t('propriete_intellectuelle_title')}</h2>
              <p className="text-[#333]">
                {t('propriete_intellectuelle_value')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#000] mb-4">{t('protection_donnees_personnelles_title')}</h2>
              <p className="text-[#333]">
                {t('protection_donnees_personnelles_value')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#000] mb-4">{t('cookies_title')}</h2>
              <p className="text-[#333]">
                {t('cookies_value')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#000] mb-4">{t('responsabilite_title')}</h2>
              <p className="text-[#333]">
                {t('responsabilite_value')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#000] mb-4">{t('droit_applicable_title')}</h2>
              <p className="text-[#333]">
                {t('droit_applicable_value')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#000] mb-4" style={{ fontSize: '1.5rem' }}>{t('contact_title')}</h2>
              <p className="text-[#333]">
                {t('contact_value')}
              </p>
              <ul className="list-disc list-inside text-[#333] mt-2 space-y-1">
                <li>{t('contact_email_value')}</li>
                <li>{t('contact_telephone_value')}</li>
                <li>{t('contact_courrier_value')}</li>
              </ul>
            </section>

            <div className="border-t border-[#cad0dd] pt-6">
              <p className="text-sm text-[#7d7d7d]">
                {t('derniere_mise_a_jour_value')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;