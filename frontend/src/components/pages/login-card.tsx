'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Lock, Mail, ShieldCheck, Sparkles } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres')
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginCard() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  function onSubmit(data: LoginFormValues) {
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
    console.log('login', data);
  }

  return (
    <div className="w-full max-w-md rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-soft dark:border-slate-800/80 dark:bg-slate-900">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">HUB ES+</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">Smart Office</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Acesso seguro ao sistema de gestão centralizada.
          </p>
        </div>
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-100 text-brand-700">
          <Sparkles className="h-6 w-6" />
        </div>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          E-mail
          <div className="mt-2 relative rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus-within:border-brand-500 focus-within:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white">
            <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              placeholder="seu.email@hubes.gov.br"
              className="w-full bg-transparent pl-10 outline-none"
              {...register('email')}
            />
          </div>
          {errors.email && <p className="mt-2 text-sm text-rose-600">{errors.email.message}</p>}
        </label>

        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Senha
          <div className="mt-2 relative rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus-within:border-brand-500 focus-within:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white">
            <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="password"
              placeholder="********"
              className="w-full bg-transparent pl-10 outline-none"
              {...register('password')}
            />
          </div>
          {errors.password && <p className="mt-2 text-sm text-rose-600">{errors.password.message}</p>}
        </label>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-3xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {loading ? 'Validando...' : 'Entrar'}
          <ShieldCheck className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
