import Header from '@/components/header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Register: React.FC = () => {
  return (
    <>
      <Header />
      <main className=" w-screen min-h-[80vh] flex justify-between">
        <div className="w-[60vw] h-[90vh] flex items-center justify-center">
          <div
            className={`min-w-[60%] min-h-[400px] bg-white px-12 py-10 rounded-lg shadow-md flex flex-col gap-4 `}
          >
            <h2 className="text-2xl text-zinc-900 font-bold ">
              Crie a sua conta agora
            </h2>
            <h3 className="text-xl text-zinc-900 font-medium">
              É um organizador?
              <Link
                href={'auth/register/organize'}
                className="underline text-secundary-400 ml-1"
              >
                Clique aqui
              </Link>
            </h3>

            <form></form>
          </div>
        </div>
        <div className="w-[40vw] min-h-[90vh] relative">
          <Image
            alt="Event image register"
            src={'/register-image.png'}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </main>
    </>
  )
}

export default Register
