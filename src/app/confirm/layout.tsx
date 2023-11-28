import Header from '@/components/header'
import React from 'react'

const ConfirmLayout: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default ConfirmLayout
