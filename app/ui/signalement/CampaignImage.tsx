import { Download } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface CampaignImageProps {
  img: StaticImageData;
  alt: string;
  filename: string;
  caption?: string;
}

const CampaignImage = ({ img, alt, filename, caption }: CampaignImageProps) => {
  return (
    <figure className="flex flex-col justify-center gap-3 rounded-lg px-6 py-3 leading-7 bg-brand-100 border border-brand-700 text-brand-700">
      <figcaption className="font-medium leading-7">
        {caption || alt}
      </figcaption>
      <Image
        src={img}
        alt={alt}
        className="rounded-xl object-cover shadow-sm w-40 l-auto m-auto"
      />
      <a
        href={img.src}
        download={filename}
        className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-brand-700 after:bg-brand-700 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 cursor-pointer"
      >
        Télécharger
        <Download className="size-4" aria-hidden="true" />
      </a>
    </figure>
  );
};

export default CampaignImage;
