import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className={cn("ml-64 transition-all duration-300")}>
        {children}
      </main>
    </div>
  );
}
