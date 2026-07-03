import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Seg', docs: 24, compras: 8 },
  { name: 'Ter', docs: 18, compras: 10 },
  { name: 'Qua', docs: 30, compras: 12 },
  { name: 'Qui', docs: 22, compras: 14 },
  { name: 'Sex', docs: 28, compras: 9 },
  { name: 'Sáb', docs: 15, compras: 7 },
  { name: 'Dom', docs: 20, compras: 11 }
];

export function StatsChart() {
  return (
    <div className="mt-6 h-80 w-full rounded-[24px] bg-slate-50 p-4 dark:bg-slate-950">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 12, right: 8, left: -16, bottom: -8 }}>
          <defs>
            <linearGradient id="docsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6455F4" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6455F4" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="comprasGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.28} />
              <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#64748b" />
          <YAxis axisLine={false} tickLine={false} stroke="#64748b" />
          <Tooltip
            contentStyle={{ backgroundColor: '#0f172a', borderRadius: 16, borderColor: 'rgba(148,163,184,0.3)' }}
            labelStyle={{ color: '#e2e8f0' }}
            formatter={(value: number) => `${value}`}
          />
          <Area type="monotone" dataKey="docs" stroke="#6455F4" fill="url(#docsGradient)" strokeWidth={3} />
          <Area type="monotone" dataKey="compras" stroke="#38BDF8" fill="url(#comprasGradient)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
