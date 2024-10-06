export interface Service {
  id: number
  img: string
  title: string
  content: string
}

export interface MarketParticipant {
  id: number
  img: string
  result: string
  emitents: string
  stocks: string
  bonds: string
  actions: string
}

export interface ProjectFile {
  id: number
  title: string
  content: string
  img: string
  tag: string
}

export interface Intro {
  id: number
  title: string
  descr: string
  link: string
}
