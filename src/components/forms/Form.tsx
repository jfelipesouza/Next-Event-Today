import React, { ReactNode } from 'react'

type FormProps = {
  children?: ReactNode
} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>
export const Form: React.FC<FormProps> = ({ children, ...rest }) => {
  return <form {...rest}>{children}</form>
}
