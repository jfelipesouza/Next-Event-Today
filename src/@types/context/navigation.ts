type NavigationContextType = {
  openDrawer: boolean
  changeDrawer: (status: boolean) => void
}

type NavigationProviderProps = {
  children: React.ReactNode
}

type SidebarContextType = {
  status: boolean
  changeStatus: () => void
}

type SidebarProviderProps = {
  children: React.ReactNode
}
