import { Download } from "lucide-react";
import { ReactNode } from "react";

interface DownloadButtonProps {
  href: string;
  children: ReactNode;
}

const DownloadButton = ({ href, children }: DownloadButtonProps) => (
  <a
    href={href}
    download
    className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-brand-600 after:bg-brand-600 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 cursor-pointer w-full mt-auto"
  >
    {children}
    <Download className="size-4" aria-hidden="true" />
  </a>
);

export default DownloadButton;
