import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { UserHeader } from '@/components/userHeader'
import EventsCard from '@/components/cards/EventsCards'
import { TOKEN } from '@/services/constants/tokens'

const DynamicUserPage = async ({ params: { id } }: UserPage) => {
  const events = fetchEvents(id)

  const map = [
    {
      id: 'as',
      description: 'asdhaklsdasdl ',
      items: ['asdasdadas', 'sdasdadsad', 'asdasdasd'],
      favorite: true
    },
    {
      id: 'asasd',
      description: 'asdhaklsdasdl',
      items: ['asdasdadas', 'sdasdadsad', 'asdasdasd'],
      favorite: true
    },
    {
      id: 'asasda',
      description: 'asdhaklsdasdl',
      items: ['asdasdadas', 'sdasdadsad', 'asdasdasd'],
      favorite: true
    },
    {
      id: 'asasda',
      description: 'asdhaklsdasdl',
      items: ['asdasdadas', 'sdasdadsad', 'asdasdasd'],
      favorite: false
    },
    {
      id: 'asasdasd',
      description: 'asdhaklsdasdl',
      items: ['asdasdadas', 'sdasdadsad', 'asdasdasd'],
      favorite: false
    },
    {
      id: 'asdasda',
      description: 'asdhaklsdasdl',
      items: ['asdasdadas', 'sdasdadsad', 'asdasdasd']
    }
  ]

  return (
    <main
      className={`flex flex-1 flex-col flex-wrap overflow-x-hidden h-screen`}
    >
      <UserHeader />
      <section
        className={
          'overflow-y-scroll overflow-x-hidden flex flex-col px-8 py-8 flex-1'
        }
      >
        <h2 className="my-8 text-3xl font-bold">Meus Eventos</h2>
        <div className="flex justify-center flex-wrap gap-8">
          {map.map(({ id, description, items, favorite }) => (
            <EventsCard.Container id={id} key={id}>
              <EventsCard.Banner>
                <EventsCard.Favorite isFavorite={favorite} />
              </EventsCard.Banner>
              <EventsCard.Content
                subtitle={description}
                descriptionItems={items}
              />
            </EventsCard.Container>
          ))}
        </div>
      </section>
    </main>
  )
}

const baseUrl = process.env.NEXT_API_URL

const fetchEvents = async (id: string): Promise<Events[] | null> => {
  const response = await fetch(`${baseUrl}/events/user?id=${id}`, {
    cache: 'no-store',
    method: 'GET'
  })
  const data = await response.json()
  console.log({ data })
  return null
}

export default DynamicUserPage
