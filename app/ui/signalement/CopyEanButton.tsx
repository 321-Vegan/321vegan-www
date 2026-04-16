"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

type Props = {
  /** The text that gets copied to clipboard */
  text: string;
  /** When set, renders the value inside a <code> block before the button */
  display?: string;
  /** Button label (default: "Copier") */
  label?: string;
};

const CopyButton = ({ text, display, label = "Copier" }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className="inline-flex items-center gap-2 mt-1">
      {display && (
        <code className="bg-gray-100 text-gray-800 text-sm font-mono px-2 py-0.5 rounded">
          {display}
        </code>
      )}
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1 text-sm text-brand-600 hover:text-brand-700 font-medium transition-colors"
        aria-label={label}
      >
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
