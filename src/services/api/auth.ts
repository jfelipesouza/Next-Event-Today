import { toast } from 'react-toastify'

import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { TOKEN } from '../constants/tokens'
import { api } from '../api'

export const handleSignIn = async ({
  email,
  password
}: SingnInData): Promise<UserData | null> => {
  var user: UserData | null = null
  try {
    const response = await api.post(`/user/signin`, {
      email,
      password
    })
    const data = response.data

    if (data.type === TOKEN.SUCCESS_CODE) {
      toast.success('Bem vindo!')

      setCookie(undefined, TOKEN.LOGIN_TOKEN, data.token, {
        maxAge: 60 * 60 * 24,
        path: '/'
      })
      setCookie(undefined, TOKEN.REFRESH_TOKEN, data.refreshToken, {
        maxAge: 60 * 60 * 24 * 3,
        path: '/'
      })
      setCookie(undefined, TOKEN.APP_USER, JSON.stringify(data.user), {
        maxAge: 60 * 60 * 24 * 3,
        path: '/'
      })

      user = data.user
    } else if (data.type === TOKEN.WARN_CODE) {
      toast.warn(data.message, { style: { color: '#222' } })
    }
  } catch (error: any) {
    if (typeof error.response.data.message === 'string') {
      toast.error(error.response.data.message)
    } else {
      toast.error('Erro ao fazer login')
    }
  } finally {
    return user
  }
}

export const handleLogOut = () => {
  const allCookies = parseCookies()
  if (Object.keys(allCookies).length > 0) {
    for (let cookie in allCookies) {
      destroyCookie(undefined, cookie, { path: '/' })
    }
  }
}
