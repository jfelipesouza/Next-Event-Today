import React from 'react'
import Image from 'next/image'

import { FormCard, Form } from '@/components/forms'
import Header from '@/components/header'

const SignIn: React.FC = () => {
  return (
    <>
      <Header />
      <main className=" w-screen min-h-[80vh] flex justify-between">
        <div className="w-[60vw] h-[90vh] flex items-center justify-center max-[800px]:w-[100vw]">
          <FormCard
            title={'Entre agora e explore'}
            subtitle={'Novo por aqui? Crie sua conta'}
            link={'register'}
            linkText={'clique aqui!'}
          >
            <Form></Form>
          </FormCard>
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
