import { Markup } from "interweave";
import { SquareArrowOutUpRight } from "lucide-react";
import { ResourcesDataType } from "@/types/definitions";
import { resourceCategoriesData } from "@/assets/assets";
import clsx from "clsx";
import Icon from "@/app/ui/components/Icon";
import Image from "next/image";

interface ResourceItemProps {
  resource: ResourcesDataType;
}

const ResourceItem = ({
  resource: { name, description, link, category_slug, logo },
}: ResourceItemProps) => {
  const category = resourceCategoriesData.find((c) => c.slug === category_slug);
  const color = category?.color || "brand";
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 rounded-lg shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:px-10"
      aria-label="Consulter"
    >
      <span
        className={clsx(
          "absolute top-10 z-0 size-20 rounded-full transition-all duration-300 group-hover:scale-[20]",
          {
            "bg-brand-950": color === "brand",
            "bg-red-950": color === "red",
            "bg-orange-950 ": color === "orange",
            "bg-amber-950 ": color === "amber",
            "bg-yellow-950": color === "yellow",
            "bg-indigo-950": color === "indigo",
            "bg-cyan-950 ": color === "cyan",
            "bg-sky-950": color === "sky",
            "bg-emerald-950": color === "emerald",
            "bg-lime-950 ": color === "lime",
            "bg-teal-950 ": color === "teal",
            "bg-violet-950": color === "violet",
            "bg-purple-950": color === "purple",
            "bg-pink-950": color === "pink",
            "bg-rose-950": color === "rose",
            "bg-gray-950": color === "gray",
          },
        )}
      ></span>
      <div className="relative z-10 mx-auto max-w-md h-full flex flex-col">
        <div className="grid grid-cols-[5rem_1fr] items-center gap-4">
          <span
            className={clsx(
              "grid size-20 place-items-center rounded-full transition-all duration-300",
              {
                "bg-brand-500 group-hover:bg-brand-400": color === "brand",
                "bg-red-500 group-hover:bg-red-400": color === "red",
                "bg-orange-500 group-hover:bg-orange-400": color === "orange",
                "bg-amber-500 group-hover:bg-amber-400": color === "amber",
                "bg-yellow-500 group-hover:bg-yellow-400": color === "yellow",
                "bg-indigo-500 group-hover:bg-indigo-400": color === "indigo",
                "bg-cyan-500 group-hover:bg-cyan-400": color === "cyan",
                "bg-sky-500 group-hover:bg-sky-400": color === "sky",
                "bg-emerald-500 group-hover:bg-emerald-400":
                  color === "emerald",
                "bg-lime-500 group-hover:bg-lime-400": color === "lime",
                "bg-teal-500 group-hover:bg-teal-400": color === "teal",
                "bg-violet-500 group-hover:bg-violet-400": color === "violet",
                "bg-purple-500 group-hover:bg-purple-400": color === "purple",
                "bg-pink-500 group-hover:bg-pink-400": color === "pink",
                "bg-rose-500 group-hover:bg-rose-400": color === "rose",
                "bg-gray-500 group-hover:bg-gray-400": color === "gray",
              },
            )}
          >
            {logo ? (
              <Image
                src={logo}
                alt=""
                className="object-content size-20 rounded-full bg-white"
              />
            ) : (
              <Icon
                name={category?.icon || "shapes"}
                className="size-10 text-white transition-all "
              />
            )}
          </span>

          <span
            className={clsx(
              "text-lg font-bold group-hover:text-white transition-all",
              {
                "text-brand-500": color === "brand",
                "text-red-500": color === "red",
                "text-orange-500": color === "orange",
                "text-amber-500": color === "amber",
                "text-yellow-500": color === "yellow",
                "text-indigo-500": color === "indigo",
                "text-cyan-500": color === "cyan",
                "text-sky-500": color === "sky",
                "text-emerald-500": color === "emerald",
                "text-lime-500": color === "lime",
                "text-teal-500": color === "teal",
                "text-violet-500": color === "violet",
                "text-purple-500": color === "purple",
                "text-pink-500": color === "pink",
                "text-rose-500": color === "rose",
                "text-gray-500": color === "gray",
              },
            )}
          >
            {name}
          </span>
        </div>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p>
            <Markup content={description} />
          </p>
        </div>
        <div className="mt-auto pt-5 text-base font-semibold leading-7">
          <span
            className={clsx(
              "text-sm inline-flex items-center gap-2 px-1 py-2 transition-all duration-300 group-hover:text-white",
              {
                "text-brand-500": color === "brand",
                "text-red-500": color === "red",
                "text-orange-500": color === "orange",
                "text-amber-500": color === "amber",
                "text-yellow-500": color === "yellow",
                "text-indigo-500": color === "indigo",
                "text-cyan-500": color === "cyan",
                "text-sky-500": color === "sky",
                "text-emerald-500": color === "emerald",
                "text-lime-500": color === "lime",
                "text-teal-500": color === "teal",
                "text-violet-500": color === "violet",
                "text-purple-500": color === "purple",
                "text-pink-500": color === "pink",
                "text-rose-500": color === "rose",
                "text-gray-500": color === "gray",
              },
            )}
          >
            Consulter
            <SquareArrowOutUpRight
              className="size-4 text-current group-hover:text-current"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </a>
  );
};

export default ResourceItem;
