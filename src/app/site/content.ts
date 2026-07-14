/**
 * Contenu centralisé du site — TOUT le texte vit ici.
 * Textes repris du site Odoo actuel (tchauxdevant.odoo.com), captures du 14.07.
 */

export const company = {
  name: "T'chaux Devant",
  tagline:
    "Votre partenaire local pour le débarras, le déménagement, la rénovation, le nettoyage et la déchetterie à domicile",
  region: "La Chaux-de-Fonds et canton de Neuchâtel",
  phone: "+41 76 329 16 19",
  email: "tchauxdevant@gmail.ch",
  address: "Rue Sombaille 5, 2300 La Chaux-de-Fonds",
  website: "www.tchauxdevant.ch",
  about:
    "Nous sommes une équipe de passionnés dont le but est d'améliorer la vie de nos clients grâce à des services de qualité.",
};

export type ServiceId =
  | "dechetterie-a-domicile"
  | "demenagement"
  | "debarras"
  | "renovation";

export interface DetailSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Service {
  id: ServiceId;
  /** Les services vedettes ont un traitement visuel renforcé. */
  featured: boolean;
  title: string;
  shortTitle: string;
  hook: string;
  description: string;
  bullets: string[];
  priceNote?: string;
  cta: string;
  detail: {
    heroTitle: string;
    heroSubtitle: string;
    intro: string[];
    sections: DetailSection[];
    faq?: { q: string; a: string }[];
  };
}

const ZONES_DECHETTERIE = [
  "La Chaux-de-Fonds",
  "Le Locle",
  "Neuchâtel",
  "Val-de-Ruz",
  "Val-de-Travers",
  "Boudry",
  "Littoral neuchâtelois",
];

export const services: Service[] = [
  {
    id: "dechetterie-a-domicile",
    featured: true,
    title: "Déchetterie à domicile",
    shortTitle: "Déchetterie",
    hook: "Plus besoin d'aller à la déchetterie, nous venons chez vous !",
    description:
      "Vous avez des encombrants, des meubles, des cartons, des déchets verts, des gravats ou simplement un véhicule trop petit pour tout transporter ? Nous nous déplaçons à votre domicile ou dans vos locaux pour récupérer les déchets, les charger et les acheminer vers les filières de recyclage et de traitement adaptées.",
    bullets: [
      "Nous nous déplaçons directement chez vous",
      "Plus besoin de louer une remorque ou un utilitaire",
      "Chargement effectué par notre équipe",
      "Tri des déchets pour favoriser le recyclage",
      "Intervention rapide, devis gratuit",
    ],
    priceNote: "Passage unique CHF 27.– · Abonnement dès CHF 25.–",
    cta: "Réserver un passage",
    detail: {
      heroTitle: "Déchetterie à domicile à La Chaux-de-Fonds",
      heroSubtitle: "Plus besoin d'aller à la déchetterie, nous venons chez vous !",
      intro: [
        "Vous avez des encombrants, des meubles, des cartons, des déchets verts, des gravats ou simplement un véhicule trop petit pour tout transporter ?",
        "Avec T'chaux Devant, la déchetterie vient directement chez vous. Nous nous déplaçons à votre domicile ou dans vos locaux pour récupérer les déchets, les charger et les acheminer vers les filières de recyclage et de traitement adaptées. Vous gagnez du temps, évitez les trajets et n'avez aucun effort à fournir.",
      ],
      sections: [
        {
          title: "Pour les particuliers",
          paragraphs: [
            "Vous déménagez ? Vous videz une cave ? Vous rénovez votre logement ? Vous avez accumulé des objets dont vous souhaitez vous débarrasser ?",
            "Notre équipe intervient rapidement afin de récupérer vos déchets directement à votre domicile.",
          ],
        },
        {
          title: "Pour les professionnels",
          paragraphs: [
            "Nous proposons également des solutions adaptées aux entreprises. Restaurants, commerces, bureaux, artisans, régies immobilières ou industries peuvent bénéficier de collectes ponctuelles ou régulières selon leurs besoins.",
            "Nous proposons également des abonnements de collecte afin de simplifier la gestion quotidienne de vos déchets.",
          ],
        },
        {
          title: "Une solution écoresponsable",
          paragraphs: [
            "Chez T'chaux Devant, nous privilégions le tri, le recyclage et la valorisation des matériaux.",
            "Chaque fois que cela est possible, les objets sont réemployés ou déposés dans les filières de recyclage adaptées afin de limiter l'impact sur l'environnement.",
          ],
        },
        {
          title: "Quels déchets pouvons-nous évacuer ?",
          paragraphs: [
            "Nous prenons en charge la plupart des déchets non dangereux, notamment :",
          ],
          bullets: [
            "Meubles",
            "Canapés",
            "Lits",
            "Matelas",
            "Armoires",
            "Électroménager",
            "Cartons",
            "Plastiques",
            "Bois",
            "Métaux",
            "Déchets verts",
            "Encombrants",
            "Déchets de rénovation",
            "Gravats (selon quantité)",
            "Caves et greniers à vider",
            "Débarras de garages",
            "Déchets de bureaux et commerces",
          ],
        },
        {
          title: "Où intervenons-nous ?",
          paragraphs: ["Nous intervenons notamment à :"],
          bullets: [...ZONES_DECHETTERIE],
        },
        {
          title: "Pourquoi faire appel à T'chaux Devant ?",
          paragraphs: [
            "Entreprise locale basée à la Rue Sombaille 5 à La Chaux-de-Fonds, nous mettons un point d'honneur à offrir un service rapide, professionnel et transparent.",
            "Notre objectif est simple : vous simplifier la vie. Grâce à notre concept de déchetterie à domicile, vous n'avez plus besoin de perdre votre temps sur les routes ou dans les files d'attente des centres de collecte. On vient chez vous !",
          ],
        },
      ],
      faq: [
        {
          q: "Quels déchets acceptez-vous ?",
          a: "La plupart des déchets non dangereux : meubles, électroménager, cartons, bois, métaux, déchets verts, encombrants, déchets de rénovation, gravats selon quantité… Pour certains déchets spécifiques ou réglementés, nous vous orientons vers la solution adaptée.",
        },
        {
          q: "Combien coûte une déchetterie à domicile ?",
          a: "Le passage unique est à CHF 27.–. L'abonnement, plus économique, démarre à CHF 25.– par passage (1 ou 2 passages par mois). Pour un débarras complet, le prix est établi sur demande — devis gratuit.",
        },
        {
          q: "Intervenez-vous en dehors de La Chaux-de-Fonds ?",
          a: "Oui : Le Locle, Neuchâtel, Val-de-Ruz, Val-de-Travers, Boudry et le Littoral neuchâtelois. Pour toute autre localité, contactez-nous.",
        },
      ],
    },
  },
  {
    id: "demenagement",
    featured: true,
    title: "Déménagement & location de véhicule",
    shortTitle: "Déménagement",
    hook: "Un déménagement simple, rapide et sans stress",
    description:
      "T'chaux Devant vous accompagne à chaque étape de votre déménagement, que vous soyez un particulier ou un professionnel. Notre équipe prend en charge le chargement, le transport et le déchargement de vos biens avec soin et professionnalisme — équipe complète ou véhicule avec chauffeur, selon vos besoins.",
    bullets: [
      "Particuliers : maisons, appartements, studios, villas",
      "Entreprises : bureaux, commerces, ateliers, cabinets, entrepôts",
      "Transport sécurisé, personnel soigneux",
      "Devis gratuit, clair et sans engagement",
    ],
    cta: "Demander un devis",
    detail: {
      heroTitle: "Déménagement à La Chaux-de-Fonds – Particuliers et Professionnels",
      heroSubtitle: "Un déménagement simple, rapide et sans stress",
      intro: [
        "Vous recherchez une entreprise de déménagement à La Chaux-de-Fonds ou dans le canton de Neuchâtel ?",
        "T'chaux Devant vous accompagne à chaque étape de votre déménagement, que vous soyez un particulier ou un professionnel. Notre équipe prend en charge le chargement, le transport et le déchargement de vos biens avec soin et professionnalisme.",
        "Notre priorité est de vous offrir un déménagement efficace, sécurisé et adapté à vos besoins.",
      ],
      sections: [
        {
          title: "Déménagement de particuliers",
          paragraphs: [
            "Nous transportons votre mobilier, vos cartons, vos appareils électroménagers et vos objets fragiles avec le plus grand soin.",
          ],
          bullets: ["Maisons", "Appartements", "Studios", "Villas"],
        },
        {
          title: "Déménagement d'entreprises",
          paragraphs: [
            "Nous accompagnons également les professionnels dans le transfert de leurs locaux. Nous planifions chaque intervention afin de limiter au maximum l'interruption de votre activité.",
          ],
          bullets: ["Bureaux", "Commerces", "Ateliers", "Cabinets", "Entrepôts"],
        },
        {
          title: "Services complémentaires",
          paragraphs: [
            "Pour vous simplifier encore davantage la vie, nous proposons également :",
          ],
          bullets: [
            "Débarras avant ou après le déménagement",
            "Déchetterie à domicile",
            "Nettoyage de fin de bail",
            "Petits travaux de rénovation",
            "Évacuation d'encombrants",
            "Collecte de déchets pour entreprises",
          ],
        },
        {
          title: "Pourquoi choisir T'chaux Devant ?",
          bullets: [
            "Devis gratuit",
            "Intervention rapide",
            "Entreprise locale",
            "Transport sécurisé",
            "Personnel soigneux",
            "Service flexible",
            "Tarifs transparents",
            "Une seule entreprise pour plusieurs services",
          ],
        },
        {
          title: "Combien coûte un déménagement ?",
          paragraphs: [
            "Chaque déménagement est différent. Le tarif dépend notamment :",
          ],
          bullets: [
            "Du volume à transporter",
            "De la distance",
            "De l'accessibilité des logements",
            "De l'étage",
            "De la présence ou non d'un ascenseur",
            "Des prestations souhaitées",
          ],
        },
        {
          title: "Une entreprise locale à votre service",
          paragraphs: [
            "Basée à la Rue Sombaille 5 à La Chaux-de-Fonds, T'chaux Devant accompagne chaque année de nombreux particuliers et professionnels dans leurs projets de déménagement.",
            "Notre objectif est de vous faire gagner du temps tout en garantissant un transport fiable et soigné de vos biens. On vient chez vous !",
          ],
        },
      ],
      faq: [
        {
          q: "Proposez-vous la location de véhicule seule ?",
          a: "Oui — si vous préférez déménager vous-même, nous proposons le véhicule utilitaire avec chauffeur pour vos transports ponctuels. Contactez-nous pour connaître les disponibilités.",
        },
        {
          q: "Dans quelles régions déménagez-vous ?",
          a: "La Chaux-de-Fonds, Le Locle, Neuchâtel, Val-de-Ruz, Val-de-Travers, Boudry, le Littoral neuchâtelois et Berne (sur demande). Pour un déménagement dans une autre région de Suisse, contactez-nous pour un devis personnalisé.",
        },
      ],
    },
  },
  {
    id: "debarras",
    featured: false,
    title: "Débarras",
    shortTitle: "Débarras",
    hook: "À partir de 100.– · Votre devis en un appel",
    description:
      "Un service éco-responsable pour vider caves, greniers, garages, appartements et locaux professionnels. Les objets réutilisables sont valorisés, le reste est trié et acheminé vers les filières de recyclage adaptées.",
    bullets: [
      "Débarras avant ou après un déménagement",
      "Caves, greniers et garages à vider",
      "Valorisation et recyclage des matériaux",
    ],
    priceNote: "À partir de CHF 100.–",
    cta: "Votre devis en un appel",
    detail: {
      heroTitle: "Débarras à La Chaux-de-Fonds",
      heroSubtitle: "Service éco-responsable — à partir de 100.–, votre devis en un appel",
      intro: [
        "Vous videz une cave, un grenier, un garage, un appartement ou des locaux professionnels ? Notre équipe s'occupe de tout : tri, chargement et évacuation.",
        "Chez T'chaux Devant, nous privilégions le tri, le recyclage et la valorisation des matériaux. Chaque fois que cela est possible, les objets sont réemployés ou déposés dans les filières de recyclage adaptées afin de limiter l'impact sur l'environnement.",
      ],
      sections: [
        {
          title: "Ce que nous débarrassons",
          bullets: [
            "Appartements et maisons",
            "Caves et greniers",
            "Garages",
            "Bureaux et commerces",
            "Encombrants et électroménager",
          ],
        },
        {
          title: "Un seul interlocuteur",
          paragraphs: [
            "Le débarras se combine naturellement avec nos autres services : déchetterie à domicile pour les déchets triés, nettoyage de fin de bail, petits travaux de rénovation avant remise des clés. Une seule entreprise pour plusieurs services.",
          ],
        },
      ],
      faq: [
        {
          q: "Combien coûte un débarras ?",
          a: "À partir de CHF 100.–, selon le volume et l'accessibilité. Le devis se fait en un appel : décrivez-nous ce qu'il y a à débarrasser, nous vous annonçons un prix clair.",
        },
      ],
    },
  },
  {
    id: "renovation",
    featured: false,
    title: "Rénovation",
    shortTitle: "Rénovation",
    hook: "Envie d'un rafraîchissement ?",
    description:
      "Notre équipe de professionnels est à votre disposition pour vous guider pas à pas dans l'aménagement de votre intérieur et réaliser vos désirs.",
    bullets: [
      "Aménagement et rafraîchissement d'intérieurs",
      "Petits travaux avant remise des clés",
      "Coordination avec débarras et déménagement",
    ],
    cta: "Appelez-nous",
    detail: {
      heroTitle: "Rénovation",
      heroSubtitle: "Envie d'un rafraîchissement ?",
      intro: [
        "Notre équipe est à votre disposition pour vous guider pas à pas dans l'aménagement de votre intérieur et réaliser vos désirs.",
        "Contactez-nous pour en savoir plus.",
      ],
      sections: [
        {
          title: "Nos interventions",
          bullets: [
            "Rafraîchissement et aménagement d'intérieurs",
            "Rénovation de façades",
            "Aménagements extérieurs en pierre naturelle",
            "Petits travaux de rénovation avant location ou vente",
          ],
        },
      ],
    },
  },
];

export const howItWorks = {
  title: "Comment ça marche ?",
  intro:
    "Trois étapes, zéro contrainte : vous triez, on passe chez vous, on s'occupe du reste.",
  steps: [
    {
      sticker: ["Vous", "triez"],
      title: "Vous triez",
      text: "Nous avons des bacs à disposition pour vous faciliter la tâche : papier, verre, carton, alu.",
    },
    {
      sticker: ["On passe", "chez vous"],
      title: "On passe chez vous",
      text: "À la date convenue, notre équipe vient sur place récupérer vos bacs et vos encombrants.",
    },
    {
      sticker: ["On s'occupe", "du reste"],
      title: "On s'occupe du reste",
      text: "Nous acheminons le tout vers les filières de recyclage et de traitement adaptées.",
    },
  ],
};

export interface ShopProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  priceDetail?: string;
  badge?: string;
}

/** Offres à réserver en ligne — front uniquement pour la maquette, backend à venir. */
export const shop = {
  title: "Réservez votre passage",
  intro:
    "Choisissez la formule qui vous convient — simple, rapide et éco-responsable.",
  products: [
    {
      id: "passage-unique",
      name: "Passage unique",
      description:
        "Un passage ponctuel à domicile : on récupère vos déchets triés et vos encombrants.",
      price: "CHF 27.–",
      priceDetail: "par passage",
    },
    {
      id: "abonnement",
      name: "Abonnement à la carte",
      description:
        "Un passage régulier adapté à vos besoins, 1 ou 2 passages par mois. Zéro contrainte, zéro stress.",
      price: "dès CHF 25.–",
      priceDetail: "par passage",
      badge: "Plus économique",
    },
    {
      id: "debarras",
      name: "Débarras",
      description:
        "Évacuation complète de caves, greniers, garages ou logements. Prix selon volume.",
      price: "Sur demande",
      priceDetail: "à partir de CHF 100.–",
    },
  ] satisfies ShopProduct[],
};

export const realisations = {
  title: "Nos réalisations",
  intro:
    "Un aperçu de chantiers récents réalisés par notre équipe dans la région.",
  items: [
    {
      title: "Aménagement d'intérieur avec éclairage sur mesure",
      place: "La Chaux-de-Fonds",
      tag: "Rénovation",
    },
    {
      title: "Rénovation d'une façade en pierre",
      place: "Canton de Neuchâtel",
      tag: "Rénovation",
    },
    {
      title: "Aménagement extérieur en pierre naturelle",
      place: "Canton de Neuchâtel",
      tag: "Rénovation",
    },
    {
      title: "Débarras complet et remise en état",
      place: "La Chaux-de-Fonds",
      tag: "Débarras",
    },
  ],
};

export const methode = {
  title: "Notre méthode",
  subtitle: "Un déménagement préparé, pas improvisé",
  intro:
    "Chaque déménagement suit la même méthode, du premier contact à la remise des clés.",
  steps: [
    {
      title: "Demande de devis",
      text: "Nous échangeons avec vous afin d'évaluer précisément vos besoins.",
    },
    {
      title: "Organisation",
      text: "Nous planifions ensemble la date et les modalités du déménagement.",
    },
    {
      title: "Intervention",
      text: "Notre équipe protège votre mobilier, charge le véhicule et transporte vos biens jusqu'à votre nouvelle adresse.",
    },
    {
      title: "Installation",
      text: "Nous déchargeons vos affaires avec soin et les déposons aux emplacements souhaités.",
    },
  ],
};

export const secteurs = {
  title: "Nos secteurs géographiques",
  intro:
    "Basés à La Chaux-de-Fonds, nous intervenons dans tout le canton de Neuchâtel — et jusqu'à Berne sur demande pour les déménagements.",
  zones: [
    { name: "La Chaux-de-Fonds", note: "Siège — Rue Sombaille 5" },
    { name: "Le Locle", note: "Toutes prestations" },
    { name: "Neuchâtel", note: "Toutes prestations" },
    { name: "Val-de-Ruz", note: "Toutes prestations" },
    { name: "Val-de-Travers", note: "Toutes prestations" },
    { name: "Boudry", note: "Toutes prestations" },
    { name: "Littoral neuchâtelois", note: "Toutes prestations" },
    { name: "Berne", note: "Déménagements, sur demande" },
  ],
  outro:
    "Pour toute autre localité ou un déménagement dans une autre région de Suisse, contactez-nous afin d'obtenir un devis personnalisé.",
};

export const contact = {
  title: "Demandez votre devis gratuit",
  intro:
    "Vous souhaitez évacuer des déchets, déménager ou rénover ? Contactez-nous dès aujourd'hui — devis gratuit, clair et sans engagement.",
  primaryCta: "Demander un devis gratuit",
};
