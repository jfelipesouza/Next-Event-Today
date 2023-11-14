import React from 'react'

type FormButtonProps = { content: String } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const FormButton: React.FC<FormButtonProps> = ({ content, ...rest }) => {
  return (
    <button
      {...rest}
      className={`w-full h-12 rounded-lg 
      flex items-center justify-center 
      bg-secundary-300 hover:bg-secundary-400 disabled:bg-secundary-100
      text-white font-bold text-lg mt-4`}
    >
      {content}
    </button>
  )
}
