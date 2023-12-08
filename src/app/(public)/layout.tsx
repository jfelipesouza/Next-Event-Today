import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Header from '@/components/header'
import { TOKEN } from '@/services/constants/tokens'
import { NavigationProvider } from '@/services/context/NavigationContext'
import { SideNavigation } from '@/components/sideNavigation'

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
  await init()
  return (
    <NavigationProvider>
      <Header />
      <SideNavigation />
      {children}
    </NavigationProvider>
  )
}

export default PublicLayout

const init = async () => {
  const userCookie = cookies().has(TOKEN.APP_USER)
  if (userCookie) {
    const userData = cookies().get(TOKEN.APP_USER)?.value
    if (userData) {
      const user = JSON.parse(userData)
      if (user) {
        redirect(`/user/${user.id}`)
      }
    }
  }
}
