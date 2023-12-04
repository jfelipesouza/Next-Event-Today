import React from 'react'
import Header from '@/components/header'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { TOKEN } from '@/services/constants/tokens'

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  init()
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default HomeLayout

const init = () => {
  const userCookie = cookies().has(TOKEN.APP_USER)
  if (userCookie) {
    redirect('/user')
  }
}
