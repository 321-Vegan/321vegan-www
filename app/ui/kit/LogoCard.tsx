import { Download } from "lucide-react";
import Image from "next/image";

interface LogoCardProps {
  title: string;
  description: string;
  formats: { label: string; href: string }[];
  preview: { src: string; dark: boolean };
}

const LogoCard = ({ title, description, formats, preview }: LogoCardProps) => (
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
    </div>
    <div className="flex flex-wrap gap-2">
      {formats.map((f) => (
        <a
          key={f.label}
          href={f.href}
          download
          className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-brand-600 after:bg-brand-600 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 cursor-pointer w-full mt-auto"
        >
          <Download className="size-4" aria-hidden="true" />
          Télécharger ({f.label})
        </a>
      ))}
    </div>
  </div>
);

export default LogoCard;
