'use client'

import React from 'react'

import { ArrowLeft, Home, SearchCheck, Settings2 } from 'lucide-react'
import Footer from './Footer'
import { useAuthContext } from '@/services/context/AuthContext'
import { useSidebarContext } from '@/services/context/SidebarContext'
import Link from 'next/link'

const Sidebar: React.FC = () => {
  const { user } = useAuthContext()
  const { status, changeStatus } = useSidebarContext()
  console.log({ user })

  const linksMap = [
    {
      link: '',
      icon: <Home className="text-white" size={24} />,
      name: 'Home'
    },
    {
      link: 'search',
      icon: <SearchCheck className="text-white" size={24} />,
      name: 'Buscar Eventos'
    },
    {
      link: 'settings',
      icon: <Settings2 className="text-white" size={24} />,
      name: 'Home'
    }
  ]

  return (
    <aside
      id="separator-sidebar"
      className={`fixed top-0 left-0 bottom-0 z-40 w-64 ${
        status ? '-translate-x-full' : '-translate-x-0'
      } `}
      aria-label="Sidebar"
      style={{ transition: 'all 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
    >
      <div className="h-full flex flex-col justify-between px-3 py-4 overflow-y-auto bg-gray-800">
        <div>
          <div
            onClick={changeStatus}
            className={
              'flex items-end p-4 rounded justify-end cursor-pointer mb-6'
            }
          >
            <ArrowLeft className="text-white" size={30} />
          </div>
          <ul className="space-y-2 font-medium">
            {linksMap.map((item, index) => (
              <li key={index}>
                <Link
                  href={`/user/${user?.id}/${item.link}`}
                  className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                >
                  {item.icon}
                  <span className="ms-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="pt-4 bottom-0 mt-4 space-y-2 font-medium border-t border-gray-700">
          <Footer />
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
