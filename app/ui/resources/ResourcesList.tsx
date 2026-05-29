import { ResourcesDataType } from "@/types/definitions";
import Link from "next/link";
import ResourceItem from "./ResourcesItem";

interface ResourcesListProps {
  resources: ResourcesDataType[];
}

const ResourcesList = ({ resources }: ResourcesListProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-6 md:p-6">
        {resources.map((resource, index) => (
          <ResourceItem key={`resource-${index}`} resource={resource} />
        ))}
      </div>

      <p className="mt-12 mb-16 leading-relaxed italic px-4">
        Cette liste est non exhaustive,{" "}
        <Link
          href="/contact"
          className="pb-1 inline-flex items-center gap-2 border-b-2 border-brand-500 cursor-pointer hover:shadow-[0_1rem_2rem] hover:bg-brand-500 hover:text-white hover:-translate-y-1 focus:bg-brand-500 focus:text-white active:bg-brand-500 active:text-white transition-transform duration-300"
        >
          contactez-nous
        </Link>{" "}
        pour proposer vos ressources, nous les étudierons avec plaisir pour
        agrandir cette liste.
      </p>
    </>
  );
};

export default ResourcesList;
