import { Metadata } from "next";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TemplateMessageForm from "@/app/ui/signalement/TemplateMessageForm";
import FlierDownloadCard from "@/app/ui/kit/FlierDownloadCard";
import { socialNetworkLinks } from "@/assets/assets";

export const metadata: Metadata = {
  title: "Kit de communication",
  description:
    "Téléchargez les ressources visuelles de 321 Vegan et copiez des textes prêts à l'emploi pour parler de l'appli autour de vous.",
};

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
              C&apos;est <strong>grâce à vous que ce projet grandit</strong> et aide, jour après
              jour, de plus en plus de personnes à consommer végétal et éthique.
              Voici quelques documents et textes que vous pouvez utiliser pour
              communiquer sur le projet.
            </p>
            <p className="leading-relaxed mb-2">
              N&apos;hésitez pas à <strong>m&apos;envoyer vos plus belles photos de ces
              visuels en situation réelle </strong> (sur instagram{" "}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:row-span-2 h-full">
                <FlierDownloadCard />
              </div>
              {logoItems.map((item, i) => (
                <article
                  key={i}
                  className="flex flex-col gap-4 border border-brand-100 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`rounded-md p-4 flex items-center justify-center ${item.preview.dark ? "bg-brand-800" : "bg-brand-50"}`}
                  >
                    <Image
                      src={item.preview.src}
                      alt={item.title}
                      width={120}
                      height={120}
                      className="object-contain h-20 w-auto"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.formats.map((f) => (
                      <a
                        key={f.label}
                        href={f.href}
                        download
                        className="inline-flex items-center gap-2 bg-brand-600 text-white text-sm px-4 py-2 rounded hover:bg-brand-700 transition-colors"
                      >
                        <Download className="size-4" aria-hidden="true" />
                        Télécharger ({f.label})
                      </a>
                    ))}
                  </div>
                </article>
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
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-600 mb-2">
              Textes à copier-coller
            </h2>
            <p className="leading-relaxed mb-2">
              Vous pouvez utiliser ces textes pour présenter 321 Vegan sur les réseaux
              sociaux, par email ou dans vos communications. Vous pouvez les
              modifier avant de les copier.
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
          </div>
        </main>
      </div>
    </div>
  );
}
