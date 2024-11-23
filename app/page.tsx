import classNames from "classnames";
import Filters from "./components/Filters";
import { JobListItem } from "./components/JobListItem";
import { Job } from "./utils/contants";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

interface PageProps {
  searchParams: { filterTags?: string[] };
}

export default async function Home({ searchParams }: PageProps) {
  const res = await fetch(`${baseUrl}/data.json`);
  const data: Job[] = await res.json();

  const currentFilters: string[] = Array.isArray(searchParams?.filterTags)
    ? searchParams?.filterTags
    : searchParams.filterTags
    ? [searchParams.filterTags]
    : [];

  const updateFilter = (filter: string): string => {
    const updatedFilters = currentFilters.includes(filter)
      ? currentFilters.filter((f) => f !== filter)
      : [...currentFilters, filter];

    const params = new URLSearchParams();
    updatedFilters.forEach((f) => params.append("filterTags", f));

    return `/?${params.toString()}`;
  };

  const filteredData = !currentFilters.length
    ? data
    : data?.filter((item) => {
        return Boolean(
          currentFilters.find((filter) => {
            const lowercaseFilter = filter.toLowerCase();
            return (
              item.role.toLowerCase().includes(lowercaseFilter) ||
              item.level.toLowerCase().includes(lowercaseFilter) ||
              item.languages.find((lang) =>
                lang.toLowerCase().includes(lowercaseFilter)
              ) ||
              item.tools.find((tool) =>
                tool.toLowerCase().includes(lowercaseFilter)
              )
            );
          })
        );
      });

  return (
    <div
      className={classNames(
        "flex flex-col m-5 mt-10",
        currentFilters?.length && "-mt-8"
      )}
    >
      {!!currentFilters?.length && (
        <Filters updateFilter={updateFilter} filters={currentFilters} />
      )}
      {filteredData.map((job) => {
        return (
          <JobListItem
            key={job.id}
            job={job}
            updateFilter={updateFilter}
            currentFilters={currentFilters}
          />
        );
      })}
    </div>
  );
}
