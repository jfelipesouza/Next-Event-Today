'use client'
import React, { createContext, useContext, useState } from 'react'

const SidebarContext = createContext({} as SidebarContextType)

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [status, setStatus] = useState(false)

  const changeStatus = (status: boolean) => {
    setStatus(prev => prev !== status && status)
  }
  return (
    <SidebarContext.Provider value={{ status, changeStatus }}>
      {children}
    </SidebarContext.Provider>
  )
}

const useSidebarContext = () => {
  const context = useContext(SidebarContext)
  return context
}

export { SidebarContext, SidebarProvider, useSidebarContext }
