import {
  AppStoreLinksType,
  ContributionDataType,
  CosmeticsLabelDataType,
  FaqDataType,
  FeatureDataType,
  OwnerType,
  SitmapDataType,
  SocialNetworkLinksType,
  SourceDataType,
  TestimonialDataType,
} from "@/types/definitions";
import mockupImpact from "./mockup-impact.webp";
import mockupPartners from "./mockup-partners.webp";
import mockupScan from "./mockup-scan.webp";
import mockupAdditives from "./mockup-additives.webp";
import mockupCosmetics from "./mockup-cosmetics.webp";
import chooseCF from "./labels/label-choose-cruelty-free.webp";
import eveVegan from "./labels/label-eve-vegan.webp";
import ihtk from "./labels/label-ihtk.webp";
import leapingBunny from "./labels/label-leaping-bunny.webp";
import petaVeganCF from "./labels/label-peta-cf-and-vegan.webp";
import petaCF from "./labels/label-peta-cruelty-free.webp";
import vLabel from "./labels/label-v-label.webp";
import veganSociety from "./labels/label-vegan-society.webp";
import oneVoiceT from "./labels/label-one-voice-t.webp";
import oneVoiceC from "./labels/label-one-voice-c.webp";

export const mockups = {
  mockupImpact,
  mockupPartners,
  mockupScan,
  mockupAdditives,
  mockupCosmetics,
};

export const sitemapData: SitmapDataType[] = [
  { url: "/a-propos", label: "À propos", category: "general" },
  {
    url: "/scanner-vegan",
    label: "Scan de codes-barres",
    category: "services",
  },
  {
    url: "/verification-d-additifs",
    label: "Vérification d'additifs",
    category: "services",
  },
  {
    url: "/verification-de-cosmetiques",
    label: "Vérification de cosmétiques",
    category: "services",
  },
  { url: "/suivi-d-impact", label: "Suivi d'impact", category: "services" },
  { url: "/partenaires", label: "Partenaires", category: "services" },
  {
    url: "/outil-signalement",
    label: "Outil de signalement",
    category: "services",
  },
  { url: "/contact", label: "Contact", category: "support" },
  {
    url: "/politique-de-confidentialite",
    label: "Politique de confidentialité",
    category: "support",
  },
  { url: "/mentions-legales", label: "Mentions légales", category: "support" },
  { url: "/#faqs", label: "FAQs", category: "general" },
  { url: "/#contributions", label: "Nous rejoindre", category: "general" },
  { url: "/#testimonials", label: "Témoignages", category: "general" },
  {
    url: "/verification-d-additifs#additives",
    label: "Liste des additifs",
    category: "resources",
  },
  {
    url: "/verification-de-cosmetiques#cosmetics-labels",
    label: "Comparatif des labels",
    category: "resources",
  },
  {
    url: "/partenaires#discounts",
    label: "Codes promos",
    category: "resources",
  },
  { url: "/sources", label: "Sources", category: "resources" },
];

export const owner: OwnerType = {
  name: process.env.NEXT_PUBLIC_OWNER_NAME ?? "",
  email: process.env.NEXT_PUBLIC_OWNER_EMAIL ?? "",
  address: process.env.NEXT_PUBLIC_OWNER_ADDRESS ?? "",
  website: process.env.NEXT_PUBLIC_OWNER_WEBSITE ?? "",
  webhosting: process.env.NEXT_PUBLIC_OWNER_WEBHOSTING ?? "",
};

export const appStoreLinks: AppStoreLinksType = {
  apple: process.env.NEXT_PUBLIC_APPLE_LINK ?? "",
  google: process.env.NEXT_PUBLIC_GOOGLE_LINK ?? "",
};

export const socialNetworkLinks: SocialNetworkLinksType = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_LINK ?? "",
  discord: process.env.NEXT_PUBLIC_DISCORD_LINK ?? "",
  github: process.env.NEXT_PUBLIC_GITHUB_LINK ?? "",
  buymeacoffee: process.env.NEXT_PUBLIC_BUYMEACOFFE_LINK ?? "",
};

export const featuresData: FeatureDataType[] = [
  {
    title: "Scanner de codes-barres ultra-rapide",
    icon: "scan-barcode",
    bgImage: mockupScan,
    link: "/scanner-vegan",
    description:
      "<strong>Scannez les produits et obtenez des résultats immédiats</strong>, même sans connexion internet. <strong>Idéal pour vos courses, même dans les zones sans réseau&nbsp;!</strong>",
  },
  {
    title: "Vérification des additifs",
    icon: "flask-conical",
    bgImage: mockupAdditives,
    link: "/verification-d-additifs",
    description:
      "<strong>Consultez rapidement si un additif est végétalien</strong> grâce à notre base de données d'additifs.",
  },
  {
    title: "Vérification des cosmétiques",
    icon: "rabbit",
    bgImage: mockupCosmetics,
    link: "/verification-de-cosmetiques",
    description:
      "<strong>Trouvez facilement une marque de cosmétique végane ET cruelty-free</strong> grâce à notre base de données cosmétiques.",
  },
  {
    title: "Suivi de votre impact",
    icon: "activity",
    bgImage: mockupImpact,
    link: "/suivi-d-impact",
    description:
      "Visualisez <strong>combien d'animaux vous auriez consommé sans être végane</strong>, <strong>combien de CO₂ vous avez évité d'émettre</strong>, <strong>combien de mètres carrés de forêt ont été préservés</strong> et <strong>combien de litres d'eau vous avez économisés depuis que vous avez adopté un mode de vie végane</strong>.",
  },
  {
    title: "Réductions auprès de nos partenaires",
    icon: "badge-euro",
    bgImage: mockupPartners,
    link: "/partenaires",
    description:
      "Avec les codes promos, vous <strong>bénéficiez de réductions lors de vos achats dans les boutiques en ligne de nos partenaires</strong>.",
  },
];

export const contributionsData: ContributionDataType[] = [
  {
    icon: "scan-barcode",
    title: "Suggérer des produits",
    description:
      "Si un produit n'est pas encore référencé, vous pouvez suggérer son ajout pour <strong>enrichir notre base de données et aider la communauté à identifier les produits qui sont vegan</strong>.",
  },
  {
    icon: "vegan",
    title: "Vérifier les produits",
    description:
      "Pour garantir des données fiables et à jour, <strong>chaque produit est vérifié par des personnes</strong> comme vous, qui rejoignent la communauté pour contacter les marques si nécessaire.",
  },
  {
    icon: "code-xml",
    title: "Développer l'app",
    description:
      "321 Vegan est <strong>un projet open-source : tout le monde peut contribuer</strong> sur GitHub, que ce soit pour l'application mobile, ce site web ou encore l'outil de vérification des produits.",
  },
  {
    icon: "euro",
    title: "Faire un don",
    description:
      "Soutenez ce <strong>projet 100% indépendant, gratuit, sans pub et militant</strong>. Vos dons servent à couvrir les frais liés à la distribution de l'application et à son hébergement.",
  },
];

export const testimonialData: TestimonialDataType[] = [
  {
    username: "Alexandre Bdrl",
    date: "24/07/2025",
    rate: 5,
    title: "App indispensable",
    comment:
      "Appli faites et entretenue avec attention par un.e végan.e pour les végan.e.s tout ça de manière éthique et méticuleuse. Je recommande aussi pour les personnes végétariennes, fléxitariennes et curieuses ! (D’ailleurs très pratique pour mes proches non végan.e.s qui veulent acheter des produits que je pourrais manger sans se perdre dans les compositions et additifs) Super utile merci beaucoup! 🫶🏻",
  },
  {
    username: "Violette Viette",
    date: "17/10/2024",
    rate: 5,
    title: "Un banger",
    comment:
      "Un incontournable car pas de réseau dans la plupart des magasins et le fait que la base de données soit collaborative pour l’agrandir est super ! J’utilise encore plus la recherche des additifs E qui est super rapide",
  },
  {
    username: "Anawlo",
    date: "19/06/2025",
    rate: 5,
    title: "Super application",
    comment:
      "Super application ! 321 Vegan m’aide énormément à faire mes courses et à trouver des produits respectueux. J’adore voir combien d’animaux j’ai sauvé chaque matin. J’aime le format de l’application, tout est simple, pratique et compréhensible. Je recommande à 100 % cette application !",
  },
  {
    username: "Takiedu75",
    date: "21/04/2025",
    rate: 5,
    title: "Une appli au top ! 🌱",
    comment:
      "Vraiment une application incroyable qui change le quotidien des vegans, perso elle m’est d’une grande utilité quand je fais mes courses et c’est normal que tout ne soit pas encore répertorié, les usagers mettent aussi la main à la pâte pour aider à fournir des informations c’est aussi ce qui rend l’appli si intéressante je trouve 🙏🏻 Merci encore 321 Vegan 👌🏻🌱",
  },
  {
    username: "gotmullet",
    date: "01/04/2025",
    rate: 5,
    title: "Trop trop bien !",
    comment:
      "Enfin une appli pratique et claire ! Cinq minutes de test et je l’anime déjà adoptée : beaucoup de références déjà enregistrées, des réponses immédiates (là où d’autres moulinent pendant une plombe), des ajouts de produits d’un seul clic (quand les autres demandes trente étapes)… bref, super content d’avoir enfin un outil fonctionnel à portée de main.\nUn grand merci !",
  },
  {
    username: "Damien_vg34",
    date: "07/04/2025",
    rate: 5,
    title: "Pratique",
    comment:
      "C’est facile d’utilisation, complet et régulièrement mis à jour :)",
  },
  {
    username: "g770g",
    date: "12/05/2025",
    rate: 5,
    title: "super initiative !",
    comment:
      "je suis ravie d’avoir trouvée cette nouvelle application pour vegan ! elle est complète ! on peut scanner des produits pour savoir si ils sont vegan mais ça permet aussi d’allimenter nous même la banque d’infos parce que l’application est encore nouvelle donc j’ai hâte de voir l’évolution de cette appli ! elle permet aussi de voir les E (additifs) si il sont vegan etc ! c’est top",
  },
];

export const faqData: FaqDataType[] = [
  {
    title: "Comment télécharger et utiliser l'application ?",
    description:
      "L'application est disponible sur l'App Store pour les iPhones, et sur GooglePlay pour les appareils Android. Vous pouvez aussi télécharger directement l'APK sur le dépôt github de l'appli.",
  },
  {
    title: "Pourquoi l'appli est-elle souvent mise à jour ?",
    description:
      "L'application est régulièrement mise à jour afin d'ajouter des fonctionnalités et de mettre à jour la base de données afin que le scan soit plus précis et les informations plus pertinentes. Pensez à mettre à jour l'application quand elle vous le propose !",
  },
  {
    title: "L’appli fonctionne-t-elle hors connexion ?",
    description:
      "Oui : le scan et la consultation des données des cosmétiques et additifs fonctionnent hors ligne, ce qui permet de vérifier rapidement les produits en magasin sans connexion internet !",
  },
  {
    title:
      "Est-ce que ça fonctionne aussi pour les cosmétiques et les additifs ?",
    description:
      "Oui : en plus du scan des produits, l’application permet de rechercher les additifs et les marques de cosmétiques.",
  },
  {
    title: "Qu’est-ce qui différencie 321 Vegan des autres applis ?",
    description:
      "321 Vegan est open-source, sans pubs, collaborative et gratuite. Elle peut s'utiliser hors ligne. Les informations sont régulièrement mise à jour pour améliorer la fiabilité et ne se base pas sur des analyses par IA, qui manque de précision. L'équipe fait aussi des vérifications auprès des marques.",
  },
  {
    title: "Pourquoi la notion de boycott apparaît-elle dans l’appli ?",
    description:
      "L’appli signale quand un produit ou une marque est concerné par un boycott. C'est un outil d’information pour aider les utilisateur&middot;ices à faire des choix éthiques et en conscience.",
  },
  {
    title:
      "La mention “vegan” prend-elle en compte les tests sur les animaux ?",
    description:
      "Oui : 321 Vegan vérifie la présence d’ingrédients d’origine animale, les tests et l'utilisation de produits animaux dans les différentes étapes de fabrication des produits.",
  },
  {
    title:
      "Le travail des singes pour la récolte de noix de coco est-il pris en compte ?",
    description:
      "Nous prenons en compte les pratiques d’exploitation animale et éthique au sens large. Nous faisons en sorte d'être le plus fiable que possible sur la question de l'utilisation des singes ou d'autre animaux non humains. Mais nous ne pouvons pas garantir à 100% l'absence d'erreur, bien que l'aspect collaboratif nous permet d'améliorer les données en continue.",
  },
  {
    title: "L’appli est-elle réservée aux véganes ?",
    description:
      "Non : elle vise les véganes mais aussi toute personne souhaitant consommer plus éthique — l’objectif est de rendre ces choix simples et accessibles. Elle peut aussi aider les proches de personnes véganes à ne pas se tromper en faisant les courses pour elleux !",
  },
  {
    title: "Comment soutenir ou participer ?",
    description:
      "321 Vegan est open-source : tout le monde peut contribuer sur GitHub, signaler des produits dans l’appli, rejoindre la communauté (Discord). Vous pouvez aussi faire une contribution financière sous forme d'abonnement soutien (à partir de 1&euro; par mois) ou de don ponctuel (buymeacoffee)",
  },
  {
    title: "D’où vient l’appli ?",
    description:
      "Le projet est indépendant, développé publiquement (dépôt GitHub), maintenu et distribué par Camille. Ce site web ainsi que l'outil de vérification des produits ont été développés par IsaSXM, contributrice essentielle du projet.",
  },
];

export const sourcesData: SourceDataType[] = [
  {
    title: "Animaux terrestres épargnés",
    description: "Chiffres clés sur la souffrance animale.",
    icon: "heart",
    color: "pink",
    link: {
      url: "https://www.l214.com/animaux/chiffres-cles/elevage/",
      label: "Association L214",
    },
  },
  {
    title: "Animaux marins épargnés",
    description:
      "Estimations du nombre de poissons tués chaque année dans le monde.",
    icon: "heart",
    color: "purple",
    link: {
      url: "http://fishcount.org.uk/",
      label: "Fish Count",
    },
  },
  {
    title: "CO<sub>2</sub> non émis",
    description:
      "Analyse des émissions de gaz à effet de serre en fonction du type de régime alimentaire.",
    icon: "circle-arrow-down",
    color: "orange",
    link: {
      url: "https://link.springer.com/article/10.1007/s10584-014-1169-1",
      label: "Étude sur les émissions de GES selon les régimes",
    },
  },
  {
    title: "Forêt préservée",
    description:
      "Données environnementales citées dans le documentaire Cowspiracy.",
    icon: "trees",
    color: "emerald",
    link: {
      url: "https://www.cowspiracy.com/facts",
      label: "Cowspiracy Facts",
    },
  },
  {
    title: "Eau économisée",
    description:
      "Base de données sur la consommation d’eau liée à différents produits.",
    icon: "droplet",
    color: "blue",
    link: {
      url: "https://www.waterfootprint.org/en/",
      label: "Water Footprint Network",
    },
  },
];

export const cosmeticsCriteria: string[] = [
  "Absence de tests sur animaux",
  "Absence de tests sur animaux sur les marchés étrangers",
  "Absence de chair animale",
  "Absence d'ingrédients d'origine animale dans le produit",
  "Absence d'ingrédient d'origine animale dans l'emballage",
  "Non exploitation des singes pour la récolte des noix de coco",
  "Ingrédients issus de l'agriculture biologique vegan",
  "Audits de contrôle",
];

export const cosmeticsLabelsData: CosmeticsLabelDataType[] = [
  {
    logo: vLabel,
    name: "V-Label",
    certify: [true, true, true, true, false, false, false, true],
  },
  {
    logo: veganSociety,
    name: "Vegan Society",
    certify: [true, false, true, true, true, false, false, false],
  },
  {
    logo: eveVegan,
    name: "EVE Vegan",
    certify: [true, true, true, true, true, false, true, true],
  },
  {
    logo: leapingBunny,
    name: "Leaping Bunny",
    certify: [true, true, false, false, false, false, false, true],
  },
  {
    logo: petaCF,
    name: "PETA CF",
    certify: [true, true, false, false, false, false, false, false],
  },
  {
    logo: petaVeganCF,
    name: "PETA Vegan & CF",
    certify: [true, true, true, true, true, false, false, false],
  },
  {
    logo: chooseCF,
    name: "Choose Cruelty Free",
    certify: [true, true, false, false, false, false, false, false],
  },
  {
    logo: ihtk,
    name: "IHTK",
    certify: [true, false, false, false, false, false, false, false],
  },
  {
    logo: oneVoiceT,
    name: "One Voice T",
    certify: [true, true, false, false, false, false, false, true],
  },
  {
    logo: oneVoiceC,
    name: "One Voice C",
    certify: [true, true, false, false, false, true, false, true],
  },
];

export const cosmeticsSourcesData: string[] = [
  "https://animaltesting.fr/",
  "https://vegan-pratique.fr/",
  "http://www.animalter.com/",
  "https://www.crueltyfreekitty.com/",
  "https://choosecrueltyfree.org/",
  "https://www.v-label.com/",
  "https://crueltyfree.peta.org/",
  "https://www.evevegan.org/fr",
  "https://www.leapingbunny.org/",
  "https://www.vegansociety.com/",
  "https://www.fondation-droit-animal.org/",
];
