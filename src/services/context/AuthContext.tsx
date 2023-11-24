'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'

import { Toast } from '@/components/toast'
import { handleLogOut, handleSignIn } from '../api/auth'
import { TOKEN } from '../constants/tokens'

const AuthContext = createContext({} as AuthContextType)

const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null)
  const navigation = useRouter()

  const signIn = async ({ email, password }: SingnInData) => {
    try {
      const userData = await handleSignIn({ email, password })
      setUser(userData)
      navigation.replace('/user')
    } catch (error: any) {
      console.log(error)
    }
  }

  const logOut = () => {
    handleLogOut()
    navigation.replace('/')
  }

  const init = () => {
    const cookies = parseCookies(undefined)
    if (Object.keys(cookies).length > 0) {
      if (cookies[TOKEN.APP_USER]) {
        const userCookie: UserData = JSON.parse(cookies[TOKEN.APP_USER])
        setUser(userCookie)
      }
    }
  }

  useEffect(init, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        logOut
      }}
    >
      {children}
      <Toast />
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  const context = useContext(AuthContext)
  return context
}
export { AuthContext, AuthContextProvider, useAuthContext }
