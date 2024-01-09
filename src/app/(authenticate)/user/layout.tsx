import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

import Sidebar from '@/components/sidebar'
import { TOKEN } from '@/services/constants/tokens'
import { SidebarProvider } from '@/services/context/SidebarContext'

export const metadata: Metadata = {
  title: 'All Games - User',
  description:
    'Veja as suas informações e edite-as quando quiser ou como precisar ',
  icons: { apple: '/icon.png', icon: '/icon.png' }
}

const ClientLayout = async ({ children }: { children: React.ReactNode }) => {
  await init()
  return (
    <SidebarProvider>
      <div className={'flex flex-1'}>
        <Sidebar />
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

export default ClientLayout
