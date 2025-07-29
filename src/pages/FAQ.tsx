import React from 'react';
import FAQSection from '../components/FAQSection';
import Meta from '../components/Meta';

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <Meta
        title="FAQ LIGHT BULB - Questions fréquentes sur nos services et produits"
        description="Retrouvez toutes les réponses à vos questions sur LIGHT BULB, nos produits, services, commandes, livraisons, devis et support technique."
        image="/LogoLb.png"
        url={typeof window !== 'undefined' ? window.location.href : ''}
      />
      <section className="max-w-4xl mx-auto text-center mb-12">
        <div className="flex flex-col items-center gap-4 mb-6 animate-fade-in-up">
          <span className="inline-block bg-yellow-100 text-yellow-700 font-bold px-4 py-2 rounded-full text-xs tracking-widest uppercase shadow-sm">FAQ</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
              Questions Fréquentes
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Retrouvez ici toutes les réponses à vos questions sur nos produits, services, commandes et plus encore.
          </p>
        </div>
      </section>
      <FAQSection />
    </div>
  );
};

export default FAQ; 