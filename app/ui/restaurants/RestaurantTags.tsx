import {
  restaurantServiceOptionLabels,
  restaurantTagLabels,
} from "@/assets/assets";
import Icon from "@/app/ui/components/Icon";
import Tag from "@/app/ui/components/Tag";
import { RestaurantVeganStatus } from "@/types/definitions";

// Icon and color of each kind of place, as in the app (restaurant_labels.dart):
// warm tones to eat or drink, teal to shop, blues to sleep
const placeTypeStyles: Record<string, { icon: string; color: string }> = {
  restaurant: { icon: "utensils", color: "#6D4C41" },
  cafe: { icon: "coffee", color: "#9C6B4E" },
  bakery: { icon: "croissant", color: "#C49A2C" },
  fast_food: { icon: "hamburger", color: "#9A7B0F" },
  ice_cream: { icon: "ice-cream-cone", color: "#E0609F" },
  food_truck: { icon: "truck", color: "#B4457E" },
  bar: { icon: "martini", color: "#7E3F8F" },
  caterer: { icon: "cooking-pot", color: "#A9739E" },
  grocery: { icon: "shopping-basket", color: "#00838F" },
  hotel: { icon: "bed-double", color: "#1F4E79" },
  guesthouse: { icon: "bed-double", color: "#2E86C1" },
  hostel: { icon: "bed", color: "#4FA3D9" },
};

const serviceOptionIcons: Record<string, string> = {
  dine_in: "utensils",
  takeaway: "shopping-bag",
  delivery: "bike",
};

export const PlaceTypeTag = ({ tag }: { tag: string }) => {
  const { icon, color } = placeTypeStyles[tag] ?? placeTypeStyles.restaurant;
  return (
    <div
      className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-3 py-1 w-fit border"
      // Light background and border of the same tone
      style={{
        color,
        backgroundColor: `${color}14`,
        borderColor: `${color}4D`,
      }}
    >
      <Icon name={icon} className="size-4" />
      {restaurantTagLabels[tag] ?? tag}
    </div>
  );
};

// "100 % vegan" in green, "Options vegan" in yellow, as in the app
export const VeganStatusTag = ({
  status,
}: {
  status: RestaurantVeganStatus;
}) =>
  status === "FULLY_VEGAN" ? (
    <Tag icon="leaf">100 % vegan</Tag>
  ) : (
    <Tag icon="leaf" color="yellow">
      Options vegan
    </Tag>
  );

export const ServiceOptions = ({ options }: { options: string[] }) => (
  <ul className="flex flex-wrap gap-x-6 gap-y-2">
    {options.map((option) => (
      <li
        key={option}
        className="inline-flex items-center gap-2 font-medium text-brand-700"
      >
        <Icon
          name={serviceOptionIcons[option] ?? "utensils"}
          className="size-5"
        />
        {restaurantServiceOptionLabels[option] ?? option}
      </li>
    ))}
  </ul>
);
