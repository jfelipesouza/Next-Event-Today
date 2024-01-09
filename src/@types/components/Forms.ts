type AdminInfo = {
  name: string
  cnpj: string | null
  contactEmail: string
  contactPhone: string
}

type UserInfo = {
  name: string
  birth: Date
  phone: string
  gender: string
  cpf: string
}

type UserInformationForms = {
  adminInfo?: AdminInfo
  userInfo?: UserInfo
}
