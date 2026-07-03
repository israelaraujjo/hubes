import { motion } from 'framer-motion';
import { ActivityMap } from '@/components/dashboard/activity-map';
import { InfoCard } from '@/components/dashboard/info-card';
import { LatestMovements } from '@/components/dashboard/latest-movements';
import { StatsChart } from '@/components/dashboard/stats-chart';

const stats = [
  { label: 'Documentos', value: 1264, delta: '+12%' },
  { label: 'Compras', value: 78, delta: '+4%' },
  { label: 'Solicitações', value: 32, delta: '-6%' },
  { label: 'Estoque crítico', value: 9, delta: '+1%' }
];

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-surface-50 dark:bg-slate-950 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-brand-600 uppercase tracking-[0.3em]">HUB ES+ Smart Office</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">Painel Executivo</h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Visão unificada dos processos administrativos, compras, estoque e eventos.
            </p>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-2">
          {stats.map((item) => (
            <InfoCard key={item.label} label={item.label} value={item.value} delta={item.delta} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-soft dark:border-slate-800/80 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Atividades recentes</h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Timeline das últimas movimentações do HUB.</p>
              </div>
            </div>
            <StatsChart />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-soft dark:border-slate-800/80 dark:bg-slate-900"
          >
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Mapa de atividades</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Principais áreas e fluxos de processos monitorados.</p>
            </div>
            <ActivityMap />
          </motion.section>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <LatestMovements />
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-soft dark:border-slate-800/80 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Agenda do mês</h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Eventos, reuniões e reservas planejadas.</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                12/07 - Reunião do Comitê de Compras
              </div>
              <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                15/07 - Visita técnica de auditoria
              </div>
              <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                21/07 - Entrega de materiais no estoque central
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
