import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        services: 'Services',
        projects: 'Réalisations',
        contact: 'Contact',
      },
      home: {
        hero: {
          title: 'Solutions Électriques Professionnelles',
          subtitle: 'Plus de 20 ans d\'expertise en matériel électrique. Vente, installation et maintenance partout au Maroc. Devis gratuit, conseils personnalisés.',
          quote: 'Demander un devis',
          services: 'Nos services',
        },
        stats: {
          0: 'Projets réalisés',
          1: 'Années d\'expérience',
          2: 'Clients satisfaits',
          3: 'Support disponible',
        },
        services: [
          {
            title: 'Vente & Distribution',
            description: 'Large gamme de matériel électrique certifié avec conseils techniques personnalisés.',
          },
          {
            title: 'Installation & Maintenance',
            description: 'Installation professionnelle et maintenance préventive de vos équipements électriques.',
          },
          {
            title: 'Dépannage d\'Urgence',
            description: 'Service d\'intervention rapide 24h/7j pour tous vos problèmes électriques urgents.',
          },
        ],
      },
      about: {
        hero: {
          title: 'Découvrez',
          company: 'LIGHT BULB',
          description: 'Votre partenaire de confiance pour tous vos besoins en matériel électrique au Maroc.',
        },
        companyStory: {
          title: 'Qui sommes-nous ?',
          description: {
            part1: 'LIGHT BULB est une entreprise familiale spécialisée dans la vente et la distribution de matériel électrique depuis plus de 20 ans.',
            part2: 'Basée à Mohammedia, nous servons des clients dans tout le Maroc avec un engagement constant vers l\'excellence et la satisfaction client.',
          },
          values: {
            description: 'Notre mission est de fournir des solutions électriques de qualité, accompagnées de conseils techniques experts et d\'un service client exceptionnel.',
          },
          stats: {
            years: 'Années d\'expérience',
          },
        },
        missionValues: {
          title: 'Notre Mission & Nos Valeurs',
          description: 'Nous nous engageons à fournir des solutions électriques de qualité supérieure.',
          excellence: {
            description: 'Nous visons l\'excellence dans chaque projet, en utilisant uniquement des matériaux certifiés et des techniques éprouvées.',
          },
          confidence: {
            description: 'La confiance de nos clients est notre priorité. Nous garantissons la qualité de nos produits et services.',
          },
          responsiveness: {
            description: 'Nous répondons rapidement aux besoins de nos clients avec des délais de livraison optimisés.',
          },
          precision: {
            description: 'Chaque installation est réalisée avec précision et dans le respect des normes de sécurité.',
          },
        },
        whyChooseUs: {
          title: 'Pourquoi choisir Light Bulb ?',
          expertise: {
            description: 'Plus de 20 ans d\'expertise dans le domaine électrique avec une équipe de professionnels qualifiés.',
          },
          familyBusiness: {
            description: 'Entreprise familiale qui privilégie les relations durables et la satisfaction client.',
          },
          fastDelivery: {
            description: 'Livraison rapide partout au Maroc avec un service client réactif et personnalisé.',
          },
          customizedSolutions: {
            description: 'Solutions sur mesure adaptées à vos besoins spécifiques et votre budget.',
          },
        },
        ourCommitment: {
          title: 'Notre engagement au Maroc',
          location: 'Mohammedia, Maroc',
          description: 'Nous sommes fiers de contribuer au développement de l\'infrastructure électrique du Maroc en fournissant des solutions fiables et durables à nos clients.',
        },
      },
      services: {
        title: 'Nos Services',
        description: 'Solutions électriques complètes pour tous vos besoins professionnels et résidentiels.',
        professional_service: 'Service Pro',
        professional_service_description: 'Solutions techniques',
        additional_services: 'Services +',
        additional_services_description: 'Accompagnement complet',
        emergency_service: 'Urgence',
        emergency_service_description: 'Intervention 24/7',
        request_quote: 'Demander un devis',
      },
      projects: {
        our_realizations: 'Nos Réalisations',
        discover_some_of_our_recent_projects: 'Découvrez quelques-uns de nos projets récents et notre expertise technique.',
        residential: 'Résidentiel',
        commercial: 'Commercial',
        industrial: 'Industriel',
        request_a_quote: 'Demander un devis',
        see_our_services: 'Voir nos services',
        features: 'Caractéristiques',
        see_details: 'Voir les détails',
        project_description: 'Description du projet',
        technical_features: 'Caractéristiques techniques',
        challenges_and_solutions: 'Défis et Solutions',
        challenges_encountered: 'Défis rencontrés',
        applied_solutions: 'Solutions appliquées',
        client_testimonial: 'Témoignage client',
        request_similar_quote: 'Demander un devis similaire',
        close: 'Fermer',
        your_next_project: 'Votre Prochain Projet ?',
        contact_us_to_discuss_your_project: 'Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Nous Contacter',
        description: {
          part1: 'Vous avez un projet électrique ? Besoin de conseils techniques ?',
          part2: 'Notre équipe est à votre disposition pour vous accompagner.',
        },
        callToAction: 'N\'hésitez pas à nous contacter pour toute demande d\'information ou de devis.',
        phone: '+212 661 067 491',
        email: 'contact@lightbulb.ma',
        address: 'Mohammedia, Maroc',
        devis: 'Demander un devis gratuit',
        cards: {
          1: {
            title: 'Téléphone',
            line1: 'Appelez-nous',
          },
          2: {
            title: 'Email',
            line1: 'Écrivez-nous',
          },
        },
        form: {
          request_quote: 'Demander un devis',
        },
      },
      legal: {
        mentions_legales_title: 'Mentions Légales',
        legal_info_subtitle: 'Informations légales et réglementaires concernant LIGHT BULB',
        raison_sociale: 'Raison sociale',
        raison_sociale_value: 'LIGHT BULB',
        statut_juridique: 'Statut juridique',
        statut_juridique_value: 'Entreprise individuelle',
        forme_juridique: 'Forme juridique',
        forme_juridique_value: 'Commerce de détail',
        activite: 'Activité',
        activite_value: 'Vente et distribution de matériel électrique',
        tribunal: 'Tribunal compétent',
        tribunal_value: 'Tribunal de Commerce de Mohammedia',
        numero_immatriculation: 'Numéro d\'immatriculation',
        numero_immatriculation_value: 'RC 12345',
        ice: 'Identifiant Commun de l\'Entreprise (ICE)',
        ice_value: '001234567890123',
        numero_tva: 'Numéro de TVA',
        numero_tva_value: 'Non assujetti',
        adresse: 'Adresse',
        adresse_value: 'Mohammedia, Maroc',
        telephone: 'Téléphone',
        telephone_value: '+212 661 067 491',
        email: 'Email',
        email_value: 'contact@lightbulb.ma',
        legal_documents_title: 'Documents Légaux',
        propriete_intellectuelle_title: 'Propriété Intellectuelle',
        propriete_intellectuelle_value: 'Tous les contenus présents sur ce site (textes, images, logos) sont la propriété de LIGHT BULB et sont protégés par les lois sur la propriété intellectuelle.',
        protection_donnees_personnelles_title: 'Protection des Données Personnelles',
        protection_donnees_personnelles_value: 'Conformément à la loi 09-08, vos données personnelles sont collectées uniquement dans le cadre de nos services et ne sont jamais transmises à des tiers.',
        cookies_title: 'Cookies',
        cookies_value: 'Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de tracking n\'est utilisé.',
        responsabilite_title: 'Responsabilité',
        responsabilite_value: 'LIGHT BULB s\'efforce de maintenir les informations de ce site à jour, mais ne peut garantir l\'exactitude complète de tous les contenus.',
        droit_applicable_title: 'Droit Applicable',
        droit_applicable_value: 'Ces mentions légales sont régies par le droit marocain. Tout litige sera de la compétence des tribunaux de Mohammedia.',
        contact_title: 'Contact',
        useful_links_title: 'Liens Utiles',
        site_map_link: 'Plan du site',
        contact_link: 'Nous contacter',
      },
      planSite: {
        title: 'Plan du Site',
        subtitle: 'Trouvez rapidement l\'information que vous cherchez grâce à notre plan de site complet.',
        mainPages: 'Pages Principales',
        mainPagesDescription: 'Les sections essentielles de notre site web',
        legalInfo: 'Informations Légales',
        legalInfoDescription: 'Documents légaux et réglementaires',
        specializedServices: 'Services Spécialisés',
        specializedServicesDescription: 'Nos prestations techniques détaillées',
        quickAccess: 'Accès Rapide',
        requestQuote: 'Demander un devis',
        contactUs: 'Nous contacter',
        needHelp: 'Besoin d\'aide ?',
        needHelpDescription: 'Notre équipe est à votre disposition pour répondre à toutes vos questions.',
        footerNote: 'Ce plan du site est mis à jour régulièrement pour refléter l\'évolution de notre contenu.',
        madeWithLove: 'Fait avec ❤️ au Maroc',
        pages: {
          home: {
            name: 'Accueil',
            description: 'Page d\'accueil avec présentation de nos services',
          },
          about: {
            name: 'À propos',
            description: 'Notre histoire, mission et valeurs',
          },
          services: {
            name: 'Services',
            description: 'Tous nos services électriques détaillés',
          },
          projects: {
            name: 'Réalisations',
            description: 'Portfolio de nos projets récents',
          },
          contact: {
            name: 'Contact',
            description: 'Formulaire de contact et informations',
          },
          legal: {
            name: 'Mentions légales',
            description: 'Informations légales et réglementaires',
          },
          sitemap: {
            name: 'Plan du site',
            description: 'Navigation complète du site',
          },
          installation: {
            name: 'Installation électrique',
            description: 'Services d\'installation professionnelle',
          },
          maintenance: {
            name: 'Maintenance',
            description: 'Services de maintenance et dépannage',
          },
          material: {
            name: 'Matériel électrique',
            description: 'Vente de matériel électrique certifié',
          },
          emergency: {
            name: 'Urgence 24/7',
            description: 'Service d\'intervention d\'urgence',
          },
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
        projects: 'Projects',
        contact: 'Contact',
      },
      home: {
        hero: {
          title: 'Professional Electrical Solutions',
          subtitle: 'Over 20 years of expertise in electrical equipment. Sales, installation and maintenance throughout Morocco. Free quote, personalized advice.',
          quote: 'Request a quote',
          services: 'Our services',
        },
        stats: {
          0: 'Completed projects',
          1: 'Years of experience',
          2: 'Satisfied customers',
          3: 'Available support',
        },
        services: [
          {
            title: 'Sales & Distribution',
            description: 'Wide range of certified electrical equipment with personalized technical advice.',
          },
          {
            title: 'Installation & Maintenance',
            description: 'Professional installation and preventive maintenance of your electrical equipment.',
          },
          {
            title: 'Emergency Repair',
            description: '24/7 rapid intervention service for all your urgent electrical problems.',
          },
        ],
      },
      about: {
        hero: {
          title: 'Discover',
          company: 'LIGHT BULB',
          description: 'Your trusted partner for all your electrical equipment needs in Morocco.',
        },
        companyStory: {
          title: 'Who are we?',
          description: {
            part1: 'LIGHT BULB is a family business specializing in the sale and distribution of electrical equipment for over 20 years.',
            part2: 'Based in Mohammedia, we serve customers throughout Morocco with a constant commitment to excellence and customer satisfaction.',
          },
          values: {
            description: 'Our mission is to provide quality electrical solutions, accompanied by expert technical advice and exceptional customer service.',
          },
          stats: {
            years: 'Years of experience',
          },
        },
        missionValues: {
          title: 'Our Mission & Values',
          description: 'We are committed to providing superior quality electrical solutions.',
          excellence: {
            description: 'We strive for excellence in every project, using only certified materials and proven techniques.',
          },
          confidence: {
            description: 'Our customers\' trust is our priority. We guarantee the quality of our products and services.',
          },
          responsiveness: {
            description: 'We respond quickly to our customers\' needs with optimized delivery times.',
          },
          precision: {
            description: 'Each installation is carried out with precision and in compliance with safety standards.',
          },
        },
        whyChooseUs: {
          title: 'Why choose Light Bulb?',
          expertise: {
            description: 'Over 20 years of expertise in the electrical field with a team of qualified professionals.',
          },
          familyBusiness: {
            description: 'Family business that prioritizes lasting relationships and customer satisfaction.',
          },
          fastDelivery: {
            description: 'Fast delivery throughout Morocco with responsive and personalized customer service.',
          },
          customizedSolutions: {
            description: 'Tailor-made solutions adapted to your specific needs and budget.',
          },
        },
        ourCommitment: {
          title: 'Our commitment in Morocco',
          location: 'Mohammedia, Morocco',
          description: 'We are proud to contribute to the development of Morocco\'s electrical infrastructure by providing reliable and sustainable solutions to our customers.',
        },
      },
      services: {
        title: 'Our Services',
        description: 'Complete electrical solutions for all your professional and residential needs.',
        professional_service: 'Pro Service',
        professional_service_description: 'Technical solutions',
        additional_services: 'Services +',
        additional_services_description: 'Complete support',
        emergency_service: 'Emergency',
        emergency_service_description: '24/7 intervention',
        request_quote: 'Request a quote',
      },
      projects: {
        our_realizations: 'Our Projects',
        discover_some_of_our_recent_projects: 'Discover some of our recent projects and our technical expertise.',
        residential: 'Residential',
        commercial: 'Commercial',
        industrial: 'Industrial',
        request_a_quote: 'Request a quote',
        see_our_services: 'See our services',
        features: 'Features',
        see_details: 'See details',
        project_description: 'Project description',
        technical_features: 'Technical features',
        challenges_and_solutions: 'Challenges and Solutions',
        challenges_encountered: 'Challenges encountered',
        applied_solutions: 'Applied solutions',
        client_testimonial: 'Client testimonial',
        request_similar_quote: 'Request similar quote',
        close: 'Close',
        your_next_project: 'Your Next Project?',
        contact_us_to_discuss_your_project: 'Contact us to discuss your project and get a personalized quote.',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Contact Us',
        description: {
          part1: 'Do you have an electrical project? Need technical advice?',
          part2: 'Our team is at your disposal to support you.',
        },
        callToAction: 'Do not hesitate to contact us for any request for information or quote.',
        phone: '+212 661 067 491',
        email: 'contact@lightbulb.ma',
        address: 'Mohammedia, Morocco',
        devis: 'Request a free quote',
        cards: {
          1: {
            title: 'Phone',
            line1: 'Call us',
          },
          2: {
            title: 'Email',
            line1: 'Write to us',
          },
        },
        form: {
          request_quote: 'Request a quote',
        },
      },
      legal: {
        mentions_legales_title: 'Legal Notice',
        legal_info_subtitle: 'Legal and regulatory information concerning LIGHT BULB',
        raison_sociale: 'Company name',
        raison_sociale_value: 'LIGHT BULB',
        statut_juridique: 'Legal status',
        statut_juridique_value: 'Individual company',
        forme_juridique: 'Legal form',
        forme_juridique_value: 'Retail trade',
        activite: 'Activity',
        activite_value: 'Sale and distribution of electrical equipment',
        tribunal: 'Competent court',
        tribunal_value: 'Commercial Court of Mohammedia',
        numero_immatriculation: 'Registration number',
        numero_immatriculation_value: 'RC 12345',
        ice: 'Common Enterprise Identifier (ICE)',
        ice_value: '001234567890123',
        numero_tva: 'VAT number',
        numero_tva_value: 'Not subject',
        adresse: 'Address',
        adresse_value: 'Mohammedia, Morocco',
        telephone: 'Phone',
        telephone_value: '+212 661 067 491',
        email: 'Email',
        email_value: 'contact@lightbulb.ma',
        legal_documents_title: 'Legal Documents',
        propriete_intellectuelle_title: 'Intellectual Property',
        propriete_intellectuelle_value: 'All content on this site (texts, images, logos) is the property of LIGHT BULB and is protected by intellectual property laws.',
        protection_donnees_personnelles_title: 'Personal Data Protection',
        protection_donnees_personnelles_value: 'In accordance with law 09-08, your personal data is collected only as part of our services and is never transmitted to third parties.',
        cookies_title: 'Cookies',
        cookies_value: 'This site uses technical cookies necessary for its proper functioning. No tracking cookies are used.',
        responsabilite_title: 'Responsibility',
        responsabilite_value: 'LIGHT BULB strives to keep the information on this site up to date, but cannot guarantee the complete accuracy of all content.',
        droit_applicable_title: 'Applicable Law',
        droit_applicable_value: 'These legal notices are governed by Moroccan law. Any dispute will be under the jurisdiction of the courts of Mohammedia.',
        contact_title: 'Contact',
        useful_links_title: 'Useful Links',
        site_map_link: 'Site map',
        contact_link: 'Contact us',
      },
      planSite: {
        title: 'Site Map',
        subtitle: 'Quickly find the information you are looking for thanks to our comprehensive site map.',
        mainPages: 'Main Pages',
        mainPagesDescription: 'The essential sections of our website',
        legalInfo: 'Legal Information',
        legalInfoDescription: 'Legal and regulatory documents',
        specializedServices: 'Specialized Services',
        specializedServicesDescription: 'Our detailed technical services',
        quickAccess: 'Quick Access',
        requestQuote: 'Request a quote',
        contactUs: 'Contact us',
        needHelp: 'Need help?',
        needHelpDescription: 'Our team is at your disposal to answer all your questions.',
        footerNote: 'This site map is updated regularly to reflect the evolution of our content.',
        madeWithLove: 'Made with ❤️ in Morocco',
        pages: {
          home: {
            name: 'Home',
            description: 'Homepage with presentation of our services',
          },
          about: {
            name: 'About',
            description: 'Our history, mission and values',
          },
          services: {
            name: 'Services',
            description: 'All our detailed electrical services',
          },
          projects: {
            name: 'Projects',
            description: 'Portfolio of our recent projects',
          },
          contact: {
            name: 'Contact',
            description: 'Contact form and information',
          },
          legal: {
            name: 'Legal notice',
            description: 'Legal and regulatory information',
          },
          sitemap: {
            name: 'Site map',
            description: 'Complete site navigation',
          },
          installation: {
            name: 'Electrical installation',
            description: 'Professional installation services',
          },
          maintenance: {
            name: 'Maintenance',
            description: 'Maintenance and repair services',
          },
          material: {
            name: 'Electrical equipment',
            description: 'Sale of certified electrical equipment',
          },
          emergency: {
            name: '24/7 Emergency',
            description: 'Emergency intervention service',
          },
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
        projects: 'المشاريع',
        contact: 'اتصل بنا',
      },
      home: {
        hero: {
          title: 'حلول كهربائية احترافية',
          subtitle: 'أكثر من 20 عامًا من الخبرة في المعدات الكهربائية. البيع والتركيب والصيانة في جميع أنحاء المغرب. عرض أسعار مجاني، استشارة شخصية.',
          quote: 'طلب عرض سعر',
          services: 'خدماتنا',
        },
        stats: {
          0: 'مشاريع مكتملة',
          1: 'سنوات من الخبرة',
          2: 'عملاء راضون',
          3: 'دعم متاح',
        },
        services: [
          {
            title: 'البيع والتوزيع',
            description: 'مجموعة واسعة من المعدات الكهربائية المعتمدة مع استشارة فنية شخصية.',
          },
          {
            title: 'التركيب والصيانة',
            description: 'تركيب احترافي وصيانة وقائية لمعداتك الكهربائية.',
          },
          {
            title: 'إصلاح الطوارئ',
            description: 'خدمة تدخل سريع 24/7 لجميع مشاكلك الكهربائية العاجلة.',
          },
        ],
      },
      about: {
        hero: {
          title: 'اكتشف',
          company: 'لايت بولب',
          description: 'شريكك الموثوق لجميع احتياجاتك من المعدات الكهربائية في المغرب.',
        },
        companyStory: {
          title: 'من نحن؟',
          description: {
            part1: 'لايت بولب هي شركة عائلية متخصصة في بيع وتوزيع المعدات الكهربائية لأكثر من 20 عامًا.',
            part2: 'مقرها في المحمدية، نخدم العملاء في جميع أنحاء المغرب مع التزام مستمر بالتميز ورضا العملاء.',
          },
          values: {
            description: 'مهمتنا هي توفير حلول كهربائية عالية الجودة، مصحوبة بمشورة فنية خبيرة وخدمة عملاء استثنائية.',
          },
          stats: {
            years: 'سنوات من الخبرة',
          },
        },
        missionValues: {
          title: 'مهمتنا وقيمنا',
          description: 'نحن ملتزمون بتوفير حلول كهربائية عالية الجودة.',
          excellence: {
            description: 'نسعى للتميز في كل مشروع، باستخدام مواد معتمدة وتقنيات مثبتة فقط.',
          },
          confidence: {
            description: 'ثقة عملائنا هي أولويتنا. نضمن جودة منتجاتنا وخدماتنا.',
          },
          responsiveness: {
            description: 'نستجيب بسرعة لاحتياجات عملائنا مع أوقات تسليم محسنة.',
          },
          precision: {
            description: 'يتم تنفيذ كل تركيب بدقة ووفقًا لمعايير السلامة.',
          },
        },
        whyChooseUs: {
          title: 'لماذا تختار لايت بولب؟',
          expertise: {
            description: 'أكثر من 20 عامًا من الخبرة في المجال الكهربائي مع فريق من المهنيين المؤهلين.',
          },
          familyBusiness: {
            description: 'شركة عائلية تعطي الأولوية للعلاقات الدائمة ورضا العملاء.',
          },
          fastDelivery: {
            description: 'تسليم سريع في جميع أنحاء المغرب مع خدمة عملاء سريعة الاستجابة وشخصية.',
          },
          customizedSolutions: {
            description: 'حلول مخصصة تتكيف مع احتياجاتك المحددة وميزانيتك.',
          },
        },
        ourCommitment: {
          title: 'التزامنا في المغرب',
          location: 'المحمدية، المغرب',
          description: 'نحن فخورون بالمساهمة في تطوير البنية التحتية الكهربائية في المغرب من خلال توفير حلول موثوقة ومستدامة لعملائنا.',
        },
      },
      services: {
        title: 'خدماتنا',
        description: 'حلول كهربائية شاملة لجميع احتياجاتك المهنية والسكنية.',
        professional_service: 'خدمة احترافية',
        professional_service_description: 'حلول تقنية',
        additional_services: 'خدمات إضافية',
        additional_services_description: 'دعم شامل',
        emergency_service: 'طوارئ',
        emergency_service_description: 'تدخل 24/7',
        request_quote: 'طلب عرض سعر',
      },
      projects: {
        our_realizations: 'مشاريعنا',
        discover_some_of_our_recent_projects: 'اكتشف بعض مشاريعنا الحديثة وخبرتنا التقنية.',
        residential: 'سكني',
        commercial: 'تجاري',
        industrial: 'صناعي',
        request_a_quote: 'طلب عرض سعر',
        see_our_services: 'انظر خدماتنا',
        features: 'المميزات',
        see_details: 'انظر التفاصيل',
        project_description: 'وصف المشروع',
        technical_features: 'المميزات التقنية',
        challenges_and_solutions: 'التحديات والحلول',
        challenges_encountered: 'التحديات المواجهة',
        applied_solutions: 'الحلول المطبقة',
        client_testimonial: 'شهادة العميل',
        request_similar_quote: 'طلب عرض سعر مماثل',
        close: 'إغلاق',
        your_next_project: 'مشروعك القادم؟',
        contact_us_to_discuss_your_project: 'اتصل بنا لمناقشة مشروعك والحصول على عرض سعر شخصي.',
      },
      contact: {
        title: 'اتصل بنا',
        subtitle: 'تواصل معنا',
        description: {
          part1: 'هل لديك مشروع كهربائي؟ تحتاج استشارة فنية؟',
          part2: 'فريقنا في خدمتك لدعمك.',
        },
        callToAction: 'لا تتردد في الاتصال بنا لأي طلب معلومات أو عرض سعر.',
        phone: '+212 661 067 491',
        email: 'contact@lightbulb.ma',
        address: 'المحمدية، المغرب',
        devis: 'طلب عرض سعر مجاني',
        cards: {
          1: {
            title: 'الهاتف',
            line1: 'اتصل بنا',
          },
          2: {
            title: 'البريد الإلكتروني',
            line1: 'اكتب لنا',
          },
        },
        form: {
          request_quote: 'طلب عرض سعر',
        },
      },
      legal: {
        mentions_legales_title: 'الإشعار القانوني',
        legal_info_subtitle: 'المعلومات القانونية والتنظيمية المتعلقة بلايت بولب',
        raison_sociale: 'اسم الشركة',
        raison_sociale_value: 'لايت بولب',
        statut_juridique: 'الوضع القانوني',
        statut_juridique_value: 'شركة فردية',
        forme_juridique: 'الشكل القانوني',
        forme_juridique_value: 'تجارة التجزئة',
        activite: 'النشاط',
        activite_value: 'بيع وتوزيع المعدات الكهربائية',
        tribunal: 'المحكمة المختصة',
        tribunal_value: 'المحكمة التجارية للمحمدية',
        numero_immatriculation: 'رقم التسجيل',
        numero_immatriculation_value: 'RC 12345',
        ice: 'المعرف المشترك للمؤسسة (ICE)',
        ice_value: '001234567890123',
        numero_tva: 'رقم ضريبة القيمة المضافة',
        numero_tva_value: 'غير خاضع',
        adresse: 'العنوان',
        adresse_value: 'المحمدية، المغرب',
        telephone: 'الهاتف',
        telephone_value: '+212 661 067 491',
        email: 'البريد الإلكتروني',
        email_value: 'contact@lightbulb.ma',
        legal_documents_title: 'الوثائق القانونية',
        propriete_intellectuelle_title: 'الملكية الفكرية',
        propriete_intellectuelle_value: 'جميع المحتويات الموجودة على هذا الموقع (النصوص والصور والشعارات) هي ملك لايت بولب ومحمية بقوانين الملكية الفكرية.',
        protection_donnees_personnelles_title: 'حماية البيانات الشخصية',
        protection_donnees_personnelles_value: 'وفقًا للقانون 09-08، يتم جمع بياناتك الشخصية فقط كجزء من خدماتنا ولا يتم نقلها أبدًا إلى أطراف ثالثة.',
        cookies_title: 'ملفات تعريف الارتباط',
        cookies_value: 'يستخدم هذا الموقع ملفات تعريف الارتباط التقنية اللازمة لعمله السليم. لا يتم استخدام ملفات تعريف الارتباط للتتبع.',
        responsabilite_title: 'المسؤولية',
        responsabilite_value: 'تسعى لايت بولب للحفاظ على المعلومات الموجودة على هذا الموقع محدثة، لكنها لا تستطيع ضمان الدقة الكاملة لجميع المحتويات.',
        droit_applicable_title: 'القانون المطبق',
        droit_applicable_value: 'تخضع هذه الإشعارات القانونية للقانون المغربي. أي نزاع سيكون تحت اختصاص محاكم المحمدية.',
        contact_title: 'اتصل بنا',
        useful_links_title: 'روابط مفيدة',
        site_map_link: 'خريطة الموقع',
        contact_link: 'اتصل بنا',
      },
      planSite: {
        title: 'خريطة الموقع',
        subtitle: 'اعثر بسرعة على المعلومات التي تبحث عنها بفضل خريطة موقعنا الشاملة.',
        mainPages: 'الصفحات الرئيسية',
        mainPagesDescription: 'الأقسام الأساسية لموقعنا الإلكتروني',
        legalInfo: 'المعلومات القانونية',
        legalInfoDescription: 'الوثائق القانونية والتنظيمية',
        specializedServices: 'الخدمات المتخصصة',
        specializedServicesDescription: 'خدماتنا التقنية المفصلة',
        quickAccess: 'وصول سريع',
        requestQuote: 'طلب عرض سعر',
        contactUs: 'اتصل بنا',
        needHelp: 'تحتاج مساعدة؟',
        needHelpDescription: 'فريقنا في خدمتك للإجابة على جميع أسئلتك.',
        footerNote: 'يتم تحديث خريطة الموقع هذه بانتظام لتعكس تطور محتوانا.',
        madeWithLove: 'صنع بـ ❤️ في المغرب',
        pages: {
          home: {
            name: 'الرئيسية',
            description: 'الصفحة الرئيسية مع عرض خدماتنا',
          },
          about: {
            name: 'من نحن',
            description: 'تاريخنا ومهمتنا وقيمنا',
          },
          services: {
            name: 'الخدمات',
            description: 'جميع خدماتنا الكهربائية المفصلة',
          },
          projects: {
            name: 'المشاريع',
            description: 'محفظة مشاريعنا الحديثة',
          },
          contact: {
            name: 'اتصل بنا',
            description: 'نموذج الاتصال والمعلومات',
          },
          legal: {
            name: 'الإشعار القانوني',
            description: 'المعلومات القانونية والتنظيمية',
          },
          sitemap: {
            name: 'خريطة الموقع',
            description: 'التنقل الكامل في الموقع',
          },
          installation: {
            name: 'التركيب الكهربائي',
            description: 'خدمات التركيب الاحترافية',
          },
          maintenance: {
            name: 'الصيانة',
            description: 'خدمات الصيانة والإصلاح',
          },
          material: {
            name: 'المعدات الكهربائية',
            description: 'بيع المعدات الكهربائية المعتمدة',
          },
          emergency: {
            name: 'طوارئ 24/7',
            description: 'خدمة التدخل في حالات الطوارئ',
          },
        },
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;