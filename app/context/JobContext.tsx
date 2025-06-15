"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
};

type JobContextType = {
  jobs: Job[];
  addJob: (job: Job) => void;
};

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  // Fetch jobs from API on mount
  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/jobs");
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    fetchJobs();
  }, []);

  // Add a new job locally
  const addJob = (job: Job) => {
    setJobs((prev) => [job, ...prev]); // add new job to front
  };

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) throw new Error("useJobs must be used within a JobProvider");
  return context;
};
