import React from 'react'

import { titleCase } from '@/utils/strings'

type ContentProps = {
  subtitle: string
  descriptionItems: string[]
}

const Content = async ({ descriptionItems, subtitle }: ContentProps) => {
  return (
    <div className={'flex flex-col mt-4 gap-4'}>
      <h2 className={'text-slate-950 font-bold line-clamp-1'}>
        {titleCase(subtitle)}
      </h2>
      <ul className="flex flex-col gap-2">
        {descriptionItems.map((value, index) => (
          <li key={value} className={'flex items-center gap-2'}>
            <div className={'w-3 h-3 rounded-full bg-secundary-400 '} />
            <span className="text-slate-900 font-semibold line-clamp-1  hover:scale-105 transition-all">
              {value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Content
