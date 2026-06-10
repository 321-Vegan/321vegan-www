import { Palette } from "lucide-react";

export interface Credit {
  name: string;
  href: string;
}

const CreditLine = ({ name, href }: Credit) => (
  <p className="text-xs leading-relaxed text-gray-500 mt-3 flex items-center gap-1.5">
    <Palette className="size-3.5" aria-hidden="true" />
    Créé par{" "}
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-brand-700 border-b border-brand-600 hover:text-brand-600 transition-colors"
    >
      {name}
    </a>
  </p>
);

export default CreditLine;
