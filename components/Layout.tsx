import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex">
        <Navbar />
        <main className="p-6 w-full overflow-y-auto h-screen">{children}</main>
      </div>
    </>
  );
}
