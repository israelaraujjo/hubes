interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-soft dark:border-slate-800/80 dark:bg-slate-900">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Módulo</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">{title}</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-2xl">{description}</p>
        </div>
      </div>
      <div className="rounded-[28px] border border-dashed border-slate-300/80 bg-slate-50 p-8 text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
        Em desenvolvimento: visão inicial do módulo e estrutura pronta para extensão.
      </div>
    </div>
  );
}
