import { Baloo_2, Karla } from "next/font/google";

// Karla for body text, Baloo 2 for titles.
export const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

export const baloo = Baloo_2({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-baloo",
});
