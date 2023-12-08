import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

type UserHeaderProps = {
  user: UserData
}
const UserHeader: React.FC<UserHeaderProps> = async ({ user }) => {
  return (
    <header
      className={
        'flex justify-end items-center gap-4 py-4 px-8 z-40 bg-white drop-shadow-md'
      }
    >
      <h3 className={'text-base font-semibold text-slate-900'}>
        {user!.profile.name ? user.profile.name : ''}
      </h3>
      <div
        className={`relative w-10 h-10 rounded-full ${
          user.image.url ? 'bg-slate-700' : 'bg-transparent'
        }`}
      >
        {user.image.url ? (
          <Link href={`/user/${user.id}/settings`}>
            <Image
              className=" object-cover rounded-full cursor-pointer hover:scale-105"
              alt="user image"
              src={user.image.url}
              fill
            />
          </Link>
        ) : (
          <span className={'text-base text-white font-semibold'}>UN</span>
        )}
      </div>
    </header>
  )
}

export { UserHeader }
