import "./globals.css";
import localFont from "next/font/local";
import { JobProvider } from "../app/context/JobContext";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Job Board",
  description: "Explore jobs and post your own",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <AuthProvider>
        <JobProvider>
          {children}
          <ToastContainer position="top-right" autoClose={3000} />
        </JobProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
