import { signalConsoTemplatesData } from "@/assets/assets";
import TemplateMessageItem from "@/app/ui/signalement/TemplateMessageItem";

const TemplateMessageList = () => {
  return (
    <div className="space-y-4">
      {signalConsoTemplatesData.map((template, index) => (
        <TemplateMessageItem
          key={template.id}
          template={template}
          index={index}
        />
      ))}
    </div>
  );
};

export default TemplateMessageList;
