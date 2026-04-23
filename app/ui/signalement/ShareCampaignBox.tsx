"use client";

import { Info, Share2 } from "lucide-react";
import InlineLink from "@/app/ui/components/InlineLink";
import CopyButton from "./CopyEanButton";

const ShareCampaignBox = () => (
  <div className="rounded-xl border border-brand-200 bg-brand-50 p-6 flex flex-col gap-4">
    <div className="flex items-center gap-2 text-brand-700">
      <Info className="size-5 shrink-0" aria-hidden="true" />
      <span className="font-semibold text-base">Aidez-nous à suivre les résultats</span>
    </div>

    <div className="flex flex-col gap-3 text-sm text-gray-700 leading-relaxed">
      <p>
        Si vous recevez une réponse de la marque ou de la DGCCRF suite à votre signalement,{" "}
        <strong>merci de nous la partager</strong> via notre{" "}
        <InlineLink href="/contact">formulaire de contact</InlineLink>
        {" "}ou sur Instagram{" "}
        <InlineLink href="https://www.instagram.com/321vegan.app" target="_blank" rel="noopener noreferrer">@321vegan.app</InlineLink>
      </p>

      <div className="border-t border-brand-200 pt-3 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-start gap-2 flex-1">
          <Share2 className="size-4 shrink-0 mt-0.5 text-brand-500" aria-hidden="true" />
          <p className="font-medium text-gray-800">
            Plus on est nombreux·ses, plus c&apos;est efficace&nbsp;: partagez cette campagne autour de vous&nbsp;!
          </p>
        </div>
        <CopyButton
          text={() => window.location.href}
          label="Copier le lien de la campagne"
          variant="primary"
        />
      </div>
    </div>
  </div>
);

export default ShareCampaignBox;
