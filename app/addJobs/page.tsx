"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useJobs } from "../context/JobContext";
import Layout from "../../components/Layout";
import { v4 as uuid } from "uuid";

export default function AddJob() {
  const { addJob } = useJobs();
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear the error when user types/selects
    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      title: form.title.trim() === "" ? "Title is required" : "",
      company: form.company.trim() === "" ? "Company is required" : "",
      location: form.location.trim() === "" ? "Location is required" : "",
      type: form.type.trim() === "" ? "Type is required" : "",
      description: form.description.trim() === "" ? "Description is required" : "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (hasErrors) return;

    addJob({ id: uuid(), ...form });
    router.push("/jobList");
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Add New Job</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 border p-10 rounded">
    
            <div>
            <input
                name="title"
                placeholder="Job Title"
                value={form.title}
                onChange={handleChange}
                className="border p-2 rounded w-full"
            />
            {errors.title && <p className="text-error-100 text-sm mt-1">{errors.title}</p>}
            </div>

            <div>
            <input
                name="company"
                placeholder="Company"
                value={form.company}
                onChange={handleChange}
                className="border p-2 rounded w-full"
            />
            {errors.company && <p className="text-error-100 text-sm mt-1">{errors.company}</p>}
            </div>

            <div>
            <input
                name="location"
                placeholder="Location"
                value={form.location}
                onChange={handleChange}
                className="border p-2 rounded w-full"
            />
            {errors.location && <p className="text-error-100 text-sm mt-1">{errors.location}</p>}
            </div>

            <div>
            <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="border p-2 rounded w-full bg-white"
            >
                <option value="">Select Job Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
                <option value="Freelance">Freelance</option>
                <option value="Contract">Contract</option>
            </select>
            {errors.type && <p className="text-error-100 text-sm mt-1">{errors.type}</p>}
            </div>

            <div>
            <textarea
                name="description"
                placeholder="Job Description"
                value={form.description}
                onChange={handleChange}
                className="border p-2 rounded w-full"
            />
            {errors.description && <p className="text-error-100 text-sm mt-1">{errors.description}</p>}
            </div>

            <div className="flex justify-end">
                <button type="submit" className="bg-p-100 text-white px-4 py-2 rounded min-w-60 w-max">
                    Add Job
                </button>
            </div>
       
      </form>
    </Layout>
  );
}
