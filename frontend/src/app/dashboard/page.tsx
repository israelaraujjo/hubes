import { DashboardPage } from '@/components/pages/dashboard-page';
import { AppShell } from '@/components/layout/app-shell';

export default function DashboardPageRoute() {
  return (
    <AppShell>
      <DashboardPage />
    </AppShell>
  );
}
