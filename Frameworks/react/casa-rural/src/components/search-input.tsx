'use client'

import { Search } from 'lucide-react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'Buscar casas...',
  className = '',
}: SearchInputProps) {

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div
      className={`border border-gray-200 rounded-sm bg-white flex items-center relative w-fit self-start min-w-sm ${className}`}
    >
      <Search className="w-5 h-5 text-gray-400 ml-2 absolute" />
      <input
        value={value}
        onChange={handleOnChange}
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  )
}
