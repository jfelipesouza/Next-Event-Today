import React, { ReactNode } from 'react'

type FormProps = {
  children?: ReactNode
} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>
export const Form: React.FC<FormProps> = ({ children, ...rest }) => {
  return (
    <form className={'flex flex-col gap-2'} {...rest}>
      {children}
    </form>
  )
}
