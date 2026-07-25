export type BookingStatus = 'active' | 'enjoyed'

export interface Booking {
  id: string
  house: {
    id: string
    name: string
  }
  checkIn: string
  checkOut: string
  status: BookingStatus
}
