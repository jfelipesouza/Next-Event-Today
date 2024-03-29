import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { UserHeader } from '@/components/userHeader'
import { TOKEN } from '@/services/constants/tokens'
import { deleteAllCookies } from '@/services/actions/cookies'

const UserSearchScreen = async ({}: UserPage) => {
  return (
    <main className="w-screen min-h-screen bg-emerald-500">
      <UserHeader />
    </main>
  )
}

export default UserSearchScreen

const baseUrl = process.env.NEXT_API_URL
