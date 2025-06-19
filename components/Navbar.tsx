"use client";

import Link from "next/link";
import { Briefcase, FilePlus2 } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export default function Navbar() {
  const { role } = useAuth(); // example: "recruiter" or "user"
  const router = useRouter();

  const handleAddJobClick = () => {
    if (role === "recruiter") {
      router.push("/addJobs");
    } else {
      toast.error("Unauthorized Access: Only recruiters can add jobs.");
    }
  };

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

        <button
          onClick={handleAddJobClick}
          className="flex items-center gap-4 px-4 py-4 rounded-md hover:bg-p-200 transition text-left w-full"
        >
          <FilePlus2 size={18} /> Add Job
        </button>
      </div>
    </nav>
  );
}
