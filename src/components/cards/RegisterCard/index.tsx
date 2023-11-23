'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { FormButton, FormCard, InputForm, Form } from '../../forms'
import { toast } from 'react-toastify'
import { api } from '@/services/api'

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
    formState: { errors },
    reset
  } = useForm<FormDataType>({
    resolver: zodResolver(registerFormSchema)
  })
  const [disabled, setDisabled] = useState(false)

  const handleCreateUser = async (data: FormDataType) => {
    const body = { email: data.email, password: data.password, type: 'client' }
    try {
      setDisabled(prev => !prev)
      const { data } = await api.post(`/user/register`, body)
      toast.success(data.message)
    } catch (error: any) {
      toast.error(error.response.data.message)
    } finally {
      setDisabled(prev => !prev)
      reset()
    }
  }

  return (
    <FormCard
      /*  subtitle={'É organizador?'}
      link={'register/organizer'} */
      title="Crie a sua conta agora"
    >
      <Form onSubmit={handleSubmit(handleCreateUser)}>
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

        <FormButton content={'Criar conta'} disabled={disabled} />
      </Form>
    </FormCard>
  )
}
