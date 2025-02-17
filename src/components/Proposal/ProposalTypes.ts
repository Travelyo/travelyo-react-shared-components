export type Proposal = {
  id: number
  name: string
  status: "1" | "2"
  user: {
    muid: string
    email: string
  }
  client: {
    id: number
    firstName: string
    lastName: string
    phone?: string
    email?: string
  },
  createdAt: string
  updatedAt: string
  numberOfOffers: number
}
