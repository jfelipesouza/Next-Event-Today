'use client'
import React from 'react'
import { useNavigationContext } from '@/services/context/NavigationContext'
import { SideNavigation } from './SideNavigationContent'

export const SideNavigationContainer: React.FC = () => {
  const navigationContext = useNavigationContext()

  return (
    <div
      className={`absolute top-0 right-0 left-0 h-screen 
transition-colors duration-300 ease-linear
 ${
   navigationContext.openDrawer
     ? 'bg-zinc-950 z-10 bg-opacity-50'
     : '-z-50 bg-transparent duration-75 ease-out'
 }
 `}
    >
      <SideNavigation />
    </div>
  )
}
