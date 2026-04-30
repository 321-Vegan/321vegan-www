import { ArrowDown, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const SignalConsoBtns = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2">
      <Link
        href="#guide"
        className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-brand-700 after:bg-brand-700 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 w-full md:w-auto"
      >
        Consulter notre guide
        <ArrowDown className="size-4 text-current" aria-hidden="true" />
      </Link>
      <a
        href="https://signal.conso.gouv.fr/fr/achat-magasin/faire-un-signalement"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium leading-7 shadow-sm relative z-0 text-white bg-blue-900 after:bg-blue-900 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-lg  hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500 w-full md:w-auto"
      >
        Accéder à Signal Conso
        <SquareArrowOutUpRight
          className="size-4 text-current"
          aria-hidden="true"
        />
      </a>
    </div>
  );
};

export default SignalConsoBtns;
