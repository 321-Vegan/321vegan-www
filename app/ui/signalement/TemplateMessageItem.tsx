import { SignalConsoTemplatesDataType } from "@/types/definitions";
import { Markup } from "interweave";
import { ChevronDown } from "lucide-react";
import TemplateMessageForm from "@/app/ui/signalement/TemplateMessageForm";

interface TemplateMessageItemProps {
  template: SignalConsoTemplatesDataType;
  index: number;
}

const TemplateMessageItem = ({
  template: { label, description, text },
  index,
}: TemplateMessageItemProps) => {
  return (
    <div className="py-5 bg-white/50 rounded-xl shadow-md">
      <details
        className="group p-6 text-left"
        open={index === 0 ? true : false}
      >
        <summary className="grid grid-cols-[1fr_2rem] list-none marker:hidden text-lg font-semibold text-brand-700 cursor-pointer">
          <div className="flex flex-col">
            <span className="font-semibold text-brand-700 ">
              <Markup
                content={label}
                className="border-b-[0.5px] border-brand-700"
              />
            </span>
            <span className="text-sm mt-3">
              <Markup content={description} />
            </span>
          </div>
          <ChevronDown className="transition-transform duration-300 rotate-0 group-open:rotate-180" />
        </summary>
        <div className="group-open:animate-fadeIn mt-3 flex justify-center p-8">
          <TemplateMessageForm text={text} />
        </div>
      </details>
    </div>
  );
};

export default TemplateMessageItem;
