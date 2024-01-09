import React from 'react'

import { UserHeader } from '@/components/userHeader'
import {
  AdminInformation,
  ImageInformation
} from '@/components/cards/SettingsCards'

const AdminSettignsScreen = async ({ params }: UserPage) => {
  const data = await fetchData(params.id)
  return (
    <main className="w-screen min-h-screen">
      <UserHeader />
      <div className="w-full h-screen relative gap-4 my-2 px-8 max-[450px]:px-2 pt-8 pb-32 flex flex-col flex-1 overflow-y-auto scrollbar">
        <h2 className={'text-2xl text-slate-800 font-bold mb-8'}>
          Configurações
        </h2>
        <div className={'flex flex-wrap gap-8 justify-center'}>
          <AdminInformation adminInfo={data.user} />
          <ImageInformation imageInfo={data.image} />
        </div>
      </div>
    </main>
  )
}

export default AdminSettignsScreen

const baseUrl = process.env.NEXT_API_URL

const fetchData = async (
  id: string
): Promise<{ user: AdminInfo; image: Image | null }> => {
  const response = await fetch(`${baseUrl}/user/info?id=${id}`, {
    method: 'GET',
    cache: 'force-cache',
    next: { revalidate: 60 }
  })
  const data = (await response.json()).user as UserData
  const responseData = {
    user: {
      name: data.adminProfile!.name,
      cnpj: data.adminProfile!.cnpj,
      contactEmail: data.adminProfile!.contactEmail,
      contactPhone: data.adminProfile!.contactPhone
    },
    image: data.image
  }
  const now = new Date(Date.now())
  console.log({
    responseData,
    hour: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  })
  return responseData
}
