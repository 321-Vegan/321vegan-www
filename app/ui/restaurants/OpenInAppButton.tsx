import { headers } from "next/headers";
import { appStoreLinks } from "@/assets/assets";
import Icon from "@/app/ui/components/Icon";

// For the visitors who still land here (app not installed, an in-app browser. 
const androidPackage = "com.app321vegan.veganapp";

interface OpenInAppButtonProps {
  path: string;
}

const OpenInAppButton = async ({ path }: OpenInAppButtonProps) => {
  const userAgent = (await headers()).get("user-agent") ?? "";
  if (!/android/i.test(userAgent)) return null;

  const fallback = encodeURIComponent(appStoreLinks.google);
  const href = `intent://321vegan.fr${path}#Intent;scheme=https;package=${androidPackage};S.browser_fallback_url=${fallback};end`;

  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 w-full sm:w-fit rounded-lg bg-brand-600 px-5 py-3 font-medium text-white hover:bg-brand-700 transition-colors"
    >
      <Icon name="smartphone" className="size-5" />
      Ouvrir dans l&apos;application
    </a>
  );
};

export default OpenInAppButton;
