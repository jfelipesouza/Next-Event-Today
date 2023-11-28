'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { jwtDecode } from 'jwt-decode'

import { api } from '@/services/api'

const Confirm: React.FC = () => {
  const { get } = useSearchParams()
  const navigation = useRouter()
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(false)
  const [timeout, setTime] = useState(10)

  useEffect(() => {
    const token = get('token')
    if (token) {
      try {
        const { id, code } = jwtDecode<{ id: string; code: string }>(token)
        confirmAccount({ id, code }).then()
      } catch (error) {}
      setLoading(false)
    }
  }, [get])

  useEffect(() => {
    if (status && timeout > 0) {
      setTimeout(() => {
        if (timeout > 0) {
          setTime(time => time - 1)
        }
      }, 1000)
    }
    if (timeout === 0) {
      navigation.push('/auth/signin')
    }
  }, [status, timeout, navigation])

  const confirmAccount = async ({ code, id }: { id: string; code: string }) => {
    const response = await api.put(`user/confirm`, { id, code })
    const message = response.data.message
    if (message.trim() === 'Conta confirmada!') {
      setStatus(true)
    } else {
      setStatus(false)
    }
  }

  return (
    <main className="w-screen h-screen ">
      {loading ? (
        <div className="flex w-full items-center justify-center h-screen text-2xl gap-4 text-secundary-500 ">
          <p>LOADING...</p>
          <div className="animate-bounce mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-12 w-12 text-secundary-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14v2a3 3 0 01-3 3H8a3 3 0 01-3-3v-2m0 0a8 8 0 018-8h0a8 8 0 018 8z"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className="w-full h-full gap-10 flex flex-col items-center mt-8">
          <div className="min-w-[300px] min-h-[300px] w-[50vw] h-[25vw] relative my-4">
            {status ? (
              <Image alt="sad face" src={'/happy.svg'} fill />
            ) : (
              <Image alt="sad face" src={'/sad.svg'} fill />
            )}
          </div>
          <div className='"w-full  flex items-center justify-center'>
            {status ? (
              <p className=" text-lg font-semibold">
                Sua conta foi confirmada com sucesso! Você será redirecionado
                para o login em{' '}
                <span className="font-black text-primary-400">{timeout}</span>{' '}
                segundos
              </p>
            ) : (
              <p className=" text-lg font-semibold w-[80%] text-center ">
                Houve um erro ao confirmar a sua conta. Tente o cadastro
                novamente{' '}
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
      )}
    </main>
  )
}

export default Confirm
