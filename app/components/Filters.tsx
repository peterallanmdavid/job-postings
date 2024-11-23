import Image from "next/image";
import Card from "./Card";
import Link from "next/link";

export default function Filters({
  filters,
  updateFilter,
}: {
  filters: string[];
  updateFilter: (filter: string) => string;
}) {
  return (
    <Card>
      <div className="flex  items-center w-full flex-row">
        <div className="flex flex-wrap gap-2 flex-row flex-1">
          {filters.map((filter) => (
            <div className="flex flex-row items-center" key={filter}>
              <div className="flex items-center bg-ligh-gray-cyan-2 text-primary rounded-l-md font-bold text-xs px-2 py-1">
                {filter}
              </div>
              <Link
                href={updateFilter(filter)}
                className="flex bg-primary h-full items-center justify-center rounded-r-md hover:bg-dark-gray-cyan-2 hover:text-white px-2"
              >
                <Image
                  src="/images/icon-remove.svg"
                  alt="close"
                  width={10}
                  height={10}
                />
              </Link>
            </div>
          ))}
        </div>
        <div>
          <Link
            href="/"
            className="ml-auto text-dark-gray-cyan-1 text-xs font-bold hover:underline hover:text-primary"
          >
            Clear
          </Link>
        </div>
      </div>
    </Card>
  );
}
