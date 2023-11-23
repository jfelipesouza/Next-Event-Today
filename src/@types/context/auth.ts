type AuthContextProps = {
  children: React.ReactNode
}
type AuthContextType = {
  signIn: ({}: SingnInData) => Promise<void>
  user: UserData | null
  logOut: () => void
}
type SingnInData = {
  email: string
  password: string
}
