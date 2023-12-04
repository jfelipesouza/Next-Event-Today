import React from 'react'

const DynamicUserPage = async (props: any) => {
  const userData = await fetchData(props.params.id)

  return (
    <main className="flex flex-col flex-1 min-h-screen px-8 py-5 ">
      <pre>{JSON.stringify(userData)}</pre>
    </main>
  )
}

const baseUrl = process.env.NEXT_API_URL

const fetchData = async (id: string): Promise<UserData> => {
  const response = await fetch(`${baseUrl}/user/info?id=${id}`, {
    method: 'GET'
  })

  return await response.json()
}

export default DynamicUserPage
