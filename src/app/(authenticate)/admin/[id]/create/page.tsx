import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { UserHeader } from '@/components/userHeader'
import { TOKEN } from '@/services/constants/tokens'
import { deleteAllCookies } from '@/services/actions/cookies'

const CreateEventScreen = async ({}: UserPage) => {
  return (
    <main className="w-screen min-h-screen bg-red-400">
      <UserHeader />
    </main>
  )
}

export default CreateEventScreen

const baseUrl = process.env.NEXT_API_URL

const fetchData = async (id: string): Promise<UserData> => {
  const response = await fetch(`${baseUrl}/user/info?id=${id}`, {
    method: 'GET',
    cache: 'no-store'
  })

  return await response.json()
}
