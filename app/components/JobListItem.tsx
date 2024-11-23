import React from "react";
import { Job } from "../utils/contants";
import Image from "next/image";
import Tag from "./Tags";
import Pill from "./Pill";

interface JobListItemProps {
  job: Job;
}

export const JobListItem: React.FC<JobListItemProps> = ({ job }) => {
  const allTags = [job.role, job.level, ...job.languages, ...job.tools];
  return (
    <div className="flex flex-row bg-cardsBackground mb-5 p-3 ">
      <div>
        <Image src={job.logo} alt={job.company} width={100} height={100} />
      </div>
      <div className="flex flex-col flex-1 ml-2 mr-2">
        <div className="flex flex-row items-center">
          <div className="text-lg text-primary font-bold">{job.company}</div>
          {!!job.new || <Pill text="New" />}
          {!!job.featured || <Pill text="Featured" />}
        </div>
        <div className="text-sm">{job.position}</div>
        <div className="flex flex-1">
          <div className="text-xs">{job.postedAt}</div>
          <div className="text-xs">{job.contract}</div>
          <div className="text-xs">{job.location}</div>
        </div>
      </div>
      <div className="flex flex-row justify-end items-center">
        {allTags.map((tag) => {
          return <Tag text={tag} key={tag} />;
        })}
      </div>
    </div>
  );
};
