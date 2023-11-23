'use client'
import { MenuIcon } from 'lucide-react'
import NextLink from 'next/link'

import Image from 'next/image'
import React from 'react'
import { SideNavigation } from './SideNavigation'
import { useNavigationContext } from '@/services/context/NavigationContext'

const Link: React.FC<LinkProps> = ({ href, name }) => {
  return (
    <NextLink
      className={`relative after:absolute after:bottom-[-0.2rem] 
      after:left-0 after:content-[""] after:w-[0%] after:h-[0.12rem]
      after:rounded-md after:bg-white hover:after:w-[100%] after:transition-all 
      after:ease-linear after:duration-[0.4s] text-xl text-slate-50 font-semibold
      transition-transform scale-95 hover:scale-100
        `}
      href={href}
    >
      {name}
    </NextLink>
  )
}

type HeaderProps = {
  links?: LinkProps[]
}

const Header: React.FC<HeaderProps> = () => {
  const navigationContext = useNavigationContext()

  const openDrawer = () => {
    navigationContext.changeDrawer(true)
  }
  return (
    <>
      <div
        className={`absolute w-screen h-screen
      transition-colors duration-300 ease-linear
       ${
         navigationContext.openDrawer
           ? 'bg-zinc-950 z-10 bg-opacity-50'
           : '-z-50 bg-transparent'
       }
       `}
      >
        <SideNavigation />
      </div>
      <header
        className={`w-screen pl-12 pr-12 bg-primary-200 flex justify-between items-center
        max-[400px]:px-6    
      `}
      >
        <NextLink href={'/'} className="  max-[400px]:w-40 relative w-44 h-24">
          <Image src="/logo.svg" alt="Logo" priority fill />
        </NextLink>

        <div className="gap-4 flex max-[600px]:hidden">
          <Link href={'/auth/signin'} name={'SignIn'} />
          <Link href={'/auth/register'} name={'Register'} />
        </div>

        <div className="min-[601px]:hidden" onClick={openDrawer}>
          <MenuIcon className="text-white" size={36} />
        </div>
      </header>
    </>
  )
}

export default Header
