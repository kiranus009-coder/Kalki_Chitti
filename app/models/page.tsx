import Link from "next/link";
import { ArrowRight, BrainCircuit, Database, Layers3, Sparkles, Zap } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";

const providers = [
  { name: "GPT-4.1 Turbo", type: "LLM", cost: "$0.018 / 1K", status: "Low latency" },
  { name: "Claude 3.5 Sonnet", type: "Reasoning", cost: "$0.021 / 1K", status: "High QoS" },
  { name: "Gemini 2.0 Flash", type: "Vision", cost: "$0.012 / 1K", status: "Balanced" },
  { name: "Llama 3.1 70B", type: "Open weight", cost: "$0.009 / 1K", status: "Cost-efficient" },
];

export default function ModelsPage() {
  return (
    <DashboardShell>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">Models & Providers</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Provider routing and model quality</h1>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100">
          Review model pool <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {providers.map((provider) => (
          <div key={provider.name} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
            <div className="flex items-center justify-between">
              <div className="rounded-xl border border-sky-400/20 bg-sky-500/10 p-2 text-sky-200"><Layers3 className="h-5 w-5" /></div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">{provider.status}</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{provider.name}</h2>
            <p className="mt-2 text-sm text-slate-400">{provider.type}</p>
            <p className="mt-4 text-lg font-semibold text-cyan-200">{provider.cost}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
