'use client'

import { MenuIcon, X } from 'lucide-react'
import Image from 'next/image'
import NextLink from 'next/link'
import React, { useEffect, useState } from 'react'

type LinkProps = {
  href: string
  name: string
}
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

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(prev => !prev)
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [open])

  return (
    <>
      <header
        className={`w-screen pl-12 pr-12 bg-primary-200 flex justify-between items-center
        max-[400px]:px-6    
        mb-4
      `}
      >
        <NextLink href={'/'} className="  max-[400px]:w-40 relative w-44 h-24">
          <Image src="/logo.svg" alt="Logo" priority fill />
        </NextLink>

        <div className="gap-4 flex max-[600px]:hidden">
          <Link href={'/auth/signin'} name={'SignIn'} />
          <Link href={'/auth/register'} name={'Register'} />
        </div>

        <div className="min-[600px]:hidden">
          <MenuIcon className="text-white" size={36} onClick={handleOpen} />
        </div>
      </header>
      <div
        className={`
          z-[999] bg-primary-200 absolute left-0 right-0 
          flex items-center justify-center 
          ${
            open ? 'top-[0] duration-300' : 'top-[-50vh] duration-300'
          } h-[50vh] rounded-b-3xl transition-all ease-linear
          
          flex flex-col gap-10
          `}
      >
        <NextLink
          className="text-[1.8rem] text-white font-bold"
          href={'/auth/signin'}
        >
          SingIn
        </NextLink>
        <NextLink
          className="text-[1.8rem] text-white font-bold"
          href={'/auth/register'}
        >
          Register
        </NextLink>

        <X
          className={'text-white absolute top-[2rem] right-[1rem]'}
          size={36}
          onClick={handleOpen}
        />
      </div>
    </>
  )
}

export default Header
