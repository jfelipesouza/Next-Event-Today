'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { FormButton, FormCard, InputForm, Form } from '../../forms'

const registerFormSchema = z
  .object({
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
      .max(32),
    confirm: z
      .string({
        required_error: 'Campo obrigátorio'
      })
      .min(8, 'Senha muito curta')
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: 'Senhas diferentes',
    path: ['confirm']
  })

type FormDataType = z.infer<typeof registerFormSchema>

export const RegisterCard = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormDataType>({
    resolver: zodResolver(registerFormSchema)
  })

  const createUser = async (data: any) => {
    console.log(data)
  }

  return (
    <FormCard
      /*  subtitle={'É organizador?'}
      link={'register/organizer'} */
      title="Crie a sua conta agora"
    >
      <Form onSubmit={handleSubmit(createUser)}>
        <InputForm
          id="email"
          title="E-mail"
          placeholder={'digite seu melhor e-mail'}
          error={errors.email ? true : false}
          errorMessage={errors.email?.message}
          {...register('email')}
        />

        <InputForm
          id="passord"
          title="Senha"
          placeholder={'digite sua melhor senha'}
          type={'password'}
          error={errors.password ? true : false}
          errorMessage={errors.password?.message}
          {...register('password')}
        />
        <InputForm
          id="confirm"
          title="Confirma senha"
          placeholder={'insira a senha novamente'}
          type={'password'}
          error={errors.confirm ? true : false}
          errorMessage={errors.confirm?.message}
          {...register('confirm')}
        />

        <FormButton content={'Criar conta'} />
      </Form>
    </FormCard>
  )
}
