import React from 'react'
import Image from 'next/image'

import { LoginCard } from '@/components/cards/LoginCard'

const SignIn: React.FC = () => {
  return (
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
          blurDataURL={'/signin.png'}
          priority
        />
      </div>
    </main>
  )
}

export default SignIn
