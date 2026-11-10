import Link from "next/link";
import { ArrowUpRight, Bot, Cpu, Database, LayoutGrid, ShieldCheck, Sparkles } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";

const overviewCards = [
  { title: "Apps", value: "48", icon: LayoutGrid },
  { title: "Agents", value: "23", icon: Bot },
  { title: "Models", value: "16", icon: Cpu },
  { title: "Guardrails", value: "97.6%", icon: ShieldCheck },
];

export default function OverviewPage() {
  return (
    <DashboardShell>
      <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/80">Chitti Overview</p>
          <h1 className="mt-2 text-3xl font-bold text-white">AI platform operations</h1>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100">
          Open live console <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {overviewCards.map(({ title, value, icon: Icon }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{title}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
              </div>
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-2 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Platform health</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Service coverage</h2>
            </div>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">Healthy</div>
          </div>
          <div className="space-y-4">
            {[
              { name: "Inference gateway", value: 94 },
              { name: "Retrieval orchestration", value: 88 },
              { name: "Security filters", value: 99 },
              { name: "Evaluation traces", value: 91 },
            ].map((item) => (
              <div key={item.name}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>{item.name}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Ops posture</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Decision engines</h2>
            </div>
            <Sparkles className="h-5 w-5 text-violet-300" />
          </div>
          <div className="mt-5 space-y-4">
            {[
              { name: "Routing policy", state: "Adaptive" },
              { name: "Prompt versioning", state: "Protected" },
              { name: "Budget control", state: "On track" },
              { name: "Human review", state: "Escalation ready" },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-sm text-slate-200">
                <span>{item.name}</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2 py-1 text-xs text-cyan-200">{item.state}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
