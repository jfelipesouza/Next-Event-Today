import { api } from '@/services/api'
import React from 'react'

const DynamicUserPage = async (props: any) => {
  const userData = await fetchData(props.params.id)

  console.log({ userData })

  return <main className="w-screen min-h-screen px-8 py-5 "></main>
}

export default DynamicUserPage

const baseUrl = process.env.NEXT_API_URL

const fetchData = async (id: string): Promise<UserData> => {
  const response = await fetch(`${baseUrl}/user/info?id=${id}`, {
    method: 'GET'
  })

  return await response.json()
}
