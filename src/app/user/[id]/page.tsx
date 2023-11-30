import { api } from '@/services/api'
import React from 'react'

const DynamicUserPage = async (props: any) => {
  const data = await fetchData(props.params.id)

  console.log({ data })

  return (
    <main className="w-screen min-h-screen px-8 py-5 ">
      {/* <section className="flex gap-16  h-auto">
        <div className="flex gap-8 items-center ">
          <div
            className={
              'flex items-center justify-center bg-slate-500 rounded-full relative w-32 h-32 '
            }
          >
            {data.image ? (
              <img
                src={data.image.url}
                alt="avatar"
                className={'object-cover rounded-full absolute '}
              />
            ) : (
              <p className={'text-white font-bold text-2xl'}>UN</p>
            )}
          </div>
          <div>
            <p>
              Bem vindo,
              {data.profile.name?.trim() !== ''
                ? ` ${data.profile.name?.trim()}`
                : ' Novo usuario'}
            </p>
          </div>
        </div>
        <div className={'flex flex-col h-32 w-96 rounded-lg bg-zinc-400'}></div>
      </section> */}
    </main>
  )
}

export default DynamicUserPage

const baseUrl = process.env.NEXT_API_URL

const fetchData = async (id: string): Promise<UserData> => {
  /* const response = await fetch(`${baseUrl}/user/info?type=client&id=${id}`, {
    method: 'GET'
  }) */
  const body = {
    email: 'joao.felipe.21@gmail.com',
    password: 'batata123'
  }

  const response = await fetch(`${baseUrl}/user/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  const data = response.json()

  return data
}
