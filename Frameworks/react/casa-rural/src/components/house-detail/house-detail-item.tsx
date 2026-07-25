interface HouseDetailItemProps {
  title: string
  isInline?: boolean
  content?: string | number
}

export function HouseDetailItem({ title, isInline = false, content }: HouseDetailItemProps) {
  if (content === undefined || content === null || content === '') return null

  return (
    <div
      className={`flex flex-col mb-4 pb-5 ${isInline ? 'flex-row items-center' : ''}`}
    >
      <h2 className={`text-lg font-bold ${isInline ? 'mr-2 mb-0' : 'mb-2'}`}>
        {title}
        {isInline && ':'}
      </h2>
      <p>{content}</p>
    </div>
  )
}
