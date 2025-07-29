import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        services: 'Services',
        products: 'Nos Produits',
        projects: 'Réalisations',
        contact: 'Contact',
      },
      home: {
        company: {
          description: {
            1: 'VENTE & DISTRIBUTION',
            2: 'de matériel électrique',
            3: 'TRAVAUX DIVERS',
          },
          more: "Plus de 20 ans d'expertise au service de votre satisfaction",
        },
        stats: {
          0: 'Projets Réalisés',
          1: "Années d'Expérience",
          2: 'Clients Satisfaits',
          3: "Service d'Urgence",
        },
        services: {
          0: {
            title: 'Matériel Électrique',
            description:
              'Vente et distribution de matériel électrique de qualité professionnelle',
          },
          1: {
            title: 'Installation',
            description:
              'Installation électrique complète pour résidentiel et commercial',
          },
          2: {
            title: 'Maintenance',
            description:
              "Services de maintenance préventive et dépannage d'urgence",
          },
          title: 'Nos Services',
          description:
            "De la vente de matériel électrique aux travaux d'installation, nous couvrons tous vos besoins électriques avec professionnalisme.",
          all: 'Voir Tous Nos Services',
          quote: 'Demander un Devis',
        },
        features: {
          0: "Plus de 10 ans d'expérience",
          1: 'Équipe certifiée et qualifiée',
          2: 'Matériel de qualité européenne',
          3: 'Service client réactif',
          4: 'Devis gratuit sous 24h',
          5: 'Garantie sur tous nos travaux',
        },
        testimonials: {
          0: {
            name: 'Ahmed Benali',
            company: 'Villa Mohammedia',
            text: 'Service impeccable et équipe très professionnelle. Je recommande vivement !',
          },
          1: {
            name: 'Fatima Alaoui',
            company: 'Restaurant Casa Marina',
            text: 'Installation électrique complète réalisée dans les délais. Excellent travail.',
          },
          title: 'Ce Que Disent Nos Clients',
          description: 'Découvrez les témoignages de nos clients satisfaits',
        },
        why: {
          title: 'Pourquoi Choisir LIGHT BULB ?',
          description:
            'Notre expertise et notre engagement envers la qualité font de nous le partenaire idéal pour tous vos projets électriques à Mohammedia.',
          clients: 'Clients Satisfaits',
          client_note: 'Note moyenne de nos clients',
        },
        cta: {
          title: 'Prêt à Démarrer Votre Projet ?',
          subtitle:
            'Rejoignez nos clients satisfaits et confiez-nous votre projet électrique.',
          quote: 'Obtenir un Devis Gratuit',
          call: 'Appeler Maintenant',
        },
        hero: {
          title: 'Solutions Électriques Professionnelles',
          subtitle:
            'Pour Résidences et Entreprises : sécurité, innovation et expertise à votre service',
          quote: 'Demander un Devis',
          services: 'Nos Services',
        },
      },
      about: {
        hero: {
          title: 'À Propos de',
          company: 'LIGHT BULB',
          description:
            'Votre partenaire électricité de confiance au Maroc depuis plus de 20 ans',
        },
        companyStory: {
          title: 'Notre Histoire',
          paragraph1:
            "Fondée à Mohammedia, LIGHT BULB est née de la passion pour l'excellence dans le domaine électrique. Depuis nos débuts, nous nous sommes imposés comme une référence dans la vente de matériel électrique et les services d'installation.",
          paragraph2:
            "Notre équipe d'experts qualifiés met son savoir-faire au service des particuliers, entreprises et collectivités de la région. Nous combinons tradition artisanale marocaine et technologies modernes pour offrir des solutions électriques durables et fiables.",
          paragraph3:
            "Basés au cœur de Mohammedia, nous connaissons parfaitement les spécificités locales et les besoins de notre clientèle. Cette proximité nous permet d'offrir un service personnalisé et réactif.",
          description: {
            part1: "Light Bulb",
            part2: "est votre partenaire de confiance en matériel électrique, basé à Mohammedia et intervenant partout au Maroc. Plus de 20 ans d'expérience au service des particuliers et des professionnels."
          },
          values: {
            description: "Entreprise familiale animée par la passion de l'électricité et le sens du service."
          },
          stats: {
            years: "Années d'expérience",
            projects: 'Projets réalisés',
            responseTime: 'Délai de réponse',
            satisfiedClients: 'Clients satisfaits',
          },
        },
        missionValues: {
          title: 'Notre Mission & Nos Valeurs',
          description:
            'Nous nous engageons à fournir des solutions électriques de qualité tout en respectant nos valeurs fondamentales.',
        },
        values: [
          {
            title: 'Excellence',
            description:
              'Nous nous engageons à fournir des services de la plus haute qualité avec des matériaux certifiés.',
          },
          {
            title: 'Confiance',
            description:
              'Nos clients nous font confiance pour leurs projets les plus importants depuis plus de 20 ans.',
          },
          {
            title: 'Réactivité',
            description:
              'Service client disponible et interventions rapides pour tous vos besoins urgents.',
          },
          {
            title: 'Précision',
            description:
              'Chaque installation est réalisée avec précision selon les normes marocaines et internationales.',
          },
        ],
        missionStatement: {
          title: 'Notre Mission',
          description:
            'Être le partenaire électrique de référence à Mohammedia en offrant des produits de qualité, des services professionnels et un accompagnement personnalisé pour chaque projet, du plus simple au plus complexe.',
        },
        expertise: {
          title: 'Notre Expertise',
          item1: {
            title: 'Matériel Électrique Professionnel',
            description:
              'Distribution de matériel électrique de marques reconnues, conformes aux normes marocaines et européennes.',
          },
          item2: {
            title: 'Installation & Mise en Service',
            description:
              "Installation complète d'équipements électriques pour résidentiel, commercial et industriel.",
          },
          item3: {
            title: 'Maintenance & Dépannage',
            description:
              "Services de maintenance préventive et interventions d'urgence 24h/7j pour assurer la continuité de vos activités.",
          },
        },
        certifications: {
          title: 'Certifications & Agréments',
          item1: 'Certification électricien agréé',
          item2: 'Conformité normes NM (Maroc)',
          item3: 'Partenaire distributeurs officiels',
          item4: 'Assurance responsabilité civile',
        },
      },
      services: {
        title: 'Nos Services',
        title_highlight: 'Services',
        description:
          "Solutions électriques complètes pour tous vos besoins professionnels et résidentiels",
        request_quote: 'Demander un Devis',
        professional_service: 'Service Professionnel',
        professional_service_description:
          'Équipe qualifiée et matériel de qualité pour tous vos besoins.',
        additional_services: 'Services Complémentaires',
        additional_services_description:
          'En plus de nos services principaux, nous offrons un accompagnement complet pour la réussite de vos projets.',
        our_work_process: 'Notre Processus de Travail',
        our_work_process_description:
          'Une approche méthodique pour garantir la qualité et la satisfaction client.',
        emergency_service: "Service d'Urgence 24h/7j",
        emergency_service_description:
          'Panne électrique ? Problème urgent ? Notre équipe intervient rapidement pour rétablir votre installation électrique.',
        call_now: 'Appeler Maintenant',
        contact_emergency: 'Contact Urgence',
        ready_to_start: 'Prêt à Démarrer Votre Projet ?',
        cta_description:
          "Contactez LIGHT BULB dès aujourd'hui pour un devis gratuit et personnalisé.",
        request_free_quote: 'Demander un Devis Gratuit',
      },
      projects: {
        our_realizations: 'Nos Réalisations',
        our_realizations_highlight: 'Réalisations',
        discover_some_of_our_recent_projects:
          'Découvrez nos projets électriques réalisés avec excellence et professionnalisme',
        demonstrate_our_expertise: 'qui témoignent de notre expertise',
        and_the_quality_of_our_electrical_installations:
          'et de la qualité de nos installations électriques.',
        all_projects: 'Tous les projets',
        residential: 'Résidentiel',
        commercial: 'Commercial',
        industrial: 'Industriel',
        project_1_title: 'Installation Électrique Villa Moderne',
        project_1_description:
          "Installation électrique complète d'une villa de 300m² avec domotique et éclairage LED.",
        project_2_title: 'Rénovation Électrique Restaurant',
        project_2_description:
          "Mise aux normes et rénovation complète de l'installation électrique d'un restaurant.",
        project_3_title: 'Installation Industrielle Usine',
        project_3_description:
          'Installation électrique industrielle avec tableaux de distribution et éclairage haute performance.',
        features: 'Caractéristiques',
        our_key_figures: 'Nos Chiffres Clés',
        completed_projects: 'Projets Réalisés',
        years_of_experience: "Années d'Expérience",
        satisfied_clients: 'Clients Satisfaits',
        emergency_service: "Service d'Urgence",
        your_project_next: 'Votre Projet Sera le Prochain ?',
        join_our_satisfied_clients:
          'Rejoignez nos clients satisfaits et confiez-nous votre projet électrique.',
        request_a_quote: 'Demander un Devis',
        see_our_services: 'Voir Nos Services',
      },
      legal: {
        mentions_legales_title: 'Mentions Légales',
        informations_entreprise_title: "Informations sur l'entreprise",
        raison_sociale: 'Dénomination',
        raison_sociale_value: 'LIGHT BULB',
        statut_juridique: 'Statut juridique',
        statut_juridique_value: 'EN ACTIVITÉ',
        tribunal: 'Tribunal',
        tribunal_value: 'MOHAMMEDIA',
        numero_immatriculation: 'N° de RC',
        numero_immatriculation_value: '25791',
        ice: 'N° de ICE',
        ice_value: '002430635000048',
        activite: 'Activité',
        activite_value: 'Marchand de matériels électriques',
        forme_juridique: 'Forme juridique',
        forme_juridique_value: 'SARL à associé unique',
        adresse: 'Adresse',
        adresse_value:
          'Hassania 2, Bloc B N°248 RDC Bd Mohamed VI - Mohammedia',
        telephone: 'Téléphone',
        telephone_value: '+212 661 06 74 91 / +212 523 31 08 21',
        email: 'Email',
        email_value: 'Bulb.light.2020@gmail.com',
        numero_tva: 'Numéro de TVA',
        numero_tva_value: 'À compléter',
        directeur_publication_title: 'Directeur de publication',
        directeur_publication_value: 'JAMAL ID ELAASSRI',
        gerant_value: 'Gérant de LIGHT BULB',
        hebergement_site_title: 'Hébergement du site',
        hebergeur: 'Hébergeur',
        hebergeur_value: 'Netlify, Inc.',
        adresse_hebergement: 'Adresse',
        adresse_hebergement_value:
          '2325 3rd Street, Suite 296, San Francisco, CA 94107, USA',
        propriete_intellectuelle_title: 'Propriété intellectuelle',
        propriete_intellectuelle_value:
          "L'ensemble de ce site relève de la législation marocaine et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.",
        protection_donnees_personnelles_title:
          'Protection des données personnelles',
        protection_donnees_personnelles_value:
          "Conformément à la loi marocaine n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, contactez-nous à l'adresse : contact@lightbbulb.ma",
        cookies_title: 'Cookies',
        cookies_value:
          "Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.",
        responsabilite_title: 'Responsabilité',
        responsabilite_value:
          "LIGHT BULB s'efforce de fournir des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.",
        droit_applicable_title: 'Droit applicable',
        droit_applicable_value:
          'Les présentes mentions légales sont régies par le droit marocain. En cas de litige, les tribunaux marocains seront seuls compétents.',
        contact_title: 'Contact',
        contact_value:
          'Pour toute question concernant ces mentions légales, vous pouvez nous contacter :',
        contact_email_value: 'Par email : contact@lightbbulb.ma',
        contact_telephone_value: 'Par téléphone : +212 661 06 74 91 / +212 523 31 08 21',
        contact_courrier_value:
          'Par courrier : Hassania 2, Bloc B N°248, Bd Mohamed VI, Mohammedia, Maroc',
        derniere_mise_a_jour_value: 'Dernière mise à jour : {date}',
        legal_documents_title: 'Documents Légaux',
        useful_links_title: 'Liens Utiles',
        site_map_link: 'Plan du site',
        contact_link: 'Nous contacter',
        legal_info_subtitle: 'Informations légales et conditions d\'utilisation du site LIGHT BULB',
      },
      planSite: {
        title: 'Plan du Site',
        subtitle: 'Retrouvez ici l\'ensemble des pages et sections principales du site LIGHT BULB pour une navigation facilitée et optimale.',
        quickAccess: 'Accès Rapide',
        mainPages: 'Pages Principales',
        mainPagesDescription: 'Navigation principale du site',
        legalInfo: 'Informations Légales',
        legalInfoDescription: 'Documents et mentions légales',
        specializedServices: 'Services Spécialisés',
        specializedServicesDescription: 'Nos domaines d\'expertise',
        needHelp: 'Besoin d\'aide ?',
        needHelpDescription: 'Notre équipe est à votre disposition pour vous accompagner dans tous vos projets électriques. N\'hésitez pas à nous contacter pour un devis gratuit et personnalisé.',
        requestQuote: 'Demander un devis',
        contactUs: 'Nous contacter',
        footerNote: 'Vous pouvez également accéder à nos réseaux sociaux et à notre newsletter depuis le pied de page.',
        madeWithLove: 'Fait avec amour au Maroc',
        pages: {
          home: { name: 'Accueil', description: 'Page d\'accueil avec présentation de nos services' },
          about: { name: 'À propos', description: 'Découvrez notre histoire et notre expertise' },
          services: { name: 'Services', description: 'Nos solutions électriques professionnelles' },
          projects: { name: 'Réalisations', description: 'Découvrez nos projets réalisés' },
          contact: { name: 'Contact', description: 'Contactez-nous pour un devis gratuit' },
          legal: { name: 'Mentions légales', description: 'Informations légales et conditions d\'utilisation' },
          sitemap: { name: 'Plan du site', description: 'Navigation complète du site (page actuelle)' },
          installation: { name: 'Installation Électrique', description: 'Installation complète pour résidentiel et commercial' },
          maintenance: { name: 'Maintenance', description: 'Services de maintenance préventive et dépannage' },
          material: { name: 'Matériel Électrique', description: 'Vente et distribution de matériel professionnel' },
          emergency: { name: 'Service d\'Urgence', description: 'Intervention rapide 24h/7j' },
        }
      },
      footer: {
        company: {
          1: 'VENTE & DISTRIBUTION',
          2: 'de matériel électrique',
          3: 'TRAVAUX DIVERS',
          more: "Plus de 20 ans d'expertise au service de votre satisfaction",
        },
        links: {
          title: 'Liens Rapides',
        },
        contact: {
          title: 'Contact',
          address: {
            1: 'Hassania 2, Bloc B N°248',
            2: 'Bd Mohamed VI, Mohammedia',
          },
          phone: '0661 06 74 91 / 0523 31 08 21',
          email: 'Bulb.light.2020@gmail.com',
          hours: 'Lun-Ven: 8h-20h / Sam: 8h-16h',
          ice: 'ICE: 002430635000048',
          rc: 'RC: 25791',
          patente: 'Patente: 39500477',
          if: 'IF: 45766534',
        },
        copyright: 'Tous droits réservés.',
      },
      products: {
        title: 'Nos Produits',
        search: 'Rechercher un produit...',
        categories: {
          all: 'Tous',
          cables: 'Câbles',
          lighting: 'Éclairage',
          panels: 'Tableaux',
          sockets: 'Prises',
          breakers: 'Disjoncteurs',
        },
        no_results: 'Aucun produit trouvé.',
        in_stock: 'En stock',
        mad: 'MAD',
        add_to_quote: 'Ajouter au devis',
        whatsapp: 'WhatsApp',
        whatsapp_message:
          'Bonjour, je souhaite avoir un devis pour le produit : {{name}}',
      },
      contact: {
        title: 'Contactez-nous',
        subtitle:
          "Notre équipe est à votre disposition pour répondre à toutes vos questions",
        cards: {
          0: {
            title: 'Adresse',
            line1: 'Hassania 2, Bloc B N°248',
            line2: 'Bd Mohamed VI, Mohammedia',
          },
          1: {
            title: 'Téléphone',
            line1: '+212 661 06 74 91',
            line2: '+212 523 31 08 21',
          },
          2: {
            title: 'Email',
            line1: 'Bulb.light.2020@gmail.com',
            line2: 'devis@lightbbulb.ma',
          },
          3: {
            title: 'Horaires',
            line1: 'Lun-Ven: 8h00 - 20h00',
            line2: 'Sam: 8h00 - 16h00',
          },
        },
        form: {
          request_quote: 'Demander un Devis Gratuit',
          response_guarantee: 'Réponse garantie sous 24h',
          name: 'Nom complet *',
          name_placeholder: 'Votre nom',
          phone: 'Téléphone *',
          phone_placeholder: '+212 6XX XXX XXX',
          email: 'Email *',
          email_placeholder: 'votre@email.com',
          service_type: 'Type de service *',
          select_service: 'Sélectionnez un service',
          message: 'Message *',
          message_placeholder: 'Décrivez votre projet ou votre besoin...',
          submit: 'Envoyer la Demande',
          sending: 'Envoi en cours...',
          required_fields: '* Champs obligatoires - Réponse garantie sous 24h',
          message_sent:
            'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.',
        },
        map: {
          location: 'Notre Localisation',
          location_title: 'LIGHT BULB Localisation',
        },
        emergency: {
          title: "Service d'Urgence 24h/7j",
          description:
            'Panne électrique ? Problème urgent ? Notre équipe intervient rapidement.',
          call_now: 'Appeler Maintenant',
        },
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        products: 'Our Products',
        projects: 'Projects',
        contact: 'Contact',
      },
      home: {
        company: {
          description: {
            1: 'SALES & DISTRIBUTION',
            2: 'Of electrical equipment',
            3: 'MISCELLANEOUS WORK',
          },
          more: 'Over 10 years of expertise at your service.',
        },
        stats: {
          0: 'Completed Projects',
          1: 'Years of Experience',
          2: 'Satisfied Clients',
          3: 'Emergency Service',
        },
        services: {
          0: {
            title: 'Electrical Equipment',
            description:
              'Sale and distribution of professional quality electrical equipment.',
          },
          1: {
            title: 'Installation',
            description:
              'Complete electrical installation for residential and commercial.',
          },
          2: {
            title: 'Maintenance',
            description:
              'Preventive maintenance and emergency troubleshooting services.',
          },
          title: 'Our Services',
          description:
            'From electrical equipment sales to installation work, we cover all your electrical needs with professionalism.',
          all: 'See All Our Services',
          quote: 'Request a Quote',
        },
        features: {
          0: 'Over 10 years of experience',
          1: 'Certified and qualified team',
          2: 'European quality material',
          3: 'Responsive customer service',
          4: 'Free quote within 24 hours',
          5: 'Guarantee on all our work',
        },
        testimonials: {
          0: {
            name: 'Ahmed Benali',
            company: 'Villa Mohammedia',
            text: 'Exceptional service and very professional team. I highly recommend!',
          },
          1: {
            name: 'Fatima Alaoui',
            company: 'Restaurant Casa Marina',
            text: 'Complete electrical installation completed on time. Excellent work.',
          },
          title: 'What Our Clients Say',
          description: 'Discover the testimonials of our satisfied clients',
        },
        why: {
          title: 'Why Choose LIGHT BULB?',
          description:
            'Our expertise and our commitment to quality make us the ideal partner for all your electrical projects in Mohammedia.',
          clients: 'Satisfied Clients',
          client_note: 'Average client note',
        },
        cta: {
          title: 'Ready to Start Your Project?',
          subtitle:
            'Join our satisfied clients and trust us with your electrical project.',
          quote: 'Get a Free Quote',
          call: 'Call Now',
        },
        hero: {
          title: 'Professional Electrical Solutions',
          subtitle:
            'For Residences and Businesses: security, innovation and expertise at your service',
          quote: 'Request a Quote',
          services: 'Our Services',
        },
      },
      about: {
        hero: {
          title: 'About',
          company: 'LIGHT BULB',
          description:
            'Your trusted electrical partner in Morocco for over 20 years',
        },
        companyStory: {
          title: 'Our Story',
          paragraph1:
            'Founded in Mohammedia, LIGHT BULB was born from a passion for excellence in the electrical field. Since our beginnings, we have established ourselves as a reference in the sale of electrical equipment and installation services.',
          paragraph2:
            'Our qualified experts use their expertise to serve individuals, companies and communities in the region. We combine Moroccan artisan tradition and modern technology to offer durable and reliable electrical solutions.',
          paragraph3:
            'Located in the heart of Mohammedia, we perfectly understand local specifics and the needs of our clientele. This proximity allows us to offer a personalized and reactive service.',
          description: {
            part1: "Light Bulb",
            part2: "is your trusted electrical partner in Morocco, based in Mohammedia and active throughout Morocco. More than 20 years of experience serving individuals and professionals."
          },
          values: {
            description: "Family-run business driven by the passion for electricity and the sense of service."
          },
          stats: {
            years: 'Years of Experience',
            projects: 'Completed Projects',
            responseTime: 'Response Time',
            satisfiedClients: 'Satisfied Clients',
          },
        },
        missionValues: {
          title: 'Our Mission & Our Values',
          description:
            'We commit to providing high-quality electrical solutions while respecting our fundamental values.',
        },
        values: [
          {
            title: 'Excellence',
            description:
              'We commit to providing services of the highest quality with certified materials.',
          },
          {
            title: 'Confidence',
            description:
              'Our clients trust us for their most important projects since more than 10 years.',
          },
          {
            title: 'Reactivity',
            description:
              'Available customer service and quick interventions for all urgent needs.',
          },
          {
            title: 'Precision',
            description:
              'Each installation is carried out with precision according to Moroccan and international standards.',
          },
        ],
        missionStatement: {
          title: 'Our Mission',
          description:
            'To be the reference electrical partner in Mohammedia by offering quality products, professional services and personalized accompaniment for each project, from the simplest to the most complex.',
        },
        expertise: {
          title: 'Our Expertise',
          item1: {
            title: 'Professional Electrical Equipment',
            description:
              'Sale of recognized electrical equipment brands, conforming to Moroccan and European standards.',
          },
          item2: {
            title: 'Installation & Commissioning',
            description:
              'Complete installation of electrical equipment for residential, commercial and industrial use.',
          },
          item3: {
            title: 'Maintenance & Troubleshooting',
            description:
              'Preventive maintenance and emergency 24/7 services to ensure the continuity of your activities.',
          },
        },
        certifications: {
          title: 'Certifications & Approvals',
          item1: 'Certified Electrician',
          item2: 'Conformity NM (Morocco)',
          item3: 'Official distributors',
          item4: 'Civil liability insurance',
        },
      },
      services: {
        title: 'Our Services',
        title_highlight: 'Services',
        description:
          'Complete electrical solutions for all your professional and residential needs',
        request_quote: 'Request a Quote',
        professional_service: 'Professional Service',
        professional_service_description:
          'Qualified team and quality material for all your needs.',
        additional_services: 'Additional Services',
        additional_services_description:
          'In addition to our main services, we offer a complete accompaniment for the success of your projects.',
        our_work_process: 'Our Work Process',
        our_work_process_description:
          'A methodical approach to ensure quality and client satisfaction.',
        emergency_service: 'Emergency Service 24/7',
        emergency_service_description:
          'Electrical breakdown? Urgent problem? Our team intervenes quickly to restore your electrical installation.',
        call_now: 'Call Now',
        contact_emergency: 'Emergency Contact',
        ready_to_start: 'Ready to Start Your Project?',
        cta_description:
          'Contact LIGHT BULB today for a free and personalized quote.',
        request_free_quote: 'Request a Free Quote',
      },
      projects: {
        our_realizations: 'Our Projects',
        our_realizations_highlight: 'Projects',
        discover_some_of_our_recent_projects:
          'Discover our electrical projects completed with excellence and professionalism',
        demonstrate_our_expertise: 'that demonstrate our expertise',
        and_the_quality_of_our_electrical_installations:
          'and the quality of our electrical installations.',
        all_projects: 'All Projects',
        residential: 'Residential',
        commercial: 'Commercial',
        industrial: 'Industrial',
        features: 'Features',
        our_key_figures: 'Key Figures',
        completed_projects: 'Completed Projects',
        years_of_experience: 'Years of Experience',
        satisfied_clients: 'Satisfied Clients',
        emergency_service: 'Emergency Service',
        your_project_next: 'Your Project Will Be Next?',
        join_our_satisfied_clients:
          'Join our satisfied clients and entrust your electrical project to us.',
        request_a_quote: 'Request a Quote',
        see_our_services: 'See Our Services',
      },
      legal: {
        mentions_legales_title: 'Legal Notice',
        informations_entreprise_title: 'Company Information',
        raison_sociale: 'Company Name',
        raison_sociale_value: 'LIGHT BULB',
        forme_juridique: 'Legal Form',
        forme_juridique_value: 'SARL WITH SINGLE PARTNER',
        adresse: 'Address',
        adresse_value:
          'Hassania 2, Bloc B N°248 RDC Bd Mohamed VI - Mohammedia',
        telephone: 'Phone',
        telephone_value: '+212 661 06 74 91 / +212 523 31 08 21',
        email: 'Email',
        email_value: 'contact@lightbbulb.ma',
        numero_immatriculation: 'Registration Number',
        numero_immatriculation_value: '25791',
        numero_tva: 'VAT Number',
        numero_tva_value: 'To be completed',
        directeur_publication_title: 'Publication Director',
        directeur_publication_value: "JAMAL ID ELAASSRI",
        gerant_value: 'LIGHT BULB Manager',
        hebergement_site_title: 'Hosting Site',
        hebergeur: 'Host',
        hebergeur_value: 'Netlify, Inc.',
        adresse_hebergement: 'Address',
        adresse_hebergement_value:
          '2325 3rd Street, Suite 296, San Francisco, CA 94107, USA',
        propriete_intellectuelle_title: 'Intellectual Property',
        propriete_intellectuelle_value:
          'The entire content of this site is subject to Moroccan and international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and graphical and photographic representations.',
        protection_donnees_personnelles_title: 'Personal Data Protection',
        protection_donnees_personnelles_value:
          'In accordance with Moroccan law n° 09-08 of 2009 relating to the protection of individuals with regard to the processing of personal data, you have a right of access, rectification and deletion of your personal data. To exercise this right, please contact us at: contact@lightbbulb.ma',
        cookies_title: 'Cookies',
        cookies_value:
          'This site uses cookies to improve user experience and analyze traffic. By continuing to browse this site, you agree to the use of cookies.',
        responsabilite_title: 'Liability',
        responsabilite_value:
          'LIGHT BULB strives to provide as accurate information as possible. However, it cannot be held responsible for omissions, inaccuracies and shortcomings in updating, whether of its own or of third-party partners providing this information.',
        droit_applicable_title: 'Applicable Law',
        droit_applicable_value:
          'These legal notices are governed by Moroccan law. In case of dispute, Moroccan courts will be the only competent courts.',
        contact_title: 'Contact',
        contact_value:
          'For any questions regarding these legal notices, you can contact us:',
        contact_email_value: 'By email: contact@lightbbulb.ma',
        contact_telephone_value: 'By phone: +212 661 06 74 91 / +212 523 31 08 21',
        contact_courrier_value:
          'By mail: Hassania 2, Bloc B N°248, Bd Mohamed VI, Mohammedia, Morocco',
        derniere_mise_a_jour_value: 'Last update: {date}',
        legal_documents_title: 'Legal Documents',
        useful_links_title: 'Useful Links',
        site_map_link: 'Site Map',
        contact_link: 'Contact Us',
        legal_info_subtitle: 'Legal information and terms of use of the LIGHT BULB website',
      },
      planSite: {
        title: 'Site Map',
        subtitle: 'Find here all the main pages and sections of the LIGHT BULB site for easy and optimal navigation.',
        quickAccess: 'Quick Access',
        mainPages: 'Main Pages',
        mainPagesDescription: 'Main site navigation',
        legalInfo: 'Legal Information',
        legalInfoDescription: 'Documents and legal notices',
        specializedServices: 'Specialized Services',
        specializedServicesDescription: 'Our areas of expertise',
        needHelp: 'Need Help?',
        needHelpDescription: 'Our team is at your disposal to assist you in all your electrical projects. Do not hesitate to contact us for a free and personalized quote.',
        requestQuote: 'Request a Quote',
        contactUs: 'Contact Us',
        footerNote: 'You can also access our social networks and newsletter from the footer.',
        madeWithLove: 'Made with love in Morocco',
        pages: {
          home: { name: 'Home', description: 'Homepage with presentation of our services' },
          about: { name: 'About', description: 'Discover our story and expertise' },
          services: { name: 'Services', description: 'Our professional electrical solutions' },
          projects: { name: 'Projects', description: 'Discover our completed projects' },
          contact: { name: 'Contact', description: 'Contact us for a free quote' },
          legal: { name: 'Legal Notice', description: 'Legal information and terms of use' },
          sitemap: { name: 'Site Map', description: 'Complete site navigation (current page)' },
          installation: { name: 'Electrical Installation', description: 'Complete installation for residential and commercial' },
          maintenance: { name: 'Maintenance', description: 'Preventive maintenance and troubleshooting services' },
          material: { name: 'Electrical Equipment', description: 'Sale and distribution of professional equipment' },
          emergency: { name: 'Emergency Service', description: 'Rapid intervention 24/7' },
        }
      },
      footer: {
        company: {
          1: 'SALES & DISTRIBUTION',
          2: 'of electrical equipment',
          3: 'MISCELLANEOUS WORK',
          more: 'Over 10 years of expertise at your service.',
        },
        links: {
          title: 'Quick Links',
        },
        contact: {
          title: 'Contact',
          address: {
            1: 'Hassania 2, Bloc B N°248',
            2: 'Bd Mohamed VI, Mohammedia',
          },
          phone: '+212 661 06 74 91 / +212 523 31 08 21',
          email: 'contact@lightbbulb.ma',
          hours: 'Mon-Fri: 8am-8pm / Sat: 8am-4pm',
        },
        copyright: 'All rights reserved.',
      },
      products: {
        title: 'Our Products',
        search: 'Search for a product...',
        categories: {
          all: 'All',
          cables: 'Cables',
          lighting: 'Lighting',
          panels: 'Panels',
          sockets: 'Sockets',
          breakers: 'Breakers',
        },
        no_results: 'No product found.',
        in_stock: 'In stock',
        mad: 'MAD',
        add_to_quote: 'Add to quote',
        whatsapp: 'WhatsApp',
        whatsapp_message:
          'Hello, I would like a quote for the product: {{name}}.',
      },
      contact: {
        title: 'Contact Us',
        subtitle:
          'Our team is at your disposal to answer all your questions',
        cards: {
          0: {
            title: 'Address',
            line1: 'Hassania 2, Bloc B N°248',
            line2: 'Bd Mohamed VI, Mohammedia',
          },
          1: {
            title: 'Phone',
            line1: '+212 523 31 08 21',
            line2: '+212 661 06 74 91',
          },
          2: {
            title: 'Email',
            line1: 'contact@lightbbulb.ma',
            line2: 'devis@lightbbulb.ma',
          },
          3: {
            title: 'Hours',
            line1: 'Mon-Fri: 8am-8pm',
            line2: 'Sat: 8am-4pm',
          },
        },
        form: {
          request_quote: 'Request a Free Quote',
          response_guarantee: 'Response guaranteed within 24h',
          name: 'Full name *',
          name_placeholder: 'Your name',
          phone: 'Phone *',
          phone_placeholder: '+212 6XX XXX XXX',
          email: 'Email *',
          email_placeholder: 'your@email.com',
          service_type: 'Service type *',
          select_service: 'Select a service',
          message: 'Message *',
          message_placeholder: 'Describe your project or need...',
          submit: 'Send Request',
          sending: 'Sending...',
          required_fields: '* Required fields - Response guaranteed within 24h',
          message_sent:
            'Your message has been sent successfully! We will reply as soon as possible.',
        },
        map: {
          location: 'Our Location',
          location_title: 'LIGHT BULB Location',
        },
        emergency: {
          title: '24/7 Emergency Service',
          description:
            'Electrical failure? Urgent problem? Our team intervenes quickly.',
          call_now: 'Call Now',
        },
      },
    },
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'الخدمات',
        projects: 'الأعمال',
        contact: 'اتصل بنا',
      },
      home: {
        company: {
          description: {
            1: 'البيع والتوزيع',
            2: 'لمعدات كهربائية',
            3: 'أعمال متنوعة',
          },
          more: 'أكثر من 10 سنوات من الخبرة في خدمتك.',
        },
        stats: {
          0: 'مشاريع مكتملة',
          1: 'سنوات الخبرة',
          2: 'عملاء مرضيين',
          3: 'خدمة الطوارئ',
        },
        services: {
          0: {
            title: 'معدات كهربائية',
            description: 'بيع وتوزيع معدات كهربائية عالية الجودة.',
          },
          1: {
            title: 'التركيب',
            description: 'تركيب كهربائي كامل للسكني والتجاري.',
          },
          2: {
            title: 'الصيانة',
            description: 'خدمات الصيانة الوقائية والتدخل السريع للطوارئ.',
          },
          title: 'خدماتنا',
          description:
            'من بيع معدات كهربائية إلى أعمال التركيب، نغطي جميع احتياجاتك الكهربائية بالمهنية.',
          all: 'أرى جميع خدماتنا',
          quote: 'طلب عرض سعر',
        },
        features: {
          0: 'أكثر من 10 سنوات من الخبرة',
          1: 'فريق معتمد ومؤهل',
          2: 'مادة عالية الجودة أوروبية',
          3: 'خدمة العميل السريعة',
          4: 'عرض سعر مجاني تحت 24 ساعة',
          5: 'ضمان على جميع أعمالنا',
        },
        testimonials: {
          0: {
            name: 'Ahmed Benali',
            company: 'Villa Mohammedia',
            text: 'خدمة مثالية وفريق عالي المهنية. أوصي بها بقوة!',
          },
          1: {
            name: 'Fatima Alaoui',
            company: 'Restaurant Casa Marina',
            text: 'تم إنجاز تركيب كهربائي كامل خلال الوقت المحدد. عمل عظيم.',
          },
          title: 'ما يقوله عملاؤنا',
          description: 'اكتشفوا آراء عملائنا المرضيين',
        },
        why: {
          title: 'لماذا اختر LIGHT BULB؟',
          description:
            'الخبرة والتزامنا بالجودة يجعلانا شريكًا مثاليًا لجميع مشاريعك الكهربائية في المحمدية.',
          clients: 'عملاء مرضيين',
          client_note: 'ملاحظة عملائنا',
        },
        cta: {
          title: 'هل أنت مستعد لبدء مشروعك؟',
          subtitle: 'انضم إلى عملائنا الراضين وامنحنا مشروعك الكهربائي.',
          quote: 'احصل على عرض سعر مجاني',
          call: 'اتصل الآن',
        },
        hero: {
          title: 'حلول كهربائية مهنية',
          subtitle:
            'للمنازل والشركات: الأمان والابتكار والخبرة في خدمتك',
          quote: 'طلب عرض سعر',
          services: 'خدماتنا',
        },
      },
      about: {
        hero: {
          title: 'من نحن',
          company: 'لايت بولب',
          description:
            'شريكك الكهربائي الموثوق في المغرب منذ أكثر من 20 عامًا',
        },
        companyStory: {
          title: 'قصتنا',
          paragraph1:
            'تأسست في المحمدية، كانت لايت بولب مولدة من شغفنا بالتميز في مجال الكهرباء. منذ بداياتنا، قمنا بتأسيس نفسنا كمرجع في بيع معدات الكهرباء وخدمات التركيب.',
          paragraph2:
            'فريق خبرائنا المؤهلين يستخدمون مهاراتهم لخدمة الأفراد، الشركات والمجتمعات في المنطقة. نجمع تراثنا المغربي الأصيل والتقنيات الحديثة لتقديم حلول كهربائية دائمة وموثوقة.',
          paragraph3:
            'موجودون في قلب المحمدية، نعرف بالضبط التفاصيل المحلية واحتياجات عملائنا. هذه التوافر يسمح لنا بتقديم خدمة مخصصة ومتفائلة.',
          description: {
            part1: "لايت بولب",
            part2: "هو شريكك الكهربائي الموثوق في المغرب، مقره في المحمدية ويعمل في جميع أنحاء المغرب. أكثر من 20 عامًا من الخبرة في خدمة الأفراد والمهنيين."
          },
          values: {
            description: "شركة منزلية تشغلها عائلة متحمسة للكهرباء وإحساس بالخدمة."
          },
          stats: {
            years: 'سنوات الخبرة',
            projects: 'المشاريع المكتملة',
            responseTime: 'وقت الاستجابة',
            satisfiedClients: 'عملاء مرضيين',
          },
        },
        missionValues: {
          title: 'مهمتنا وقيمنا',
          description:
            'نحن نتزامن بتقديم حلول كهربائية ذات جودة عالية بينما نتزامن مع قيمنا الأساسية.',
        },
        values: [
          {
            title: 'التميز',
            description:
              'نحن نتزامن بتقديم خدمات ذات أعلى جودة مع مواد معتمدة.',
          },
          {
            title: 'الثقة',
            description:
              'عملائنا يؤمنون بنا لمشاريعهم الأكثر أهمية منذ أكثر من 20 عامًا.',
          },
          {
            title: 'التفائل',
            description:
              'خدمة العميل متاحة والتدخلات سريعة بالنسبة لجميع احتياجاتك الطارئة.',
          },
          {
            title: 'الدقة',
            description:
              'كل تركيب يتم إجراؤه بدقة وفقًا للمعايير المغربية والدولية.',
          },
        ],
        missionStatement: {
          title: 'مهمتنا',
          description:
            'أن نكون شريكًا كهربائيًا مرجعيًا في المحمدية بتقديم منتجات ذات جودة، خدمات مهنية وتوصيل شخصي مخصص لكل مشروع، من الأبسط إلى الأكثر تعقيدًا.',
        },
        expertise: {
          title: 'الخبرة المهنية',
          item1: {
            title: 'معدات كهربائية مهنية',
            description:
              'بيع معدات كهربائية لماركات معترف بها، متوافقة مع المعايير المغربية والأوروبية.',
          },
          item2: {
            title: 'التركيب والتشغيل',
            description:
              'تركيب كامل للمعدات الكهربائية للمنازل، التجارية والصناعية.',
          },
          item3: {
            title: 'الصيانة والإصلاح',
            description:
              'خدمات الصيانة الوقائية والتدخلات الطارئة 24/7 لضمان توصيل النشاطات.',
          },
        },
        certifications: {
          title: 'الشهادات والتصاريح',
          item1: 'شهادة كهربائي معتمد',
          item2: 'توافق NM (مغرب)',
          item3: 'شركاء الموزعين الرسميين',
          item4: 'تأمين مسؤولية مدنية',
        },
      },
      services: {
        title: 'خدماتنا',
        title_highlight: 'خدمات',
        description:
          'حلول كهربائية كاملة لجميع احتياجاتك المهنية والسكنية',
        request_quote: 'طلب عرض سعر',
        professional_service: 'خدمة مهنية',
        professional_service_description:
          'فريق مؤهل ومادة عالية الجودة لجميع احتياجاتك.',
        additional_services: 'خدمات إضافية',
        additional_services_description:
          'بالإضافة إلى خدماتنا الأساسية، نقدم توصيل كامل لنجاح مشاريعك.',
        our_work_process: 'عملية عملنا',
        our_work_process_description: 'نهج منهجي لضمان الجودة ورضا العميل.',
        emergency_service: 'خدمة الطوارئ 24/7',
        emergency_service_description:
          'كسر كهربائي؟ مشكلة عاجلة؟ يتدخل فريقنا بسرعة.',
        call_now: 'اتصل الآن',
        contact_emergency: 'اتصال الطوارئ',
        ready_to_start: 'جاهز لبدء مشروعك؟',
        cta_description: 'اتصل بـ LIGHT BULB اليوم لعرض سعر مجاني ومخصص.',
        request_free_quote: 'طلب عرض سعر مجاني',
      },
      projects: {
        our_realizations: 'مشاريعنا',
        our_realizations_highlight: 'الإنجازات',
        discover_some_of_our_recent_projects:
          'اكتشف مشاريعنا الكهربائية المنجزة بالتميز والمهنية',
        demonstrate_our_expertise: 'التي تظهر خبرتنا',
        and_the_quality_of_our_electrical_installations:
          'وجودة التركيبات الكهربائية لدينا.',
        all_projects: 'جميع المشاريع',
        residential: 'سكني',
        commercial: 'تجاري',
        industrial: 'صناعي',
        project_1_title: 'تركيب كهربائي لفيلا حديثة',
        project_1_description:
          'تركيب كهربائي كامل لفيلا بمساحة 300م² مع أتمتة منزلية وإضاءة LED.',
        project_2_title: 'تجديد كهربائي لمطعم',
        project_2_description: 'الامتثال والتجديد الكامل لتركيب كهربائي لمطعم.',
        project_3_title: 'تركيب مصنع صناعي',
        project_3_description:
          'تركيب كهربائي صناعي مع لوحات توزيع وإضاءة عالية الأداء.',
        features: 'الميزات',
        our_key_figures: 'أرقامنا الرئيسية',
        completed_projects: 'المشاريع المنجزة',
        years_of_experience: 'سنوات الخبرة',
        satisfied_clients: 'العملاء الراضون',
        emergency_service: 'خدمة الطوارئ',
        your_project_next: 'هل سيكون مشروعك التالي؟',
        join_our_satisfied_clients:
          'انضم إلى عملائنا الراضين وامنحنا مشروعك الكهربائي.',
        request_a_quote: 'طلب عرض سعر',
        see_our_services: 'عرض خدماتنا',
      },
      legal: {
        mentions_legales_title: 'إشعار قانوني',
        informations_entreprise_title: 'معلومات عن الشركة',
        raison_sociale: 'اسم الشركة',
        raison_sociale_value: 'لايت بولب',
        forme_juridique: 'شكل قانوني',
        forme_juridique_value: 'ليتم إكماله وفقًا للحالة',
        adresse: 'العنوان',
        adresse_value:
          'Hassania 2, Bloc B N°248 RDC Bd Mohamed VI - Mohammedia',
        telephone: 'الهاتف',
        telephone_value: '+212 661 06 74 91 / +212 523 31 08 21',
        email: 'البريد الإلكتروني',
        email_value: 'contact@lightbbulb.ma',
        numero_immatriculation: 'رقم التسجيل',
        numero_immatriculation_value: '25791',
        numero_tva: 'رقم الضريبة',
        numero_tva_value: 'ليتم إكماله',
        directeur_publication_title: 'مدير النشر',
        directeur_publication_value: 'JAMAL ID ELAASSRI',
        gerant_value: 'مدير لايت بولب',
        hebergement_site_title: 'استضافة الموقع',
        hebergeur: 'المضيف',
        hebergeur_value: 'Netlify, Inc.',
        adresse_hebergement: 'العنوان',
        adresse_hebergement_value:
          '2325 3rd Street, Suite 296, San Francisco, CA 94107, USA',
        propriete_intellectuelle_title: 'الملكية الفكرية',
        propriete_intellectuelle_value:
          'يتم تغطية كامل محتوى هذا الموقع بالتشريع المغربي والدولي على حق النشر والملكية الفكرية. جميع حقوق النسخ محفوظة، بما في ذلك المستندات القابلة للتنزيل والتمثيلات الأيقونية والتصويرية.',
        protection_donnees_personnelles_title: 'حماية البيانات الشخصية',
        protection_donnees_personnelles_value:
          'وفقًا للقانون المغربي رقم 09-08 لعام 2009 بشأن حماية الأفراد من أجل معالجة بيانات الشخصية التي تتعلق بهم، لديك حق الوصول والتصحيح وحذف بياناتك الشخصية. لتنفيذ هذا الحق، يرجى الاتصال بنا على: contact@lightbbulb.ma',
        cookies_title: 'الكوكيز',
        cookies_value:
          'يستخدم هذا الموقع الكوكيز لتحسين تجربة المستخدم وتحليل المرور. من خلال المتابعة على هذا الموقع، فإنك توافق على استخدام الكوكيز.',
        responsabilite_title: 'المسؤولية',
        responsabilite_value:
          'تحاول لايت بولب تقديم المعلومات بشكل دقيق قدر الإمكان. ومع ذلك، لا يمكن أن تكون مسؤولة عن النفايات والخطأ والنقصان في تحديث، سواء من عملها أو من أفراد الأطراف الثالثة التي تزودها بهذه المعلومات.',
        droit_applicable_title: 'القانون المطبق',
        droit_applicable_value:
          'هذه التوصيات القانونية منظمة بالقانون المغربي. في حالة إخلاء النزاع، سيكون المحاكم المغربيون هم المحاكم الوحيدة المختصة.',
        contact_title: 'الاتصال',
        contact_value:
          'لأي أسئلة بخصوص هذه التوصيات القانونية، يمكنك الاتصال بنا:',
        contact_email_value: 'بالبريد الإلكتروني: contact@lightbbulb.ma',
        contact_telephone_value: 'بالهاتف: +212 661 06 74 91 / +212 523 31 08 21',
        contact_courrier_value:
          'بالبريد: حسنية 2، بلوك ب رقم 248، شارع محمد السادس، المحمدية، مغرب',
        derniere_mise_a_jour_value: 'آخر تحديث: {date}',
        legal_documents_title: 'المستندات القانونية',
        useful_links_title: 'روابط مفيدة',
        site_map_link: 'خريطة الموقع',
        contact_link: 'اتصل بنا',
        legal_info_subtitle: 'المعلومات القانونية وشروط استخدام موقع لايت بولب',
      },
      planSite: {
        title: 'خريطة الموقع',
        subtitle: 'اعثر هنا على جميع الصفحات والأقسام الرئيسية لموقع لايت بولب للتنقل السهل والمثالي.',
        quickAccess: 'الوصول السريع',
        mainPages: 'الصفحات الرئيسية',
        mainPagesDescription: 'التنقل الرئيسي للموقع',
        legalInfo: 'المعلومات القانونية',
        legalInfoDescription: 'المستندات والإشعارات القانونية',
        specializedServices: 'الخدمات المتخصصة',
        specializedServicesDescription: 'مجالات خبرتنا',
        needHelp: 'تحتاج مساعدة؟',
        needHelpDescription: 'فريقنا في خدمتك لمساعدتك في جميع مشاريعك الكهربائية. لا تتردد في الاتصال بنا للحصول على عرض سعر مجاني ومخصص.',
        requestQuote: 'طلب عرض سعر',
        contactUs: 'اتصل بنا',
        footerNote: 'يمكنك أيضًا الوصول إلى شبكاتنا الاجتماعية والنشرة الإخبارية من التذييل.',
        madeWithLove: 'صنع بحب في المغرب',
        pages: {
          home: { name: 'الرئيسية', description: 'الصفحة الرئيسية مع عرض خدماتنا' },
          about: { name: 'من نحن', description: 'اكتشف قصتنا وخبرتنا' },
          services: { name: 'الخدمات', description: 'حلولنا الكهربائية المهنية' },
          projects: { name: 'المشاريع', description: 'اكتشف مشاريعنا المنجزة' },
          contact: { name: 'اتصل بنا', description: 'اتصل بنا للحصول على عرض سعر مجاني' },
          legal: { name: 'الإشعارات القانونية', description: 'المعلومات القانونية وشروط الاستخدام' },
          sitemap: { name: 'خريطة الموقع', description: 'التنقل الكامل للموقع (الصفحة الحالية)' },
          installation: { name: 'التركيب الكهربائي', description: 'تركيب كامل للسكني والتجاري' },
          maintenance: { name: 'الصيانة', description: 'خدمات الصيانة الوقائية والإصلاح' },
          material: { name: 'المعدات الكهربائية', description: 'بيع وتوزيع المعدات المهنية' },
          emergency: { name: 'خدمة الطوارئ', description: 'تدخل سريع 24/7' },
        }
      },
      footer: {
        company: {
          1: 'البيع والتوزيع',
          2: 'لمعدات كهربائية',
          3: 'أعمال متنوعة',
          more: 'أكثر من 10 سنوات من الخبرة في خدمتك.',
        },
        links: {
          title: 'روابط سريعة',
        },
        contact: {
          title: 'الاتصال',
          address: {
            1: 'حسنية 2، بلوك ب رقم 248',
            2: 'شارع محمد السادس، المحمدية',
          },
          phone: '+212 661 06 74 91 / +212 523 31 08 21',
          email: 'contact@lightbbulb.ma',
          hours: 'الإثنين-الجمعة: 8ص-8م',
        },
        copyright: 'جميع الحقوق محفوظة.',
      },
      products: {
        title: 'منتجاتنا',
        search: 'ابحث عن منتج...',
        categories: {
          all: 'الكل',
          cables: 'كابلات',
          lighting: 'إضاءة',
          panels: 'لوحات',
          sockets: 'مقابس',
          breakers: 'قواطع',
        },
        no_results: 'لم يتم العثور على منتج.',
        in_stock: 'متوفر',
        mad: 'درهم',
        add_to_quote: 'أضف إلى عرض السعر',
        whatsapp: 'واتساب',
        whatsapp_message: 'مرحبًا، أود الحصول على عرض سعر للمنتج: {{name}}.',
      },
      contact: {
        title: 'اتصل بنا',
        subtitle: 'فريقنا في خدمتك للإجابة على جميع أسئلتك',
        cards: {
          0: {
            title: 'العنوان',
            line1: 'حسنية 2، بلوك ب رقم 248',
            line2: 'شارع محمد السادس، المحمدية',
          },
          1: {
            title: 'الهاتف',
            line1: '+212 523 31 08 21',
            line2: '+212 661 06 74 91',
          },
          2: {
            title: 'البريد الإلكتروني',
            line1: 'contact@lightbbulb.ma',
            line2: 'devis@lightbbulb.ma',
          },
          3: {
            title: 'الساعات',
            line1: 'الإثنين-الجمعة: 8ص-8م',
            line2: 'السبت: 8ص-4م',
          },
        },
        form: {
          request_quote: 'طلب عرض سعر مجاني',
          response_guarantee: 'الرد مضمون خلال 24 ساعة',
          name: 'الاسم الكامل *',
          name_placeholder: 'اسمك',
          phone: 'الهاتف *',
          phone_placeholder: '+212 6XX XXX XXX',
          email: 'البريد الإلكتروني *',
          email_placeholder: 'your@email.com',
          service_type: 'نوع الخدمة *',
          select_service: 'اختر خدمة',
          message: 'رسالة *',
          message_placeholder: 'صف مشروعك أو حاجتك...',
          submit: 'إرسال الطلب',
          sending: 'جاري الإرسال...',
          required_fields: '* الحقول المطلوبة - الرد مضمون خلال 24 ساعة',
          message_sent: 'تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت ممكن.',
        },
        map: {
          location: 'موقعنا',
          location_title: 'موقع لايت بولب',
        },
        emergency: {
          title: 'خدمة الطوارئ 24/7',
          description: 'عطل كهربائي؟ مشكلة عاجلة؟ يتدخل فريقنا بسرعة.',
          call_now: 'اتصل الآن',
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
