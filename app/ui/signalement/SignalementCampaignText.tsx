"use client";

import CopyButton from "@/app/ui/signalement/CopyEanButton";

const SignalementCampaignText = ({ text }: { text: string }) => {
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
        <p className="p-6 text-sm text-gray-700 whitespace-pre-wrap leading-relaxed font-sans">
          {text}
        </p>
        <div className="flex justify-end px-6 py-4 border-t border-gray-100 bg-gray-50">
          <CopyButton text={text} label="Copier ce texte" variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default SignalementCampaignText;
