import Image from "next/image";
import CreditLine, { Credit } from "@/app/ui/kit/CreditLine";
import DownloadButton from "@/app/ui/kit/DownloadButton";

interface LogoCardProps {
  title: string;
  description: string;
  formats: { label: string; href: string }[];
  preview: { src: string; dark: boolean };
  credit?: Credit;
}

const LogoCard = ({
  title,
  description,
  formats,
  preview,
  credit,
}: LogoCardProps) => (
  <div className="flex flex-col gap-4 border border-brand-50 rounded-lg p-6 shadow-md hover:-translate-y-1 transition-all duration-500">
    <div
      className={`rounded-md p-4 flex items-center justify-center ${preview.dark ? "bg-brand-800" : "bg-brand-50"}`}
    >
      <Image
        src={preview.src}
        alt={title}
        width={120}
        height={120}
        className="object-contain h-20 w-auto"
      />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mt-1">
        {description}
      </p>
      {credit && <CreditLine {...credit} />}
    </div>
    <div className="flex flex-wrap gap-2">
      {formats.map((f) => (
        <DownloadButton key={f.label} href={f.href}>
          Télécharger ({f.label})
        </DownloadButton>
      ))}
    </div>
  </div>
);

export default LogoCard;
