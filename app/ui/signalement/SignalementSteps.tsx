import Image from "next/image";
import { ReactNode } from "react";
import { Download } from "lucide-react";
import CopyButton from "./CopyEanButton";
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

type Step = { number: number; title: string; description: ReactNode; screenshot?: Parameters<typeof Image>[0]["src"] };

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
        depuis votre navigateur. Vous n&apos;avez pas besoin de créer de compte pour faire le signalement&nbsp;!<br/>Sélectionnez <strong>&laquo;&nbsp;Un produit en particulier&nbsp;&raquo;</strong> puis <strong>&laquo;&nbsp;C&apos;est un aliment&nbsp;&raquo;</strong>.
      </>
    ),
    screenshot: step1,
  },
  {
    number: 2,
    title: "Première précision",
    description: (
      <>
        Sélectionnez <strong>&laquo;&nbsp;Problème avec l&apos;emballage ou l&apos;étiquette&nbsp;&raquo;</strong>.
      </>
    ),
    screenshot: step2,
  },
  {
    number: 3,
    title: "Deuxième précision",
    description: (
      <>
        Sélectionnez <strong>&laquo;&nbsp;Informations trompeuses ou fausses&nbsp;&raquo;</strong>.
      </>
    ),
    screenshot: step3,
  },
  {
    number: 4,
    title: "Dernière précision",
    description: (
      <>
        Sélectionnez <strong>&laquo;&nbsp;La composition&nbsp;&raquo;</strong> puis <strong>&laquo;&nbsp;Signaler un problème avec l&apos;entreprise&nbsp;&raquo;</strong>.
      </>
    ),
    screenshot: step4,
  },
  {
    number: 5,
    title: "Renseigner le produit",
    description: (
      <>
        Entrez le code-barre du produit puis cliquez sur <strong>&laquo;&nbsp;Rechercher&nbsp;&raquo;</strong>. Les informations du produit et de la marque vont s&apos;afficher. <br/>Le code-barre pour cette campagne est le suivant&nbsp;:
      </>
    ),
    screenshot: step5,
  },
  {
    number: 6,
    title: "Description du problème",
    description: (
      <>
        Pour la date du constat, vous pouvez laisser la date du jour. Pour la question &laquo;&nbsp;De quel produit s&apos;agit-il&nbsp;?&nbsp;&raquo; renseignez &laquo;&nbsp;Autres&nbsp;&raquo; avec &laquo;&nbsp;Produit préparé&nbsp;&raquo; ou une mention similaire. Enfin, vous pouvez utilisez le modèle de texte ou en écrire un vous-même&nbsp;!
      </>
    ),
    screenshot: step6,
  },
  {
    number: 7,
    title: "Joindre des images",
    description:
      "Vous pouvez utilisez vos propres images du produit ou bien télécharger et utiliser celles du modèle (à télécharger en cliquant sur les boutons ci-dessous).",
    screenshot: step7,
  },
  {
    number: 8,
    title: "Coordonnées",
    description:
      "Renseignez vos coordonnées. Vous n'êtes pas obligé·e de donner votre numéro de téléphone ni de numéro de référence. Ensuite, vous pouvez choisir de communiquer ou non vos coordonnées à l'entreprise : à vous de voir !",
    screenshot: step8,
  },
  {
    number: 9,
    title: "Validation de d'email",
    description:
      "Vous allez recevoir un email avec un code, renseignez-le.",
    screenshot: step9,
  },
  {
    number: 10,
    title: "Récapitulatif et validation",
    description:
      "Vérifier les données du récapitulatif et validez. C'est terminé ! Merci beaucoup pour votre participation !",
    screenshot: step10,
  },
];

const StepScreenshot = ({ step, src }: { step: number; src?: string }) => {
  if (src) {
    return (
      <div className="w-full sm:w-3/4 mx-auto rounded-xl border border-gray-200 p-2 sm:p-6">
        <Image
          src={src}
          alt={`Capture d'écran étape ${step}`}
          width={1280}
          height={800}
          className="w-full h-auto rounded-lg block"
        />
      </div>
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
