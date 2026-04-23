/**
 * Signal Conso campaigns.
 *
 * Add a new object to this array to create a new campaign page at
 * /outil-signalement/[slug] and automatically list it in the navbar dropdown.
 */

export type Campaign = {
  /** URL segment: /outil-signalement/[slug] */
  slug: string;
  /** Short label shown in the navbar dropdown */
  navLabel: string;
  /** Full product name as shown on the packaging */
  productName: string;
  /** Brand / manufacturer name */
  brand: string;
  /** EAN barcode printed on the product */
  barcode: string;
  /** H1 displayed on the campaign page */
  campaignTitle: string;
  /** Introductory paragraph explaining why this campaign exists */
  campaignIntro: string;
  /**
   * Photo of the product front (packaging with the false claim visible).
   * Place the file in /public/campaigns/[slug]/ and reference it here.
   * e.g. "/campaigns/mon-produit/recto.jpg"
   */
  photoProduct?: string;
  /**
   * Photo of the ingredient list.
   * e.g. "/campaigns/mon-produit/ingredients.jpg"
   */
  photoIngredients?: string;
  /**
   * The exact text users must copy-paste into Signal Conso.
   * No placeholders — write the final, ready-to-use message.
   */
  campaignText: string;
};

export const campaigns: Campaign[] = [
  {
    slug: "cordons-bleus-le-gaulois",
    navLabel: "Cordons bleus",
    productName: "Cordons bleus",
    brand: "Le Gaulois",
    barcode: "3266980038991",
    campaignTitle: "Signalez les Cordons Bleus 'Végétal' de la marque Le Gaulois",
    campaignIntro:
      "Le packaging mentionne 'végétal', pourtant le produit contient des oeufs et du lait, ce qui est trompeur.",
    photoProduct: "/campaigns/cordons-bleus/recto.png",
    photoIngredients: "/campaigns/cordons-bleus/ingredients.jpg",
    campaignText: `Bonjour,

Je souhaite signaler le produit « Cordons bleus végétal » de la marque Le Gaulois (code-barres : 3266980038991), disponible dans de nombreux magasins.
Ce produit affiche la mention 'Végétal'. Pourtant il contient du lait et des œufs : des ingrédients d'origine animale incompatible avec cette allégation.
Cette mention trompeuse peut induire en erreur les consommateurs cherchant à éviter les produits d'origine animale.

Pièces jointes : photo du recto du produit, photo de la liste des ingrédients.

Cordialement`,
  },
];
