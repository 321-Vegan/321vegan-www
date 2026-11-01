import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { appStoreLinks } from "@/assets/assets";
import { fetchRestaurantSelection } from "@/app/lib/datas";
import AppStoresCta from "@/app/ui/components/AppStoresCta";
import DeepLinkCta from "@/app/ui/restaurants/DeepLinkCta";
import SelectionDetails from "@/app/ui/restaurants/SelectionDetails";
import { photoUrl } from "@/app/ui/restaurants/links";

// A public restaurant selection shared from the app: the link opens it there
// when installed (see public/.well-known), this page shows it and offers to
// install the app otherwise. When the API can't give it (made private,
// deleted, API down), the page only offers to install the app.
// The link is its id and title: /selection/42-mes-restos-a-lyon.

type Props = { params: Promise<{ slug: string }> };

const appStoreId = appStoreLinks.apple.match(/id(\d+)/)?.[1];

const slugPattern = /^(\d+)(-[a-z0-9-]*)?$/;

// Shared by generateMetadata and the page: a single API call per request
const getSelection = cache((id: number) => fetchRestaurantSelection(id));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const id = slug.match(slugPattern)?.[1];
  const selection = id ? await getSelection(Number(id)) : null;
  const cover = selection?.cover_path ?? selection?.cover_photos[0]?.path;
  const title = selection ? selection.title : "Sélection de restaurants vegan";
  const description = selection
    ? (selection.description?.slice(0, 200) ??
      `Une sélection de ${selection.items.length} restaurants et lieux vegan par ${selection.owner_nickname}, partagée depuis l'application 321 Vegan.`)
    : "Une sélection de restaurants et lieux vegan partagée depuis l'application 321 Vegan.";
  // The site's image (app/opengraph-image.png) when the selection has no
  // cover: setting openGraph here drops the inherited one
  const images = [cover ? photoUrl(cover) : "/opengraph-image.png"];
  return {
    title,
    description,
    robots: { index: false },
    // Preview of the link in messaging apps
    openGraph: {
      title,
      description,
      url: `/selection/${slug}`,
      siteName: "321 Vegan",
      locale: "fr_FR",
      type: "website",
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
    // Safari's banner opens the app on this selection, or the App Store
    ...(appStoreId && {
      itunes: {
        appId: appStoreId,
        appArgument: `https://321vegan.fr/selection/${slug}`,
      },
    }),
  };
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  const id = slug.match(slugPattern)?.[1];
  if (!id) notFound();
  const selection = await getSelection(Number(id));

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-3xl px-10 py-24 mx-auto xl:px-0 mt-5">
        {selection ? (
          <>
            <SelectionDetails
              selection={selection}
              cta={
                <DeepLinkCta path={`/selection/${slug}`}>
                  Ouvrez cette sélection dans l&apos;application{" "}
                  <strong>321 Vegan </strong> pour l&apos;ajouter à vos lieux
                  enregistrés et retrouver ces restaurants sur la carte.
                </DeepLinkCta>
              }
            />
            <AppStoresCta wrapperClass="mt-16" />
          </>
        ) : (
          <>
            <header>
              <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
                Une sélection à découvrir
              </h1>
            </header>

            <main>
              <h2 className="mb-8 text-lg font-merriweather">
                On vous a partagé des restaurants vegan&nbsp;!
              </h2>
              <p className="mb-4 leading-relaxed">
                Cette sélection de restaurants et lieux vegan a été partagée
                depuis l&apos;application <strong>321 Vegan</strong>.
              </p>
              <p className="mb-12 leading-relaxed">
                Installez l&apos;application, puis{" "}
                <strong>ouvrez à nouveau ce lien depuis votre téléphone</strong>{" "}
                pour la découvrir et vous y abonner.
              </p>
              <AppStoresCta />
            </main>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
