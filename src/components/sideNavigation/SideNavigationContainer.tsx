'use client'
import React from 'react'
import { useNavigationContext } from '@/services/context/NavigationContext'
import { SideNavigation } from './SideNavigationContent'

export const SideNavigationContainer: React.FC = () => {
  const { openDrawer } = useNavigationContext()

  return (
    <div
      className={`absolute top-0 right-0 left-0 h-screen 
transition-colors duration-300 ease-linear
 ${
   openDrawer
     ? 'bg-zinc-950 z-10 bg-opacity-50 overflow-hidden'
     : '-z-50 bg-transparent duration-75 ease-out overflow-scroll'
 }
 `}
    >
      <SideNavigation />
    </div>
  )
}
