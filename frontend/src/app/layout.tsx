import './globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Providers } from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HUB ES+ Smart Office',
  description: 'Plataforma de gestão administrativa para HUB ES+'.
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
