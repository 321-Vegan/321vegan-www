import { PropsWithChildren } from "react";
import { Markup } from "interweave";
import { CampaignDataType } from "@/types/definitions";
import CampaignImage from "./CampaignImage";
import CampainText from "./CampainText";

interface CampaignDlProps {
  campaign: CampaignDataType;
}

const CampaignDl = ({
  campaign: {
    productName,
    brand,
    barcode,
    slug,
    photoProduct,
    photoIngredients,
    campaignText,
    campaignIntro,
  },
}: CampaignDlProps) => {
  return (
    <dl className="grid md:grid-cols-[15rem_1fr] items-center md:items-start gap-6 ">
      <CampaignDt>Problème relevé&nbsp;:</CampaignDt>
      <dd className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 border border-red-700 bg-red-100 text-red-700 w-full">
        <Markup content={campaignIntro} />
      </dd>
      <CampaignDt>Produit concerné&nbsp;:</CampaignDt>
      <CampaignDd>{productName}</CampaignDd>
      <CampaignDt>Marque&nbsp;:</CampaignDt>
      <CampaignDd>{brand}</CampaignDd>

      {barcode && (
        <>
          <CampaignDt>Code-barres&nbsp;:</CampaignDt>
          <CampaignDd>{barcode}</CampaignDd>
        </>
      )}

      <CampaignDt>
        <div className="inline-flex flex-col gap-3 self-start text-sm font-medium">
          <span className="flex">Texte pour le signalement&nbsp;:</span>
          <span className="flex italic normal-case text-left leading-relaxed">
            Copiez ce texte et collez-le tel quel dans le champ de description
            du formulaire Signal Conso.
          </span>
        </div>
      </CampaignDt>
      <CampaignDd>
        <CampainText content={campaignText} />
      </CampaignDd>

      <CampaignDt>
        <div className="inline-flex flex-col gap-3 self-start text-sm font-medium">
          <span className="flex">Photos du produit&nbsp;:</span>
          <span className="flex italic normal-case text-left">
            Téléchargez ces photos et joignez-les à votre signalement.
          </span>
        </div>
      </CampaignDt>
      <dd className="w-full grid grid-cols-1 gap-3 md:grid-cols-2 ">
        <CampaignImage
          img={photoProduct}
          filename={`${slug}-recto`}
          alt={`Recto du produit ${productName}`}
          caption="Recto du produit"
        />
        <CampaignImage
          img={photoIngredients}
          filename={`${slug}-ingredients`}
          alt={`Liste des ingrédients de ${productName}`}
          caption="Liste des ingrédients"
        />
      </dd>
    </dl>
  );
};

const CampaignDt = ({ children }: PropsWithChildren) => {
  return (
    <dt className="inline-flex text-sm font-medium text-brand-700 uppercase tracking-wide">
      {children}
    </dt>
  );
};
const CampaignDd = ({ children }: PropsWithChildren) => {
  return (
    <dd className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 border border-brand-700 bg-brand-100 text-brand-700 w-full">
      {children}
    </dd>
  );
};

export default CampaignDl;
