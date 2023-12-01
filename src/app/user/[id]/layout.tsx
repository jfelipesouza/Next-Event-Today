import Sidebar from '@/components/sidebar'
import { Metadata } from 'next'

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
    <div className="w-screen h-screen relative">
      <Sidebar />
      {children}
    </div>
  )
}
