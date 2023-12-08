'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

type ContainerProps = {
  children?: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  const { push } = useRouter()

  return (
    <div className="w-[300px] h-[400px] rounded bg-white shadow gap-4 ">
      {children}
    </div>
  )
}

export default Container
