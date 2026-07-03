const events = [
  { title: 'Nova solicitação de compra', time: '08:12', status: 'Pendente' },
  { title: 'Documento assinado', time: '09:40', status: 'Concluído' },
  { title: 'Reserva de sala confirmada', time: '10:27', status: 'Em andamento' },
  { title: 'Inventário atualizado', time: '11:05', status: 'Atenção' }
];

export function LatestMovements() {
  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-soft dark:border-slate-800/80 dark:bg-slate-900">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Últimas movimentações</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Eventos em tempo real e atualizações de processo.</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {events.map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.time}</p>
              </div>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-900/20 dark:text-brand-200">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
