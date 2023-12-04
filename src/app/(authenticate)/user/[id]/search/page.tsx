import React from 'react'

const UserSearchScreen = async () => {
  return <main className="w-screen min-h-screen bg-emerald-500"></main>
}

export default UserSearchScreen

const baseUrl = process.env.NEXT_API_URL

const fetchData = async (id: string): Promise<UserData> => {
  const response = await fetch(`${baseUrl}/user/info?id=${id}`, {
    method: 'GET'
  })

  return await response.json()
}
