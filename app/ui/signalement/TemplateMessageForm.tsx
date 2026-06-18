"use client";
import { useState } from "react";
import clsx from "clsx";
import CopyButton from "@/app/ui/components/CopyButton";

type RecordType = Record<string, string>;

interface TemplateMessageFormProps {
  text: string;
  fillHeight?: boolean;
}

const PLACEHOLDER_RE = /\[([^\]]+)\]/g;

function extractPlaceholders(text: string): string[] {
  return [...new Set([...text.matchAll(PLACEHOLDER_RE)].map((m) => m[1]))];
}

function applyFields(text: string, fields: RecordType): string {
  return text.replace(
    PLACEHOLDER_RE,
    (_, key) => fields[key]?.trim() || `[${key}]`,
  );
}

const TemplateMessageForm = ({ text }: TemplateMessageFormProps) => {
  const placeholders = extractPlaceholders(text);
  const [fields, setFields] = useState<RecordType>({});
  const [customText, setCustomText] = useState<string>("");

  const computedText = applyFields(text, fields);
  const displayedText = customText || computedText;

  const handleFieldChange = (key: string, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setCustomText("");
  };

  return (
    <form className="grid md:grid-cols-2 gap-8 md:w-full">
      <div className="col-span-full">
        {placeholders.length > 0
          ? "Remplissez les champs ci-dessous et éditer"
          : "Éditez"}{" "}
        le texte pour personnaliser le message à copier.
      </div>

      {placeholders.length > 0 && (
        <div className="grid gap-8">
          {placeholders.map((key, index) => (
            <div key={`input-box-${index}`} className="relative flex flex-col">
              <input
                id={`input-${index}`}
                type="text"
                placeholder=" "
                className="block py-2.5 px-0 w-full text-sm text-brand-700 bg-transparent border-0 border-b border-brand-700 appearance-none focus:outline-none focus:ring-0 focus:border-brand-500 peer"
                onChange={(e) => handleFieldChange(key, e.target.value)}
                value={fields[key] ?? ""}
              />
              <label
                htmlFor={`input-${index}`}
                className="absolute w-full text-sm text-brand-700 duration-300 transform -translate-y-6 scale-75 top-3 origin-left peer-focus:start-0 peer-focus:text-brand-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                {key}
              </label>
            </div>
          ))}
        </div>
      )}
      <textarea
        aria-label="Texte à copier"
        value={displayedText}
        onChange={(e) => setCustomText(e.target.value || computedText)}
        rows={displayedText.split("\n").length + 1}
        maxLength={displayedText.length + 500}
        className={clsx(
          "block py-2.5 px-0 text-sm text-brand-700 bg-transparent border-0 border-b border-brand-700 appearance-none focus:outline-none focus:ring-0 focus:border-brand-500",
          {
            "col-span-full": placeholders.length === 0,
          },
        )}
      />

      <div className="col-span-full">
        <CopyButton
          text={displayedText}
          className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-brand-700 after:bg-brand-700 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 cursor-pointer w-full"
        >
          Copier le texte
        </CopyButton>
      </div>
    </form>
  );
};

export default TemplateMessageForm;
