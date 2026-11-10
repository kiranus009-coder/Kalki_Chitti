import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Gauge,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { cards, flowBars, requestTable, signalSeries } from "@/lib/data";

export default function HomePage() {
  return (
    <DashboardShell>
      <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">Chitti Live</p>
          <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl">AI Operations Command Center</h1>
        </div>
        <div className="flex items-center gap-3 self-start rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 shadow-glow">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          <span className="text-sm text-slate-200">System health: optimal</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-glow backdrop-blur-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{card.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{card.value}</p>
                </div>
                <div className={`rounded-xl border p-2 ${card.tint}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                <span>{card.delta}</span>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
                  {card.trend}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1.7fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">AI flow</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Runtime orchestration</h2>
            </div>
            <Link href="/overview" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-sm text-cyan-200 hover:border-cyan-400/40">
              Open flow <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {flowBars.map((flow) => (
              <div key={flow.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">
                <div className="mb-4 flex items-center justify-between text-sm text-slate-300">
                  <span>{flow.label}</span>
                  <span className="text-cyan-300">{flow.value}</span>
                </div>
                <div className="flex h-28 items-end gap-2">
                  {flow.values.map((value, index) => (
                    <span
                      key={`${flow.label}-${index}`}
                      className="w-full rounded-t-xl bg-gradient-to-t from-cyan-500 via-sky-400 to-violet-400"
                      style={{ height: `${value}%` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Live signals</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Traffic health</h2>
            </div>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">Stable</div>
          </div>
          <div className="mt-5 flex h-36 items-end gap-1">
            {signalSeries.map((point, index) => (
              <div
                key={`${point}-${index}`}
                className="flex-1 rounded-t-xl bg-gradient-to-t from-violet-500/80 via-cyan-500/80 to-sky-300/80"
                style={{ height: `${point}%` }}
              />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-3">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">P95 latency</p>
              <p className="mt-2 text-xl font-semibold text-white">213 ms</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-3">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Error rate</p>
              <p className="mt-2 text-xl font-semibold text-white">0.13%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Requests</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Live request stream</h2>
            </div>
            <button className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 text-sm text-slate-300">
              Export
            </button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm">
              <thead className="bg-slate-950/80 text-slate-300">
                <tr>
                  <th className="px-4 py-3 font-medium">Route</th>
                  <th className="px-4 py-3 font-medium">Model</th>
                  <th className="px-4 py-3 font-medium">Latency</th>
                  <th className="px-4 py-3 font-medium">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 bg-slate-900/40 text-slate-200">
                {requestTable.map((row) => (
                  <tr key={row.route}>
                    <td className="px-4 py-3">{row.route}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2 py-1 text-xs text-cyan-200">
                        {row.model}
                      </span>
                    </td>
                    <td className="px-4 py-3">{row.latency}</td>
                    <td className="px-4 py-3">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Intelligence</p>
                <h2 className="mt-2 text-xl font-semibold text-white">Agent status</h2>
              </div>
              <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-2 py-1 text-xs text-violet-200">
                3 active
              </span>
            </div>
            <div className="mt-5 space-y-4">
              {[
                { name: "Ops Copilot", score: "96.4%", status: "Healthy" },
                { name: "Knowledge Synth", score: "92.3%", status: "Learning" },
                { name: "Guardrails Core", score: "99.1%", status: "Audited" },
              ].map((agent) => (
                <div key={agent.name} className="rounded-2xl border border-white/10 bg-slate-950/40 p-3">
                  <div className="flex items-center justify-between text-sm text-slate-200">
                    <span>{agent.name}</span>
                    <span className="text-cyan-300">{agent.score}</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400"
                      style={{ width: `${agent.score.replace("%", "")}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">{agent.status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900/70 to-violet-500/10 p-5 shadow-glow">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Uptime</p>
            <h2 className="mt-2 text-3xl font-bold text-white">99.98%</h2>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
              <span>Self-healing enabled</span>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-emerald-200">
                Resolved
              </span>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
