'use client'
import React, { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { handleLogOut, handleSignIn } from '../api/auth'
import { Toast } from '@/components/toast'

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
