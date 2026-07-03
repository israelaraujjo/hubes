interface InfoCardProps {
  label: string;
  value: number;
  delta: string;
}

export function InfoCard({ label, value, delta }: InfoCardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-soft dark:border-slate-800/80 dark:bg-slate-900">
      <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{label}</p>
      <h3 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{value}</h3>
      <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">{delta}</p>
    </div>
  );
}
