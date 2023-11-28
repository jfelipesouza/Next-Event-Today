import {
  Home,
  LibraryIcon,
  DoorOpen,
  Search,
  UserCircle2Icon,
  UserCog2Icon
} from 'lucide-react'

const routerNames: RouterNamesObject = {
  admin: [],
  client: [
    { name: 'Perfil', redirect: '/user' },
    { name: 'Eventos', redirect: '/' },
    { name: 'Configurações', redirect: '/user/info' }
  ],
  logout: [
    { name: 'signIn', redirect: '/auth/signin' },
    { name: 'register', redirect: '/auth/register' }
  ]
}

const routerSideNavigation: RouterSideNavigationObject = {
  admin: [
    {
      name: 'Home',
      redirect: '/user',
      icon: <Home className={'text-secundary-300'} />
    }
  ],
  client: [
    {
      name: 'Perfil',
      redirect: '/user',
      icon: <UserCircle2Icon className={'text-secundary-300'} />
    },
    {
      name: 'Eventos',
      redirect: '/user/search',
      icon: <Search className={'text-secundary-300'} />
    },
    {
      name: 'Informações pessoais',
      redirect: '/user/info',
      icon: <UserCog2Icon className={'text-secundary-300'} />
    }
  ],
  logout: [
    {
      name: 'Home',
      redirect: '/',
      icon: <Home className={'text-secundary-300'} />
    },
    {
      name: 'SignIn',
      redirect: '/auth/signin',
      icon: <DoorOpen className={'text-secundary-300'} />
    },
    {
      name: 'SignUp',
      redirect: '/auth/register',
      icon: <LibraryIcon className={'text-secundary-300'} />
    }
  ]
}

export { routerNames, routerSideNavigation }
