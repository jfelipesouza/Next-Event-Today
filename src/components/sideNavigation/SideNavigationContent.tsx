'use client'
import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useNavigationContext } from '@/services/context/NavigationContext'
import { useAuthContext } from '@/services/context/AuthContext'
import { routerSideNavigation } from '@/services/constants/routersLinks'
import { SideNavigationActions } from './SideNavigationActions'

export const SideNavigation: React.FC = () => {
  const navigationContext = useNavigationContext()
  const { user } = useAuthContext()

  const [routers, setRouters] = useState<RouterSideNavigation[] | null>(null)

  const closeNavigation = () => {
    navigationContext.changeDrawer(!navigationContext.openDrawer)
  }

  useEffect(() => {
    if (user !== null) {
      if (user.type === 'client' || user.type === 'admin') {
        const links = routerSideNavigation[user.type]
        setRouters(links)
      } else {
        setRouters(routerSideNavigation.logout)
      }
    } else {
      setRouters(routerSideNavigation.logout)
    }
  }, [user, routers])

  return (
    <div
      className={` flex flex-col min-w-[350px] max-[370px]:min-w-[320px]  w-4/5 h-full
       bg-primary-300 right-0 pt-8 px-4 pb-4
       transition-transform duration-500 delay-200
        ${
          navigationContext.openDrawer === true
            ? 'translate-x-[-0%]'
            : 'translate-x-[-100%] duration-0 bg-transparent'
        }
       `}
    >
      {navigationContext.openDrawer && (
        <>
          <header className="flex flex-row justify-between items-center h-12 gap-4">
            <div className="flex flex-1 h-12  relative">
              <Image src="/logo.svg" alt="Logo" priority fill />
            </div>
            <div onClick={closeNavigation}>
              <X className={'text-white cursor-pointer'} size={40} />
            </div>
          </header>

          <main className="flex flex-1 flex-col gap-4 pt-20">
            {routers &&
              routers.map(({ icon, name, redirect }) => (
                <SideNavigationActions
                  name={name}
                  redirect={redirect}
                  icon={icon}
                  key={name}
                />
              ))}
          </main>

          <footer className="flex">
            <span className="text-center whitespace-pre-wrap text-white font-bold ">
              © 2023 - EVENT TODAY SERVICOS DE RESERVAS, INTERMEDIAÇÃO E
              AGENCIAMENTO LTDA.
            </span>
          </footer>
        </>
      )}
    </div>
  )
}
