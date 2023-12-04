import React from 'react'

import { useAuthContext } from '@/services/context/AuthContext'
import { useSidebarContext } from '@/services/context/SidebarContext'
import { LogOut } from 'lucide-react'

const Footer = () => {
  const { logOut } = useAuthContext()
  const { status } = useSidebarContext()

  return (
    <div
      className={`bg-secundary-300 hover:bg-secundary-200 flex items-center cursor-pointer px-3 py-4 rounded w-full overflow-hidden whitespace-nowrap`}
      onClick={() => logOut('/')}
    >
      <div style={{ width: '2.5rem' }}>
        <LogOut className="text-white" />
      </div>
      {!status && (
        <span className={'text-md font-medium text-white'}>Logout</span>
      )}
    </div>
  )
}

export default Footer
