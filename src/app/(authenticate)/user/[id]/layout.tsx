import { SidebarProvider } from '@/services/context/SidebarContext'
import { Metadata } from 'next'

import Sidebar from '@/components/sidebar'

export const metadata: Metadata = {
  title: 'Event Today - User',
  description:
    'Veja as suas informações e edite-as quando quiser ou como precisar ',
  icons: { apple: '/icon.png', icon: '/icon.png' }
}

export default function ClientLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <Sidebar />
      {children}
    </SidebarProvider>
  )
}
