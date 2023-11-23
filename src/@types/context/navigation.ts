type NavigationContextType = {
  openDrawer: boolean
  changeDrawer: (status: boolean) => void
}

type NavigationProviderProps = {
  children: React.ReactNode
}
