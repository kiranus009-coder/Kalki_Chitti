import { Bell, Search, Settings2 } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/75 px-6 py-4 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div className="flex w-full max-w-xl items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-2 text-slate-300 shadow-glow">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            aria-label="Search"
            placeholder="Search apps, agents, logs..."
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-white/10 bg-slate-900/60 p-2.5 text-slate-200 hover:border-cyan-400/20">
            <Bell className="h-4 w-4" />
          </button>
          <button className="rounded-xl border border-white/10 bg-slate-900/60 p-2.5 text-slate-200 hover:border-cyan-400/20">
            <Settings2 className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 font-semibold text-slate-950">
              K
            </div>
            <div className="leading-none">
              <p className="text-sm font-medium text-white">Kalki</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">Ops Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
