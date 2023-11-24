'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useNavigationContext } from '@/services/context/NavigationContext'
import { Square } from 'lucide-react'
import { titleCase } from '@/utils/strings'
import Link from 'next/link'

type SideNavigationActionsProps = {
  icon?: React.ReactNode
  name: string
  redirect: string
}

export const SideNavigationActions: React.FC<SideNavigationActionsProps> = ({
  name,
  redirect,
  icon
}) => {
  const { changeDrawer } = useNavigationContext()

  return (
    <Link
      href={redirect}
      onClick={() => changeDrawer(false)}
      className="w-full h-12 rounded-md bg-slate-100  gap-4 flex px-4 items-center "
    >
      {icon ? icon : <Square className="text-zinc-900" size={24} />}
      <span className="text-zinc-800 font-bold text-lg">{titleCase(name)}</span>
    </Link>
  )
}
