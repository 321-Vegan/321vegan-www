import Link from "next/link";
import { ComponentProps } from "react";
import clsx from "clsx";

const InlineLink = ({ href, className, children, ...props }: ComponentProps<typeof Link>) => (
  <Link
    href={href}
    className={clsx("text-brand-600 underline underline-offset-2 hover:text-brand-700 font-medium", className)}
    {...props}
  >
    {children}
  </Link>
);

export default InlineLink;
