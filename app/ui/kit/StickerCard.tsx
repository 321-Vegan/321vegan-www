import Image from "next/image";
import CreditLine, { Credit } from "@/app/ui/kit/CreditLine";
import DownloadButton from "@/app/ui/kit/DownloadButton";

// Hauteur partagée avec StickerCtaCard pour garder les cartes alignées dans la grille.
export const STICKER_PREVIEW_HEIGHT = "h-56";

interface StickerCardProps {
  title: string;
  description: string;
  src: string;
  credit?: Credit;
}

const StickerCard = ({
  title,
  description,
  src,
  credit,
}: StickerCardProps) => (
  <div className="group flex flex-col gap-4 border border-brand-50 rounded-lg p-6 shadow-md hover:-translate-y-1 transition-all duration-500">
    <div
      className={`rounded-md bg-brand-50 bg-[radial-gradient(rgba(22,101,52,0.18)_1.5px,transparent_1.5px)] bg-size-[18px_18px] ${STICKER_PREVIEW_HEIGHT} p-3 flex items-center justify-center overflow-hidden`}
    >
      <Image
        src={src}
        alt={title}
        width={600}
        height={457}
        className="object-contain w-full h-full -rotate-3 drop-shadow-[0_8px_16px_rgba(28,25,23,0.25)] group-hover:rotate-0 group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mt-1">
        {description}
      </p>
      {credit && <CreditLine {...credit} />}
    </div>
    <DownloadButton href={src}>Télécharger (PNG)</DownloadButton>
  </div>
);

export default StickerCard;
