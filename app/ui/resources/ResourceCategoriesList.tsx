"use client";
import { useState } from "react";
import { resourceCategoriesData, resourcesData } from "@/assets/assets";
import { Markup } from "interweave";
import ResourceCategoryMenuItem from "./ResourceCategoryMenuItem";
import ResourcesList from "./ResourcesList";

const ResourceCategoriesList = () => {
  const [selected, setSelected] = useState("associations");
  const category = resourceCategoriesData.find((c) => c.slug === selected);
  const resources = resourcesData.filter((r) => selected === r.category_slug);
  return (
    <div className="relative w-full mb-10 overflow-hidden py-6 sm:py-12 rounded-lg shadow-lg">
      <div className="w-full rounded-lg flex flex-wrap items-center justify-center gap-[0.8rem] md:gap-5 p-6 mb-6">
        {resourceCategoriesData.map(({ slug, color, name, icon }) => (
          <ResourceCategoryMenuItem
            key={slug}
            id={`category-${slug}`}
            icon={icon}
            color={color}
            onChange={() => setSelected(slug)}
            checked={selected === slug}
          >
            {name}
          </ResourceCategoryMenuItem>
        ))}
      </div>

      <p className="px-3 pb-6 text-center leading-relaxed w-full">
        {category ? (
          <Markup content={category.description} />
        ) : (
          "Toutes nos ressources sur le véganisme et l'antispécisme"
        )}
      </p>

      <ResourcesList resources={resources} />
    </div>
  );
};

export default ResourceCategoriesList;
