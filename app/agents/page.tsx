import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, Database, MessageSquareText, ShieldCheck, Sparkles } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";

const agentCards = [
  { name: "Ops Copilot", status: "Ready", icon: Bot },
  { name: "Knowledge Synth", status: "Indexing", icon: BrainCircuit },
  { name: "Review Loop", status: "Pending", icon: MessageSquareText },
  { name: "Risk Monitor", status: "Watching", icon: ShieldCheck },
];

export default function AgentsPage() {
  return (
    <DashboardShell>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-violet-300/80">Agents</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Autonomous workflow orchestration</h1>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-100">
          Launch agent studio <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {agentCards.map(({ name, status, icon: Icon }) => (
          <div key={name} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
            <div className="flex items-center justify-between">
              <div className="rounded-xl border border-violet-400/20 bg-violet-500/10 p-2 text-violet-200"><Icon className="h-5 w-5" /></div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">{status}</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{name}</h2>
            <p className="mt-2 text-sm text-slate-300">Multi-step reasoning, context retrieval, and action execution for live production workflows.</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
