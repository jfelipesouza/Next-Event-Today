'use client'

import React, { useEffect, useState } from 'react'
import { titleCase } from '@/utils/strings'
import { MenuIcon } from 'lucide-react'
import { useNavigationContext } from '@/services/context/NavigationContext'
import { useAuthContext } from '@/services/context/AuthContext'
import { routerNames } from '@/services/constants/routersLinks'
import { Link } from './LinkComponent'

export const LinksContainer: React.FC = () => {
  const { changeDrawer } = useNavigationContext()
  const { user } = useAuthContext()

  const openDrawer = () => {
    changeDrawer(true)
  }

  useEffect(() => {
    if (user !== null) {
      if (user.type === 'client' || user.type === 'admin') {
        const links = routerNames[user.type]
        setRouters(links)
      } else {
        setRouters(routerNames.logout)
      }
    } else {
      setRouters(routerNames.logout)
    }
  }, [user])

  const [routers, setRouters] = useState<RouterNames[] | null>(null)

  return (
    <div>
      <div className="gap-4 flex max-[600px]:hidden">
        {routers?.map(({ name, redirect }) => (
          <Link href={redirect} name={titleCase(name)} key={name} />
        ))}
      </div>

      <div className="min-[601px]:hidden" onClick={openDrawer}>
        <MenuIcon className="text-white" size={36} />
      </div>
    </div>
  )
}
