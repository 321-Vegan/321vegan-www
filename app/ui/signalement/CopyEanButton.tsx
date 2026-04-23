"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import clsx from "clsx";

type Props = {
  text: string | (() => string);
  display?: string;
  label?: string;
  variant?: "link" | "primary";
};

const CopyButton = ({ text, display, label = "Copier", variant = "link" }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(typeof text === "function" ? text() : text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const buttonClass =
    variant === "primary"
      ? clsx(
          "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
          copied
            ? "bg-green-100 text-green-700 border border-green-300"
            : "bg-brand-600 text-white hover:bg-brand-700"
        )
      : "inline-flex items-center gap-1 text-sm text-brand-600 hover:text-brand-700 font-medium transition-colors";

  return (
    <span className="inline-flex items-center gap-2 mt-1">
      {display && (
        <code className="bg-gray-100 text-gray-800 text-sm font-mono px-2 py-0.5 rounded">
          {display}
        </code>
      )}
      <button onClick={handleCopy} className={buttonClass} aria-label={label}>
        {copied ? (
          <>
            <Check className="size-4" aria-hidden="true" />
            Copié !
          </>
        ) : (
          <>
            <Copy className="size-4" aria-hidden="true" />
            {label}
          </>
        )}
      </button>
    </span>
  );
};

export default CopyButton;
