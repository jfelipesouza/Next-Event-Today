import React from 'react'
import Image from 'next/image'

import { Form, FormCard } from '@/components/forms'
import Header from '@/components/header'
import { Toast } from '@/components/toast'

const OrganizerRegister: React.FC = () => {
  return (
    <>
      <Header />
      <main className=" w-screen min-h-[80vh] flex justify-between">
        <div className="w-[60vw] h-[90vh] flex items-center justify-center max-[800px]:w-[100vw]">
          <FormCard
            subtitle={'Buscando eventos somente?'}
            link={'/auth/register'}
            title="Crie a sua conta agora"
          >
            <Form></Form>
          </FormCard>
        </div>
        <div className="w-[40vw] min-h-[90vh] relative max-[800px]:hidden  ">
          <Image
            alt="Event image register"
            src={'/register.png'}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </main>
      <Toast />
    </>
  )
}

export default OrganizerRegister
