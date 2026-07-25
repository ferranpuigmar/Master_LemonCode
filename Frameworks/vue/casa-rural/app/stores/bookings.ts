import type { Booking } from '~/types/booking'
import { resolveStatus } from '~/utils/booking'
import { toISODate } from '~/utils/date'

export const useBookingsStore = defineStore('bookings', () => {
  const bookings = ref<Booking[]>([])

  const activeBookings = computed(() =>
    bookings.value.filter((booking) => booking.status === 'active')
  )

  const enjoyedBookings = computed(() =>
    bookings.value.filter((booking) => booking.status === 'enjoyed')
  )

  function getBookingsByHouse(houseId: string) {
    return bookings.value.filter((booking) => booking.house.id === houseId)
  }

  function addBooking(house: Booking['house'], checkIn: Date, checkOut: Date) {
    const booking: Booking = {
      id: crypto.randomUUID(),
      house,
      checkIn: toISODate(checkIn),
      checkOut: toISODate(checkOut),
      status: resolveStatus(toISODate(checkOut)),
    }
    bookings.value.push(booking)
    
    return booking
  }

  return { bookings, activeBookings, enjoyedBookings, getBookingsByHouse, addBooking }
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
})
