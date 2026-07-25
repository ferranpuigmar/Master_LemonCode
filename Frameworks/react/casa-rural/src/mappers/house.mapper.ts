import type { House, HouseDTO } from '@/types/house'
import { getImageWithBaseUrl } from '@/utils/get-image-with-base-url'

export const houseMapper = (house: HouseDTO, apiBase: string): House => {
  const { amenities: _amenities, reviews, ...rest } = house
  const mappedReviews = reviews.map((review) => ({
    id: review.id,
    author: review.author,
    date: review.date,
    comment: review.comment,
  }))

  return {
    ...rest,
    image: getImageWithBaseUrl(rest.image, apiBase),
    reviews: mappedReviews,
  }
}
