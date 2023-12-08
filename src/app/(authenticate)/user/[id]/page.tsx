import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { TOKEN } from '@/services/constants/tokens'
import { deleteAllCookies } from '@/services/actions/cookies'
import { UserHeader } from '@/components/userHeader'
import EventsCard from '@/components/cards/EventsCards'

const DynamicUserPage = async () => {
  const user = await init()
  // await fetchEvents(user.id)
  const map = [
    { id: 'as' },
    { id: 'asasd' },
    { id: 'asasda' },
    { id: 'asasda' },
    { id: 'asasdasd' },
    { id: 'asdasda' }
  ]

  return (
    <main
      className={`flex flex-1 flex-col flex-wrap overflow-x-hidden h-screen`}
    >
      <UserHeader user={user} />
      <section
        className={
          'overflow-y-scroll overflow-x-hidden flex flex-col px-8 py-8 flex-1'
        }
      >
        <h2 className="my-8 text-3xl font-bold">Meus Eventos</h2>
        <div className="flex justify-center flex-wrap gap-8">
          {map.map(({ id }) => (
            <EventsCard.Container key={id}>
              <EventsCard.Banner></EventsCard.Banner>
              <EventsCard.Content></EventsCard.Content>
            </EventsCard.Container>
          ))}
        </div>
      </section>
    </main>
  )
}

const init = async () => {
  'use server'
  const allCookies = cookies().getAll()
  if (allCookies.length > 0) {
    const userCookie = cookies().has(TOKEN.APP_USER)
    if (userCookie) {
      const userCookieValue = cookies().get(TOKEN.APP_USER)?.value
      if (userCookieValue) {
        return JSON.parse(userCookieValue) as UserData
      } else {
        deleteAllCookies()
        redirect('/auth/signin')
      }
    } else {
      deleteAllCookies()
      redirect('/auth/signin')
    }
  } else {
    redirect('/auth/signin')
  }
}

const baseUrl = process.env.NEXT_API_URL

const fetchEvents = async (id: string): Promise<Events[] | null> => {
  const response = await fetch(`${baseUrl}/events/user?id=${id}`, {
    cache: 'no-store'
  })
  const data = await response.json()
  console.log({ data })
  return null
}

export default DynamicUserPage
