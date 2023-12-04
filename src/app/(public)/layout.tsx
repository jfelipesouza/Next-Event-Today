import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Header from '@/components/header'
import { TOKEN } from '@/services/constants/tokens'

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  init()
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default PublicLayout

const init = () => {
  const userCookie = cookies().has(TOKEN.APP_USER)
  if (userCookie) {
    const user = JSON.parse(cookies().get(TOKEN.APP_USER)!.value)
    console.log({ userDATA: user })
    if (user) {
      redirect(`/user/${user.id}`)
    }
  }
}
