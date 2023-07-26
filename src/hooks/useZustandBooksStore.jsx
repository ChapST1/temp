import { useBookStore } from '../store/booksStore'

export function useZustandBookStore () {
  const books = useBookStore(state => state.books)
  const readingList = useBookStore(state => state.readingList)
  const category = useBookStore(state => state.category)
  const pages = useBookStore(state => state.pages)

  const updateBooks = useBookStore(state => state.updateBooks)
  const updateCategory = useBookStore(state => state.updateCategory)

  const addBookToReadingList = useBookStore(state => state.addBookToReadingList)
  const removeToReadingList = useBookStore(state => state.removeToReadingList)

  return {
    books,
    readingList,
    category,
    pages,

    updateBooks,
    updateCategory,

    addBookToReadingList,
    removeToReadingList
  }
}
