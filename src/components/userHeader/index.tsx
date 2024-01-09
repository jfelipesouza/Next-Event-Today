import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { TOKEN } from '@/services/constants/tokens'

const UserHeader: React.FC = async () => {
  const user = getUser()
  return (
    <header
      className={
        'flex justify-end items-center gap-4 py-4 px-8 z-40 bg-white drop-shadow-md'
      }
    >
      <h3 className={'text-base font-semibold text-slate-900'}>
        {user!.profile.name ? user.profile.name : 'Novo usuario'}
      </h3>
      <Link
        href={`/${user.type === 'admin' ? 'admin' : 'user'}/${
          user.id
        }/settings`}
      >
        <div
          className={`relative flex items-center justify-center w-11 h-11 rounded-full ${
            user.image.url ? 'bg-transparent' : 'bg-slate-700'
          }`}
        >
          {user.image.url ? (
            <Image
              className=" object-cover rounded-full cursor-pointer hover:scale-105"
              alt="user image"
              src={user.image.url}
              fill
            />
          ) : (
            <span className={'text-base text-white font-semibold'}>UN</span>
          )}
        </div>
      </Link>
    </header>
  )
}

export { UserHeader }

const getUser = () => {
  const userCookie = cookies().get(TOKEN.APP_USER)
  return JSON.parse(userCookie!.value) as UserData
}
