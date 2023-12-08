import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { UserHeader } from '@/components/userHeader'
import { TOKEN } from '@/services/constants/tokens'
import { deleteAllCookies } from '@/services/actions/cookies'

const UserSettingsScreen = async () => {
  const user = await init()

  return (
    <main className="w-screen min-h-screen bg-red-600">
      <UserHeader user={user} />
    </main>
  )
}

export default UserSettingsScreen

const baseUrl = process.env.NEXT_API_URL

const init = async () => {
  'use server'
  const allCookies = cookies().getAll()
  if (allCookies.length > 0) {
    const userCookie = cookies().has(TOKEN.APP_USER)
    if (userCookie) {
      const userCookieValue = cookies().get(TOKEN.APP_USER)?.value
      if (userCookieValue) {
        return JSON.parse(userCookieValue) as UserData
      } else {
        deleteAllCookies()
        redirect('/auth/signin')
      }
    } else {
      deleteAllCookies()
      redirect('/auth/signin')
    }
  } else {
    redirect('/auth/signin')
  }
}

const fetchData = async (id: string): Promise<UserData> => {
  const response = await fetch(`${baseUrl}/user/info?id=${id}`, {
    method: 'GET'
  })

  return await response.json()
}
