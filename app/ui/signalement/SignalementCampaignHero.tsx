import Link from "next/link";
import { ArrowDown, Megaphone, ArrowLeft } from "lucide-react";
import { Campaign } from "@/assets/campaigns";

const SignalementCampaignHero = ({ campaign }: { campaign: Campaign }) => {
  return (
    <header className="flex flex-col gap-6">
      <Link
        href="/outil-signalement"
        className="inline-flex items-center gap-2 text-sm text-brand-500 hover:text-brand-700 transition-colors w-fit"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Guide général
      </Link>

      <div className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-3 py-1 w-fit">
        <Megaphone className="size-4" aria-hidden="true" />
        Campagne en cours
      </div>

      <h1 className="text-4xl sm:text-5xl text-brand-600 font-extrabold leading-tight">
        {campaign.campaignTitle}
      </h1>

      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          Produit concerné
        </p>
        <div className="inline-flex flex-wrap gap-3 text-sm">
          <span className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-3 py-1">
            {campaign.productName}
          </span>
          <span className="bg-gray-100 border border-gray-200 text-gray-700 rounded-lg px-3 py-1">
            {campaign.brand}
          </span>
          {campaign.barcode && (
            <span className="bg-gray-100 border border-gray-200 text-gray-500 rounded-lg px-3 py-1 font-mono">
              {campaign.barcode}
            </span>
          )}
        </div>
      </div>

      <p className="text-lg leading-relaxed text-gray-700">
        {campaign.campaignIntro}
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

export default SignalementCampaignHero;
