import type { MetadataRoute } from "next";
import { sitemapData, resourceCategoriesData } from "@/assets/assets";

import { campaigns } from "@/assets/campaigns";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const pagesMapped = sitemapData
    .filter((item) => !["#"].includes(item.url))
    .map(({ url }) => ({
      url: `${baseUrl}${url}`,
    }));

  const routeCampaigns = campaigns.map((c) => ({
    url: `${baseUrl}/outil-signalement/${c.slug}`,
  }));

  const routeResourceCategories = resourceCategoriesData.map((c) => ({
    url: `${baseUrl}/ressources/${c.slug}`,
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...pagesMapped,
    ...routeCampaigns,
    ...routeResourceCategories,
  ];
}
