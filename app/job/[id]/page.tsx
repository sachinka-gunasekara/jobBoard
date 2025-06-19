'use client';

import { useParams, useRouter } from "next/navigation";
import { useJobs } from "../../context/JobContext"; 
import Layout from "@/components/Layout";
import { useState } from "react";
import Image from "next/image";
import backgroundImage from "../../public/assets/banner1.jpg"; 
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";

export default function JobDetailPage() {
  const { id } = useParams(); // returns { id: 'job-id' }
  const router = useRouter();
  const { jobs } = useJobs();
  const [applied, setApplied] = useState(false);
  const { role } = useAuth();

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return (
      <div className="text-center mt-10">
        <p className="text-error-100">Job not found</p>
        <button
          className="mt-4 text-blue-500 underline"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
        <Layout>
            <div className="p-6 w-full">
                <Link href="/jobList">
                    <div className="flex gap-2 items-center mb-3">
                        <ArrowLeft size={18} />
                        Back
                    </div>
                </Link>
                <div className="w-full my-8 sm:mt-0 flex justify-center">
                    <Image
                    src={backgroundImage}
                    alt="Background"
                    className="rounded h-[180px] object-cover"
                    priority
                    />
                </div>

                <div className="flex justify-between items-start">
                    <div className="flex flex-col mb-5">
                        <h1 className="text-2xl font-bold">{job.title}</h1>
                        <div className="text-xs bg-p-100 rounded-[100px] text-white w-max px-4 py-1">{job.type}</div>
                    </div>

                      {role === "user" && (
                    <div className="flex flex-col">
                        <button onClick={() => setApplied(true)} className="px-4 py-2 bg-p-100 text-white rounded hover:bg-p-200-hover">
                            Apply Now
                        </button>
                        {applied && <p className="text-green-600 mt-2">Application sent!</p>}
                    </div>
                    )}
                </div>

            <p className="text-lg">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
            <div className="mt-4 text-lg font-bold">
                Job Description : 
            </div>
            <div>
                {job.description}
            </div>
            </div>
        </Layout>
  );
}
