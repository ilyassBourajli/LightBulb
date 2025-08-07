import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title = 'LIGHT BULB - Solutions Électriques Professionnelles au Maroc',
  description = 'Vente, installation et distribution de matériel électrique certifié. Plus de 20 ans d\'expertise à Mohammedia et partout au Maroc. Devis gratuit, service rapide, conseils personnalisés.',
  keywords = 'électricité, matériel électrique, installation électrique, Maroc, dépannage, maintenance, électricien, Mohammedia, Casablanca, Rabat',
  image = '/LogoLb.png',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
  author = 'LIGHT BULB',
  publishedTime,
  modifiedTime,
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'LIGHT BULB',
    description: description,
    url: url,
    logo: image,
    image: image,
    telephone: '+212661067491',
    email: 'contact@lightbulb.ma',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mohammedia',
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.6751623',
      longitude: '-7.3918596',
    },
    openingHours: 'Mo-Fr 08:00-18:00, Sa 08:00-12:00',
    priceRange: '$$',
    serviceArea: {
      '@type': 'Country',
      name: 'Morocco',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services électriques',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vente de matériel électrique',
            description: 'Vente et distribution de matériel électrique certifié',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Installation électrique',
            description: 'Installation professionnelle de systèmes électriques',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maintenance et dépannage',
            description: 'Services de maintenance et dépannage 24h/7j',
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="fr" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="LIGHT BULB" />
      <meta property="og:locale" content="fr_MA" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#f59e0b" />
      <meta name="msapplication-TileColor" content="#f59e0b" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=yes" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;