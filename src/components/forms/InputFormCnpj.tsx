'use client'
import React, { useState, forwardRef } from 'react'
import { EyeOff, Eye } from 'lucide-react'

type InputFormProps = {
  error?: boolean
  errorMessage?: string
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const InputFormCnpjComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputFormProps
> = ({ error, type, id, errorMessage, ...rest }, ref) => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div className="flex flex-col  ">
      <label className="text-base font-bold text-zinc-900 mb-2" htmlFor={id}>
        Cnpj
      </label>
      <div className={'w-full relative'}>
        <input
          className={`
          w-full pl-3 pr-10 h-12 
          text-base text-slate-900 rounded-md
          hover:cursor-pointer hover:border-[3px] focus:border-[3px]
          placeholder:text-slate-400  hover:border-primary-300
          focus:ring-primary-300 focus:border-primary-300
          border-2  ${
            error
              ? `border-emphasys-400 hover:border-emphasys-500 focus:ring-emphasys-300 focus:border-emphasys-300
              `
              : `border-slate-500 `
          }
         `}
          ref={ref}
          id={id}
          type={type === 'password' ? (visible ? 'text' : 'password') : type}
          {...rest}
        />

        {type === 'password' && (
          <div
            className={'absolute top-3 right-4 cursor-pointer'}
            onClick={() => {
              setVisible(prev => !prev)
            }}
          >
            {!visible ? (
              <EyeOff className={'text-slate-500 hover:text-slate-800'} />
            ) : (
              <Eye className={'text-slate-500 hover:text-slate-800'} />
            )}
          </div>
        )}
      </div>

      {error && (
        <span className="text-emphasys-400 text-sm font-bold mt-2 mb-2">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export const InputFormCnpj = forwardRef(InputFormCnpjComponent)
