import { useZustandBookStore } from '../hooks/useZustandBooksStore'
import { ReadingListItem } from './ReadingListItem'

export function ListOfReadingList () {
  const { readingList, removeToReadingList } = useZustandBookStore()
  const readingListLength = readingList.length

  return (
    <div className='border-4 border-[#f9fafb] rounded-md py-4 px-7'>
      <p className='text-center text-2xl pb-3 text-[#666]'>Lista de lectura</p>

      {
        readingListLength === 0 && <p className='text-center text-1xl py-3 text-[#717171]'>No hay libros en la lista de lectura 🥲</p>
      }
      <div className='grid grid-cols-4 gap-2 '>
        {
          readingList.map((book) => {
            return (
              <ReadingListItem key={book.id} book={book} removeToReadingList={removeToReadingList} />
            )
          })
        }
      </div>
    </div>
  )
}
