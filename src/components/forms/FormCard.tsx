import React from 'react'
import Link from 'next/link'

type RegisterCardProps = {
  children: React.ReactNode
  title: string
  link?: string
  subtitle?: string
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
      className={`
      w-[80%] max-w-[600px] min-w-[300px] min-h-[500px] 
      h-min bg-white px-4 py-10 rounded-lg shadow-md 
      flex flex-col gap-1 
      max-[500px]:w-[90%] max-[500px]:px-6 max-[500px]:min-w-[auto]
      `}
    >
      <h2
        className={
          'text-2xl text-zinc-900 font-bold  max-[500px]:text-[1.5rem]  '
        }
      >
        {title}
      </h2>

      {subtitle && (
        <h3 className="text-lg text-zinc-900 font-medium">
          {subtitle}
          {link && (
            <Link href={link} className="underline text-secundary-400 ml-1">
              {linkText ? linkText : 'Clique aqui'}
            </Link>
          )}
        </h3>
      )}

      <div className="mt-4">{children}</div>
    </div>
  )
}
