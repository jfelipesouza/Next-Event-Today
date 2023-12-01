type UserData = {
  id: string
  email: string
  image: {
    id?: string
    url?: string
    name?: string
  }

  type: string
  profile: {
    name?: string
    gender?: string
    cpf?: string
    birth?: Date
    phone?: string
  }
}

type UserLogin = {
  user: UserData
  type: string
  token: string
}
