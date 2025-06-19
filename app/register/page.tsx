"use client";

import { auth, db } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"user" | "recruiter">("user");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 

  const router = useRouter();

  const handleRegister = async () => {
    setError("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setLoading(true); //  start loading

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, "users", uid), {
        email,
        role,
      });

      router.push("/login");
    } catch (err) {
      console.error("Registration error:", err);
      setError("Registration failed. Please try again.");
      setLoading(false); // stop loading on error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-10 max-w-lg w-full bg-white shadow-md rounded-md border border-gray-200">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {loading ? (
          <p className="text-center text-p-100 font-medium bg-blue-100 p-3 rounded">Registering... Please wait</p>
        ) : (
          <>
            <input
              className="border p-2 w-full mb-2 rounded"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="border p-2 w-full mb-2 rounded"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <select
              className="border p-2 w-full mb-4 rounded"
              value={role}
              onChange={(e) => setRole(e.target.value as "user" | "recruiter")}
            >
              <option value="user">User</option>
              <option value="recruiter">Recruiter</option>
            </select>

            <button
              onClick={handleRegister}
              className="bg-p-100 text-white px-4 py-2 rounded w-full hover:bg-p-200-hover transition"
            >
              Register
            </button>
          </>
        )}

        <div className="flex gap-2 text-sm justify-center mt-4">
          <span>Already have an account?</span>
          <Link href="/login">
            <span className="text-blue-600 underline cursor-pointer">Login</span>
          </Link>
        </div>

        <div className="mt-4 text-center">
          <Link href="/">
            <span className="text-p-100 text-sm underline cursor-pointer">Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
