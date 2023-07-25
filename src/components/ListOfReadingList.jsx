import { useZustandBookStore } from '../hooks/useZustandBooksStore'
import { ReadingListItem } from './ReadingListItem'

export function ListOfReadingList () {
  const { readingList, removeToReadingList } = useZustandBookStore()
  const readingListLength = readingList.length

  return (
    <div className={readingListLength === 0 ? ' hidden' : 'block'}>
      <p className='text-center text-2xl py-3'>Lista de lectura</p>
      <div>
        {
          readingList.length === 0 && <p className='text-center text-2xl'>No hay libros en la lista de lectura 🥲</p>
        }

        <div className='grid grid-cols-4 gap-5 max-w-4xl m-auto'>
          {
          readingList.map((book) => {
            return (
              <ReadingListItem key={book.id} book={book} removeToReadingList={removeToReadingList} />
            )
          })
        }
        </div>
      </div>
    </div>
  )
}
