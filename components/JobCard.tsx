import Link from "next/link";
import { Job } from "../app/types/job";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="border p-4 rounded hover:shadow-md transition">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p className="text-sm">{job.company} - {job.location}</p>
      <p className="text-sm text-gray-600">{job.type}</p>
      <Link href={`/job/${job.id}`} className="text-blue-600 mt-2 inline-block">View Details</Link>
    </div>
  );
}
