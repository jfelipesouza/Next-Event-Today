'use client'

import React, { useState, useEffect } from 'react'
import FormComponent from './Form'

const AdminInformation: React.FC<UserInformationForms> = ({ adminInfo }) => {
  const [infomation, setInfomation] = useState<AdminInfo>({} as AdminInfo)
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (typeof adminInfo !== undefined) {
      setInfomation(adminInfo as AdminInfo)
    }
  }, [])

  return (
    <FormComponent.Card title="Informações pessoais" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 max-[870px]:grid-cols-1 gap-8">
        <FormComponent.Input
          title="Nome"
          id="name"
          infoValue={infomation ? infomation.name : ''}
          placeholder={'Ex: All Games'}
        />
        <FormComponent.Input
          title="CNPJ"
          id="cnpj"
          placeholder={'00000000000000'}
          type={'number'}
          mask="cnpj"
          infoValue={
            infomation
              ? typeof infomation.cnpj === 'string'
                ? infomation.cnpj
                : ''
              : ''
          }
        />
      </div>
      <p className="font-semibold text-lg text-zinc-900 my-3">
        Informações de contato
      </p>
      <div className="grid grid-cols-2 max-[870px]:grid-cols-1 gap-8">
        <FormComponent.Input
          title="E-mail"
          id="email"
          placeholder="contato@seuemail.com"
          infoValue={infomation ? infomation.contactEmail : ''}
        />
        <FormComponent.Input
          title="Telefone"
          mask="phone"
          id="phone"
          placeholder="99999999999"
          type={'number'}
          infoValue={infomation ? infomation.contactPhone : ''}
        />
      </div>
      <div className="flex justify-center flex-1 gap-4 mt-8">
        <button
          className={
            'py-2 px-16 bg-primary-400 text-white font-bold rounded hover:bg-primary-200'
          }
        >
          Salvar
        </button>
      </div>
    </FormComponent.Card>
  )
}

export { AdminInformation }
