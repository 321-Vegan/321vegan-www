"use client";

import { useState } from "react";
import clsx from "clsx";
import { Markup } from "interweave";
import CopyButton from "@/app/ui/signalement/CopyEanButton";

const PLACEHOLDER_RE = /\[([^\]]+)\]/g;

function extractPlaceholders(text: string): string[] {
  return [...new Set([...text.matchAll(PLACEHOLDER_RE)].map((m) => m[1]))];
}

function applyFields(text: string, fields: Record<string, string>): string {
  return text.replace(PLACEHOLDER_RE, (_, key) => fields[key]?.trim() || `[${key}]`);
}

const templates = [
  {
    id: "fausse-mention",
    label: "Mention &laquo;&nbsp;vegan&nbsp;&raquo; &laquo;&nbsp;végétal&nbsp;&raquo; &laquo;&nbsp;plant based&nbsp;&raquo; trompeuse",
    description:
      "À utiliser quand un produit affiche un logo ou une mention vegan/végétalien, indique végétal ou plant based, etc.. mais contient des ingrédients d'origine animale.",
    text: `Bonjour,

Je souhaite signaler le produit [NOM DU PRODUIT] de la marque [MARQUE] (code-barres : [CODE-BARRES]), disponible à [NOM DU MAGASIN].
Ce produit affiche une mention « végétal » sur son emballage. Cependant, sa liste d'ingrédients contient [INGRÉDIENT ANIMAL], un ingrédient d'origine animale incompatible avec cette allégation.
Cette mention trompeuse peut induire en erreur les consommateurs cherchant à éviter les produits d'origine animale.

Pièces jointes : photo du recto du produit (mention visible), photo de la liste des ingrédients.

Cordialement`,
  },
];

type TemplateCardProps = {
  id: string;
  label: string;
  description: string;
  text: string;
  isOpen: boolean;
  onToggle: () => void;
};

const TemplateCard = ({ id, label, description, text, isOpen, onToggle }: TemplateCardProps) => {
  const placeholders = extractPlaceholders(text);
  const [fields, setFields] = useState<Record<string, string>>({});
  const [customText, setCustomText] = useState<string | null>(null);

  const computedText = applyFields(text, fields);
  const displayedText = customText ?? computedText;

  const handleFieldChange = (key: string, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setCustomText(null);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`template-${id}`}
      >
        <div className="flex flex-col gap-0.5">
          <span className="font-semibold text-brand-700"><Markup content={label} /></span>
          <span className="text-sm text-gray-500">{description}</span>
        </div>
        <span
          className={clsx(
            "text-brand-500 text-xl leading-none transition-transform duration-200 shrink-0",
            isOpen ? "rotate-45" : "rotate-0"
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {isOpen && (
        <div id={`template-${id}`} className="px-5 pb-5 flex flex-col gap-4 border-t border-gray-100">
          {placeholders.length > 0 && (
            <>
              <p className="text-xs text-gray-400 mt-4">Remplir ces champs modifiera directement le texte à copier.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {placeholders.map((key) => (
                  <div key={key} className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {key}
                    </label>
                    <input
                      type="text"
                      value={fields[key] ?? ""}
                      onChange={(e) => handleFieldChange(key, e.target.value)}
                      placeholder={`[${key}]`}
                      className="px-3 py-2 text-sm rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent placeholder:text-gray-300"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          <textarea
            value={displayedText}
            onChange={(e) => setCustomText(e.target.value)}
            rows={10}
            className="mt-2 p-4 bg-gray-50 rounded-lg text-sm text-gray-700 leading-relaxed font-sans border border-gray-200 w-full resize-y focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
          />

          <div className="flex items-center justify-between gap-4">
            <div className="ml-auto">
              <CopyButton text={displayedText} label="Copier ce modèle" variant="primary" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SignalementTemplates = () => {
  const [open, setOpen] = useState<string>(templates[0].id);

  return (
    <section>
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-600 mb-2">
          Modèle de texte à copier
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Remplissez les champs pour personnaliser le modèle, modifiez-le
          directement si besoin, puis copiez-le dans le formulaire Signal Conso.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {templates.map(({ id, label, description, text }) => (
          <TemplateCard
            key={id}
            id={id}
            label={label}
            description={description}
            text={text}
            isOpen={open === id}
            onToggle={() => setOpen(open === id ? "" : id)}
          />
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Vous pouvez adapter le modèle selon votre situation afin d&apos;apporter plus de précisions. Un signalement précis et étayé a plus de chances d&apos;être
        traité par la DGCCRF.
      </p>
    </section>
  );
};

export default SignalementTemplates;
