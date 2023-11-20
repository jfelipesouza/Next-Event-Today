'use client'

import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Toast = () => {
  return (
    <ToastContainer
      theme="colored"
      limit={2}
      style={{
        width: 'auto',
        minWidth: '300px',
        maxWidth: '600px',
        right: 0,
        height: 'auto'
      }}
    />
  )
}
