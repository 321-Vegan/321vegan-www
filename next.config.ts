import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  allowedDevOrigins: [
    "localhost",
    "*.localhost",
    "192.168.1.5",
    "*.192.168.1.5",
    "192.168.1.6",
    "*.192.168.1.6",
  ],
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  serverExternalPackages: ["@react-email/components"],
  async rewrites() {
    return [
      {
        source: "/a-propos",
        destination: "/about",
      },
      {
        source: "/scanner-vegan",
        destination: "/scan",
      },
      {
        source: "/verification-d-additifs",
        destination: "/additives",
      },
      {
        source: "/verification-de-cosmetiques",
        destination: "/cosmetics",
      },
      {
        source: "/partenaires",
        destination: "/partners",
      },
      {
        source: "/suivi-d-impact",
        destination: "/impact",
      },
      {
        source: "/carte-interactive",
        destination: "/map",
      },
      {
        source: "/rappel-b12",
        destination: "/reminder",
      },
      {
        source: "/sources",
        destination: "/impact",
      },
      {
        source: "/ressources",
        destination: "/resources",
      },
      {
        source: "/ressources/:category",
        destination: "/resources/:category",
      },
      {
        source: "/politique-de-confidentialite",
        destination: "/privacy-policy",
      },
      {
        source: "/mentions-legales",
        destination: "/terms",
      },
      {
        source: "/kit-de-communication",
        destination: "/communication-kit",
      },
    ];
  },
};

export default nextConfig;
