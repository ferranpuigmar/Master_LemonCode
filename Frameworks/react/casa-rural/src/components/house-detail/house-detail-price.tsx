interface HouseDetailPriceProps {
  price?: number
  onClick?: () => void
  isDisabled?: boolean
}

export function HouseDetailPrice({ price, onClick, isDisabled }: HouseDetailPriceProps) {
  if (!price) return null

  return (
    <div className="mt-4">
      <div className="flex gap-6 items-center justify-end mb-4">
        <div className="flex flex-col justify-between items-start">
          <div className="text-xl font-heading">Precio</div>
          <span className="text-4xl text-gray-700">
            {price}€ <span className="text-lg font-heading">/ noche</span>
          </span>
        </div>
        <button
          disabled={isDisabled}
          onClick={onClick}
          className="bg-accent text-white px-6 py-4 rounded enabled:hover:bg-accent-dark transition-colors duration-300 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <span className="font-bold text-xl">Reservar</span>
        </button>
      </div>
    </div>
  )
}
