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
  offerIds: string[]
  createdAt: string
  updatedAt: string
  numberOfOffers: number
  search: {
    capacity: string
    context: string | null
    duration: string
  }
}


export type ProposalClientForm = {
  genderType: string
  firstName: string
  lastName: string
  phone: string
  email: string
}

export type OfferData = {
  offerId: string
  date: string
  searchContext: string
  searchCapacity: string
  searchDuration: string
  airports: string[]
  originalPrice: number
  capacity: {
    adult: number
    child: number
    infant?: number | null
    room?: number
  }
}
