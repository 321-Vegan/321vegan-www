import { ComponentPropsWithoutRef } from "react";
import Icon from "./Icon";

interface TagProps extends ComponentPropsWithoutRef<"div"> {
  icon: string;
  color?: string;
  wrapperClass?: string;
}

interface TagColors {
  [key: string]: string;
}

const tagColors: TagColors = {
  brand: "text-brand-600 bg-brand-50 border-brand-200",
  red: "text-red-600 bg-red-50 border-red-200",
  orange: "text-orange-600 bg-orange-50 border-orange-200",
  amber: "text-amber-600 bg-amber-50 border-amber-200",
  yellow: "text-yellow-600 bg-yellow-50 border-yellow-200",
  indigo: "text-indigo-600 bg-indigo-50 border-indigo-200",
  cyan: "text-cyan-600 bg-cyan-50 border-cyan-200",
  sky: "text-sky-600 bg-sky-50 border-sky-200",
  emerald: "text-emerald-600 bg-emerald-50 border-emerald-200",
  lime: "text-lime-600 bg-lime-50 border-lime-200",
  teal: "text-teal-600 bg-teal-50 border-teal-200",
  violet: "text-violet-600 bg-violet-50 border-violet-200",
  purple: "text-purple-600 bg-purple-50 border-purple-200",
  pink: "text-pink-600 bg-pink-50 border-pink-200",
  rose: "text-rose-600 bg-rose-50 border-rose-200",
  gray: "text-gray-600 bg-gray-50 border-gray-200",
};

const Tag = ({ children, icon, color, wrapperClass, ...props }: TagProps) => {
  return (
    <div
      className={`inline-flex items-center gap-2 text-sm font-medium rounded-full px-3 py-1 w-fit border ${tagColors[color || "brand"]} ${wrapperClass}`}
      {...props}
    >
      <Icon name={icon} className="size-4" aria-hidden="true" />
      {children}
    </div>
  );
};

export default Tag;
