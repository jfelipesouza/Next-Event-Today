'use client'

import NextLink from 'next/link'
import { parseCookies } from 'nookies'

import Image from 'next/image'
import React from 'react'

import { LinksContainer } from './LinksContainer'

const Header = () => {
  return (
    <header
      className={`w-screen pl-12 pr-12 bg-primary-300 flex justify-between items-center
        max-[400px]:px-6    
      `}
    >
      <NextLink href={'/'} className="max-[400px]:w-40 relative w-44 h-24">
        <Image src="/logo.svg" alt="Logo" priority fill />
      </NextLink>
      <LinksContainer />
    </header>
  )
}

export default Header
