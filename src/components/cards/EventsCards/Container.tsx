'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

type ContainerProps = {
  children?: React.ReactNode
  id: string
}
const Container: React.FC<ContainerProps> = ({ children, id }) => {
  const { push } = useRouter()

  const redirectForCardPage = () => {
    push(`/event/${id}`)
  }
  return (
    <div
      className="w-80 h-96 rounded bg-white shadow gap-4 p-4 cursor-pointer "
      onClick={redirectForCardPage}
    >
      {children}
    </div>
  )
}

export default Container
