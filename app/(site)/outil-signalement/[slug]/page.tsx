import { Metadata } from "next";
import { notFound } from "next/navigation";
import { campaigns } from "@/assets/campaigns";
import SignalementCampaignHero from "@/app/ui/signalement/SignalementCampaignHero";
import SignalementCampaignText from "@/app/ui/signalement/SignalementCampaignText";
import SignalementCampaignPhotos from "@/app/ui/signalement/SignalementCampaignPhotos";
import SignalementSteps from "@/app/ui/signalement/SignalementSteps";
import ShareCampaignBox from "@/app/ui/signalement/ShareCampaignBox";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return campaigns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const campaign = campaigns.find((c) => c.slug === slug);
  if (!campaign) return {};
  return {
    title: `Signaler ${campaign.productName} — ${campaign.brand}`,
    description: campaign.campaignIntro,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const campaign = campaigns.find((c) => c.slug === slug);
  if (!campaign) notFound();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-6 py-16 mx-auto xl:px-0 mt-5 space-y-24">
        <SignalementCampaignHero campaign={campaign} />
        <SignalementCampaignText text={campaign.campaignText} />
        <SignalementCampaignPhotos campaign={campaign} />
        <ShareCampaignBox />
        <SignalementSteps
          ean={campaign.barcode}
          campaignText={campaign.campaignText}
          photoProduct={campaign.photoProduct}
          photoIngredients={campaign.photoIngredients}
        />
      </div>
    </div>
  );
}
