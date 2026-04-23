import { Metadata } from "next";
import SignalementHero from "@/app/ui/signalement/SignalementHero";
import SignalementChecklist from "@/app/ui/signalement/SignalementChecklist";
import SignalementSteps from "@/app/ui/signalement/SignalementSteps";
import SignalementTemplates from "@/app/ui/signalement/SignalementTemplates";

export const metadata: Metadata = {
  title: "Outil de signalement Signal Conso",
  description:
    "Guide pas-à-pas pour signaler un produit sur Signal Conso. Modèle de texte prêts à copier, captures d'écran du processus et liste des éléments à préparer.",
};

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-6 py-16 mx-auto xl:px-0 mt-5 space-y-24">
        <SignalementHero />
        <SignalementChecklist />
        <SignalementSteps />
        <SignalementTemplates />
      </div>
    </div>
  );
}
