import { ReactNode } from 'react';
import { Bell, Bookmark, LayoutDashboard, Settings2, User, Users, FileText, ClipboardList, Box, Calendar, AlertCircle, MessageSquare, BarChart3, Cpu } from 'lucide-react';

interface ShellProps {
  children: ReactNode;
}

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { label: 'Usuários', icon: Users, href: '/usuarios' },
  { label: 'Setores', icon: User, href: '/setores' },
  { label: 'Documentos', icon: FileText, href: '/documentos' },
  { label: 'Compras', icon: ClipboardList, href: '/compras' },
  { label: 'Estoque', icon: Box, href: '/estoque' },
  { label: 'Materiais', icon: Box, href: '/materiais' },
  { label: 'Equipamentos', icon: Box, href: '/equipamentos' },
  { label: 'Agenda', icon: Calendar, href: '/agenda' },
  { label: 'Eventos', icon: Calendar, href: '/eventos' },
  { label: 'Ocorrências', icon: AlertCircle, href: '/ocorrencias' },
  { label: 'Comunicação', icon: MessageSquare, href: '/comunicacao' },
  { label: 'Indicadores', icon: BarChart3, href: '/indicadores' },
  { label: 'IA', icon: Cpu, href: '/ia' },
  { label: 'Configurações', icon: Settings2, href: '/configuracoes' }
];

export function AppShell({ children }: ShellProps) {
  return (
    <div className="min-h-screen bg-surface-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-6 px-4 py-5 xl:px-8">
        <aside className="hidden w-72 flex-col gap-6 rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-soft dark:border-slate-800/80 dark:bg-slate-900 xl:flex">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-600">HUB ES+</p>
              <h2 className="mt-2 text-lg font-semibold">Smart Office</h2>
            </div>
            <button className="rounded-3xl bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200">
              <Bookmark className="h-4 w-4" />
            </button>
          </div>
          <div className="rounded-[28px] border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Search</p>
            <input
              type="search"
              placeholder="Buscar módulo"
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
          <nav className="flex flex-1 flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </nav>
          <div className="rounded-[28px] border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-brand-600 text-white">A</div>
              <div>
                <p className="text-sm font-semibold">Ana Silva</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Administrador</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-[32px] border border-slate-200/80 bg-white p-5 shadow-soft dark:border-slate-800/80 dark:bg-slate-900">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Olá, Ana</p>
              <h1 className="text-2xl font-semibold">Bem-vinda ao HUB ES+ Smart Office</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="inline-flex h-11 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                <Bell className="mr-2 h-4 w-4" /> Notificações
              </button>
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
