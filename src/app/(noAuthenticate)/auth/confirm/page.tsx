import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { jwtDecode } from 'jwt-decode'

import { API_MESSAGES } from '@/services/constants/apiMessages'

const Confirm = async ({ searchParams }: any) => {
  const status = await confirmAccount(searchParams.token)

  return (
    <main className="w-screen ">
      <div className="w-full h-full gap-10 flex flex-col items-center mt-8">
        <div className="min-w-[300px] min-h-[300px] w-[50vw] h-[25vw] relative mb-4 mt-8">
          {status ? (
            <Image alt="sad face" src={'/happy.svg'} fill />
          ) : (
            <Image alt="happy face" src={'/sad.svg'} fill />
          )}
        </div>
        <div className='"w-full flex items-center justify-center px-4'>
          {status ? (
            <p className="text-lg font-semibold text-center max-[500px]:w-[80%] w-full">
              Sua conta foi confirmada com sucesso!{' '}
              <Link
                href={'/auth/signin'}
                className="text-secundary-500 underline animate-pulse"
              >
                Clique aqui
              </Link>{' '}
              para ir ao login
            </p>
          ) : (
            <p className=" text-lg font-semibold max-[500px]:w-[80%] w-full text-center ">
              Houve um erro ao confirmar a sua conta. Tente o cadastro novamente{' '}
              <Link
                href={'/auth/register'}
                className="text-secundary-500 underline animate-pulse"
              >
                Clique Aqui
              </Link>
            </p>
          )}
        </div>
      </div>
    </main>
  )
}

const base_url = process.env.NEXT_API_URL
const confirmAccount = async (token: string): Promise<boolean> => {
  let status = false
  console.log('render')
  try {
    const { id, code } = jwtDecode(token) as CONFIRM_TOKEN
    const body = JSON.stringify({ id, code })
    const response = await fetch(`${base_url}/user/confirm`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body,
      cache: 'no-cache'
    })
    const data = await response.json()

    if (
      data.message === API_MESSAGES.CONFIRM_ACCOUNT_SUCCESS ||
      data.message === API_MESSAGES.USER_ALREDY_ACTIVE
    ) {
      status = true
    }
  } catch (error) {
    console.error(error)
  } finally {
    return status
  }
}
export default Confirm
