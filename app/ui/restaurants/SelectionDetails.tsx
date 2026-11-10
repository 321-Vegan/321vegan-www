import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/ui/components/Icon";
import Tag from "@/app/ui/components/Tag";
import { photoUrl, restaurantPath } from "@/app/ui/restaurants/links";
import { PlaceTypeTag, VeganStatusTag } from "@/app/ui/restaurants/RestaurantTags";
import {
  RestaurantSelectionDataType,
  RestaurantSelectionItemDataType,
} from "@/types/definitions";

interface SelectionDetailsProps {
  selection: RestaurantSelectionDataType;
  // CTA app
  cta: React.ReactNode;
}

const SelectionItem = ({
  item: { restaurant, note, author_rating },
  ownerNickname,
}: {
  item: RestaurantSelectionItemDataType;
  ownerNickname: string;
}) => (
  <li>
    <Link
      href={restaurantPath(restaurant.id, restaurant.name)}
      className="group flex gap-4 rounded-xl p-4 bg-card shadow-sm hover:-translate-y-1 transition-all duration-500"
    >
      {restaurant.featured_photo ? (
        <Image
          src={photoUrl(restaurant.featured_photo.path)}
          alt=""
          width={300}
          height={300}
          className="size-24 sm:size-28 shrink-0 object-cover rounded-lg"
        />
      ) : (
        <span className="flex items-center justify-center size-24 sm:size-28 shrink-0 rounded-lg bg-brand-100 text-brand-500">
          <Icon name="utensils" className="size-8" />
        </span>
      )}
      <div className="flex flex-col gap-2 min-w-0">
        <div>
          <h3 className="text-xl font-bold text-brand-700 group-hover:underline underline-offset-2">
            {restaurant.name}
          </h3>
          {restaurant.city && (
            <p className="text-sm text-brand-900">{restaurant.city}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          <VeganStatusTag status={restaurant.vegan_status} />
          {restaurant.tags.slice(0, 2).map((tag) => (
            <PlaceTypeTag key={tag} tag={tag} />
          ))}
          {restaurant.operating_status === "PERMANENTLY_CLOSED" && (
            <Tag icon="circle-x" color="red">
              Définitivement fermé
            </Tag>
          )}
        </div>
        {(note || author_rating) && (
          <blockquote className="text-sm leading-relaxed text-gray-700 border-l-2 border-brand-300 pl-3">
            {author_rating && (
              <span
                className="block text-secondary"
                aria-label={`Noté ${author_rating} sur 5 par ${ownerNickname}`}
              >
                {"★".repeat(author_rating)}
                <span className="text-gray-300">
                  {"★".repeat(5 - author_rating)}
                </span>
              </span>
            )}
            {note && <span className="whitespace-pre-line">{note}</span>}
          </blockquote>
        )}
      </div>
    </Link>
  </li>
);

const SelectionDetails = ({ selection, cta }: SelectionDetailsProps) => {
  const {
    title,
    description,
    owner_nickname,
    cover_path,
    accepted_count,
    items,
  } = selection;

  return (
    <>
      <header className="flex flex-col gap-4">
        {cover_path && (
          <Image
            src={photoUrl(cover_path)}
            alt=""
            width={1200}
            height={675}
            className="w-full aspect-video object-cover rounded-xl shadow-sm"
            priority
          />
        )}
        <div>
          <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
            {title}
          </h1>
          <p className="text-lg font-sans">
            Une sélection de {owner_nickname} &middot; {items.length}{" "}
            {items.length > 1 ? "lieux" : "lieu"}
          </p>
          {!!accepted_count && (
            <p className="text-sm text-brand-900 mt-1">
              Ajoutée par {accepted_count}{" "}
              {accepted_count > 1 ? "personnes" : "personne"}
            </p>
          )}
        </div>
        {description && (
          <p className="leading-relaxed whitespace-pre-line">{description}</p>
        )}
        {cta}
      </header>

      <main className="mt-10">
        <ul className="flex flex-col gap-4">
          {items.map((item) => (
            <SelectionItem
              key={item.restaurant.id}
              item={item}
              ownerNickname={owner_nickname}
            />
          ))}
        </ul>
      </main>
    </>
  );
};

export default SelectionDetails;
