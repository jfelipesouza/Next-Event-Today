'use client'

import React from 'react'
import Link from 'next/link'

import { ArrowLeft, Home, SearchCheck, Settings2 } from 'lucide-react'
import Footer from './Footer'
import { useAuthContext } from '@/services/context/AuthContext'
import { useSidebarContext } from '@/services/context/SidebarContext'

type SidebarProps = {
  type?: 'admin' | 'client'
}
const Sidebar: React.FC<SidebarProps> = ({ type = 'client' }) => {
  const { user } = useAuthContext()
  const { status, changeStatus } = useSidebarContext()

  const linksMap = {
    client: [
      {
        link: '',
        icon: <Home className="text-white" size={24} />,
        name: 'Home'
      },
      {
        link: 'search',
        icon: <SearchCheck className="text-white" size={24} />,
        name: 'Eventos'
      },
      {
        link: 'settings',
        icon: <Settings2 className="text-white" size={24} />,
        name: 'Configurações'
      }
    ],
    admin: [
      {
        link: '',
        icon: <Home className="text-white" size={24} />,
        name: 'Home'
      },
      {
        link: 'search',
        icon: <SearchCheck className="text-white" size={24} />,
        name: 'Eventos'
      },
      {
        link: 'settings',
        icon: <Settings2 className="text-white" size={24} />,
        name: 'Configurações'
      }
    ]
  }

  return (
    <aside
      className={`h-screen z-40  ${status ? 'w-16' : 'w-64'}`}
      aria-label="Sidebar"
      style={{ transition: 'all 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
    >
      <div className="h-full flex flex-col justify-between px-3 py-4 bg-gray-800">
        <div className="flex flex-col">
          <div
            onClick={changeStatus}
            className={` flex rounded ${
              status ? 'justify-center items-center ' : 'items-end justify-end '
            } cursor-pointer mb-12`}
          >
            <ArrowLeft
              size={24}
              className={`text-white ${status ? 'rotate-180' : 'rotate-0'} `}
              style={{ transition: 'all 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
            />
          </div>
          <ul className=" flex flex-col h-full space-y-2 font-medium overflow-x-hidden overflow-y-auto">
            {linksMap[type].map((item, index) => (
              <li key={index}>
                {type === 'client' ? (
                  <Link
                    href={`/user/${user?.id}/${item.link}`}
                    className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group gap-3"
                  >
                    <div style={{ width: '2.5rem' }}>{item.icon}</div>
                    {!status && <span>{item.name}</span>}
                  </Link>
                ) : (
                  <Link
                    href={`/admin/${user?.id}/${item.link}`}
                    className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group gap-3"
                  >
                    <div style={{ width: '2.5rem' }}>{item.icon}</div>
                    {!status && <span>{item.name}</span>}
                  </Link>
                )}
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
