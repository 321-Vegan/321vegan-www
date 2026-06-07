"use client";
import { useState } from "react";
import { Download } from "lucide-react";
import Image from "next/image";

const sizes = ["A4", "A5", "A6"] as const;
const formats = ["PDF", "PNG"] as const;

type Size = (typeof sizes)[number];
type Format = (typeof formats)[number];

const FlierDownloadCard = () => {
  const [size, setSize] = useState<Size>("A4");
  const [format, setFormat] = useState<Format>("PDF");

  const href = `/kit/affiche-321vegan-${size.toLowerCase()}.${format.toLowerCase()}`;
  const previewSrc = `/kit/affiche-321vegan-${size.toLowerCase()}.png`;

  return (
    <article className="flex flex-col gap-5 border border-brand-100 rounded-lg p-6 hover:shadow-md transition-shadow h-full">
      <div className="rounded-md bg-brand-50 flex items-center justify-center overflow-hidden">
        <Image
          src={previewSrc}
          alt={`Aperçu affiche 321 Vegan ${size}`}
          width={400}
          height={566}
          className="object-contain w-full h-auto max-h-64"
        />
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <div>
          <h3 className="font-semibold text-lg">Affiche / Flyer</h3>
          <p className="text-sm text-gray-600 leading-relaxed mt-1">
            Imprimez et installez cette affiche partout pour faire découvrir 321
            Vegan (événement, restaurant, épicerie végane, ...)
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">Format</p>
            <div className="flex gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-1 text-sm rounded border transition-colors cursor-pointer ${
                    size === s
                      ? "bg-brand-600 text-white border-brand-600"
                      : "border-brand-200 text-brand-700 hover:border-brand-400"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">
              Type de fichier
            </p>
            <div className="flex gap-2">
              {formats.map((f) => (
                <button
                  key={f}
                  onClick={() => setFormat(f)}
                  className={`px-3 py-1 text-sm rounded border transition-colors cursor-pointer ${
                    format === f
                      ? "bg-brand-600 text-white border-brand-600"
                      : "border-brand-200 text-brand-700 hover:border-brand-400"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <a
          href={href}
          download
          className="mt-auto inline-flex items-center justify-center gap-2 bg-brand-600 text-white text-sm px-4 py-2 rounded hover:bg-brand-700 transition-colors"
        >
          <Download className="size-4" aria-hidden="true" />
          Télécharger ({size} · {format})
        </a>
      </div>
    </article>
  );
};

export default FlierDownloadCard;
