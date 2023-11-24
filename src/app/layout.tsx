import { AuthContextProvider } from '@/services/context/AuthContext'
import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import { NavigationProvider } from '@/services/context/NavigationContext'
import { SideNavigation } from '@/components/sideNavigation'

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600', '700', '900'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Event Today',
  description:
    'Explore o mundo emocionante dos eventos esportivos em nosso site dedicado a amantes do esporte. Inscreva-se agora para participar de competições, jogos e partidas de alto nível. Descubra e acompanhe eventos esportivos, datas, horários e adquira ingressos com facilidade. Junte-se à nossa comunidade de entusiastas esportivos e não perca a chance de vivenciar a ação esportiva ao vivo e de perto. ',
  manifest: '/manifest.json',
  icons: { apple: '/icon.png', icon: '/icon.png' }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.variable} lang="pt-BR">
      <body>
        <AuthContextProvider>
          <NavigationProvider>
            <Header />
            {children}
            <SideNavigation />
          </NavigationProvider>
        </AuthContextProvider>
      </body>
    </html>
  )
}
