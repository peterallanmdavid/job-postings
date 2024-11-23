import React from "react";
import { Job } from "../utils/contants";
import Image from "next/image";
import Tag from "./Tags";
import Pill from "./Pill";
import Card from "./Card";

interface JobListItemProps {
  job: Job;
  updateFilter: (filter: string) => string;
  currentFilters: string[];
}

export const JobListItem: React.FC<JobListItemProps> = ({
  job,
  updateFilter,
}) => {
  const {
    logo,
    company,
    position,
    postedAt,
    contract,
    location,
    new: isNew,
    role,
    level,
    languages,
    tools,
    featured,
  } = job;
  const allTags = [role, level, ...languages, ...tools];

  return (
    <Card highligted={featured && isNew}>
      {/* Overlapping Logo */}
      <div className="-mt-10 md:mt-0 ml-2">
        <Image
          src={logo}
          alt={`${company} Logo`}
          width={80}
          height={80}
          className="w-12 h-12 md:w-16 md:h-16 "
        />
      </div>

      {/* Left Section: Company Info */}
      <div className="flex flex-col items-start flex-1 pl-0 md:pl-5">
        {/* Company Details */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-primary font-bold">{company}</h2>
            {isNew && <Pill type="new" />}
            {featured && <Pill type="featured" />}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mt-2 hover:text-primary">
            {position}
          </h3>
          <div className="flex flex-wrap items-center text-gray-500 mt-2 gap-2">
            <span>{postedAt}</span>
            <span>&bull;</span>
            <span>{contract}</span>
            <span>&bull;</span>
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Right Section: Tags */}
      <div className="flex flex-wrap gap-2 border-t md:border-t-0 pt-4 md:pt-0">
        {allTags.map((tag) => (
          <Tag text={tag} key={tag} onClick={updateFilter} />
        ))}
      </div>
    </Card>
  );
};
