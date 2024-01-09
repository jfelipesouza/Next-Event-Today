'use client'
import React, { useState, forwardRef } from 'react'
import { EyeOff, Eye, Edit } from 'lucide-react'

type InputProps = {
  error?: boolean
  title: string
  infoValue?: string
  mask?: 'cnpj' | 'cpf' | 'phone'

  errorMessage?: string
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const InputFormComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (
  {
    error,
    type,
    title,
    id,
    infoValue = '',
    mask,
    errorMessage,
    placeholder,
    ...rest
  },
  ref
) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [edit, setEdit] = useState(false)

  const generateMask = (value: string): string => {
    let numericValue = value.replace(/\D/g, '')
    if (mask === 'cnpj') {
      return numericValue.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
        '$1.$2.$3/$4-$5'
      )
    } else if (mask === 'cpf') {
      return numericValue.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
        '$1.$2.$3-$4'
      )
    } else {
      if (numericValue.length === 11) {
        return numericValue.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
      }
      return numericValue.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3')
    }
  }

  const handleChangeEdit = () => {
    setEdit(prev => !prev)
  }

  return (
    <div className="flex flex-col">
      <label className="text-base font-bold text-zinc-900 mb-2" htmlFor={id}>
        {title}
      </label>
      <div className={'w-full relative'}>
        {!edit ? (
          <div
            className=" w-full px-3 h-12 
        rounded-md bg-gray-200 flex items-center justify-between gap-2 relative"
          >
            <p className="text-base text-ellipsis whitespace-nowrap overflow-hidden w-[80%] text-slate-900 ">
              {mask
                ? infoValue.trim() !== ''
                  ? generateMask(infoValue)
                  : generateMask(placeholder!)
                : infoValue.trim() !== ''
                ? infoValue
                : placeholder}
            </p>
            <div
              className="w-8 h-8 rounded flex items-center justify-center bg-gray-400 hover:cursor-pointer hover:bg-gray-500"
              onClick={handleChangeEdit}
            >
              <Edit size={18} className="text-white" />
            </div>
          </div>
        ) : (
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
            placeholder={mask ? generateMask(placeholder!) : placeholder}
            defaultValue={infoValue && infoValue}
            {...rest}
          />
        )}

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

export const InputForm = forwardRef(InputFormComponent)
