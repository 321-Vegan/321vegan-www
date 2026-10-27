import { Metadata } from "next";
import { notFound } from "next/navigation";
import { appStoreLinks } from "@/assets/assets";
import AppStoresCta from "@/app/ui/components/AppStoresCta";

// A restaurant shared from the app: the link opens it there when installed
// (see public/.well-known), this page offers to install it otherwise. The
// API needs an account, so the restaurant itself isn't shown.
// The link is its id and name: /restaurant/7-vegorilla.

type Props = { params: Promise<{ slug: string }> };

const appStoreId = appStoreLinks.apple.match(/id(\d+)/)?.[1];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: "Restaurant vegan",
    description:
      "Un restaurant ou lieu vegan partagé depuis l'application 321 Vegan.",
    robots: { index: false },
    // Safari's banner opens the app on this restaurant, or the App Store
    ...(appStoreId && {
      itunes: {
        appId: appStoreId,
        appArgument: `https://321vegan.fr/restaurant/${slug}`,
      },
    }),
  };
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  if (!/^\d+(-[a-z0-9-]*)?$/.test(slug)) notFound();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-3xl px-10 py-24 mx-auto xl:px-0 mt-5">
        <header>
          <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
            Un lieu à découvrir
          </h1>
        </header>

        <main>
          <h2 className="mb-8 text-lg font-merriweather">
            On vous a partagé un restaurant vegan&nbsp;!
          </h2>
          <p className="mb-4 leading-relaxed">
            Ce restaurant a été partagé depuis l&apos;application{" "}
            <strong>321 Vegan</strong>, avec ses horaires, ses photos et les
            avis de la communauté.
          </p>
          <p className="mb-12 leading-relaxed">
            Installez l&apos;application, puis{" "}
            <strong>ouvrez à nouveau ce lien depuis votre téléphone</strong>{" "}
            pour le découvrir.
          </p>
          <AppStoresCta />
        </main>
      </div>
    </div>
  );
};

export default Page;
