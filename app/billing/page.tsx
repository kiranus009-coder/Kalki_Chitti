import Link from "next/link";
import { ArrowRight, CreditCard, DollarSign, ReceiptText, WalletCards } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";

const spend = [
  { label: "Inference cost", value: "$86.2K", trend: "+12.4%" },
  { label: "Knowledge storage", value: "$18.7K", trend: "+4.1%" },
  { label: "Guardrail spend", value: "$11.4K", trend: "+3.7%" },
  { label: "Net margin", value: "47.8%", trend: "+2.2%" },
];

export default function BillingPage() {
  return (
    <DashboardShell>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-amber-300/80">Billing & usage</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Monetization and quota controls</h1>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-100">
          View billing ledger <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {spend.map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
            <div className="flex items-center justify-between">
              <div className="rounded-xl border border-amber-400/20 bg-amber-500/10 p-2 text-amber-200"><WalletCards className="h-5 w-5" /></div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">{item.trend}</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{item.label}</h2>
            <p className="mt-3 text-2xl font-semibold text-amber-100">{item.value}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
