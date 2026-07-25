'use client'

import { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { differenceInCalendarDays } from 'date-fns'
import { es } from 'date-fns/locale'
import 'react-datepicker/dist/react-datepicker.css'
import { BookingLegend } from './booking-legend'
import { BookingSummary } from './booking-summary'

registerLocale('es', es)

interface BookingCalendarProps {
  price?: number
  disabledDates?: Date[]
  onConfirm: (checkIn: Date, checkOut: Date) => void
}

export function BookingCalendar({ price, disabledDates = [], onConfirm }: BookingCalendarProps) {
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null])
  const [startDate, endDate] = range

  const nights = startDate && endDate ? differenceInCalendarDays(endDate, startDate) : 0

  function confirm() {
    if (!startDate || !endDate || nights < 1) return
    onConfirm(startDate, endDate)
    setRange([null, null])
  }

  return (
    <>
      <p className="font-heading text-lg mb-4">Selecciona las fechas de tu estancia</p>
      <DatePicker
        selected={startDate}
        onChange={(update) => setRange(update as [Date | null, Date | null])}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        monthsShown={2}
        minDate={new Date()}
        excludeDates={disabledDates}
        highlightDates={[{ 'react-datepicker__day--highlighted-occupied': disabledDates }]}
        locale="es"
      />
      <BookingLegend />
      <BookingSummary price={price} nights={nights} />
      <button
        disabled={nights < 1}
        onClick={confirm}
        className="mt-6 w-full bg-accent text-white px-6 py-3 rounded enabled:hover:bg-accent-dark transition-colors duration-300 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        <span className="font-bold">Confirmar reserva</span>
      </button>
    </>
  )
}
