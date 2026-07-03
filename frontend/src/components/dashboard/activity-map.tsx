export function ActivityMap() {
  return (
    <div className="mt-6 rounded-[24px] border border-slate-200/80 bg-slate-50 p-6 text-slate-700 dark:border-slate-800/80 dark:bg-slate-950 dark:text-slate-200">
      <div className="h-72 rounded-[20px] bg-gradient-to-br from-brand-50 via-slate-100 to-slate-200 p-4 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="h-full rounded-[20px] border border-dashed border-slate-300/70 bg-white/70 p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-white">Mapa de atividades</p>
          <p className="mt-3 text-sm leading-relaxed">Visão rápida das unidades, setor de compras e fluxo de aprovações em execução.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-100 p-3 dark:bg-slate-800">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Compras</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">8 processos ativos</p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-3 dark:bg-slate-800">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Estoque</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">2 alertas críticos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
