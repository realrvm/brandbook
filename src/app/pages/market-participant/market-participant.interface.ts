export interface MPCard {
  id: number
  title: string
  emits: string
  stocks: string
  bonds: string
  noExchange: string
  res: string
}

export interface Participant {
  img: string
  descr: string
  contacts: {
    address: string
    phone: string
    email: string
    www: string
  }
}
