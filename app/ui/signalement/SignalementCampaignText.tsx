"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import clsx from "clsx";

const SignalementCampaignText = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section>
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-600 mb-2">
          Texte à copier-coller
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Copiez ce texte et collez-le tel quel dans le champ de description du
          formulaire Signal Conso.
        </p>
      </header>

      <div className="rounded-xl border border-brand-300 bg-white shadow-sm overflow-hidden">
        <pre className="p-6 text-sm text-gray-700 whitespace-pre-wrap leading-relaxed font-sans">
          {text}
        </pre>
        <div className="flex justify-end px-6 py-4 border-t border-gray-100 bg-gray-50">
          <button
            onClick={handleCopy}
            className={clsx(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
              copied
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-brand-600 text-white hover:bg-brand-700"
            )}
          >
            {copied ? (
              <>
                <Check className="size-4" aria-hidden="true" />
                Copié !
              </>
            ) : (
              <>
                <Copy className="size-4" aria-hidden="true" />
                Copier le texte
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignalementCampaignText;
