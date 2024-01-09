type UserData = {
  id: string
  email: string
  image: Image

  type: string
  profile: {
    name?: string | null
    gender?: string | null
    cpf?: string | null
    birth?: Date
    phone?: string | null
  }
  adminProfile?: {
    name: string
    paymentPlan: string
    cnpj: string
    contactEmail: string
    contactPhone: string
  }
}

type UserLogin = {
  user: UserData
  type: string
  token: string
}

type UserPage = {
  params: { id: string }
}
