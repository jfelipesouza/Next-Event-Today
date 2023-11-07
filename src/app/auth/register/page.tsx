import React from 'react'
import Image from 'next/image'

import { Form, FormCard } from '@/components/forms'
import Header from '@/components/header'

const Register: React.FC = () => {
  return (
    <>
      <Header />
      <main className=" w-screen min-h-[80vh] flex justify-between">
        <div className="w-[60vw] h-[90vh] flex items-center justify-center max-[800px]:w-[100vw]">
          <FormCard
            subtitle={'É organizador?'}
            link={'register/organizer'}
            title="Crie a sua conta agora"
          >
            <Form></Form>
          </FormCard>
        </div>
        <div className="w-[40vw] min-h-[90vh] relative max-[800px]:hidden  ">
          <Image
            alt="Event image register"
            src={'/register-image.png'}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </main>
    </>
  )
}

export default Register
