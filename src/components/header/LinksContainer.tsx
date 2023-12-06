'use client'

import React from 'react'
import { MenuIcon } from 'lucide-react'

import { titleCase } from '@/utils/strings'
import { useNavigationContext } from '@/services/context/NavigationContext'
import { routerNames } from '@/services/constants/routersLinks'
import { Link } from './LinkComponent'

export const LinksContainer: React.FC = () => {
  const { changeDrawer } = useNavigationContext()

  const openDrawer = () => {
    changeDrawer(true)
  }

  return (
    <div>
      <div className="gap-4 flex max-[600px]:hidden">
        {routerNames.map(({ name, redirect }) => (
          <Link href={redirect} name={titleCase(name)} key={name} />
        ))}
      </div>

      <div className="min-[601px]:hidden" onClick={openDrawer}>
        <MenuIcon className="text-white" size={36} />
      </div>
    </div>
  )
}
