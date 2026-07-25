export interface ReviewDTO {
  id: string
  author: string
  date: string
  comment: string
  rating: number
}

export interface HouseDTO {
  id: string
  name: string
  description: string
  address: string
  city: string
  country: string
  bedrooms: number
  beds: number
  bathrooms: number
  price: number
  image: string
  amenities: string[]
  reviews: ReviewDTO[]
}

export type Review = Omit<ReviewDTO, 'rating'>

export type House = Omit<HouseDTO, 'amenities' | 'reviews'> & {
  reviews: Review[]
}
