import React from 'react'
import Link from 'next/link'

type RegisterCardProps = {
  children: React.ReactNode
  title: string
  link: string
  subtitle: string
  linkText?: string
}

export const FormCard: React.FC<RegisterCardProps> = ({
  children,
  title,
  link,
  subtitle,
  linkText
}) => {
  return (
    <div
      className={` w-[80%] max-w-[600px] min-w-[300px] min-h-[500px] h-auto bg-white px-12 py-10 rounded-lg shadow-md flex flex-col gap-2 `}
    >
      <h2 className="text-2xl text-zinc-900 font-bold ">{title}</h2>

      <h3 className="text-lg text-zinc-900 font-medium">
        {subtitle}
        <Link href={link} className="underline text-secundary-400 ml-1">
          {linkText ? linkText : 'Clique aqui'}
        </Link>
      </h3>

      <div className="my-4">{children}</div>
    </div>
  )
}
