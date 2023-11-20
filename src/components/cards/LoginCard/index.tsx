'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios'

import { FormButton, FormCard, InputForm, Form } from '../../forms'
import { toast } from 'react-toastify'
import Link from 'next/link'

const loginFormSchema = z.object({
  email: z
    .string({
      required_error: 'Campo obrigátorio'
    })
    .trim()
    .email({ message: 'E-mail inválido' }),
  password: z
    .string({
      required_error: 'Campo obrigátorio'
    })
    .min(8, 'Senha muito curta')
    .max(32)
})

type FormDataType = z.infer<typeof loginFormSchema>
const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const LoginCard = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<FormDataType>({
    resolver: zodResolver(loginFormSchema)
  })
  const [disabled, setDisabled] = useState(false)

  const handleSignIn = async (data: FormDataType) => {
    setDisabled(prev => !prev)
    const body = { email: data.email, password: data.password }
    try {
      const { data } = await axios.post(`${baseUrl}/user/signin`, body)
      if (data.type === 'SUCCESS') {
        toast.success('Bem vindo!')
      } else {
        toast.warn(data.message, { style: { color: '#222' } })
      }
    } catch (error: any) {
      toast.error(error.response.data.message)
    } finally {
      reset()
    }
    setDisabled(prev => !prev)
  }

  return (
    <FormCard
      subtitle={'É novo por aqui?'}
      link={'register'}
      title="Entre agora"
    >
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <InputForm
          id="email"
          title="E-mail"
          placeholder={'Insira o seu e-mail'}
          error={errors.email ? true : false}
          errorMessage={errors.email?.message}
          {...register('email')}
        />

        <InputForm
          id="passord"
          title="Senha"
          placeholder={'Insira a sua senha'}
          type={'password'}
          error={errors.password ? true : false}
          errorMessage={errors.password?.message}
          {...register('password')}
        />
        <Link
          href={'user/passwordReset'}
          className={'py-4 self-end text-secundary-400 '}
        >
          Esqueci a senha
        </Link>
        <FormButton content={'Enviar'} disabled={disabled} />
      </Form>
    </FormCard>
  )
}
