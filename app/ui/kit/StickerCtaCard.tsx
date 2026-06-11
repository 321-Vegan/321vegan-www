import { ArrowUpRight, ImagePlus } from "lucide-react";
import Link from "next/link";
import { STICKER_PREVIEW_BOX } from "@/app/ui/kit/StickerCard";

const StickerCtaCard = () => (
  <div className="group flex flex-col gap-4 border border-brand-50 rounded-lg p-6 shadow-md hover:-translate-y-1 transition-all duration-500">
    <div className={STICKER_PREVIEW_BOX}>
      <ImagePlus
        className="size-12 text-brand-400 group-hover:text-brand-600 group-hover:scale-110 transition-all duration-500"
        aria-hidden="true"
      />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-lg">Votre sticker ici&nbsp;?</h3>
      <p className="text-sm text-gray-600 leading-relaxed mt-1">
        Vous voulez nous aider et proposer un visuel qui participera à faire
        connaître l&apos;appli&nbsp;?
      </p>
    </div>
    <Link
      href="/contact"
      className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-brand-600 after:bg-brand-600 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 cursor-pointer w-full mt-auto"
    >
      Contactez-nous
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </Link>
  </div>
);

export default StickerCtaCard;
