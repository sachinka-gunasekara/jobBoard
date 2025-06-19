"use client";

import { auth, db } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      const userDoc = await getDoc(doc(db, "users", uid));
      const userData = userDoc.data();

      if (!userData?.role) {
        setError("Role not assigned to this user.");
        return;
      }

      router.push("/jobList");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid credentials or server error.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-10 max-w-lg w-full bg-white shadow-md rounded-md border border-gray-200">
        <h1 className="text-2xl font-bold mb-4 text-center text-p-100">Login</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-p-100 text-white px-4 py-2 rounded w-full hover:bg-p-200-hover transition"
        >
          Login
        </button>

        <div className="flex gap-2 text-sm justify-center mt-4">
          <span>Don&apos;t have an account?</span>
          <Link href="/register">
            <span className="text-blue-600 underline cursor-pointer">Register</span>
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
