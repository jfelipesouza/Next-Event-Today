import { toast } from 'react-toastify'

import { setCookie, destroyCookie } from 'nookies'
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
        path: '/user'
      })

      user = data.user
    } else if (data.type === TOKEN.WARN_CODE) {
      toast.warn(data.message, { style: { color: '#222' } })
    }
  } catch (error: any) {
    console.log(error)
    toast.error(error.response.data.message)
  } finally {
    return user
  }
}

export const handleLogOut = () => {
  destroyCookie(undefined, TOKEN.LOGIN_TOKEN)
  destroyCookie(undefined, TOKEN.REFRESH_TOKEN)
  destroyCookie(undefined, TOKEN.APP_USER)
}
