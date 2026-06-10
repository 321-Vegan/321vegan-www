import { ImagePlus } from "lucide-react";
import Link from "next/link";
import { STICKER_PREVIEW_HEIGHT } from "@/app/ui/kit/StickerCard";

const StickerCtaCard = () => (
  <div className="group flex flex-col gap-4 border-2 border-dashed border-brand-200 rounded-lg p-6 hover:-translate-y-1 hover:border-brand-400 transition-all duration-500">
    <div
      className={`rounded-md bg-brand-50/50 ${STICKER_PREVIEW_HEIGHT} p-8 flex items-center justify-center`}
    >
      <ImagePlus
        className="size-12 text-brand-300 group-hover:text-brand-500 group-hover:scale-110 transition-all duration-500"
        aria-hidden="true"
      />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-lg">Votre sticker ici&nbsp;?</h3>
      <p className="text-sm text-gray-600 leading-relaxed mt-1">
        Vous voulez nous aider et proposer un visuel qui participera à faire connaître l&apos;appli ?
      </p>
    </div>
    <Link
      href="/contact"
      className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 border-2 border-brand-600 text-brand-700 hover:bg-brand-600 hover:text-white transition-colors duration-300 cursor-pointer w-full mt-auto"
    >
      Nous contacter
    </Link>
  </div>
);

export default StickerCtaCard;
