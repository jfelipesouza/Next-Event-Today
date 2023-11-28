type AuthContextProps = {
  children: React.ReactNode
}
type AuthContextType = {
  signIn: ({}: SingnInData) => Promise<void>
  user: UserData | null
  logOut: (redirect?: string) => void
  updateUserInfo: (data: UserData) => void
}
type SingnInData = {
  email: string
  password: string
}
