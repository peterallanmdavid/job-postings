import { JobListItem } from "./components/JobListItem";
import { Job } from "./utils/contants";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export default async function Home() {
  const res = await fetch(`${baseUrl}/data.json`);
  const data: Job[] = await res.json();

  return (
    <div className="flex flex-col m-5">
      {data?.map((job) => {
        return <JobListItem key={job.id} job={job} />;
      })}
    </div>
  );
}
