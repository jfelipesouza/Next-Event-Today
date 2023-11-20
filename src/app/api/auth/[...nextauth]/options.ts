import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials): Promise<any> {
        try {
          const reponse = await axios.post(`${baseUrl}user/signin`, {
            email: credentials?.email,
            password: credentials?.password
          })
          const user = reponse.data
          if (user.token) {
            console.log('Atenticado')
          }
        } catch (error) {
          console.log(error)
        } finally {
          return null
        }
      }
    })
  ]
}

export { options }
