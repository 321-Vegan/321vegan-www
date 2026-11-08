import Image from "next/image";
import { dayNames, restaurantEntranceAccessLabels } from "@/assets/assets";
import Admonition from "@/app/ui/components/Admonition";
import Icon from "@/app/ui/components/Icon";
import Tag from "@/app/ui/components/Tag";
import { externalUrl, mapUrl, photoUrl } from "@/app/ui/restaurants/links";
import {
  PlaceTypeTag,
  ServiceOptions,
  VeganStatusTag,
} from "@/app/ui/restaurants/RestaurantTags";
import {
  OpeningSlotDataType,
  RestaurantDataType,
} from "@/types/definitions";

interface RestaurantDetailsProps {
  restaurant: RestaurantDataType;
  // app install CTA
  cta: React.ReactNode;
}

const OpeningHours = ({ slots }: { slots: OpeningSlotDataType[] }) => (
  <table className="w-full max-w-sm text-left">
    <tbody>
      {dayNames.map((day, index) => {
        const daySlots = slots
          .filter((slot) => slot.day === index)
          .sort((a, b) => a.open.localeCompare(b.open));
        return (
          <tr key={day} className="border-b border-brand-100 last:border-0">
            <th scope="row" className="py-1.5 pr-4 font-medium">
              {day}
            </th>
            <td className="py-1.5 text-brand-900">
              {daySlots.length
                ? daySlots
                    .map((slot) => `${slot.open} – ${slot.close}`)
                    .join(", ")
                : "Fermé"}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

// Toilets as in the app: accessible ones are toilets too
const toiletsText = (
  hasToilets: boolean | null,
  hasAccessibleToilets: boolean | null,
) => {
  if (hasAccessibleToilets) return "Toilettes adaptées PMR";
  if (hasToilets === false) return "Pas de toilettes";
  if (hasToilets && hasAccessibleToilets === false)
    return "Toilettes non adaptées PMR";
  if (hasToilets) return "Toilettes";
  if (hasAccessibleToilets === false) return "Pas de toilettes adaptées PMR";
  return null;
};

const Section = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) => (
  <section className="flex flex-col gap-3">
    <h2 className="flex items-center gap-2 text-xl font-bold text-brand-700">
      <Icon name={icon} className="size-5" />
      {title}
    </h2>
    {children}
  </section>
);

const ExternalLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-brand-600 underline underline-offset-2 hover:text-brand-800 break-all"
  >
    <Icon name={icon} className="size-4 shrink-0" />
    {children}
  </a>
);

const RestaurantDetails = ({ restaurant, cta }: RestaurantDetailsProps) => {
  const {
    name,
    city,
    address,
    latitude,
    longitude,
    description,
    vegan_status,
    vegan_options_details,
    has_gluten_free_options,
    tags,
    service_options,
    has_storefront,
    service_area,
    entrance_access,
    has_toilets,
    has_accessible_toilets,
    accessibility_note,
    opening_hours,
    opening_hours_note,
    stops,
    phone,
    website,
    facebook,
    instagram,
    menu_url,
    operating_status,
    closed_until,
    closure_note,
    featured_photo,
    photos,
  } = restaurant;

  const cover = featured_photo ?? photos[0];
  const otherPhotos = photos.filter((photo) => photo.id !== cover?.id);
  const hasContact = phone || website || facebook || instagram || menu_url;
  const toilets = toiletsText(has_toilets, has_accessible_toilets);
  const hasAccessibility =
    has_storefront && (entrance_access || toilets || accessibility_note);

  return (
    <>
      <header className="flex flex-col gap-4">
        {cover && (
          <Image
            src={photoUrl(cover.path)}
            alt={`Photo de ${name}`}
            width={1200}
            height={675}
            className="w-full aspect-video object-cover rounded-xl shadow-sm"
            priority
          />
        )}
        <div>
          <h1 className="mb-1 text-5xl text-brand-600 font-extrabold leading-tight">
            {name}
          </h1>
          {(city || service_area) && (
            <p className="text-lg font-merriweather">
              {has_storefront ? city : service_area}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <VeganStatusTag status={vegan_status} />
          {tags.map((tag) => (
            <PlaceTypeTag key={tag} tag={tag} />
          ))}
          {has_gluten_free_options && (
            <Tag icon="wheat-off">Options sans gluten</Tag>
          )}
        </div>
        {service_options.length > 0 && (
          <ServiceOptions options={service_options} />
        )}
        {operating_status !== "OPEN" && (
          <Admonition variant="yellow">
            <p className="font-medium">
              {operating_status === "PERMANENTLY_CLOSED"
                ? "Ce lieu est définitivement fermé."
                : `Ce lieu est temporairement fermé${
                    closed_until
                      ? ` jusqu'au ${new Date(closed_until).toLocaleDateString("fr-FR")}`
                      : ""
                  }.`}
            </p>
            {closure_note && <p>{closure_note}</p>}
          </Admonition>
        )}
        {cta}
      </header>

      <main className="flex flex-col gap-10 mt-10">
        {description && (
          <p className="leading-relaxed whitespace-pre-line">{description}</p>
        )}

        {vegan_options_details && (
          <Section title="Options vegan" icon="leaf">
            <p className="leading-relaxed whitespace-pre-line">
              {vegan_options_details}
            </p>
          </Section>
        )}

        {(address || has_storefront) && !stops?.length && (
          <Section title="Adresse" icon="map-pin">
            {address && <p>{address}</p>}
            <ExternalLink href={mapUrl(latitude, longitude)} icon="map">
              Voir sur la carte
            </ExternalLink>
          </Section>
        )}

        {stops?.length ? (
          <Section title="Emplacements" icon="truck">
            <ul className="flex flex-col gap-4">
              {stops.map((stop, index) => (
                <li key={index} className="flex flex-col gap-1">
                  <span className="font-medium">
                    {stop.label ?? stop.address ?? stop.city ?? "Emplacement"}
                  </span>
                  {stop.label && stop.address && <span>{stop.address}</span>}
                  {stop.opening_hours.length > 0 && (
                    <span className="text-brand-900">
                      {stop.opening_hours
                        .map(
                          (slot) =>
                            `${dayNames[slot.day]} ${slot.open} – ${slot.close}`,
                        )
                        .join(", ")}
                    </span>
                  )}
                  {stop.note && <span className="italic">{stop.note}</span>}
                  <ExternalLink
                    href={mapUrl(stop.latitude, stop.longitude)}
                    icon="map"
                  >
                    Voir sur la carte
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </Section>
        ) : (
          (opening_hours?.length || opening_hours_note) && (
            <Section title="Horaires" icon="clock">
              {opening_hours?.length ? (
                <OpeningHours slots={opening_hours} />
              ) : null}
              {opening_hours_note && (
                <p className="italic">{opening_hours_note}</p>
              )}
            </Section>
          )
        )}

        {hasAccessibility && (
          <Section title="Accessibilité" icon="accessibility">
            <div className="flex flex-col gap-2">
              {entrance_access && (
                <p className="inline-flex items-center gap-2">
                  <Icon name="door-open" className="size-4 shrink-0" />
                  {restaurantEntranceAccessLabels[entrance_access] ??
                    entrance_access}
                </p>
              )}
              {toilets && (
                <p className="inline-flex items-center gap-2">
                  <Icon name="toilet" className="size-4 shrink-0" />
                  {toilets}
                </p>
              )}
              {accessibility_note && (
                <p className="italic">{accessibility_note}</p>
              )}
            </div>
          </Section>
        )}

        {hasContact && (
          <Section title="Contact" icon="phone">
            <div className="flex flex-col gap-2">
              {phone && (
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-brand-600 underline underline-offset-2 hover:text-brand-800"
                >
                  <Icon name="phone" className="size-4" />
                  {phone}
                </a>
              )}
              {website && (
                <ExternalLink href={externalUrl(website)} icon="globe">
                  Site web
                </ExternalLink>
              )}
              {menu_url && (
                <ExternalLink href={externalUrl(menu_url)} icon="book-open">
                  Menu
                </ExternalLink>
              )}
              {instagram && (
                <ExternalLink
                  href={externalUrl(instagram, "instagram.com")}
                  icon="instagram"
                >
                  Instagram
                </ExternalLink>
              )}
              {facebook && (
                <ExternalLink
                  href={externalUrl(facebook, "facebook.com")}
                  icon="facebook"
                >
                  Facebook
                </ExternalLink>
              )}
            </div>
          </Section>
        )}

        {otherPhotos.length > 0 && (
          <Section title="Photos" icon="images">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {otherPhotos.map((photo) => (
                <Image
                  key={photo.id}
                  src={photoUrl(photo.path)}
                  alt={
                    photo.kind === "MENU"
                      ? `Menu de ${name}`
                      : `Photo de ${name}`
                  }
                  width={600}
                  height={600}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              ))}
            </div>
          </Section>
        )}
      </main>
    </>
  );
};

export default RestaurantDetails;
