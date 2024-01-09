'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import FormComponent from './Form'

type ImageInformationProps = {
  imageInfo: Image | null
}
const ImageInformation = ({ imageInfo }: ImageInformationProps) => {
  const [image, setImage] = useState<Image | null>(null)

  useEffect(() => {
    if (imageInfo) {
      setImage(imageInfo)
    }
  }, [])

  return (
    <FormComponent.Card title={'Edite a sua imagem'}>
      <div className={'flex gap-4 items-center px-4'}>
        <div
          className={
            'w-20 h-20 bg-zinc-600 rounded-full flex items-center justify-center text-center relative'
          }
        >
          {image !== null ? (
            <Image
              alt={image.name!}
              src={image.url!}
              fill
              className="rounded-full object-cover"
            />
          ) : (
            <span className="text-white font-bold text-xl">UN</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <p
            className={
              'text-base font-semibold text-secundary-300 hover:text-primary-500 cursor-pointer'
            }
          >
            Editar
          </p>
          <p
            className={
              'text-base font-semibold cursor-pointer text-red-300 hover:text-red-600'
            }
          >
            Remover
          </p>
        </div>
      </div>
      <div className="flex w-full h-[190px] rounded border-dashed border-[3px] border-secundary-400 items-center justify-center cursor-pointer">
        <span className={'text-base text-zinc-600 font-medium'}>
          Arraste sua imagem ou clique aqui!
        </span>
      </div>
      <div className="flex justify-center flex-1 gap-4 ">
        <button
          className={
            'py-2 px-16 bg-primary-400 text-white font-bold rounded hover:bg-primary-200'
          }
        >
          Salvar
        </button>
      </div>
    </FormComponent.Card>
  )
}

export { ImageInformation }
