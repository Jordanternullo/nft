export interface CardModel {
  images: string[]
  title: string
  profil: {
    name: string
    avatar: string
  }
}

export interface Nft {
  id: string
  title: string
  image: string
  amount: string
  endTime: Date
  category: string
}
