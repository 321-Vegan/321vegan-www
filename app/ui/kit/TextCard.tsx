import { Markup } from "interweave";
import CopyButton from "@/app/ui/components/CopyButton";

interface TextCardProps {
  title: string;
  description: string;
  text: string;
}

const TextCard = ({ title, description, text }: TextCardProps) => (
  <div className="border border-brand-50 shadow-sm hover:-translate-y-1 transition-all duration-500 rounded-lg p-6 flex-1 flex flex-col h-[380px] md:h-[480px]">
    <h3 className="text-brand-900 font-semibold text-lg mb-6 shrink-0">
      {title}{" "}
      <span className="text-sm font-normal text-brand-500">{description}</span>
    </h3>
    <div className="lg:flex-1 lg:min-h-0 flex flex-col h-full gap-4">
      <p className="p-6 text-sm text-brand-600 overflow-y-scroll rounded-md bg-brand-50">
        <Markup content={text} />
      </p>
      <CopyButton
        text={text}
        className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-brand-600 after:bg-brand-600 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 cursor-pointer w-full mt-auto"
      >
        Copier le texte
      </CopyButton>
    </div>
  </div>
);

export default TextCard;
