'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { jwtDecode } from 'jwt-decode'

import Header from '@/components/header'
import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL

const Confirm: React.FC = () => {
  const searchParams = useSearchParams()
  const navigation = useRouter()
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(false)
  const [timeout, setTime] = useState(10)

  useEffect(() => {
    const token = searchParams.get('token') as string
    if (token) {
      const { id, code } = jwtDecode<{ id: string; code: string }>(token)
      confirmAccount({ id, code }).then()
      setLoading(false)
    }
  }, [searchParams])

  useEffect(() => {
    if (status) {
      setInterval(() => {
        if (timeout > 0) {
          setTime(time => time - 1)
        }
      }, 1000)
    }
  }, [status])

  useEffect(() => {
    if (timeout === 0) {
      navigation.push('/auth/signin')
    }
  }, [timeout, navigation])

  const confirmAccount = async ({ code, id }: { id: string; code: string }) => {
    const response = await axios.put(`${baseURL}/user/confirm`, { id, code })
    const message = response.data.message
    if (message.trim() === 'Conta confirmada!') {
      setStatus(true)
    } else {
      setStatus(false)
    }
  }

  return (
    <>
      <Header />
      <main className="w-screen h-screen flex flex-col items-center bg gap-9 ">
        {loading ? (
          <></>
        ) : (
          <>
            <div className="min-w-[300px] min-h-[300px] w-[50vw] h-[25vw] relative my-4">
              {status ? (
                <Image alt="sad face" src={'/happy.svg'} fill />
              ) : (
                <Image alt="sad face" src={'/sad.svg'} fill />
              )}
            </div>
            <div>
              <p className="text-lg">
                {status
                  ? `Sua conta foi confirmada com sucesso! Você será redirecionado para o login em ${timeout} segundos`
                  : `Houve um erro ao confirmar a sua conta. Tente o cadastro novamente`}
              </p>
            </div>
          </>
        )}
      </main>
    </>
  )
}

export default Confirm
