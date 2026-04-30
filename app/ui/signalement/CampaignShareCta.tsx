"use client";

import { usePathname } from "next/navigation";
import { socialNetworkLinks } from "@/assets/assets";
import Link from "next/link";
import CopyButton from "@/app/ui/components/CopyButton";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface CampaignShareCtaProps {
  wrapperClass?: string;
}

const CampaignShareCta = ({ wrapperClass = "" }: CampaignShareCtaProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`text-center rounded-xl p-8 shadow-sm bg-brand-50 ${wrapperClass}`}
    >
      <h2 className="text-2xl font-bold mb-3 text-brand-600">
        Aidez-nous à suivre les résultats&nbsp;!
      </h2>
      <p className="mb-6 text-brand-900 leading-relaxed">
        <>
          Si vous recevez une réponse de la marque ou de la DGCCRF suite à votre
          signalement, merci de nous la partager via notre{" "}
          <Link
            href="/contact"
            className="pb-1 inline-flex items-center gap-2 border-b-2 border-brand-700 cursor-pointer hover:shadow-[0_1rem_2rem] hover:bg-brand-700 hover:text-white hover:-translate-y-1 focus:bg-brand-700 focus:text-brand-700 active:bg-brand-700 active:text-white transition duration-300 relative z-0 hover:after:bg-brand-700 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full hover:after:scale-x-105 hover:after:scale-y-125"
          >
            formulaire de contact
          </Link>{" "}
          ou notre{" "}
          <a
            href={socialNetworkLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="pb-1 inline-flex items-center gap-2 border-b-2 border-brand-700 cursor-pointer hover:shadow-[0_1rem_2rem] hover:bg-brand-700 hover:text-white hover:-translate-y-1 focus:bg-brand-700 focus:text-brand-700 active:bg-brand-700 active:text-white transition duration-300 relative z-0 hover:after:bg-brand-700 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full  hover:after:scale-x-105 hover:after:scale-y-125"
          >
            compte Instagram
          </a>{" "}
          afin que nous puissions assurez le suivi de cette campagne 🙌.
        </>
      </p>

      <hr className="border-0 border-b border-brand-500 my-8 mx-8" />

      <div className="flex flex-col items-center justify-center gap-2">
        <p className="mb-6 text-brand-900 leading-relaxed">
          Plus on est nombreux·ses, plus l&apos;impact est grand&nbsp;: partagez
          cette campagne autour de vous&nbsp;!
        </p>
        <CopyButton
          text={`${baseUrl}${pathname}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-brand-700 after:bg-brand-700 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 w-full md:w-auto"
        >
          Copier le lien de la campagne
        </CopyButton>
      </div>
    </div>
  );
};

export default CampaignShareCta;
