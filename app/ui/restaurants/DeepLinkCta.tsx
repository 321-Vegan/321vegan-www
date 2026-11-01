import AppleStoreBadge from "@/app/ui/components/AppleStoreBadge";
import GooglePlayBadge from "@/app/ui/components/GooglePlayBadge";
import OpenInAppButton from "@/app/ui/restaurants/OpenInAppButton";

interface DeepLinkCtaProps {
  // The shared link, opened in the app when installed
  path: string;
  children: React.ReactNode;
}

const DeepLinkCta = ({ path, children }: DeepLinkCtaProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-brand-200 bg-brand-50 p-5">
      <p className="leading-relaxed text-brand-900">{children}</p>
      <OpenInAppButton path={path} />
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <AppleStoreBadge />
        <GooglePlayBadge />
      </div>
    </div>
  );
};

export default DeepLinkCta;
