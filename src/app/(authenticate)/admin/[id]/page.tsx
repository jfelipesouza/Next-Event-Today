import React from 'react'

import { UserHeader } from '@/components/userHeader'
import EventsCard from '@/components/cards/EventsCards'
import { cookies } from 'next/headers'
import { TOKEN } from '@/services/constants/tokens'

const DefaultAdminPage = async () => {
  const { events } = await fetchData()

  return (
    <main className="w-screen min-h-screen">
      <UserHeader />

      <div className="w-full h-screen relative gap-4 my-2 px-8 max-[450px]:px-2 pt-8 pb-32 flex flex-col flex-1 overflow-y-auto scrollbar">
        <h2 className={'text-2xl text-slate-800 font-bold mb-8'}>
          Seus Eventos
        </h2>

        <div className={'flex flex-wrap gap-8 justify-start'}>
          {events.map((e, index) => {
            const date = new Date(e.eventInfo.date).toLocaleDateString()
            return (
              <EventsCard.Container id={e.id} key={e.id}>
                <EventsCard.Banner></EventsCard.Banner>
                <EventsCard.Content
                  subtitle={e.description}
                  descriptionItems={[e.authorName, date, e.eventInfo.address]}
                />
              </EventsCard.Container>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default DefaultAdminPage

const baseUrl = process.env.NEXT_API_URL

const fetchData = async (
  start: number = 0,
  end: number = 10
): Promise<{ events: any[] }> => {
  const token = JSON.parse(cookies().get(TOKEN.APP_USER)!.value) as UserData
  const response = await fetch(
    `${baseUrl}/events/admin?id=${token.id}&start=${0}&end=${0}`,
    {
      method: 'GET',
      cache: 'no-cache'
    }
  )

  const data = await response.json()
  console.log({ data })

  return data
}
