'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { DoorOpen } from 'lucide-react'

import { useAuthContext } from '@/services/context/AuthContext'

const UserHeader: React.FC = () => {
  const { logOut, user } = useAuthContext()
  const [visible, setVisibLe] = useState(true)

  const handleLogOut = () => {
    logOut('/auth/signin')
  }
  useEffect(() => {
    if (user === null) {
      setVisibLe(false)
    } else {
      setVisibLe(true)
    }
  }, [user])

  return (
    <header
      className={`w-[100vw] px-8 py-5 justify-between bg-primary-300 gap-4 ${
        visible ? 'flex' : 'hidden'
      }`}
    >
      <div
        id="avatar"
        className=" flex items-center justify-center w-20 h-20 rounded-full bg-slate-500 relative"
      >
        {user?.image.url ? (
          <img
            alt="avatar"
            src={user?.image.url}
            className="rounded-full absolute object-fill"
          />
        ) : (
          <p className="text-white text-base">
            {user?.profile.name ? user?.profile.name.slice(0, 1) : 'UN'}
          </p>
        )}
      </div>

      <div className="flex flex-row gap-8 items-center ">
        <ul className="flex gap-4">
          <li>
            <Link
              className={`relative after:absolute after:bottom-[-0.2rem] 
      after:left-0 after:content-[""] after:w-[0%] after:h-[0.12rem]
      after:rounded-md after:bg-white hover:after:w-[100%] after:transition-all 
      after:ease-linear after:duration-[0.4s] text-xl text-slate-50 font-semibold
      transition-transform scale-95 hover:scale-100
        `}
              href={`/user/${user?.id}`}
            >
              Perfil
            </Link>
          </li>
          <li>
            <Link
              className={`relative after:absolute after:bottom-[-0.2rem] 
              after:left-0 after:content-[""] after:w-[0%] after:h-[0.12rem]
              after:rounded-md after:bg-white hover:after:w-[100%] after:transition-all 
              after:ease-linear after:duration-[0.4s] text-xl text-slate-50 font-semibold
              transition-transform scale-95 hover:scale-100
                `}
              href={`/user/${user?.id}/search`}
            >
              Eventos
            </Link>
          </li>
          <li>
            <Link
              className={`relative after:absolute after:bottom-[-0.2rem] 
      after:left-0 after:content-[""] after:w-[0%] after:h-[0.12rem]
      after:rounded-md after:bg-white hover:after:w-[100%] after:transition-all 
      after:ease-linear after:duration-[0.4s] text-xl text-slate-50 font-semibold
      transition-transform scale-95 hover:scale-100
        `}
              href={`/user/${user?.id}/settings`}
            >
              Configuração
            </Link>
          </li>
        </ul>
        <div className="cursor-pointer" id="button" onClick={handleLogOut}>
          <DoorOpen
            className={'text-white hover:text-secundary-300'}
            size={32}
          />
        </div>
      </div>
    </header>
  )
}

export default UserHeader
