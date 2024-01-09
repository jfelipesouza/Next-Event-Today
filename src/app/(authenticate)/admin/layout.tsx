import '../layout.css'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { TOKEN } from '@/services/constants/tokens'
import { SidebarProvider } from '@/services/context/SidebarContext'
import Sidebar from '@/components/sidebar'

export const metadata: Metadata = {
  title: 'All Games - Admin',
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
      <div className={'flex flex-1'}>
        <Sidebar type="admin" />
        {children}
      </div>
    </SidebarProvider>
  )
}

const init = async () => {
  'use server'
  const allCookies = cookies().getAll()
  if (allCookies.length > 0) {
    if (cookies().has(TOKEN.APP_USER)) {
      const token = JSON.parse(cookies().get(TOKEN.APP_USER)!.value) as UserData
      if (token.type === 'admin') {
        redirect(`/admin/${token.id}`)
      } else {
        redirect(`/user/${token.id}`)
      }
    } else {
      redirect('/auth/signin')
    }
  } else {
    redirect('/auth/signin')
  }
}
