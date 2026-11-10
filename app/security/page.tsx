import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";

const security = [
  { title: "Identity", value: "12 active roles", badge: "Synced" },
  { title: "Secrets", value: "82 vault entries", badge: "Protected" },
  { title: "Audit", value: "4.8K events", badge: "Verified" },
  { title: "Policy", value: "96.4% coverage", badge: "Current" },
];

export default function SecurityPage() {
  return (
    <DashboardShell>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-rose-300/80">Security</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Trust, access, and governance</h1>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/10 px-4 py-2 text-sm text-rose-100">
          Open security center <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {security.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
            <div className="flex items-center justify-between">
              <div className="rounded-xl border border-rose-400/20 bg-rose-500/10 p-2 text-rose-200">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                {item.badge}
              </span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-2xl font-semibold text-rose-100">{item.value}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
