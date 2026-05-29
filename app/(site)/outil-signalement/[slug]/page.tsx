import { Metadata } from "next";
import { notFound } from "next/navigation";
import { campaigns } from "@/assets/campaigns";
import { Markup } from "interweave";

import AppStoresCta from "@/app/ui/components/AppStoresCta";
import Tag from "@/app/ui/components/Tag";
import CampaignDl from "@/app/ui/signalement/CampaignDl";
import SignalConsoBtns from "@/app/ui/signalement/SignalConsoBtns";
import CampaignShareCta from "@/app/ui/signalement/CampaignShareCta";
import StepByStepGuideSection from "@/app/ui/signalement/StepByStepGuideSection";

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
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 space-y-24 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 py-24 mx-auto xl:px-0 mt-5">
        <header>
          <Tag icon="megaphone" color="orange" wrapperClass="mb-6">
            Campagne en cours
          </Tag>

          <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
            Campagne &laquo;&nbsp;{campaign.navLabel}&nbsp;&raquo;
          </h1>
        </header>

        <main>
          <section>
            <h2 className="mb-12 text-lg font-merriweather">
              <Markup content={campaign.campaignTitle} />
            </h2>

            <div className="lg:p-4 p-2 flex flex-col gap-6 flex-2 mb-12">
              <p className="text-justify leading-relaxed mb-5">
                <strong>
                  Participez à notre campagne de signalement &laquo;&nbsp;
                  {campaign.navLabel}&nbsp;&raquo; auprès de Signal Conso
                </strong>
                , le service officiel de la Direction générale de la
                concurrence, de la consommation et de la répression des fraudes
                (DGCCRF),{" "}
                <strong>
                  afin d&apos;aider à améliorer la protection des consommateurs
                  et consommatrices en informant la répression des fraudes
                </strong>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="mt-16 mb-12 text-lg font-merriweather">
              Éléments pour le signalement&nbsp;:
            </h2>
            <p className="md:text-justify text-balance mb-16 leading-relaxed">
              Téléchargez les photos du produit et copiez le texte pour le
              signalement.
            </p>

            <div className="text-center rounded-xl p-8 shadow-sm bg-brand-50">
              <CampaignDl campaign={campaign} />
              <hr className="border-0 border-b border-brand-500 mt-10 mb-8 mx-8" />
              <p className="mb-6 text-brand-900 leading-relaxed">
                Téléchargez les photos du produit, copiez le texte pour le
                signalement, puis rendez-vous sur le site web
                signal.conso.gouv.fr depuis votre navigateur et renseignez le
                formulaire en suivant notre guide pas-à-pas. Vous n&apos;avez
                pas besoin de créer de compte pour faire le signalement&nbsp;!
              </p>
              <SignalConsoBtns />
            </div>
          </section>

          <section className="my-16">
            <CampaignShareCta />
          </section>

          <StepByStepGuideSection campaign={campaign} />

          <section className="mt-16 ">
            <AppStoresCta
              bgColor="bg-brand-50"
              titleColor="text-brand-600"
              textColor="text-brand-900"
            />
          </section>
        </main>
      </div>
    </div>
  );
}
