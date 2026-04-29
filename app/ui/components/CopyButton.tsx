"use client";
import { PropsWithChildren, MouseEvent } from "react";
import { useCopyToClipboard } from "@/app/hooks/useCopyToClipboard";
import Icon from "@/app/ui/components/Icon";

interface CopyButtonProps extends PropsWithChildren {
  text?: string;
  className?: string;
}

const CopyButton = ({ children, text, ...props }: CopyButtonProps) => {
  const { isCopying, isCopied, error, copyToClipboard } = useCopyToClipboard();

  function getText(fallback: string) {
    if (!text) return fallback;
    const div = document.createElement("div");
    div.innerHTML = text || "";
    return div.textContent || div.innerText || "";
  }

  function handleCopy(e: MouseEvent<HTMLElement>) {
    copyToClipboard(getText(e.currentTarget.innerText || ""));
  }

  return (
    <button
      disabled={isCopying || error !== ""}
      onClick={handleCopy}
      {...props}
      aria-label={"Copier"}
    >
      {isCopied && children ? "Copié" : children}
      <Icon
        name={isCopied ? "check" : "copy"}
        className="min-h-4 min-w-4"
        aria-hidden="true"
      />
    </button>
  );
};

export default CopyButton;
