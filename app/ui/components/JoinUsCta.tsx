import { PropsWithChildren } from "react";
import { socialNetworkLinks } from "@/assets/assets";
import Image from "next/image";

interface JoinUsCtaProps extends PropsWithChildren {
  title?: string;
  bgColor?: string;
  titleColor?: string;
  textColor?: string;
  btnColor?: string;
  btnTextColor?: string;
  wrapperClass?: string;
}

const JoinUsCta = ({
  title,
  bgColor = "bg-brand-500",
  titleColor = "text-white",
  textColor = "text-white/95",
  btnColor = "bg-brand-700 after:bg-brand-700",
  btnTextColor = "text-white",
  wrapperClass = "",
  children,
}: JoinUsCtaProps) => {
  return (
    <div
      className={`text-center rounded-xl p-8 shadow-sm ${bgColor} ${wrapperClass}`}
    >
      <h2 className={`text-2xl font-bold mb-3 ${titleColor}`}>
        {title || <>Envie de participer au projet&nbsp;?</>}
      </h2>
      <p className={`mb-6 ${textColor}`}>
        {children || (
          <>
            Rejoignez l&apos;équipe de contributrices et contributeurs afin
            d&apos;aider à rendre le véganisme facile pour tout le monde. Aucune
            contribution n&apos;est trop petite &mdash; qu&apos;il s&apos;agisse
            de corriger une coquille, d&apos;améliorer la documentation, de
            signaler des bogues ou de proposer une fonctionnalité, même un petit
            tofu fait une grande différence 🙌.
          </>
        )}
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <a
          href={socialNetworkLinks.discord}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 ${btnTextColor} ${btnColor} after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 w-full md:w-auto`}
        >
          Rejoignez le serveur Discord
          <Image
            src="/discord-symbol-white.png"
            alt=""
            width={528}
            height={400}
            className="w-4 h-3"
          />
        </a>
        <a
          href={socialNetworkLinks.buymeacoffee}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-yellow-600 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg after:bg-yellow-600 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 w-full md:w-auto"
        >
          Offrez un tofu à 321 Vegan{" "}
          <span role="img" aria-label="Représentation d'un tofu">
            🫛
          </span>
        </a>
      </div>
    </div>
  );
};

export default JoinUsCta;
