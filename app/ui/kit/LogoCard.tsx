import { Download } from "lucide-react";
import Image from "next/image";

interface LogoCardProps {
  title: string;
  description: string;
  formats: { label: string; href: string }[];
  preview: { src: string; dark: boolean };
}

const LogoCard = ({ title, description, formats, preview }: LogoCardProps) => (
  <div className="flex flex-col gap-4 border border-brand-100 rounded-lg p-6 hover:shadow-md transition-shadow">
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
      <p className="text-sm text-gray-600 leading-relaxed mt-1">{description}</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {formats.map((f) => (
        <a
          key={f.label}
          href={f.href}
          download
          className="inline-flex items-center gap-2 bg-brand-600 text-white text-sm px-4 py-2 rounded hover:bg-brand-700 transition-colors"
        >
          <Download className="size-4" aria-hidden="true" />
          Télécharger ({f.label})
        </a>
      ))}
    </div>
  </div>
);

export default LogoCard;
