export type Feature = {
  id: string
  title: string
  description: Question[]
  imageDesktop: string
  imageMobile: string
}

export type Question = {
  title?: string
  text: string
}

export type Step = {
  step: string
  year: string
  title: string
  text: string
  image: string
}

export type TCards = {
  title: string
  price: string
  description: string
  features: Array<string>
}
