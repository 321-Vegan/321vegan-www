import { Metadata } from "next";
import { mockups } from "@/assets/assets";
import {
  ArrowDown,
  ArrowRight,
  ClockPlus,
  HeartPlus,
  Info,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Admonition from "@/app/ui/components/Admonition";
import AppStoresCta from "@/app/ui/components/AppStoresCta";
import JoinUsCta from "@/app/ui/components/JoinUsCta";

export const metadata: Metadata = {
  title: "Vitamine B12",
  description:
    "Configurez un rappel pour la prise de votre vitamine B12 directement depuis l'aplication afin de ne plus l'oublier !.",
};

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 space-y-24 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 py-24 mx-auto xl:px-0 mt-5">
        <header>
          <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
            Vitamine B12
          </h1>
        </header>

        <main>
          <section>
            <h2 className="mb-12 text-lg font-merriweather">
              N&apos;oubliez plus la prise de votre vitamine B12&nbsp;!
            </h2>
            <div className="flex flex-col lg:flex-row mx-auto overflow-hidden">
              <div className="lg:w-1/2 flex-1">
                <Image
                  src={mockups.mockupReminder}
                  alt=""
                  width={1080}
                  height={1920}
                  className="object-content w-auto h-auto mx-auto lg:w-full lg:mx-0 lg:-ml-8 hover:-translate-y-1 hover:scale-[1.1] transition-all duration-500"
                />
              </div>
              <div className="lg:p-4 p-2 lg:w-1/2 flex flex-col gap-6 flex-2 mb-12">
                <p className="text-justify lg:pt-12 leading-relaxed">
                  <strong>
                    Configurez un rappel pour la prise de votre vitamine B12
                    directement depuis l&apos;application afin de recevoir une
                    notification pour ne pas l&apos;oublier&nbsp;!
                  </strong>
                  Vous pouvez également{" "}
                  <strong>enregistrer vos prises pour garder un suivi</strong>{" "}
                  et vérifier que vous n&apos;avez pas omis une dose.
                </p>
                <p className="text-justify leading-relaxed">
                  Consultez{" "}
                  <Link
                    href={{ pathname: "/rappel-b12", hash: "vitamin-b12" }}
                    className="pb-1 inline-flex items-center gap-2 border-b-2 border-brand-500 cursor-pointer hover:shadow-[0_1rem_2rem] hover:bg-brand-500 hover:text-white hover:-translate-y-1 focus:bg-brand-500 focus:text-white active:bg-brand-500 active:text-white transition-transform duration-300"
                  >
                    <strong>nos conseils sur la prise de vitamine B12</strong>
                    <ArrowDown
                      className="size-4 text-current"
                      aria-hidden="true"
                    />
                  </Link>{" "}
                  pour vous assurer une absorption optimale.
                </p>
                <p className="text-justify leading-relaxed">
                  Grâce à l&apos;appli 321 Vegan,{" "}
                  <strong>être vegan n&apos;a jamais été aussi facile</strong>
                  &nbsp;!
                </p>
                <section className="lg:mt-auto">
                  <AppStoresCta />
                </section>
              </div>
            </div>
          </section>

          <article id="vitamin-b12" className="scroll-mt-20">
            <h2 className="my-12 text-lg font-merriweather">
              Quelques informations sur la vitamine B12&nbsp;:
            </h2>
            <p className="mb-6 leading-relaxed">
              <strong>
                La vitamine B12, également appelée cobalamine, est une vitamine
                essentielle qui est normalement impliquée comme cofacteur dans
                le métabolisme de chacune des cellules du corps humain
              </strong>
              , plus particulièrement dans la synthèse de l&apos;ADN et sa
              régulation ainsi que dans la synthèse des acides gras et dans la
              production d&apos;énergie. Elle est{" "}
              <strong>
                exclusivement d&apos;origine bactérienne et on la trouve
                principalement dans les excréments et la terre
              </strong>
              .{" "}
              <strong>
                On retrouve très peu de vitamine B12 à l&apos;état naturel à
                cause de l&apos;appauvrissement des sols dû à l&apos;agriculture
                et à l&apos;élevage, mais heureusement, on sait la fabriquer en
                laboratoire
              </strong>{" "}
              depuis le début des années 1970.
            </p>
            <h3 className="flex items-center gap-2 font-semibold text-brand-700">
              <Info className="size-4" />
              Pourquoi prendre un complément&nbsp;?
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              La complémentation en vitamine B12 est essentielle car cette
              vitamine est absente de l&apos;alimentation végétale. Sans
              complémentation, une carence arrivera tôt ou tard et peut avoir
              des conséquences graves.
            </p>
            <h3 className="flex items-center gap-2 font-semibold text-brand-700">
              <ClockPlus className="size-4" />
              Dosages recommandés&nbsp;:
            </h3>
            <ul className="list-(--plant-marker) pl-4 mb-4 text-lg leading-relaxed">
              <li className="pl-1">Par jour&nbsp;: 25ug</li>
              <li className="pl-1">Par semaine&nbsp;: 2000ug (en une prise)</li>
              <li className="pl-1">
                Tous les 15 jours&nbsp;: 5000ug (en une prise)
              </li>
              <li className="pl-1">
                Pour les enfants&nbsp;: de 6 à 24 mois doses divisées par 4, de
                2 à 12 ans doses divisées par 2.
              </li>
            </ul>
            <h3 className="flex items-center gap-2 font-semibold text-brand-700">
              <HeartPlus className="size-4" />
              Pour une bonne absorption
            </h3>
            <ul className="list-(--plant-marker) pl-4 mb-4 text-lg leading-relaxed">
              <li className="pl-1">
                La prise quotidienne permet une meilleure absorption et, hormis
                les adultes en bonne santé, toutes les catégories de population
                devraient la privilégier.
              </li>
              <li className="pl-1">
                Pour une absorption optimale, le mieux est de prendre sa B12
                pendant ou après un repas.
              </li>
              <li className="pl-1">
                La spiruline ne contient pas de B12 et en limite
                l&apos;absorption. Si vous en prenez le matin : prenez votre B12
                le soir, et inversement.
              </li>
            </ul>
            <h3 className="flex items-center gap-2 font-semibold text-brand-700">
              <MapPin className="size-4" />
              Où trouver la B12&nbsp;?
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              Pour une prise quotidienne, la Veg1 est très populaire et contient
              d&apos;autres vitamines. Pour une prescription médicale
              remboursable, vous pouvez demander les ampoules de Gerda à votre
              médecin (attention, la forme en comprimés contient du lactose).
            </p>

            <div className="mt-12 mb-16 flex flex-col gap-5">
              <Admonition variant="indigo">
                <p className="leading-relaxed italic">
                  Informations validées par Astrid Prévost, diététicienne
                  spécialisée en nutrition végétale. Découvrez son compte
                  Instagram{" "}
                  <a
                    href="https://www.instagram.com/astrid_nutrition_militante/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pb-1 inline-flex items-center gap-2 border-b-2 border-indigo-700 cursor-pointer hover:shadow-[0_1rem_2rem] hover:bg-indigo-700 hover:text-white hover:-translate-y-1 focus:bg-indigo-700 focus:text-white active:bg-indigo-700 active:text-white transition-transform duration-300"
                  >
                    @astrid_nutrition_militante
                    <ArrowRight
                      className="size-4 text-current"
                      aria-hidden="true"
                    />
                  </a>
                  .
                </p>
              </Admonition>
              <Admonition variant="yellow">
                <p className="leading-relaxed italic">
                  Ces informations sont à titre indicatif et ne se substituent
                  pas à un avis médical.
                </p>
              </Admonition>
            </div>
          </article>

          <section>
            <JoinUsCta
              bgColor="bg-brand-600"
              btnColor="bg-brand-800 after:bg-brand-800"
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Page;
