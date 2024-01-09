import React from 'react'

import { UserHeader } from '@/components/userHeader'

const UserSettingsScreen = async ({}: UserPage) => {
  return (
    <main className="w-screen min-h-screen bg-red-600">
      <UserHeader />
    </main>
  )
}

export default UserSettingsScreen

const baseUrl = process.env.NEXT_API_URL

const fetchData = async (id: string): Promise<UserData> => {
  const response = await fetch(`${baseUrl}/user/info?id=${id}`, {
    method: 'GET'
  })

  return await response.json()
}
