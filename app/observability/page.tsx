import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";

const panels = [
  { title: "Trace latency", value: "181 ms", badge: "Improving" },
  { title: "Session depth", value: "8.2k", badge: "Live" },
  { title: "Error budget", value: "0.03%", badge: "Stable" },
  { title: "SLO confidence", value: "99.93%", badge: "Protected" },
];

export default function ObservabilityPage() {
  return (
    <DashboardShell>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-orange-300/80">Observability</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Runtime tracing and incident intelligence</h1>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-100">
          Open telemetry <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {panels.map((panel) => (
          <div key={panel.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
            <div className="flex items-center justify-between">
              <div className="rounded-xl border border-orange-400/20 bg-orange-500/10 p-2 text-orange-200">
                <Activity className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                {panel.badge}
              </span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{panel.title}</h2>
            <p className="mt-3 text-2xl font-semibold text-orange-100">{panel.value}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
