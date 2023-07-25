import { useZustandBookStore } from '../hooks/useZustandBooksStore'
import { Range } from './Range'
import { Select } from './Select'

export function Header () {
  const { books, readingList } = useZustandBookStore()
  const booksLength = books.length
  const readingListLength = readingList.length

  return (
    <header>
      <Select />

      <p>Libros disponibles: {booksLength} </p>
      <p>Libros disponibles: {readingListLength}</p>

      <Range />
    </header>
  )
}
