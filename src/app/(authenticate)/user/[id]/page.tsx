import React from 'react'

const DynamicUserPage = async (props: any) => {
  const userData = await fetchData(props.params.id)

  return (
    <main
      className={`flex flex-1 flex-wrap overflow-y-scroll overflow-x-hidden gap-4 px-4 py-8 h-screen`}
    >
      {userData.id}
    </main>
  )
}

const baseUrl = process.env.NEXT_API_URL

const fetchData = async (id: string): Promise<UserData> => {
  const response = await fetch(`${baseUrl}/user/info?id=${id}`, {
    method: 'GET',
    cache: 'no-cache'
  })

  return await response.json()
}

export default DynamicUserPage
