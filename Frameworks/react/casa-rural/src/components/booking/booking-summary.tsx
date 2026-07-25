interface BookingSummaryProps {
  price?: number
  nights: number
}

export function BookingSummary({ price, nights }: BookingSummaryProps) {
  if (nights <= 0) return null

  const totalPrice = nights * (price ?? 0)

  return (
    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
      <span className="text-fg-muted">
        {price}€ × {nights} {nights === 1 ? 'noche' : 'noches'}
      </span>
      <span className="text-xl font-bold">{totalPrice}€</span>
    </div>
  )
}
