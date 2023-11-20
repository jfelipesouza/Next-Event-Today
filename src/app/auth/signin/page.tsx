import React from 'react'
import Image from 'next/image'

import Header from '@/components/header'
import { LoginCard } from '@/components/cards/LoginCard'

const SignIn: React.FC = () => {
  return (
    <>
      <Header />
      <main className=" w-screen min-h-[80vh] flex justify-between">
        <div className="w-[60vw] h-[90vh] flex items-center justify-center max-[800px]:w-[100vw]">
          <LoginCard />
        </div>
        <div className="w-[40vw] min-h-[90vh] relative max-[800px]:hidden  ">
          <Image
            alt="Event image register"
            src={'/signin.png'}
            fill
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL={'/signin.png'}
          />
        </div>
      </main>
    </>
  )
}

export default SignIn
