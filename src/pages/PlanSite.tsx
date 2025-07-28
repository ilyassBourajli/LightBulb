import React from 'react';
import { Link } from 'react-router-dom';

const PlanSite = () => (
  <div className="max-w-3xl mx-auto py-16 px-4 sm:px-8">
    <h1 className="text-3xl font-bold mb-6 text-primary">Plan du site</h1>
    <p className="mb-8 text-gray-700">
      Retrouvez ici l'ensemble des pages et sections principales du site LIGHT
      BULB pour une navigation facilitée.
    </p>
    <ul className="space-y-4 text-lg">
      <li>
        <Link to="/" className="text-blue-700 hover:underline">
          Accueil
        </Link>
      </li>
      <li>
        <Link to="/a-propos" className="text-blue-700 hover:underline">
          À propos
        </Link>
      </li>
      <li>
        <Link to="/services" className="text-blue-700 hover:underline">
          Services
        </Link>
      </li>
      <li>
        <Link to="/realisations" className="text-blue-700 hover:underline">
          Réalisations
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-blue-700 hover:underline">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/mentions-legales" className="text-blue-700 hover:underline">
          Mentions légales
        </Link>
      </li>
      {/* Add more links as needed */}
    </ul>
    <div className="mt-10 text-sm text-gray-500">
      <p>
        Vous pouvez également accéder à nos réseaux sociaux et à notre
        newsletter depuis le pied de page.
      </p>
    </div>
  </div>
);

export default PlanSite;
