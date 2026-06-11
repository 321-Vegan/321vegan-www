import Image, { StaticImageData } from "next/image";
import CreditLine, { Credit } from "@/app/ui/kit/CreditLine";
import DownloadButton from "@/app/ui/components/DownloadButton";

export const STICKER_PREVIEW_BOX =
  "rounded-md bg-brand-50 bg-[radial-gradient(rgba(22,101,52,0.18)_1.5px,transparent_1.5px)] bg-size-[18px_18px] h-56 p-3 flex items-center justify-center overflow-hidden";

interface StickerCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  src: string;
  credit?: Credit;
}

const StickerCard = ({
  title,
  description,
  image,
  src,
  credit,
}: StickerCardProps) => (
  <div className="group flex flex-col gap-4 border border-brand-50 rounded-lg p-6 shadow-md hover:-translate-y-1 transition-all duration-500">
    <div className={STICKER_PREVIEW_BOX}>
      <Image
        src={image}
        alt={title}
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
