import Link from "next/link";
import { ArrowDown, Flag } from "lucide-react";

const SignalementHero = () => {
  return (
    <header className="flex flex-col gap-6">
      <div className="inline-flex items-center gap-2 text-brand-500 text-sm font-medium">
        <Flag className="size-4" aria-hidden="true" />
        <span>Outil militant</span>
      </div>

      <h1 className="text-4xl sm:text-5xl text-brand-600 font-extrabold leading-tight">
        Signaler un produit sur Signal Conso
      </h1>

      <p className="text-lg leading-relaxed text-gray-700">
        Un produit affiché comme &ldquo;vegan&rdquo; qui contient des ingrédients animaux ?
        Une mention trompeuse sur l&apos;emballage ? Signal Conso est le
        service officiel de la répression des fraudes (DGCCRF) pour signaler ces
        problèmes. Ce guide vous accompagne étape par étape.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="#guide"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors duration-200"
        >
          <ArrowDown className="size-4" aria-hidden="true" />
          Voir le guide
        </Link>
        <a
          href="https://signal.conso.gouv.fr/fr/achat-magasin/faire-un-signalement"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-brand-600 text-brand-600 font-semibold rounded-xl hover:bg-brand-50 transition-colors duration-200"
        >
          Accéder à Signal Conso
        </a>
      </div>
    </header>
  );
};

export default SignalementHero;
