"use client";

import Link from "next/link";
import Image from "next/image";
import backgroundImage from "../app/public/assets/bgR.png"; 

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-background px-6 py-12 overflow-hidden">
      {/* Text Content */}
      <div className="flex flex-col justify-center w-full text-center space-y-6 sm:max-w-4xl">
        <h1 className="text-6xl font-bold text-p-100">Welcome to Job Board</h1>
        <p className="text-lg text-s-100 line-clamp-2">
          Discover your next opportunity. Browse available jobs or post a new one to help connect great companies with amazing talent.
        </p>
        <Link href="/jobList">
          <button className="mt-2 px-6 py-3 bg-p-100 text-white rounded-md hover:bg-p-200-hover transition">
            Browse Jobs
          </button>
        </Link>
      </div>

      <div className="sm:w-1/2 w-full mt-8 sm:mt-0 flex justify-center">
        <Image
          src={backgroundImage}
          alt="Background"
          className="rounded max-w-full h-[400px] object-contain"
          priority
        />
      </div>
    </div>
  );
}
