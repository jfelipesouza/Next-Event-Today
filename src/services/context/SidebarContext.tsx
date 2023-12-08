'use client'
import React, { createContext, useContext, useState } from 'react'

const SidebarContext = createContext({} as SidebarContextType)

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [status, setStatus] = useState(true)

  const changeStatus = () => {
    setStatus(prev => !prev)
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
