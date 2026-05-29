import { Metadata } from "next";
import { notFound } from "next/navigation";
import { resourceCategoriesData, resourcesData } from "@/assets/assets";
import { Markup } from "interweave";

import AppStoresCta from "@/app/ui/components/AppStoresCta";
import Breadcrumb from "@/app/ui/components/Breadcrumb";
import Icon from "@/app/ui/components/Icon";
import ResourcesList from "@/app/ui/resources/ResourcesList";

type Props = { params: Promise<{ category: string }> };

export async function getStaticPaths() {
  return {
    paths: resourceCategoriesData.map((c) => ({
      params: { category: c.slug },
    })),
    fallback: false, // If false, unknown paths will return a 404 page
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = resourceCategoriesData.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `Catégorie "${category.name}"`,
    description: category.description,
  };
}

export default async function Page({ params }: Props) {
  const { category: slug } = await params;
  const category = resourceCategoriesData.find((c) => c.slug === slug);
  if (!category) notFound();
  const resources = resourcesData.filter(
    (r) => r.category_slug === category.slug,
  );
  if (resources.length <= 0) notFound();
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 space-y-24 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 py-24 mx-auto xl:px-0 mt-5">
        <header>
          <Breadcrumb />
          <h1 className="mt-2 mb-1 text-3xl md:text-5xl text-brand-600 font-extrabold leading-tight flex flex-wrap items-center gap-2">
            <Icon name={category.icon} className="size-8 md:size-12" />{" "}
            {category.name}
          </h1>
        </header>

        <main>
          <section>
            <h2 className="mb-12 text-lg font-merriweather">
              <Markup content={category.description} />
            </h2>

            <ResourcesList resources={resources} />
          </section>

          <section>
            <AppStoresCta wrapperClass="mt-16" />
          </section>
        </main>
      </div>
    </div>
  );
}
