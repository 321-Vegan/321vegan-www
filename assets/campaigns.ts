import { CampaignDataType } from "@/types/definitions";
import cordonsBleusRecto from "./campaigns/cordons-bleus/recto.png";
import cordonsBleusIngredients from "./campaigns/cordons-bleus/ingredients.png";

/**
 * Signal Conso campaigns.
 *
 * Add a new object to this array to create a new campaign page at
 * /outil-signalement/[slug] and automatically list it in the navbar dropdown.
 */

export const campaigns: CampaignDataType[] = [
  {
    slug: "cordons-bleus-le-gaulois",
    navLabel: "Cordons bleus",
    productName: "Cordons bleus",
    brand: "Le Gaulois",
    barcode: "3266980038991",
    campaignTitle:
      "Signalez les Cordons Bleus &laquo;&nbsp;Végétal&nbsp;&raquo; de la marque Le Gaulois",
    campaignIntro:
      "Le packaging mentionne &laquo;&nbsp;végétal&nbsp;&raquo;, pourtant le produit contient des oeufs et du lait, ce qui est trompeur.",
    photoProduct: cordonsBleusRecto,
    photoIngredients: cordonsBleusIngredients,
    campaignText: `Bonjour,\n\nJe souhaite signaler le produit &laquo;&nbsp;Cordons bleus végétal&nbsp;&raquo; de la marque Le Gaulois (code-barres&nbsp;: 3266980038991), disponible dans de nombreux magasins.\nCe produit affiche la mention &laquo;&nbsp;Végétal&nbsp;&raquo;. Pourtant il contient du lait et des œufs&nbsp;: des ingrédients d'origine animale incompatibles avec cette allégation.\nCette mention trompeuse peut induire en erreur les consommateurs et consommatrices cherchant à éviter les produits d'origine animale.\n\nCette pratique est susceptible de constituer une pratique commerciale trompeuse au sens de l'article L. 121-2, 2°, b) du Code de la consommation, en ce qu'elle repose sur une présentation de nature à induire en erreur sur une caractéristique essentielle du produit&nbsp;: sa composition.\n\nPièces jointes&nbsp;: photo du recto du produit, photo de la liste des ingrédients.\n\nCordialement`,
  },
];
