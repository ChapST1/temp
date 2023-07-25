import { useZustandBookStore } from '../hooks/useZustandBooksStore'
import { BookItem } from './BookItem'

export function ListOfBooks () {
  const { books, addBookToReadingList } = useZustandBookStore()
  const booksLenght = books.length

  console.log({
    books
  })

  return (
    <section className={booksLenght === 0 ? 'hidden' : 'block'}>
      <p className='text-center text-2xl py-3'>libros</p>
      <div className='grid grid-cols-4 gap-5 max-w-4xl m-auto'>
        {
        books.map((book) => {
          return (
            <BookItem key={book.id} book={book} updateReadingList={addBookToReadingList} />
          )
        })
      }
      </div>
    </section>

  )
}
