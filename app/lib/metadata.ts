import type { Metadata } from "next";

const siteName = "321 Vegan";

interface PageMetadataOptions {
  title?: string;
  description?: string;
  // Public URL of the page (the French one when next.config.ts rewrites it),
  // relative to metadataBase
  path: string;
}

// Title, description and Open Graph tags of a page. Facebook needs og:url and
// og:type on every page, and a page that sets openGraph drops the inherited
// one (images included), so each page gets its full set here.
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const ogTitle = title ? `${title} | ${siteName}` : siteName;
  return {
    ...(title && { title }),
    ...(description && { description }),
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "321 Vegan, l'appli mobile qui aide les véganes, avec sa mascotte la vache qui lève le pouce",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/twitter-image.png"],
    },
  };
}
