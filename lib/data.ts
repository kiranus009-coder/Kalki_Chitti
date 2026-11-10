import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-aurora text-white">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />
          <main className="flex-1 px-6 py-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
