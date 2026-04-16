import Image from "next/image";
import { ReactNode } from "react";
import { Download } from "lucide-react";
import CopyButton from "./CopyEanButton";

type Step = { number: number; title: string; description: ReactNode; screenshot?: string };

const baseSteps: Step[] = [
  {
    number: 1,
    title: "Accéder à Signal Conso",
    description: (
      <>
        Rendez-vous sur{" "}
        <a
          href="https://signal.conso.gouv.fr/fr/achat-magasin/faire-un-signalement"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-600 underline underline-offset-2 hover:text-brand-700"
        >
          signal.conso.gouv.fr
        </a>{" "}
        depuis votre navigateur. Vous n'avez pas besoin de créer de compte pour faire le signalement !<br/>Sélectionnez <strong>« Un produit en particulier »</strong> puis <strong>« C'est un aliment »</strong>.
      </>
    ),
    screenshot: "/campaigns/guide/step1.jpg",
  },
  {
    number: 2,
    title: "Première précision",
        description: (
      <>
        Sélectionnez <strong> « Problème avec l'emballage ou l'étiquette »</strong>.
      </>
    ),
    screenshot: "/campaigns/guide/step2.jpg",
  },
  {
    number: 3,
    title: "Deuxième précision",
    description: (
      <>
        Sélectionnez <strong>« Informations trompeuses ou fausses »</strong>.
      </>
    ),
    screenshot: "/campaigns/guide/step3.jpg",
  },
  {
    number: 4,
    title: "Dernière précision",
    description: (
      <>
        Sélectionnez <strong>« La composition »</strong> puis <strong> « Signaler un problème avec l'entreprise »</strong>.
      </>
    ),
    screenshot: "/campaigns/guide/step4.jpg",
    },
  {
    number: 5,
    title: "Renseigner le produit",
    description: (
      <>
       Entrez le code-barre du produit puis cliquez sur  <strong> « Rechercher »</strong>. Les informations du produit et de la marque vont s'afficher. <br/>Le code-barre pour cette campagne est le suivant : 
      </>
    ),
    screenshot: "/campaigns/guide/step5.jpg",
  },
  {
    number: 6,
    title: "Description du problème",
    description:
      "Pour la date du constat, vous pouvez laisser la date du jour. Pour la question « De quel produit s'agit-il ? » renseignez « Autres » avec « Produit préparé » ou une mention similaire. Enfin, vous pouvez utilisez le modèle de texte ou en écrire un vous-même !",
    screenshot: "/campaigns/guide/step6.jpg",

    },
  {
    number: 7,
    title: "Joindre des images",
    description:
      "Vous pouvez utilisez vos propres images du produit ou bien télécharger et utiliser celles du modèle (à télécharger en cliquant sur les boutons ci-dessous).",
    screenshot: "/campaigns/guide/step7.jpg",
  },
  {
    number: 8,
    title: "Coordonnées",
    description:
      "Renseignez vos coordonnées. Vous n'êtes pas obligé·e de donner votre numéro de téléphone ni de numéro de référence. Ensuite, vous pouvez choisir de communiquer ou non vos coordonnées à l'entreprise : à vous de voir !",
    screenshot: "/campaigns/guide/step8.jpg",
  },
  {
    number: 9,
    title: "Validation de d'email",
    description:
      "Vous allez recevoir un email avec un code, renseignez-le.",
    screenshot: "/campaigns/guide/step9.jpg",
  },
  {
    number: 10,
    title: "Récapitulatif et validation",
    description:
      "Vérifier les données du récapitulatif et validez. C'est terminé ! Merci beaucoup pour votre participation !",
    screenshot: "/campaigns/guide/step10.jpg",
  },
];

const StepScreenshot = ({ step, src }: { step: number; src?: string }) => {
  if (src) {
    return (
      <Image
        src={src}
        alt={`Capture d'écran étape ${step}`}
        width={1280}
        height={800}
        className="w-1/2 h-auto rounded-xl border border-gray-200"
      />
    );
  }
  return (
    <div className="w-full aspect-video rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center gap-2 text-gray-400">
      <span className="text-3xl font-bold opacity-20">{step}</span>
      <span className="text-sm">Capture d&apos;écran à venir</span>
    </div>
  );
};

type SignalementStepsProps = {
  ean?: string;
  campaignText?: string;
  photoProduct?: string;
  photoIngredients?: string;
};

const SignalementSteps = ({ ean, campaignText, photoProduct, photoIngredients }: SignalementStepsProps) => {
  const steps: Step[] = baseSteps.map((step) => {
    if (step.number === 5 && ean) {
      return {
        ...step,
        description: (
          <>
            {step.description}
            <CopyButton text={ean} display={ean} />
          </>
        ),
      };
    }
    if (step.number === 6 && campaignText) {
      return {
        ...step,
        description: (
          <>
            {step.description}
            <br />
            <CopyButton text={campaignText} label="Copier le texte modèle" />
          </>
        ),
      };
    }
    if (step.number === 7 && (photoProduct || photoIngredients)) {
      return {
        ...step,
        description: (
          <>
            {step.description}
            <span className="flex flex-wrap gap-3 mt-2">
              {photoProduct && (
                <a
                  href={photoProduct}
                  download
                  className="inline-flex items-center gap-1 text-sm text-brand-600 hover:text-brand-700 font-medium transition-colors"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Télécharger le recto
                </a>
              )}
              {photoIngredients && (
                <a
                  href={photoIngredients}
                  download
                  className="inline-flex items-center gap-1 text-sm text-brand-600 hover:text-brand-700 font-medium transition-colors"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Télécharger les ingrédients
                </a>
              )}
            </span>
          </>
        ),
      };
    }
    return step;
  });

  return (
    <section id="guide">
      <header className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-600 mb-2">
          Guide pas-à-pas
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Suivez ces étapes depuis Signal&nbsp;Conso pour soumettre votre
          signalement en moins de 10 minutes.
        </p>
      </header>

      <ol className="flex flex-col gap-12">
        {steps.map(({ number, title, description, screenshot }) => (
          <li key={number} className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center size-9 rounded-full bg-brand-600 text-white font-bold text-sm shrink-0 mt-0.5">
                {number}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg text-brand-700">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            </div>
            <StepScreenshot step={number} src={screenshot} />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default SignalementSteps;
