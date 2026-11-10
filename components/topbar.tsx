import Link from "next/link";
import { Bell, BookOpenText, ChevronDown, LayoutGrid, Search, Sparkles, Zap } from "lucide-react";

const navItems = [
  { href: "/overview", label: "Overview", icon: LayoutGrid },
  { href: "/agents", label: "Agents", icon: Sparkles },
  { href: "/models", label: "Models", icon: Zap },
  { href: "/knowledge", label: "Knowledge", icon: BookOpenText },
  { href: "/observability", label: "Observability", icon: Bell },
  { href: "/billing", label: "Billing", icon: Bell },
  { href: "/security", label: "Security", icon: Bell },
  { href: "/settings", label: "Settings", icon: ChevronDown },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-[280px] flex-col border-r border-white/10 bg-slate-950/80 px-4 py-5 backdrop-blur-xl">
      <div className="mb-8 flex items-center justify-between px-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 font-bold text-slate-950 shadow-[0_0_24px_rgba(59,130,246,0.6)]">
            C
          </div>
          <div>
            <p className="text-lg font-semibold text-white">Chitti</p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">AI Ops</p>
          </div>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="group flex items-center justify-between rounded-2xl border border-transparent px-3 py-2.5 text-sm text-slate-300 transition hover:border-cyan-400/20 hover:bg-slate-900/70 hover:text-white"
          >
            <span className="flex items-center gap-3">
              <Icon className="h-4 w-4" />
              {label}
            </span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-violet-500/10 p-4">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Live assist</p>
        <h3 className="mt-2 text-lg font-semibold text-white">Chitti Agent</h3>
        <p className="mt-2 text-sm text-slate-300">Human-safe orchestration across routing, retrieval, and response governance.</p>
      </div>
    </aside>
  );
}
