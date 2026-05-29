import { Metadata } from "next";

import AppStoresCta from "@/app/ui/components/AppStoresCta";
import ResourceCategoriesList from "@/app/ui/resources/ResourceCategoriesList";

export const metadata: Metadata = {
  title: "Ressources antispécistes",
  description:
    "Associations, créatrices et créateurs de contenu, études scientifiques, podcasts ou blogs, découvrez notre sélection de ressources sur le véganisme et l'antispécisme.",
};

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 space-y-24 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 py-24 mx-auto xl:px-0 mt-5">
        <header>
          <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
            Ressources antispécistes
          </h1>
        </header>

        <main>
          <section>
            <h2 className="mb-12 text-lg font-merriweather">
              Découvrez notre sélection de ressources sur le véganisme et
              l&apos;antispécisme
            </h2>

            <div className="border-l-4 border-brand-500 italic my-8 pl-4 lg:pl-8 py-4 mx-4 lg:mx-10 ">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Antispécisme
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                    courant de pensée affirmant que l’espèce à laquelle
                    appartient un être n’est pas un critère moral pertinent pour
                    décider de la manière dont on doit le traiter et des droits
                    qu’on doit lui accorder. Une personne antispéciste s’oppose
                    à l’exploitation et à la consommation des animaux par les
                    êtres humains.
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm/6 font-medium text-gray-900">
                    Véganisme
                  </dt>
                  <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
                    mise en application de l’antispécisme au quotidien via un
                    mode de vie alliant une alimentation exclusive par les
                    végétaux (végétalisme) et le refus de consommer tout produit
                    (vêtements, chaussures, cosmétiques, etc.) issu des animaux
                    ou de leur exploitation.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:p-4 p-2 flex flex-col gap-6 flex-2 mb-12">
              <p className="lg:pt-12 leading-relaxed">
                Associations, autrices et auteurs, créatrices et créateurs de
                contenu, études scientifiques, podcasts ou blogs,{" "}
                <strong>
                  les resources sur le véganisme et l&apos;antispécisme sont
                  nombreuses
                </strong>{" "}
                dans tous les domaines.{" "}
                <strong>
                  321 Vegan vous facilite la vie en mettant à votre disposition
                  cette liste (non exhaustive) de ressources sur le véganisme et
                  l&apos;antispécisme
                </strong>
                .
              </p>
            </div>
          </section>

          <section id="resources" className="scroll-mt-20">
            <ResourceCategoriesList />
          </section>

          <section>
            <AppStoresCta wrapperClass="mt-16" />
          </section>
        </main>
      </div>
    </div>
  );
}
