import type { BookingStatus } from '~/types/booking'
import { toISODate } from '~/utils/date'

export function resolveStatus(checkOut: string): BookingStatus {
  return checkOut < toISODate(new Date()) ? 'enjoyed' : 'active'
}
