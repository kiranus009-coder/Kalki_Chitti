import Link from "next/link";
import { ArrowRight, Database, Layers3, Sparkles } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";

const knowledge = [
  { title: "Product Playbooks", count: "2.4M chunks", status: "Indexed" },
  { title: "Support Knowledge", count: "840K chunks", status: "Fresh" },
  { title: "Enterprise Docs", count: "610K chunks", status: "Synced" },
  { title: "MCP Assets", count: "320K chunks", status: "Live" },
];

export default function KnowledgePage() {
  return (
    <DashboardShell>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-300/80">Knowledge & RAG</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Context intelligence and retrieval</h1>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-100">
          Open retrieval graph <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {knowledge.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
            <div className="flex items-center justify-between">
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-2 text-emerald-200">
                <Database className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200">
                {item.status}
              </span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm text-slate-400">{item.count}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
