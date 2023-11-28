'use client'
import React, { useState, forwardRef } from 'react'
import { EyeOff, Eye } from 'lucide-react'

type InputFormProps = {
  error?: boolean
  title: string
  errorMessage?: string
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const InputFormComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputFormProps
> = ({ error, type, title, id, errorMessage, ...rest }, ref) => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-2 ">
      <label className="text-base font-bold text-zinc-900" htmlFor={id}>
        {title}
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
        <span className="text-emphasys-400 font-bold mt-1 mb-2">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export const InputForm = forwardRef(InputFormComponent)
