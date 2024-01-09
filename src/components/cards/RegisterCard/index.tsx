'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-toastify'

import FormComponent from '../../forms'
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
      .min(8, 'Senha muito curta'),

    type: z.string({ required_error: 'Campo obrigátorio' })
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
    const body = { email: data.email, password: data.password, type: data.type }
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
    <FormComponent.FormCard
      /*  subtitle={'É organizador?'}
      link={'register/organizer'} */
      title="Crie a sua conta agora"
    >
      <FormComponent.Form
        className={'flex flex-col gap-4'}
        onSubmit={handleSubmit(handleCreateUser)}
      >
        <FormComponent.InputForm
          id="email"
          title="E-mail"
          placeholder={'digite seu melhor e-mail'}
          error={errors.email ? true : false}
          errorMessage={errors.email?.message}
          {...register('email')}
        />

        <FormComponent.InputForm
          id="passord"
          title="Senha"
          placeholder={'digite sua melhor senha'}
          type={'password'}
          error={errors.password ? true : false}
          errorMessage={errors.password?.message}
          {...register('password')}
        />
        <FormComponent.InputForm
          id="confirm"
          title="Confirma senha"
          placeholder={'insira a senha novamente'}
          type={'password'}
          error={errors.confirm ? true : false}
          errorMessage={errors.confirm?.message}
          {...register('confirm')}
        />
        <div className="flex flex-col my-4 ">
          <div className="flex items-start gap-4">
            <div className="flex flex-row-reverse items-center">
              <label
                htmlFor="client"
                className="ms-2 text-base font-medium text-gray-900 cursor-pointer"
              >
                Corredor
              </label>
              <input
                type="radio"
                value="client"
                id={'client'}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600  cursor-pointer"
                {...register('type')}
              />
            </div>
            <div className="flex flex-row-reverse items-center  ">
              <label
                htmlFor="admin"
                className="ms-2 text-base font-medium text-gray-900  cursor-pointer"
              >
                Administrador de eventos
              </label>
              <input
                type="radio"
                value="admin"
                id={'admin'}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600  cursor-pointer"
                {...register('type')}
              />
            </div>
          </div>
          <div>
            <span className="text-emphasys-400 font-semibold">
              {errors.type?.message}
            </span>
          </div>
        </div>
        <FormComponent.FormButton content={'Criar conta'} disabled={disabled} />
      </FormComponent.Form>
    </FormComponent.FormCard>
  )
}
