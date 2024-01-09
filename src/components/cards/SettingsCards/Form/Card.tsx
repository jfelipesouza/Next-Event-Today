import React from 'react'

type FormProp = {
  children?: React.ReactNode
  title: string
} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>
const Form: React.FC<FormProp> = ({ title, children, ...rest }) => {
  return (
    <form
      className={
        'min-w-[500px] w-[42vw] px-4 py-8 h-min bg-white flex flex-col rounded-md  max-[1160px]:w-[70vw] max-[870px]:w-full  max-[640px]:min-w-[300px] max-[450px]:min-w-[250px] gap-4 shadow-md '
      }
      {...rest}
    >
      <h3 className={'text-xl font-bold mb-4 text-zinc-900'}>{title}</h3>
      {children}
    </form>
  )
}

export default Form
