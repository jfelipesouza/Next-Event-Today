import React from 'react'
import Image from 'next/image'

import Header from '@/components/header'
import { RegisterCard } from '@/components/cards/RegisterCard'
import { Toast } from '@/components/toast'

const Register: React.FC = () => {
  return (
    <>
      <Header />
      <main className=" w-screen min-h-[80vh] flex justify-between">
        <div className="w-[60vw] h-[90vh] flex items-center justify-center max-[800px]:w-[100vw]">
          <RegisterCard />
        </div>
        <div className="w-[40vw] min-h-[90vh] relative max-[800px]:hidden  ">
          <Image
            alt="Event image register"
            src={'/register-image.png'}
            fill={true}
            sizes="cover"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </main>
      <Toast />
    </>
  )
}

export default Register
