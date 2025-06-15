import Link from "next/link";
import { Briefcase, FilePlus2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex flex-col bg-p-100 text-white p-4 items-start w-[300px] h-screen">
      <div className="flex justify-center items-center w-full">
        <Link href="/" className="text-3xl font-bold mb-20">JobBoard</Link>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Link
          href="/jobList"
          className="flex items-center gap-4 px-4 py-4 rounded-md hover:bg-p-200 transition"
        >
          <Briefcase size={18} /> Jobs
        </Link>
        <Link
          href="/addJobs"
          className="flex items-center gap-4 px-4 py-4 rounded-md hover:bg-p-200 transition"
        >
          <FilePlus2 size={18} /> Add Job
        </Link>
      </div>
    </nav>
  );
}
