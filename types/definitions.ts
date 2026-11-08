import { StaticImageData } from "next/image";

export type ContactFormData = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
  subject: string;
};

export type OwnerType = {
  name: string;
  email: string;
  address: string;
  website: string;
  webhosting: string;
};

export type AppStoreLinksType = {
  apple: string;
  google: string;
};

export type SocialNetworkLinksType = {
  instagram: string;
  discord: string;
  github: string;
  buymeacoffee: string;
};

export type SitmapDataType = { url: string; label: string; category: string };

export type FeatureDataType = {
  title: string;
  icon: string;
  bgImage: StaticImageData;
  link: string;
  description: string;
};

export type ContributionDataType = {
  icon: string;
  title: string;
  description: string;
};

export type TestimonialDataType = {
  username: string;
  date: string;
  rate: number;
  title: string;
  comment: string;
};

export type FaqDataType = {
  title: string;
  description: string;
};

export type PartnerCategorieDataType = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
};

export type PartnerDataType = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  url: string;
  logo_path: string;
  description: string;
  discount_text: string;
  discount_code: string;
  is_affiliate: boolean;
  show_code_in_website: boolean;
  is_active: boolean;
  category_id: number;
  category: PartnerCategorieDataType;
};

export type SourceDataLinkType = {
  url: string;
  label: string;
};

export type SourceDataType = {
  title: string;
  description: string;
  icon: string;
  color: string;
  link: SourceDataLinkType;
};

export type CosmeticsLabelDataType = {
  logo: StaticImageData;
  name: string;
  certify: boolean[];
};

export type AdditiveDataType = {
  id: number;
  created_at: string;
  updated_at: string;
  e_number: string;
  name: string;
  description: string;
  status: string;
  source: string;
};

export type MapFeaturesDataType = {
  title: string;
  description: string;
  icon: string;
};

export type CampaignDataType = {
  /** URL segment: /outil-signalement/[slug] */
  slug: string;
  /** Short label shown in the navbar dropdown */
  navLabel: string;
  /** Full product name as shown on the packaging */
  productName: string;
  /** Brand / manufacturer name */
  brand: string;
  /** EAN barcode printed on the product */
  barcode: string;
  /** H1 displayed on the campaign page */
  campaignTitle: string;
  /** Introductory paragraph explaining why this campaign exists */
  campaignIntro: string;
  /** Photo of the product front (packaging with the false claim visible). */
  photoProduct: StaticImageData;
  /** Photo of the ingredient list. */
  photoIngredients: StaticImageData;
  /**
   * The exact text users must copy-paste into Signal Conso.
   * No placeholders — write the final, ready-to-use message.
   */
  campaignText: string;
};

export type SignalConsoChecklistDataType = {
  title: string;
  description: string;
  icon: string;
};

export type SignalConsoTemplatesDataType = {
  id: string;
  label: string;
  description: string;
  text: string;
};

export type ResourceCategoriesDataType = {
  id: number;
  name: string;
  icon: string;
  slug: string;
  description: string;
  color: string;
};

export type ResourcesDataType = {
  category_slug: string;
  name: string;
  description: string;
  link: string;
  logo?: StaticImageData;
};

export type OpeningSlotDataType = {
  day: number;
  open: string;
  close: string;
};

export type RestaurantStopDataType = {
  label: string | null;
  address: string | null;
  city: string | null;
  latitude: number;
  longitude: number;
  opening_hours: OpeningSlotDataType[];
  note: string | null;
};

export type RestaurantPhotoDataType = {
  id: number;
  kind: "PLACE" | "MENU" | null;
  path: string;
  is_featured: boolean;
};

export type RestaurantVeganStatus = "FULLY_VEGAN" | "VEGAN_OPTIONS";

export type RestaurantOperatingStatus =
  | "OPEN"
  | "TEMPORARILY_CLOSED"
  | "PERMANENTLY_CLOSED";

export type RestaurantDataType = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  address: string | null;
  city: string | null;
  description: string | null;
  vegan_status: RestaurantVeganStatus;
  vegan_options_details: string | null;
  has_gluten_free_options: boolean;
  tags: string[];
  service_options: string[];
  has_storefront: boolean;
  service_area: string | null;
  // Accessibility (PMR), null when unknown
  entrance_access: "step_free" | "ramp_on_request" | "not_accessible" | null;
  has_toilets: boolean | null;
  has_accessible_toilets: boolean | null;
  accessibility_note: string | null;
  opening_hours: OpeningSlotDataType[] | null;
  opening_hours_note: string | null;
  stops: RestaurantStopDataType[] | null;
  phone: string | null;
  website: string | null;
  facebook: string | null;
  instagram: string | null;
  menu_url: string | null;
  operating_status: RestaurantOperatingStatus;
  closed_until: string | null;
  closure_note: string | null;
  featured_photo: RestaurantPhotoDataType | null;
  photos: RestaurantPhotoDataType[];
};

export type RestaurantSelectionItemDataType = {
  restaurant: Pick<
    RestaurantDataType,
    | "id"
    | "name"
    | "city"
    | "vegan_status"
    | "has_gluten_free_options"
    | "tags"
    | "operating_status"
    | "featured_photo"
  >;
  note: string | null;
  author_rating: number | null;
};

export type RestaurantSelectionDataType = {
  id: number;
  title: string;
  description: string | null;
  owner_nickname: string;
  cover_path: string | null;
  cover_photos: RestaurantPhotoDataType[];
  accepted_count: number | null;
  items: RestaurantSelectionItemDataType[];
};
