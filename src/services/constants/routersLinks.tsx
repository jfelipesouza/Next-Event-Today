import { Home, LibraryIcon, DoorOpen } from 'lucide-react'

const routerNames = [
  { name: 'signIn', redirect: '/auth/signin' },
  { name: 'register', redirect: '/auth/register' }
]

const routerSideNavigation = [
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

export { routerNames, routerSideNavigation }
