import React from 'react'
import { HeartIcon } from 'lucide-react'

type FavoriteProps = { isFavorite?: boolean }

const Favorite: React.FC<FavoriteProps> = async ({ isFavorite = false }) => {
  return (
    <div className={'text-white z-30 flex justify-end w-full mt-4 mr-4 '}>
      <div
        className={`${
          isFavorite
            ? 'bg-red-500 hover:bg-red-400'
            : 'bg-gray-200 hover:bg-gray-300 '
        } w-9 h-9 flex items-center justify-center rounded-[2rem] cursor-pointer`}
        style={{ transition: 'all 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
      >
        <HeartIcon color={isFavorite ? 'white' : 'black'} size={20} />
      </div>
    </div>
  )
}

export default Favorite
