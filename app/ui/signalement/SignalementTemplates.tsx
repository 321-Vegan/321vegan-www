"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import clsx from "clsx";
export type TemplateFillData = {
  productName?: string;
  brand?: string;
  barcode?: string;
  store?: string;
  /** Which accordion entry to open by default */
  defaultOpen?: string;
};

const sub = (text: string, data: TemplateFillData) =>
  text
    .replace(/\[NOM DU PRODUIT\]/g, data.productName ?? "[NOM DU PRODUIT]")
    .replace(/\[MARQUE\]/g, data.brand ?? "[MARQUE]")
    .replace(/\[CODE-BARRES\]/g, data.barcode ?? "[CODE-BARRES]")
    .replace(
      /\[NOM DU MAGASIN \/ ENSEIGNE\]/g,
      data.store ?? "[NOM DU MAGASIN / ENSEIGNE]"
    )
;

const buildTemplates = (data: TemplateFillData) => [
  {
    id: "fausse-mention",
    label: "Mention « vegan » « végétal » « plant based » trompeuse",
    description:
      "À utiliser quand un produit affiche un logo ou une mention vegan/végétalien, indique végétal ou plant based, etc.. mais contient des ingrédients d'origine animale.",
    text: sub(
      `Bonjour,

Je souhaite signaler le produit [NOM DU PRODUIT] de la marque [MARQUE] (code-barres : [CODE-BARRES]), disponible dans [NOM DU MAGASIN / ENSEIGNE].
Ce produit affiche une mention « végétal » sur son emballage. Cependant, sa liste d'ingrédients contient [INGRÉDIENT ANIMAL], un ingrédient d'origine animale incompatible avec cette allégation.
Cette mention trompeuse peut induire en erreur les consommateurs cherchant à éviter les produits d'origine animale.

Pièces jointes : photo du recto du produit (mention visible), photo de la liste des ingrédients.

Cordialement`,
      data
    ),
  },
];

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={clsx(
        "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
        copied
          ? "bg-green-100 text-green-700 border border-green-300"
          : "bg-brand-600 text-white hover:bg-brand-700"
      )}
      aria-label="Copier le texte"
    >
      {copied ? (
        <>
          <Check className="size-4" aria-hidden="true" />
          Copié !
        </>
      ) : (
        <>
          <Copy className="size-4" aria-hidden="true" />
          Copier ce modèle
        </>
      )}
    </button>
  );
};

const SignalementTemplates = ({ fillData }: { fillData?: TemplateFillData }) => {
  const data = fillData ?? {};
  const templates = buildTemplates(data);
  const isCampaign = !!fillData;

  const [open, setOpen] = useState<string>(
    data.defaultOpen ?? templates[0].id
  );

  return (
    <section>
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-600 mb-2">
          Modèles de texte à copier
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {isCampaign ? (
            <>
              Le modèle recommandé pour ce produit est déjà ouvert et{" "}
              <strong>pré-rempli avec les informations du produit</strong>.
              Copiez-le directement dans le formulaire Signal&nbsp;Conso.
            </>
          ) : (
            <>
              Choisissez le modèle correspondant à votre situation, copiez-le,
              puis personnalisez les éléments {" "}
              <code className="bg-gray-100 text-brand-700 px-1 rounded text-sm">
                [entre crochets]
              </code>{" "}
              avant de le coller dans le formulaire Signal&nbsp;Conso.
            </>
          )}
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {templates.map(({ id, label, description, text }) => {
          const isRecommended = isCampaign && id === data.defaultOpen;
          return (
            <div
              key={id}
              className={clsx(
                "rounded-xl border bg-white shadow-sm overflow-hidden",
                isRecommended
                  ? "border-brand-400 ring-1 ring-brand-400"
                  : "border-gray-200"
              )}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === id ? "" : id)}
                aria-expanded={open === id}
              >
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-brand-700">{label}</span>
                    {isRecommended && (
                      <span className="text-xs font-medium bg-brand-100 text-brand-700 rounded-full px-2 py-0.5">
                        Recommandé
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{description}</span>
                </div>
                <span
                  className={clsx(
                    "text-brand-500 text-xl leading-none transition-transform duration-200 shrink-0",
                    open === id ? "rotate-45" : "rotate-0"
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              {open === id && (
                <div className="px-5 pb-5 flex flex-col gap-4 border-t border-gray-100">
                  <pre className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-700 whitespace-pre-wrap leading-relaxed font-sans border border-gray-200 overflow-x-auto">
                    {text}
                  </pre>
                  <div className="flex justify-end">
                    <CopyButton text={text} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Vous pouvez adapter le modèle selon votre situation afin d'apporter plus de précisions. Un signalement précis et étayé a plus de chances d&apos;être
        traité par la DGCCRF.
      </p>
    </section>
  );
};

export default SignalementTemplates;
