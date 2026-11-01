import { S3_STORAGE_URL } from "@/constants/index";

export const photoUrl = (path: string) => `${S3_STORAGE_URL}/${path}`;

export const restaurantPath = (id: number, name: string) => {
  const slug = name
    .toLowerCase()
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
    .replace(/-+$/, "");
  return `/restaurant/${id}${slug ? `-${slug}` : ""}`;
};

// URL without scheme ("instagram.com/resto", or a website), or a handle on site ("@le.resto")
export const externalUrl = (value: string, site?: string) => {
  const trimmed = value.trim();
  if (trimmed.startsWith("http")) return trimmed;
  if (!site || trimmed.includes("/") || trimmed.includes(site))
    return `https://${trimmed}`;
  return `https://${site}/${trimmed.replace(/^@/, "")}`;
};

export const mapUrl =(latitude: number, longitude: number) =>
  `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
