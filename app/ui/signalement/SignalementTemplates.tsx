"use client";

import { useState } from "react";
import clsx from "clsx";
import CopyButton from "@/app/ui/signalement/CopyEanButton";

const templates = [
  {
    id: "fausse-mention",
    label: "Mention « vegan » « végétal » « plant based » trompeuse",
    description:
      "À utiliser quand un produit affiche un logo ou une mention vegan/végétalien, indique végétal ou plant based, etc.. mais contient des ingrédients d'origine animale.",
    text: `Bonjour,

Je souhaite signaler le produit [NOM DU PRODUIT] de la marque [MARQUE] (code-barres : [CODE-BARRES]), disponible dans [NOM DU MAGASIN / ENSEIGNE].
Ce produit affiche une mention « végétal » sur son emballage. Cependant, sa liste d'ingrédients contient [INGRÉDIENT ANIMAL], un ingrédient d'origine animale incompatible avec cette allégation.
Cette mention trompeuse peut induire en erreur les consommateurs cherchant à éviter les produits d'origine animale.

Pièces jointes : photo du recto du produit (mention visible), photo de la liste des ingrédients.

Cordialement`,
  },
];

const SignalementTemplates = () => {
  const [open, setOpen] = useState<string>(templates[0].id);

  return (
    <section>
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-600 mb-2">
          Modèles de texte à copier
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Choisissez le modèle correspondant à votre situation, copiez-le,
          puis personnalisez les éléments{" "}
          <code className="bg-gray-100 text-brand-700 px-1 rounded text-sm">
            [entre crochets]
          </code>{" "}
          avant de le coller dans le formulaire Signal Conso.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {templates.map(({ id, label, description, text }) => (
          <div
            key={id}
            className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(open === id ? "" : id)}
              aria-expanded={open === id}
            >
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-brand-700">{label}</span>
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
                  <CopyButton text={text} label="Copier ce modèle" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Vous pouvez adapter le modèle selon votre situation afin d'apporter plus de précisions. Un signalement précis et étayé a plus de chances d&apos;être
        traité par la DGCCRF.
      </p>
    </section>
  );
};

export default SignalementTemplates;
