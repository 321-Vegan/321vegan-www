"use client";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { ChevronRight, House } from "lucide-react";
import Link from "next/link";

const Breadcrumb = () => {
  const paths = usePathname();
  const segments = paths.split("/").filter((path) => path);

  return (
    <nav aria-label="Breadcrumb" role="navigation">
      <ul className="flex flex-wrap items-center gap-1 my-1">
        <li className="inline-flex items-center">
          <Link
            href="/"
            aria-label="Accueil"
            className="inline-flex items-center font-medium text-brand-700"
          >
            <House strokeWidth={1} aria-hidden="true" />
          </Link>
        </li>

        {segments.map((segment, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight
              strokeWidth={1}
              className="size-4"
              aria-hidden="true"
            />
            <a
              href={`/${segments.slice(0, index + 1).join("/")}`}
              className={clsx("font-medium capitalize", {
                "text-brand-500": index >= segments.length - 1,
                "text-brand-700": index < segments.length - 1,
              })}
            >
              {segment.replaceAll("-", " ")}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
