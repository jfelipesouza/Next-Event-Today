import React from 'react'
import { Search } from 'lucide-react'
import EventsCard from '@/components/cards/EventsCards'

const HomePage = async () => {
  const events = await getEvents()
  return (
    <main className=" w-screen min-h-screen flex flex-col items-center px-8 max-[500px]:px-4 overflow-hidden">
      <h2 className="font-black text-3xl max-[400px]:text-2xl text-center  mt-12 mb-12">
        Encontre o seu próximo evento
        <br /> e se divirta
      </h2>

      <div className="flex h-[60px] max-[400px]:h-[50px] gap-2 relative w-full max-w-[700px] min-w-[300px]">
        <input
          className={`
            w-[100%] absolute pl-2 pr-[6.2rem] 
            rounded-lg h-[100%]
            border-2 border-slate-500
            text-base max-[400px]:text-[1rem] max-[400px]:pr-[4.7rem]
            focus:border-primary-500 focus:outline-none focus:shadow-outline
            leading-tight
            `}
          placeholder={'Ex: Corrida envolta da praia'}
        />
        <button
          className={`
              absolute right-[0px]
              flex items-center justify-center bg-secundary-300
              cursor-pointer w-24 h-[100%] 
              active:bg-secundary-500  rounded-r-lg hover:bg-secundary-400
              max-[400px]:w-16
            `}
        >
          <Search className="text-white" />
        </button>
      </div>
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
    </main>
  )
}

export default HomePage

const baseUrl = process.env.NEXT_API_URL

const getEvents = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${baseUrl}/events/`, {
      method: 'GET',
      cache: 'no-cache'
    })

    const data = await response.json()
    return data.events
  } catch (error) {
    console.log(error)
    return []
  }
}
