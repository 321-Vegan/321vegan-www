import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { appStoreLinks } from "@/assets/assets";
import { fetchRestaurant } from "@/app/lib/datas";
import AppStoresCta from "@/app/ui/components/AppStoresCta";
import DeepLinkCta from "@/app/ui/restaurants/DeepLinkCta";
import RestaurantDetails from "@/app/ui/restaurants/RestaurantDetails";
import { photoUrl } from "@/app/ui/restaurants/links";

// A restaurant shared from the app: the link opens it there when installed
// (see public/.well-known), this page shows it and offers to install the app
// otherwise. When the API can't give it (pending, deleted, API down), the
// page only offers to install the app.
// The link is its id and name: /restaurant/7-vegorilla.

type Props = { params: Promise<{ slug: string }> };

const appStoreId = appStoreLinks.apple.match(/id(\d+)/)?.[1];

const slugPattern = /^(\d+)(-[a-z0-9-]*)?$/;

// Shared by generateMetadata and the page: a single API call per request
const getRestaurant = cache((id: number) => fetchRestaurant(id));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const id = slug.match(slugPattern)?.[1];
  const restaurant = id ? await getRestaurant(Number(id)) : null;
  const cover = restaurant?.featured_photo ?? restaurant?.photos[0];
  const description = restaurant
    ? (restaurant.description?.slice(0, 200) ??
      `${restaurant.vegan_status === "FULLY_VEGAN" ? "Lieu 100 % vegan" : "Lieu avec options vegan"}${restaurant.city ? ` à ${restaurant.city}` : ""}, partagé depuis l'application 321 Vegan.`)
    : "Un restaurant ou lieu vegan partagé depuis l'application 321 Vegan.";
  const title = restaurant
    ? `${restaurant.name}${restaurant.city ? ` – ${restaurant.city}` : ""}`
    : "Restaurant vegan";
  // The site's image (app/opengraph-image.png) when the restaurant has no
  // photo: setting openGraph here drops the inherited one
  const images = [cover ? photoUrl(cover.path) : "/opengraph-image.png"];
  return {
    title,
    description,
    robots: { index: false },
    // Preview of the link in messaging apps
    openGraph: {
      title,
      description,
      url: `/restaurant/${slug}`,
      siteName: "321 Vegan",
      locale: "fr_FR",
      type: "website",
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
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
  const id = slug.match(slugPattern)?.[1];
  if (!id) notFound();
  const restaurant = await getRestaurant(Number(id));

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16 lg:px-[12%]">
      <div className="container relative flex flex-col justify-between h-full max-w-3xl px-10 py-24 mx-auto xl:px-0 mt-5">
        {restaurant ? (
          <>
            <RestaurantDetails
              restaurant={restaurant}
              cta={
                <DeepLinkCta path={`/restaurant/${slug}`}>
                  Retrouvez ce lieu dans l&apos;application{" "}
                  <strong>321 Vegan</strong>, avec les avis de la communauté
                  et la carte des restaurants vegan autour de vous.
                </DeepLinkCta>
              }
            />
            <AppStoresCta wrapperClass="mt-16" />
          </>
        ) : (
          <>
            <header>
              <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
                Un lieu à découvrir
              </h1>
            </header>

            <main>
              <h2 className="mb-8 text-lg font-sans">
                On vous a partagé un restaurant vegan&nbsp;!
              </h2>
              <p className="mb-4 leading-relaxed">
                Ce restaurant a été partagé depuis l&apos;application{" "}
                <strong>321 Vegan</strong>, avec ses horaires, ses photos et
                les avis de la communauté.
              </p>
              <p className="mb-12 leading-relaxed">
                Installez l&apos;application, puis{" "}
                <strong>ouvrez à nouveau ce lien depuis votre téléphone</strong>{" "}
                pour le découvrir.
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
