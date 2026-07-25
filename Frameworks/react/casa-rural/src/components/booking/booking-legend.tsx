export function BookingLegend() {
  return (
    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-fg-muted">
      <li className="flex items-center gap-2">
        <span className="size-4 rounded bg-accent" aria-hidden="true"></span>
        Tu selección
      </li>
      <li className="flex items-center gap-2">
        <span className="size-4 rounded bg-red-600/12" aria-hidden="true"></span>
        Ocupado
      </li>
      <li className="flex items-center gap-2">
        <span
          className="size-4 rounded border border-border bg-white text-center text-xs leading-4 text-gray-400"
          aria-hidden="true"
        >
          1
        </span>
        No disponible
      </li>
    </ul>
  )
}
