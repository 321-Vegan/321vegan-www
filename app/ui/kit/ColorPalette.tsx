"use client";
import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@/app/hooks/useCopyToClipboard";

interface ColorPaletteProps {
  hex: string;
  name: string;
  light?: boolean;
}

const ColorPalette = ({ hex, name, light = false }: ColorPaletteProps) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <button
      onClick={() => copyToClipboard(hex)}
      className="group flex flex-col overflow-hidden rounded-lg border border-brand-100 hover:shadow-md transition-shadow cursor-pointer w-full"
    >
      <div
        className="h-24 w-full flex items-center justify-center"
        style={{ backgroundColor: hex }}
      >
        {isCopied ? (
          <Check
            className="size-5 opacity-70"
            style={{ color: light ? "#1C1917" : "#F5F5F4" }}
            aria-hidden="true"
          />
        ) : (
          <Copy
            className="size-5 opacity-0 group-hover:opacity-60 transition-opacity"
            style={{ color: light ? "#1C1917" : "#F5F5F4" }}
            aria-hidden="true"
          />
        )}
      </div>
      <div className="px-3 py-2 bg-white text-left">
        <p className="text-xs font-mono font-semibold text-brand-800">
          {isCopied ? "Copié !" : hex}
        </p>
        <p className="text-xs text-gray-500">{name}</p>
      </div>
    </button>
  );
};

export default ColorPalette;
