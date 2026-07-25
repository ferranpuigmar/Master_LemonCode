import { format } from 'date-fns'

export function toISODate(date: Date): string {
  return format(date, 'yyyy-MM-dd')
}
