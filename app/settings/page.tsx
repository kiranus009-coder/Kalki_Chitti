import Link from "next/link";
import { ArrowRight, BellDot, Building2, Cog, SlidersHorizontal, Users } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";

const settings = [
  { title: "Organization", value: "Kalki Labs" },
  { title: "Environments", value: "Prod, staging, dev" },
  { title: "API identities", value: "14 issued" },
  { title: "Notifications", value: "6 channels" },
];

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-slate-300/80">Settings</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Platform administration</h1>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-400/20 bg-slate-700/50 px-4 py-2 text-sm text-slate-100">
          Manage config <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {settings.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
            <div className="flex items-center justify-between">
              <div className="rounded-xl border border-slate-400/20 bg-slate-700/80 p-2 text-slate-200"><Cog className="h-5 w-5" /></div>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200">Active</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm text-slate-300">{item.value}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
