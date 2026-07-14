/**
 * Contenu centralisé du site — TOUT le texte vit ici.
 *
 * ⚠️ PLACEHOLDER : contenu provisoire rédigé en attendant les captures du
 * site Odoo actuel (tchauxdevant.odoo.com). À remplacer par les vrais textes,
 * coordonnées, tarifs et secteurs dès réception. Nom de l'entreprise à
 * confirmer (déduit du domaine).
 */

export const company = {
  name: "Tchaux Devant",
  tagline: "Déchetterie à domicile, déménagement, débarras et rénovation",
  region: "La Chaux-de-Fonds et environs",
  phone: "+41 00 000 00 00",
  email: "contact@tchauxdevant.ch",
  address: "La Chaux-de-Fonds, Suisse",
};

export type ServiceId =
  | "dechetterie-a-domicile"
  | "demenagement"
  | "debarras"
  | "renovation";

export interface Service {
  id: ServiceId;
  /** Les services vedettes ont un traitement visuel renforcé. */
  featured: boolean;
  title: string;
  shortTitle: string;
  hook: string;
  description: string;
  bullets: string[];
  cta: string;
}

export const services: Service[] = [
  {
    id: "dechetterie-a-domicile",
    featured: true,
    title: "Déchetterie à domicile",
    shortTitle: "Déchetterie",
    hook: "La déchetterie vient chez vous.",
    description:
      "Nous déposons un contenant adapté devant chez vous, vous le remplissez à votre rythme, nous l'enlevons et trions les déchets dans les filières officielles. Sans véhicule, sans file d'attente, sans manutention lourde.",
    bullets: [
      "Dépôt et enlèvement du contenant à la date convenue",
      "Tri et évacuation dans les filières agréées",
      "Adapté aux particuliers comme aux entreprises",
      "Tarif annoncé à l'avance, sans surprise",
    ],
    cta: "Réserver un passage",
  },
  {
    id: "demenagement",
    featured: true,
    title: "Déménagement & location de véhicule",
    shortTitle: "Déménagement",
    hook: "Avec équipe complète, ou juste le véhicule.",
    description:
      "Déménagement clé en main — emballage, transport, remontage — ou location d'un véhicule utilitaire avec chauffeur pour les transports ponctuels. Vous choisissez le niveau d'accompagnement.",
    bullets: [
      "Formule complète : emballage, chargement, transport, remontage",
      "Location de véhicule utilitaire avec chauffeur",
      "Devis fixé après visite ou photos, sans frais cachés",
      "Assurance transport incluse",
    ],
    cta: "Demander un devis",
  },
  {
    id: "debarras",
    featured: false,
    title: "Débarras",
    shortTitle: "Débarras",
    hook: "Appartements, caves, greniers, locaux.",
    description:
      "Nous vidons entièrement appartements, maisons, caves et locaux commerciaux. Les objets réutilisables sont valorisés, le reste est trié et évacué proprement. Remise des lieux propre en fin d'intervention.",
    bullets: [
      "Débarras complet ou partiel, y compris successions",
      "Valorisation des objets en bon état",
      "Locaux rendus propres et vides",
    ],
    cta: "Demander un devis",
  },
  {
    id: "renovation",
    featured: false,
    title: "Rénovation",
    shortTitle: "Rénovation",
    hook: "Remise en état après débarras ou avant remise des clés.",
    description:
      "Peinture, petites réparations, remise en état d'appartements avant location ou vente. Un seul interlocuteur du débarras à la rénovation.",
    bullets: [
      "Peinture et retouches",
      "Petites réparations et remise en état",
      "Coordination avec débarras et déménagement",
    ],
    cta: "Demander un devis",
  },
];

export const howItWorks = {
  title: "Comment ça marche ?",
  intro:
    "Un processus simple, identique pour tous nos services : vous décrivez votre besoin, nous fixons un prix, nous intervenons.",
  steps: [
    {
      title: "Décrivez votre besoin",
      text: "Par téléphone, WhatsApp ou via le formulaire. Quelques photos suffisent dans la plupart des cas.",
    },
    {
      title: "Recevez un prix ferme",
      text: "Devis clair sous 24 h ouvrées. Le prix annoncé est le prix payé.",
    },
    {
      title: "Nous intervenons",
      text: "À la date convenue, avec le matériel et l'équipe adaptés. Vous validez le résultat sur place.",
    },
  ],
};

export interface ShopProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  unit?: string;
}

/** Boutique — front uniquement pour la maquette, backend à venir. */
export const shop = {
  title: "Notre boutique",
  intro:
    "Cartons, matériel d'emballage et prestations à réserver directement en ligne.",
  products: [
    {
      id: "carton-standard",
      name: "Carton de déménagement standard",
      description: "Double cannelure, 60 × 40 × 40 cm.",
      price: "CHF 3.50",
      unit: "pièce",
    },
    {
      id: "carton-livres",
      name: "Carton livres",
      description: "Renforcé, 40 × 30 × 30 cm.",
      price: "CHF 2.90",
      unit: "pièce",
    },
    {
      id: "kit-demenagement",
      name: "Kit déménagement 2 pièces",
      description: "20 cartons, adhésif, papier bulle, marqueur.",
      price: "CHF 89.00",
      unit: "kit",
    },
    {
      id: "housse-matelas",
      name: "Housse de matelas",
      description: "Protection plastique 90–160 cm.",
      price: "CHF 12.00",
      unit: "pièce",
    },
  ] satisfies ShopProduct[],
};

export const realisations = {
  title: "Nos réalisations",
  intro:
    "Un aperçu de chantiers récents — débarras, déménagements et évacuations réalisés dans la région.",
  items: [
    {
      title: "Débarras complet d'un appartement de 4 pièces",
      place: "La Chaux-de-Fonds",
      tag: "Débarras",
    },
    {
      title: "Déménagement d'une famille, 3 pièces",
      place: "Le Locle → Neuchâtel",
      tag: "Déménagement",
    },
    {
      title: "Évacuation de déchets de chantier",
      place: "Saint-Imier",
      tag: "Déchetterie à domicile",
    },
    {
      title: "Remise en état avant relocation",
      place: "La Chaux-de-Fonds",
      tag: "Rénovation",
    },
  ],
};

export const methode = {
  title: "Notre méthode",
  subtitle: "Un déménagement préparé, pas improvisé",
  intro:
    "Chaque déménagement suit la même méthode éprouvée, du premier contact à la remise des clés.",
  steps: [
    {
      title: "Visite ou évaluation photo",
      text: "Nous évaluons le volume, les accès et les objets sensibles pour dimensionner l'équipe et le véhicule.",
    },
    {
      title: "Planification",
      text: "Date fixée, autorisation de stationnement si nécessaire, matériel d'emballage livré à l'avance.",
    },
    {
      title: "Jour J",
      text: "Protection des sols et cadres de portes, emballage méthodique, chargement sécurisé.",
    },
    {
      title: "Livraison et remontage",
      text: "Meubles remontés, cartons déposés pièce par pièce selon votre plan.",
    },
    {
      title: "Contrôle final",
      text: "Tour des lieux ensemble, rien n'est laissé au hasard avant notre départ.",
    },
  ],
};

export const secteurs = {
  title: "Nos secteurs géographiques",
  intro:
    "Basés à La Chaux-de-Fonds, nous intervenons dans tout l'Arc jurassien et au-delà pour les déménagements.",
  zones: [
    { name: "La Chaux-de-Fonds", note: "Siège — intervention sous 48 h" },
    { name: "Le Locle", note: "Intervention sous 48 h" },
    { name: "Neuchâtel et Littoral", note: "Toutes prestations" },
    { name: "Vallon de Saint-Imier", note: "Toutes prestations" },
    { name: "Jura & Jura bernois", note: "Toutes prestations" },
    { name: "Toute la Suisse romande", note: "Déménagements uniquement" },
  ],
};

export const contact = {
  title: "Parlons de votre projet",
  intro:
    "Réponse sous 24 h ouvrées. Devis gratuit et sans engagement.",
  primaryCta: "Demander un devis gratuit",
};
