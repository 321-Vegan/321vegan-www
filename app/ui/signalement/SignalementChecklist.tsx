import { Camera, FileText, Hash, Store, Download } from "lucide-react";

const items = [
  {
    icon: Camera,
    title: "Photo recto du produit",
    description:
      "Une photo nette du packaging, avec la mention trompeuse visible (ex. : logo \"vegan\", texte \"végétalien\", etc.).",
  },
  {
    icon: FileText,
    title: "Photo de la liste des ingrédients",
    description:
      "Une photo lisible de la liste des ingrédients au dos ou sous le produit. L'ingrédient problématique doit être identifiable.",
  },
  {
    icon: Hash,
    title: "Code-barres",
    description:
      "Il est recommandé d'avoir le code-barre du produit pour effectuer le signalement",
  }
];

const SignalementChecklist = () => {
  return (
    <section>
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-600 mb-2">
          Ce qu&apos;il faut préparer
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Rassemblez ces éléments avant de commencer votre signalement pour
          qu&apos;il soit le plus complet et recevable possible.
        </p>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map(({ icon: Icon, title, description}, i) => (
          <li
            key={i}
            className="flex flex-col gap-3 p-5 rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <span className="flex items-center justify-center size-10 rounded-lg bg-brand-500 text-white shrink-0">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-brand-700">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SignalementChecklist;
