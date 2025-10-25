import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <main className={cn("flex-1 ml-64 p-6 transition-all duration-300")}>
        <Outlet />
      </main>
    </div>
  );
}
