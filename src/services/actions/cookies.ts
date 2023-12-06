import { cookies } from 'next/headers'

export const deleteAllCookies = async () => {
  'use server'
  const allCookies = cookies().getAll()
  for (let cookie in allCookies) {
    cookies().delete(allCookies[cookie].name)
  }
}
