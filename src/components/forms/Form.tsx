import React, { ReactNode } from 'react'

type FormProps = {
  children?: ReactNode
}
export const Form: React.FC<FormProps> = ({ children }) => {
  return <form className={'flex flex-col gap-1 mt-8'}>{children}</form>
}
