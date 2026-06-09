import { Metadata } from "next";
import { socialNetworkLinks } from "@/assets/assets";
import Link from "next/link";
import ContactUsCta from "@/app/ui/components/ContactUsCta";
import FlierDownloadCard from "@/app/ui/kit/FlierDownloadCard";
import LogoCard from "@/app/ui/kit/LogoCard";
import ColorPalette from "@/app/ui/kit/ColorPalette";
import TextCard from "@/app/ui/kit/TextCard";

export const metadata: Metadata = {
  title: "Kit de communication",
  description:
    "Téléchargez les ressources visuelles de 321 Vegan et copiez des textes prêts à l'emploi pour parler de l'appli autour de vous.",
};

const brandColors = [
  { hex: "#166534", name: "Vert principal" },
  { hex: "#4CAF71", name: "Vert secondaire" },
  { hex: "#F5F5F4", name: "Blanc", light: true },
  { hex: "#FFDE59", name: "Moutarde", light: true },
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
          <section>
            <h2 className="mb-12 text-lg font-merriweather">
              Vous souhaitez partager l&apos;appli&nbsp;? Notre kit de
              communication est à votre disposition
            </h2>

            <p className="leading-relaxed mb-2">
              Vous souhaitez parler de l&apos;appli&nbsp;? Merci
              infiniment&nbsp;! C&apos;est{" "}
              <strong>
                grâce à vous que ce projet grandit et aide, jour après jour, de
                plus en plus de personnes à consommer végétal et éthique
              </strong>
              . Voici quelques documents et textes que vous pouvez utiliser pour
              communiquer sur le projet.
            </p>
            <p className="leading-relaxed">
              N&apos;hésitez pas à{" "}
              <strong>
                nous envoyer vos plus belles photos de ces visuels en situation
                réelle
              </strong>{" "}
              (sur instagram{" "}
              <a
                href={socialNetworkLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="pb-1 inline-flex items-center gap-2 border-b-2 border-brand-600 cursor-pointer hover:shadow-[0_1rem_2rem] hover:bg-brand-600 hover:text-white hover:-translate-y-1 focus:bg-brand-600 focus:text-white active:bg-brand-600 active:text-white transition-transform duration-300"
              >
                @321vegan.app
              </a>{" "}
              ou via le{" "}
              <Link
                href="/contact"
                className="pb-1 inline-flex items-center gap-2 border-b-2 border-brand-600 cursor-pointer hover:shadow-[0_1rem_2rem] hover:bg-brand-600 hover:text-white hover:-translate-y-1 focus:bg-brand-600 focus:text-white active:bg-brand-600 active:text-white transition-transform duration-300"
              >
                formulaire de contact
              </Link>
              )&nbsp;!
            </p>
          </section>

          <section aria-labelledby="visuels-heading" className="scroll-mt-20">
            <h2
              id="visuels-heading"
              className="text-2xl font-semibold text-brand-600 my-8 font-merriweather"
            >
              Visuels et logos
            </h2>
            <p className="leading-relaxed mb-6 text-gray-600">
              Téléchargez nos visuels prêts à l&apos;emploi et notre logo dans
              la version qu&apos;il vous faut.
            </p>
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
              <Link
                href="/contact"
                className="pb-1 inline-flex items-center gap-2 border-b-2 border-brand-600 cursor-pointer hover:shadow-[0_1rem_2rem] hover:bg-brand-600 hover:text-white hover:-translate-y-1 focus:bg-brand-600 focus:text-white active:bg-brand-600 active:text-white transition-transform duration-300"
              >
                nous contacter
              </Link>{" "}
              ou à{" "}
              <a
                href={socialNetworkLinks.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="pb-1 inline-flex items-center gap-2 border-b-2 border-brand-600 cursor-pointer hover:shadow-[0_1rem_2rem] hover:bg-brand-600 hover:text-white hover:-translate-y-1 focus:bg-brand-600 focus:text-white active:bg-brand-600 active:text-white transition-transform duration-300"
              >
                rejoindre notre serveur Discord
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="palette-heading" className="scroll-mt-20">
            <h2
              id="palette-heading"
              className="text-2xl font-semibold text-brand-600 mt-16 mb-8 font-merriweather"
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

          <section aria-labelledby="textes-heading" className="scroll-mt-20">
            <h2
              id="textes-heading"
              className="text-2xl font-semibold text-brand-600 mt-16 mb-8 font-merriweather"
            >
              Textes à copier-coller
            </h2>
            <p className="leading-relaxed mb-8 text-gray-600">
              Vous pouvez utiliser ces textes pour présenter 321 Vegan sur les
              réseaux sociaux, par email ou dans vos communications. Vous pouvez
              bien sûr les modifier à votre guise si besoin.
            </p>

            <div className="flex flex-col lg:flex-row gap-6">
              <TextCard
                text={shortText}
                title="Texte court"
                description="(réseaux sociaux)"
              />
              <TextCard
                text={longText}
                title="Texte long"
                description="(email, newsletter, présentation)"
              />
            </div>
          </section>

          <section>
            <ContactUsCta
              title="Vous souhaitez devenir partenaire&nbsp;?"
              btnColor="bg-brand-600 after:bg-brand-600"
              wrapperClass="mt-16"
            >
              Contactez-nous pour rejoindre notre listes de partenaires et faire
              bénéficiez d&apos;avantages à la communauté.
            </ContactUsCta>
          </section>
        </main>
      </div>
    </div>
  );
}
