import { FacebookIcon, InstagramIcon, MessageCircleIcon } from 'lucide-react'
import React from 'react'
import './animation.css'
// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <footer
      className={
        'flex w-screen bg-primary-400 px-8 h-[20rem] mt-24 max-[600px]:flex-col max-[600px]:py-16 max-[600px]:min-h-[20rem] max-[600px]:h-auto max-[600px]:gap-8 '
      }
    >
      <div className="flex flex-col w-1/2 max-[600px]:w-full justify-center gap-4 max-[600px]:items-center">
        <h1
          className={
            'font-extrabold text-white text-7xl max-[600px]:text-6xl  max-[380px]:text-center '
          }
        >
          ALL GAMES
        </h1>
        <p className={' text-white text-xl'}>Reserve, pratique e viva!</p>
      </div>
      <div className="flex flex-col w-1/2 max-[600px]:w-full justify-center items-center">
        <div className="flex-col flex  gap-4 ">
          <h2 className="text-white font-bold text-xl"> Conecte-se</h2>
          <div className="flex flex-row gap-4">
            <a
              href="#"
              className={
                'iconButton bg-white p-2 rounded-full flex items-center justify-center hover:bg-secundary-300 transition-all duration-300'
              }
            >
              <FacebookIcon id="icon" />
            </a>
            <a
              href="#"
              className={
                'iconButton bg-white p-2 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300'
              }
            >
              <InstagramIcon id="icon" />
            </a>
            <a
              href="#"
              className={
                'iconButton bg-white p-2 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all duration-300'
              }
            >
              <MessageCircleIcon id="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
