type UserData = {
  id: string
  email: string
  image:
    | {
        id?: string
        url?: string
        name?: string
      }
    | {}
  type: string
  profile:
    | {
        name?: string | null
        gender?: string | null
        cpf?: string | null
        birth?: Date
        phone?: string | null
      }
    | {}
}
