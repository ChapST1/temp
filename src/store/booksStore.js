import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useBookStore = create(persist(
  (set, get) => {
    window.addEventListener('storage', (event) => {
      if (event.key === 'books-storage') {
        const { state } = JSON.parse(event.newValue)
        const storageState = { ...state }
        set({ ...storageState })
      }

      return null
    })

    return {
      books: [],
      readingList: [],
      category: 'Todas',
      pages: 0,

      updateBooks: (newBooks) => {
        const { readingList } = get()

        const readingListIds = readingList.map(book => book.id)
        const removeCopyInReadingList = [...newBooks].map((book) => {
          const findBookInReadingList = readingListIds.find(id => id === book.id)
          if (findBookInReadingList) return undefined

          return book
        })

        const filteredNewBooks = Array.from(removeCopyInReadingList).filter((book) => book !== undefined)
        set({ books: filteredNewBooks })
      },

      updateCategory: (newCategory) => {
        const { books } = get()

        const newBooks = [...books].filter(book => book.bookGenre === newCategory)
        set({ category: newCategory, books: [...newBooks] })
      },

      updatePages: (newPages) => {
        set({ pages: newPages })
      },

      addBookToReadingList: (bookId) => {
        const { books, readingList } = get()

        const findBookById = books.find(book => book.id === bookId)
        const newBooks = books.filter(book => book.id !== bookId)
        const newReadingList = [...readingList, findBookById]

        set({ books: [...newBooks], readingList: [...newReadingList] })
      },

      removeToReadingList: (bookId) => {
        const { books, readingList, category } = get()
        const findBookById = readingList.find(book => book.id === bookId)

        const newBooks = [...books, findBookById]
        const newReadingList = readingList.filter(book => book.id !== bookId)

        const filteredBooks = newBooks.filter(book => book.bookGenre === category)

        if (category === 'Todas') return set({ books: [...newBooks], readingList: [...newReadingList] })

        set({ books: [...filteredBooks], readingList: [...newReadingList] })
      }

    }
  }
  , {
    name: 'books-storage'
  }))
