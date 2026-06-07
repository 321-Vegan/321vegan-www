import { Metadata } from "next";
import Link from "next/link";
import TemplateMessageForm from "@/app/ui/signalement/TemplateMessageForm";
import FlierDownloadCard from "@/app/ui/kit/FlierDownloadCard";
import LogoCard from "@/app/ui/kit/LogoCard";
import ColorPalette from "@/app/ui/kit/ColorPalette";
import { socialNetworkLinks } from "@/assets/assets";

export const metadata: Metadata = {
  title: "Kit de communication",
  description:
    "Téléchargez les ressources visuelles de 321 Vegan et copiez des textes prêts à l'emploi pour parler de l'appli autour de vous.",
};

const brandColors = [
  { hex: "#166534", name: "Vert principal" },
  { hex: "#4CAF71", name: "Vert secondaire" },
  { hex: "#F5F5F4", name: "Blanc", light: true },
  { hex: "#FFDE59", name: "Moutarde", light: true},
  { hex: "#1C1917", name: "Noir" },
];

const logoItems = [
  {
    title: "Logo version verte",
    description: "Version du logo à utiliser sur fond blanc ou clair.",
    formats: [{ label: "PNG", href: "/logo-dark.png" }],
    preview: { src: "/logo-dark.png", dark: false },
  },
  {
    title: "Logo version blanche",
    description: "Version du logo à utiliser sur fond foncé ou coloré.",
    formats: [{ label: "PNG", href: "/logo-light.png" }],
    preview: { src: "/logo-light.png", dark: true },
  },
];

const shortText = `Vous connaissez 321 Vegan ? C'est une appli vegan open-source, gratuite, et utilisable hors ligne !

Elle permet de scanner des produits en magasin, vérifier des additifs et des cosmétiques, et même de suivre son impact 🌱

Téléchargez-la gratuitement pour vous simplifier la vie :)`;

const longText = `321 Vegan est une application mobile open-source, gratuite et sans publicité, créée par et pour les véganes.

Elle permet de :
- Scanner les codes-barres des produits pour savoir s'ils sont vegan (fonctionne hors ligne !)
- Vérifier si un additif (E…) est d'origine animale
- Consulter les marques de cosmétiques vegan et cruelty-free
- Configurer un rappel pour la prise de vitamine B12
- Suivre son impact depuis le début de son véganisme (animaux épargnés, CO₂, eau, forêt)
- Bénéficier de réductions auprès de boutiques en ligne vegan
- Rechercher une liste de produits sur une carte interactive

La base de données est participative et régulièrement mise à jour pour être le plus fiable possible !

Disponible gratuitement sur App Store et Google Play.
👉 https://321vegan.fr`;

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 space-y-24 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 py-24 mx-auto xl:px-0 mt-5">
        <header>
          <h1 className="text-5xl text-brand-600 font-extrabold leading-tight">
            Kit de communication
          </h1>
        </header>

        <main className="flex flex-col gap-16">
          <div>
            <p className="leading-relaxed mb-2">
              Vous souhaitez parler de l&apos;appli ? Merci infiniment&nbsp;!
              C&apos;est <strong>grâce à vous que ce projet grandit</strong> et
              aide, jour après jour, de plus en plus de personnes à consommer
              végétal et éthique. Voici quelques documents et textes que vous
              pouvez utiliser pour communiquer sur le projet.
            </p>
            <p className="leading-relaxed">
              N&apos;hésitez pas à{" "}
              <strong>
                m&apos;envoyer vos plus belles photos de ces visuels en
                situation réelle
              </strong>{" "}
              (sur instagram{" "}
              <a
                href="https://instagram.com/321vegan.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline"
              >
                @321vegan.app
              </a>{" "}
              ou via le{" "}
              <Link href="/contact" className="text-brand-600 underline">
                formulaire de contact
              </Link>
              )&nbsp;!
            </p>
          </div>

          <section aria-labelledby="visuels-heading">
            <h2
              id="visuels-heading"
              className="text-2xl font-semibold text-brand-600 mb-6"
            >
              Visuels et logos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:row-span-2 h-full">
                <FlierDownloadCard />
              </div>
              {logoItems.map((item, i) => (
                <LogoCard key={i} {...item} />
              ))}
            </div>
            <p className="mt-8 leading-relaxed">
              D&apos;autres visuels arriveront bientôt (template de story, GIF,
              ...)&nbsp;! Si vous souhaitez participer à leur création,
              n&apos;hésitez pas à{" "}
              <Link href="/contact" className="text-brand-600 underline">
                me contacter
              </Link>{" "}
              ou à rejoindre notre{" "}
              <a
                href={socialNetworkLinks.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 underline"
              >
                serveur Discord
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="palette-heading">
            <h2
              id="palette-heading"
              className="text-2xl font-semibold text-brand-600 mb-2"
            >
              Palette de couleurs
            </h2>
            <p className="leading-relaxed mb-6 text-gray-600">
              Cliquez sur une couleur pour copier son code hexadécimal.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {brandColors.map((color) => (
                <ColorPalette key={color.hex} {...color} />
              ))}
            </div>
          </section>

          <section aria-labelledby="textes-heading">
            <h2
              id="textes-heading"
              className="text-2xl font-semibold text-brand-600 mb-2"
            >
              Textes à copier-coller
            </h2>
            <p className="leading-relaxed mb-8 text-gray-600">
              Vous pouvez utiliser ces textes pour présenter 321 Vegan sur les
              réseaux sociaux, par email ou dans vos communications. Modifiez-les
              avant de les copier si besoin.
            </p>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="bg-brand-50 rounded-lg p-6 flex-1 flex flex-col h-[480px]">
                <h3 className="font-semibold text-lg mb-6 shrink-0">
                  Texte court{" "}
                  <span className="text-sm font-normal text-brand-500">
                    (réseaux sociaux)
                  </span>
                </h3>
                <div className="flex-1 min-h-0">
                  <TemplateMessageForm text={shortText} fillHeight />
                </div>
              </div>

              <div className="bg-brand-50 rounded-lg p-6 flex-1 flex flex-col h-[480px]">
                <h3 className="font-semibold text-lg mb-6 shrink-0">
                  Texte long{" "}
                  <span className="text-sm font-normal text-brand-500">
                    (email, newsletter, présentation)
                  </span>
                </h3>
                <div className="flex-1 min-h-0">
                  <TemplateMessageForm text={longText} fillHeight />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
