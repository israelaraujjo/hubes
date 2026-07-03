import Link from 'next/link';
import { LoginCard } from '@/components/pages/login-card';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-surface-50 dark:bg-slate-950 px-4 py-10">
      <LoginCard />
    </main>
  );
}
