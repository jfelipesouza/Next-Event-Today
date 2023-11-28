'use client'
import React, { createContext, useContext, useState } from 'react'

const NavigationContext = createContext({} as NavigationContextType)

const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children
}) => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const changeDrawer = (status: boolean) => {
    if (status === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
    setOpenDrawer(status)
  }
  return (
    <NavigationContext.Provider value={{ openDrawer, changeDrawer }}>
      {children}
    </NavigationContext.Provider>
  )
}

const useNavigationContext = () => {
  const context = useContext(NavigationContext)
  return context
}

export { NavigationContext, NavigationProvider, useNavigationContext }
