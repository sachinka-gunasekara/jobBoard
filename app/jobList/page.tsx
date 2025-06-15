"use client";

import { useState } from "react";
import { useJobs } from "../context/JobContext";
import JobCard from "../../components/JobCard";
import Layout from "../../components/Layout";

export default function Home() {
  const { jobs } = useJobs();

  const [filters, setFilters] = useState({
    type: "",
    location: "",
    company: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Handle filter change
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1); // reset to first page on filter change
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesType = filters.type ? job.type === filters.type : true;
    const matchesLocation = filters.location
      ? job.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;
    const matchesCompany = filters.company
      ? job.company.toLowerCase().includes(filters.company.toLowerCase())
      : true;
    return matchesType && matchesLocation && matchesCompany;
  });

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <Layout>
      <div className="h-[90vh] flex flex-col">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="border p-2 rounded bg-white"
          >
            <option value="">All Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
            <option value="Freelance">Freelance</option>
            <option value="Contract">Contract</option>
          </select>

          <input
            type="text"
            name="location"
            placeholder="Filter by Location"
            value={filters.location}
            onChange={handleFilterChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="company"
            placeholder="Filter by Company"
            value={filters.company}
            onChange={handleFilterChange}
            className="border p-2 rounded"
          />
        </div>

        {/* Job Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentJobs.length > 0 ? (
            currentJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="text-gray-500">No jobs found.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-auto pt-10">
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-p-100 text-white rounded disabled:opacity-30"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages || 1}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-p-100 text-white rounded disabled:opacity-30"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
