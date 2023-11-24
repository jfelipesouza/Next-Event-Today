type LinkProps = {
  href: string
  name: string
}

type RouterSideNavigation = {
  name: string
  redirect: string
  icon: React.ReactNode
}

type RouterNames = { name: string; redirect: string }

type RouterNamesObject = {
  client: RouterNames[]
  logout: RouterNames[]
  admin: RouterNames[]
}

type RouterSideNavigationObject = {
  client: RouterSideNavigation[]
  logout: RouterSideNavigation[]
  admin: RouterSideNavigation[]
}

type RouterOptions = 'client' | 'admin' | 'logout'
