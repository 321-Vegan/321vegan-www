import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { Download } from "lucide-react";
import { CampaignDataType } from "@/types/definitions";

import CopyButton from "@/app/ui/components/CopyButton";

import step1 from "@/assets/campaigns/guide/step1.webp";
import step2 from "@/assets/campaigns/guide/step2.webp";
import step3 from "@/assets/campaigns/guide/step3.webp";
import step4 from "@/assets/campaigns/guide/step4.webp";
import step5 from "@/assets/campaigns/guide/step5.webp";
import step6 from "@/assets/campaigns/guide/step6.webp";
import step7 from "@/assets/campaigns/guide/step7.webp";
import step8 from "@/assets/campaigns/guide/step8.webp";
import step9 from "@/assets/campaigns/guide/step9.webp";
import step10 from "@/assets/campaigns/guide/step10.webp";

type StepDataType = {
  title: string;
  description: ReactNode;
  screenshot: StaticImageData;
};

interface StepProps {
  number: number;
  step: StepDataType;
}

interface StepImageProps {
  img: StaticImageData;
  index: number;
}

interface StepByStepGuideSectionProps {
  wrapperClass?: string;
  campaign?: CampaignDataType;
}

const stepsData: StepDataType[] = [
  {
    title: "Accéder à Signal Conso",
    description: (
      <>
        Rendez-vous sur{" "}
        <a
          href="https://signal.conso.gouv.fr/fr/achat-magasin/faire-un-signalement"
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 inline-flex items-center gap-2 border-b-2 border-brand-700 cursor-pointer hover:shadow-[0_1rem_2rem] hover:bg-brand-700 hover:text-white hover:-translate-y-1 focus:bg-brand-700 focus:text-brand-700 active:bg-brand-700 active:text-white transition duration-300 relative z-0 hover:after:bg-brand-700 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full hover:after:scale-x-105 hover:after:scale-y-125"
        >
          signal.conso.gouv.fr
        </a>{" "}
        depuis votre navigateur. Vous n&apos;avez pas besoin de créer de compte
        pour faire le signalement&nbsp;!
        <br />
        Sélectionnez{" "}
        <span className="font-bold">
          &laquo;&nbsp;Un produit en particulier&nbsp;&raquo;
        </span>{" "}
        puis{" "}
        <span className="font-bold">
          &laquo;&nbsp;C&apos;est un aliment&nbsp;&raquo;
        </span>
        .
      </>
    ),
    screenshot: step1,
  },
  {
    title: "Première précision",
    description: (
      <>
        Sélectionnez{" "}
        <span className="font-bold">
          &laquo;&nbsp;Problème avec l&apos;emballage ou
          l&apos;étiquette&nbsp;&raquo;
        </span>
        .
      </>
    ),
    screenshot: step2,
  },
  {
    title: "Deuxième précision",
    description: (
      <>
        Sélectionnez{" "}
        <span className="font-bold">
          &laquo;&nbsp;Informations trompeuses ou fausses&nbsp;&raquo;
        </span>
        .
      </>
    ),
    screenshot: step3,
  },
  {
    title: "Dernière précision",
    description: (
      <>
        Sélectionnez{" "}
        <span className="font-bold">
          &laquo;&nbsp;La composition&nbsp;&raquo;
        </span>{" "}
        puis{" "}
        <span className="font-bold">
          &laquo;&nbsp;Signaler un problème avec l&apos;entreprise&nbsp;&raquo;
        </span>
        .
      </>
    ),
    screenshot: step4,
  },
  {
    title: "Renseigner le produit",
    description: (
      <>
        Entrez le code-barre du produit puis cliquez sur{" "}
        <span className="font-bold">&laquo;&nbsp;Rechercher&nbsp;&raquo;</span>.
        Les informations du produit et de la marque vont s&apos;afficher.
      </>
    ),
    screenshot: step5,
  },
  {
    title: "Description du problème",
    description: (
      <>
        Pour la date du constat, vous pouvez laisser la date du jour. Pour la
        question &laquo;&nbsp;De quel produit s&apos;agit-il&nbsp;?&nbsp;&raquo;
        renseignez &laquo;&nbsp;Autres&nbsp;&raquo; avec &laquo;&nbsp;Produit
        préparé&nbsp;&raquo; ou une mention similaire. Enfin, vous pouvez
        utilisez le modèle de texte ou en écrire un vous-même&nbsp;!
      </>
    ),
    screenshot: step6,
  },
  {
    title: "Joindre des images",
    description: (
      <>
        Vous pouvez utilisez vos propres images du produit ou bien télécharger
        et utiliser celles de la campagne.
      </>
    ),
    screenshot: step7,
  },
  {
    title: "Coordonnées",
    description: (
      <>
        Renseignez vos coordonnées. Vous n&apos;êtes pas obligé&middot;e de
        donner votre numéro de téléphone ni de numéro de référence. Ensuite,
        vous pouvez choisir de communiquer ou non vos coordonnées à
        l&apos;entreprise&nbsp;: à vous de voir&nbsp;!
      </>
    ),
    screenshot: step8,
  },
  {
    title: "Validation de d'email",
    description: <>Vous allez recevoir un email avec un code, renseignez-le.</>,
    screenshot: step9,
  },
  {
    title: "Récapitulatif et validation",
    description: (
      <>
        Vérifier les données du récapitulatif et validez. C&apos;est
        terminé&nbsp;! Merci beaucoup pour votre participation&nbsp;!
      </>
    ),
    screenshot: step10,
  },
];

const buildSteps = (campaign?: CampaignDataType) => {
  if (!campaign) return stepsData;
  return stepsData.map((step, i) => {
    if (i + 1 === 5) {
      return {
        ...step,
        description: (
          <>
            {step.description}
            <br />
            <CopyButton
              text={campaign.barcode}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-brand-700 after:bg-brand-700 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 cursor-pointer mt-3"
            >
              Copier le code-barres pour ce signalement
            </CopyButton>
          </>
        ),
      };
    }
    if (i + 1 === 6) {
      return {
        ...step,
        description: (
          <>
            {step.description}
            <br />
            <CopyButton
              text={campaign.campaignText}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-brand-700 after:bg-brand-700 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 cursor-pointer mt-3"
            >
              Copier le texte pour ce signalement
            </CopyButton>
          </>
        ),
      };
    }
    if (i + 1 === 7) {
      return {
        ...step,
        description: (
          <>
            {step.description}
            <span className="flex flex-col md:flex-row gap-3 mt-3">
              <a
                href={campaign.photoProduct.src}
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-brand-700 after:bg-brand-700 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 cursor-pointer w-full"
              >
                Télécharger le recto
                <Download className="size-4" aria-hidden="true" />
              </a>

              <a
                href={campaign.photoIngredients.src}
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-brand-700 after:bg-brand-700 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 cursor-pointer w-full"
              >
                Télécharger les ingrédients
                <Download className="size-4" aria-hidden="true" />
              </a>
            </span>
          </>
        ),
      };
    }
    return step;
  });
};

const StepByStepGuideSection = ({
  wrapperClass = "",
  campaign,
}: StepByStepGuideSectionProps) => {
  const steps: StepDataType[] = buildSteps(campaign);
  return (
    <article id="guide" className={`scroll-mt-20 ${wrapperClass} `}>
      <h2 className="mt-16 mb-12 text-lg font-merriweather">Guide pas-à-pas</h2>
      <p className="mb-16 leading-relaxed">
        Suivez ces étapes depuis Signal&nbsp;Conso pour soumettre votre
        signalement en moins de 10 minutes.
      </p>

      <ol className="flex flex-col gap-12 rounded-xl p-8 shadow-sm border-[0.5px] border-gray-400 bg-white/50">
        {steps.map((step, number) => (
          <Step key={number + 1} step={step} number={number} />
        ))}
      </ol>
    </article>
  );
};

const Step = ({
  step: { title, description, screenshot },
  number,
}: StepProps) => {
  return (
    <li className="flex flex-col gap-8 last:mb-12">
      <div className="flex items-start gap-4">
        <span className="flex items-center justify-center size-9 rounded-full bg-brand-600 text-white font-bold text-sm shrink-0 mt-0.5">
          {number + 1}
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg text-brand-700">{title}</h3>
          <p className="leading-relaxed">{description}</p>
        </div>
      </div>
      <StepImage img={screenshot} index={number + 1} />
    </li>
  );
};

const StepImage = ({ img, index }: StepImageProps) => {
  return (
    <figure className="flex flex-col items-center justify-center gap-3 text-center rounded-lg px-6 py-3 leading-7 text-brand-600 bg-white shadow-sm sm:w-3/4 mx-auto">
      <Image
        src={img}
        alt={`Capture d'écran de l'étape ${index}`}
        className=" object-cover  w-full h-auto rounded-lg block "
      />
      <figcaption className="font-medium italic leading-7">
        Capture d&apos;écran de l&apos;étape {index}
      </figcaption>
    </figure>
  );
};

export default StepByStepGuideSection;
