import React from 'react'
import Image from 'next/image'

type EventBannerProps = {
  children?: React.ReactNode
}
const Banner: React.FC<EventBannerProps> = ({ children }) => {
  return (
    <div className="relative flex w-full h-40 rounded-md ">
      <Image
        alt="event banner"
        src={'/register.png'}
        className={'rounded-md pointer-events-none select-none'}
        fill
        objectFit={'cover'}
        loading="lazy"
      />
      {children}
    </div>
  )
}

export default Banner
