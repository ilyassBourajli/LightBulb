import React, { useState } from 'react';
import { Package, Truck, CreditCard, RefreshCcw, Phone, Wrench, ClipboardList, FileText } from 'lucide-react';

const faqData = [
  {
    category: 'Produits',
    icon: <Package className="w-5 h-5 text-yellow-500" />,
    questions: [
      {
        q: 'Quels types de matériel électrique proposez-vous ?',
        a: 'Nous proposons une large gamme de matériel électrique : câbles, interrupteurs, luminaires, disjoncteurs, tableaux électriques, prises industrielles, etc.'
      },
      {
        q: 'Vos produits sont-ils certifiés ?',
        a: 'Oui, tous nos produits respectent les normes de sécurité marocaines et internationales.'
      },
      {
        q: 'Proposez-vous des conseils techniques ?',
        a: 'Bien sûr. Notre équipe technique est à votre disposition pour vous guider dans le choix et l’installation de votre matériel.'
      }
    ]
  },
  {
    category: 'Installation et Support Technique',
    icon: <Wrench className="w-5 h-5 text-orange-500" />,
    questions: [
      {
        q: 'Est-ce que vous proposez l\'installation des produits ?',
        a: 'Non, nous ne faisons pas l’installation, mais nous pouvons vous recommander des professionnels partenaires certifiés dans votre région.'
      },
      {
        q: 'Puis-je avoir une fiche technique ou un manuel pour mes produits ?',
        a: 'Oui, chaque produit dispose d’une fiche technique téléchargeable. Si ce n’est pas le cas, contactez-nous et nous vous l’enverrons.'
      }
    ]
  },
  {
    category: 'Commande & Suivi',
    icon: <ClipboardList className="w-5 h-5 text-cyan-500" />,
    questions: [
      {
        q: 'Comment suivre ma commande ?',
        a: 'Une fois votre commande validée, vous recevrez un appel ou un message avec les détails de livraison. Vous pouvez aussi nous contacter à tout moment pour suivre l’état.'
      },
      {
        q: 'Est-ce que je peux commander par téléphone ou WhatsApp ?',
        a: 'Oui, vous pouvez passer vos commandes directement par WhatsApp au +212 661 06 74 91.'
      },
      {
        q: 'Y a-t-il un montant minimum de commande ?',
        a: 'Non, il n’y a pas de minimum. Cependant, pour les livraisons en dehors de Mohammedia, des frais peuvent s’appliquer selon le montant.'
      }
    ]
  },
  {
    category: 'Livraison',
    icon: <Truck className="w-5 h-5 text-blue-500" />,
    questions: [
      {
        q: 'Livrez-vous partout au Maroc ?',
        a: 'Oui, nous livrons dans toutes les villes du Maroc.'
      },
      {
        q: 'Quels sont les délais de livraison ?',
        a: 'La livraison est généralement assurée sous 24 à 72 heures ouvrables selon votre localisation.'
      },
      {
        q: 'Quels sont les frais de livraison ?',
        a: 'Les frais varient selon la ville et le volume de la commande. Ils seront affichés lors de la validation de la commande.'
      }
    ]
  },
  {
    category: 'Paiement',
    icon: <CreditCard className="w-5 h-5 text-green-500" />,
    questions: [
      {
        q: 'Quels moyens de paiement acceptez-vous ?',
        a: 'Nous acceptons les paiements à la livraison (cash) et par virement bancaire sur demande.'
      }
    ]
  },
  {
    category: 'Retours & Réclamations',
    icon: <RefreshCcw className="w-5 h-5 text-purple-500" />,
    questions: [
      {
        q: 'Puis-je retourner un produit défectueux ?',
        a: 'Oui. Vous avez jusqu’à 7 jours après réception pour signaler un produit défectueux.'
      },
      {
        q: 'Comment signaler un problème avec ma commande ?',
        a: 'Vous pouvez nous contacter directement via WhatsApp ou par téléphone pour une prise en charge rapide.'
      }
    ]
  },
  {
    category: 'Devis et Professionnels',
    icon: <FileText className="w-5 h-5 text-teal-500" />,
    questions: [
      {
        q: 'Puis-je demander un devis pour un chantier ou un projet ?',
        a: 'Oui, nous proposons des devis gratuits pour les projets professionnels ou personnels. Envoyez-nous votre liste de besoins ou parlez directement à un agent.'
      },
      {
        q: 'Proposez-vous des remises pour les professionnels ou grossistes ?',
        a: 'Oui. Contactez-nous pour des tarifs personnalisés si vous êtes électricien, entreprise, ou revendeur.'
      }
    ]
  },
  {
    category: 'Contact',
    icon: <Phone className="w-5 h-5 text-pink-500" />,
    questions: [
      {
        q: 'Je ne trouve pas ma réponse ici, que faire ?',
        a: 'Contactez-nous directement par téléphone au +212 661 06 74 91 ou via WhatsApp pour toute question ou assistance.'
      }
    ]
  }
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: number | null }>({});

  const handleToggle = (catIdx: number, qIdx: number) => {
    setOpen((prev) => ({ ...prev, [catIdx]: prev[catIdx] === qIdx ? null : qIdx }));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 flex items-center justify-center gap-2">
          <span role="img" aria-label="éclair">⚡</span> FAQ – Questions Fréquentes
        </h2>
        <div className="space-y-8">
          {faqData.map((cat, catIdx) => (
            <div key={cat.category} className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 px-6 pt-6 pb-2">
                {cat.icon}
                <h3 className="text-xl font-bold text-gray-700">{cat.category}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {cat.questions.map((q, qIdx) => (
                  <div key={q.q}>
                    <button
                      className="w-full text-left px-6 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex items-center justify-between group"
                      onClick={() => handleToggle(catIdx, qIdx)}
                      aria-expanded={open[catIdx] === qIdx}
                      aria-controls={`faq-${catIdx}-${qIdx}`}
                    >
                      <span className="font-medium text-gray-800 group-hover:text-yellow-600 transition-colors duration-200">
                        <span className="mr-2" role="img" aria-label="question">❓</span>{q.q}
                      </span>
                      <span className="ml-4 text-yellow-500 text-lg">{open[catIdx] === qIdx ? '–' : '+'}</span>
                    </button>
                    <div
                      id={`faq-${catIdx}-${qIdx}`}
                      className={`px-6 pb-4 text-gray-700 text-base transition-all duration-300 ${open[catIdx] === qIdx ? 'block' : 'hidden'}`}
                    >
                      <span className="mr-2" role="img" aria-label="réponse">✅</span>{q.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 