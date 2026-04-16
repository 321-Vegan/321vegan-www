import Image from "next/image";
import { Download } from "lucide-react";
import { Campaign } from "@/assets/campaigns";

const Photo = ({
  src,
  alt,
  caption,
  filename,
}: {
  src: string;
  alt: string;
  caption: string;
  filename: string;
}) => (
  <figure className="flex flex-col gap-3">
    <Image
      src={src}
      alt={alt}
      width={320}
      height={320}
      className="rounded-xl border border-gray-200 object-cover shadow-sm"
    />
    <div className="flex items-center justify-between gap-4">
      <figcaption className="text-sm text-gray-500">{caption}</figcaption>
      <a
        href={src}
        download={filename}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
      >
        <Download className="size-4" aria-hidden="true" />
        Télécharger
      </a>
    </div>
  </figure>
);

const SignalementCampaignPhotos = ({ campaign }: { campaign: Campaign }) => {
  if (!campaign.photoProduct && !campaign.photoIngredients) return null;

  return (
    <section>
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-600 mb-2">
          Photos du produit
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Téléchargez ces photos et joignez-les à votre signalement.
        </p>
      </header>

      <div className="flex flex-wrap gap-6">
        {campaign.photoProduct && (
          <Photo
            src={campaign.photoProduct}
            alt={`Recto du produit ${campaign.productName}`}
            caption="Recto du produit"
            filename={`${campaign.slug}-recto`}
          />
        )}
        {campaign.photoIngredients && (
          <Photo
            src={campaign.photoIngredients}
            alt={`Liste des ingrédients de ${campaign.productName}`}
            caption="Liste des ingrédients"
            filename={`${campaign.slug}-ingredients`}
          />
        )}
      </div>
    </section>
  );
};

export default SignalementCampaignPhotos;
