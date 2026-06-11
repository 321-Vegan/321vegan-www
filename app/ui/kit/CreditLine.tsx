import { Palette } from "lucide-react";

export interface Credit {
  name: string;
  href: string;
}

const CreditLine = ({ name, href }: Credit) => (
  <p className="text-xs leading-relaxed text-gray-500 mt-4 flex items-baseline gap-2">
    <Palette className="size-3.5 self-center" aria-hidden="true" />
    Créé par{" "}
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="pb-1 inline-flex items-center gap-2 border-b-2 border-brand-600 cursor-pointer hover:shadow-[0_1rem_2rem] hover:bg-brand-600 hover:text-white hover:-translate-y-1 focus:bg-brand-600 focus:text-white active:bg-brand-600 active:text-white transition-transform duration-300"
    >
      {name}
    </a>
  </p>
);

export default CreditLine;
