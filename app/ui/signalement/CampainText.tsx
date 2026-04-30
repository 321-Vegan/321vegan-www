import { Markup } from "interweave";
import CopyButton from "@/app/ui/components/CopyButton";

interface CampainTextProps {
  content: string;
}

const CampainText = ({ content }: CampainTextProps) => {
  return (
    <div className="flex flex-col justify-center gap-4 ">
      <Markup content={content} className="text-left font-medium leading-7" />
      <CopyButton
        text={content}
        className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-brand-700 after:bg-brand-700 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 cursor-pointer"
      >
        Copier le texte
      </CopyButton>
    </div>
  );
};

export default CampainText;
