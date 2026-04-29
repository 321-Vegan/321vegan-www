import { signalConsoChecklistData } from "@/assets/assets";
import Card from "@/app/ui/components/Card";

const SignalementChecklist = () => {
  return (
    <div className="grid grid-cols-auto gap-6">
      {signalConsoChecklistData.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default SignalementChecklist;
