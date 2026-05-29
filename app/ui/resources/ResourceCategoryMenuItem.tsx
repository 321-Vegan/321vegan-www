import { ComponentPropsWithoutRef } from "react";
import Icon from "@/app/ui/components/Icon";

interface TagProps extends ComponentPropsWithoutRef<"div"> {
  id: string;
  icon: string;
  checked: boolean;
  color?: string;
  wrapperClass?: string;
}

interface TagColors {
  [key: string]: string;
}

const tagColors: TagColors = {
  brand:
    "text-brand-600 bg-brand-50 border-brand-200 peer-checked:border-brand-600 hover:border-brand-600",
  red: "text-red-600 bg-red-50 border-red-200 peer-checked:border-red-600 hover:border-red-600",
  orange:
    "text-orange-600 bg-orange-50 border-orange-200 peer-checked:border-orange-600 hover:border-orange-600",
  amber:
    "text-amber-600 bg-amber-50 border-amber-200 peer-checked:border-amber-600 hover:border-amber-600",
  yellow:
    "text-yellow-600 bg-yellow-50 border-yellow-200 peer-checked:border-yellow-600 hover:border-yellow-600",
  indigo:
    "text-indigo-600 bg-indigo-50 border-indigo-200 peer-checked:border-indigo-600 hover:border-indigo-600",
  cyan: "text-cyan-600 bg-cyan-50 border-cyan-200 peer-checked:border-cyan-600 hover:border-cyan-600",
  sky: "text-sky-600 bg-sky-50 border-sky-200 peer-checked:border-sky-600 hover:border-sky-600",
  emerald:
    "text-emerald-600 bg-emerald-50 border-emerald-200 peer-checked:border-emerald-600 hover:border-emerald-600",
  lime: "text-lime-600 bg-lime-50 border-lime-200 peer-checked:border-lime-600 hover:border-lime-600",
  teal: "text-teal-600 bg-teal-50 border-teal-200 peer-checked:border-teal-600 hover:border-teal-600",
  violet:
    "text-violet-600 bg-violet-50 border-violet-200 peer-checked:border-violet-600 hover:border-violet-600",
  purple:
    "text-purple-600 bg-purple-50 border-purple-200 peer-checked:border-purple-600 hover:border-purple-600",
  pink: "text-pink-600 bg-pink-50 border-pink-200 peer-checked:border-pink-600 hover:border-pink-600",
  rose: "text-rose-600 bg-rose-50 border-rose-200 peer-checked:border-rose-600 hover:border-rose-600",
  gray: "text-gray-600 bg-gray-50 border-gray-200 peer-checked:border-gray-600 hover:border-gray-600",
};
const ResourceCategoryMenuItem = ({
  id,
  children,
  icon,
  color,
  checked,
  wrapperClass,
  onChange,
  ...props
}: TagProps) => {
  return (
    <div className={`flex items-center ${wrapperClass}`}>
      <input
        type="radio"
        id={id}
        name="tag"
        className="hidden peer"
        onChange={onChange}
        checked={checked}
        {...props}
      />
      <label
        htmlFor={id}
        className={`select-none cursor-pointer inline-flex items-center gap-2 text-sm font-medium rounded-full px-3 py-1 w-fit border ${tagColors[color || "brand"]} peer-checked:-translate-y-1 peer-checked:scale-[1.1] hover:-translate-y-1 hover:scale-[1.1] transition-all duration-500`}
      >
        <Icon name={icon} className="size-4" />
        {children}
      </label>
    </div>
  );
};

export default ResourceCategoryMenuItem;
