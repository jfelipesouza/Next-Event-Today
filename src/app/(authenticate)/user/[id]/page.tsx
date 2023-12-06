import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { TOKEN } from '@/services/constants/tokens'
import { deleteAllCookies } from '@/services/actions/cookies'

const DynamicUserPage = async (props: any) => {
  const user = await init()

  return (
    <main
      className={`flex flex-1 flex-wrap overflow-y-scroll overflow-x-hidden gap-1 px-4 py-8 h-screen bg-red-400`}
    >
      {props.params.id}

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </main>
  )
}

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

const fetchEvents = async (id: string): Promise<Events[] | null> => {
  return null
}

export default DynamicUserPage
