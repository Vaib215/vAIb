import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/providers/theme-provider';
import ThemeBtn from '@/components/layout/theme';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'vAIb',
  description: 'A fun experiment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeBtn />
          {children}
        </ ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
