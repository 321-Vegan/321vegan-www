import type { Metadata } from "next";
import { baloo, karla } from "@/app/ui/fonts";
import { pageMetadata } from "@/app/lib/metadata";
import { Toaster } from "react-hot-toast";
import { polyfill } from "interweave-ssr";

import "./globals.css";

polyfill();

// The home page has no metadata of its own: these tags are its tags
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
  ),
  ...pageMetadata({
    description:
      "Scannez des codes barres, vérifiez les additifs et marques de cosmétiques, mesurez votre impact : téléchargez maintenant (c'est gratuit) !",
    path: "/",
  }),
  title: {
    template: "%s | 321 Vegan",
    default: "321 Vegan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${karla.variable} ${baloo.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body
        className={`font-sans antialiased leading-8 overflow-x-hidden bg-white text-ink `}
      >
        {children}
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            className: "border-[0.5px] border-brand-400 bg-white",
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </body>
    </html>
  );
}
