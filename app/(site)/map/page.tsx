import { Metadata } from "next";
import { mockups } from "@/assets/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AppStoresCta from "@/app/ui/components/AppStoresCta";
import JoinUsCta from "@/app/ui/components/JoinUsCta";

export const metadata: Metadata = {
  title: "Carte vegan",
  description:
    "Trouvez facilement dans quels magasins sont vendus vos produits vegan préférés grâce à notre carte interactive.",
};

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 space-y-24 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 py-24 mx-auto xl:px-0 mt-5">
        <header>
          <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
            Carte interactive
          </h1>
        </header>

        <main>
          <section>
            <h2 className="mb-12 text-lg font-merriweather">
              Trouvez facilement où sont vendus vos produits vegan
              préférés&nbsp;!
            </h2>
            <div className="flex flex-col lg:flex-row mx-auto overflow-hidden">
              <div className="lg:w-1/2 flex-1">
                <Image
                  src={mockups.mockupMap}
                  alt=""
                  width={1080}
                  height={1920}
                  className="object-content w-auto h-auto mx-auto lg:w-full lg:mx-0 lg:-ml-8 hover:-translate-y-1 hover:scale-[1.1] transition-all duration-500"
                />
              </div>
              <div className="lg:p-4 p-2 lg:w-1/2 flex flex-col gap-6 flex-2 mb-12">
                <p className="text-justify lg:pt-12 leading-relaxed">
                  <strong>
                    Trouvez facilement dans quels magasins sont vendus vos
                    produits vegan préférés
                  </strong>
                  . Notre carte interactive vous indique où trouver vos produits
                  préférés, même en déplacement&nbsp;!
                </p>
                <p className="text-justify leading-relaxed">
                  Vous pouvez{" "}
                  <strong>
                    scanner des produits s&apos;ils ne sont pas déjà référencés,
                  </strong>
                  . Ainsi,{" "}
                  <strong>
                    vous participez à aider la communauté végane à identifier
                    les magasins qui vendent vos produits préférés
                  </strong>
                  .
                </p>
                <p className="text-justify leading-relaxed">
                  Grâce à l&apos;appli 321 Vegan,{" "}
                  <strong>être vegan n&apos;a jamais été aussi facile</strong>
                  &nbsp;!
                </p>
                <section className="lg:mt-auto">
                  <AppStoresCta />
                </section>
              </div>
            </div>
          </section>

          <section>
            <h2 className="my-12 text-lg font-merriweather">
              Comment utiliser la carte interactive végane&nbsp;:
            </h2>
            TODO
            <p className="mt-12 mb-16 leading-relaxed italic">TODO</p>
          </section>

          <section>
            <JoinUsCta
              bgColor="bg-brand-600"
              btnColor="bg-brand-800 after:bg-brand-800"
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Page;
