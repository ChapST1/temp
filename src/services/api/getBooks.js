import { ALL_CATEGORIES } from '../../constants'
import { API_URL } from './config'

export async function getBooks ({ category }) {
  const res = await fetch(API_URL)
  const { library } = await res.json()

  const mappedLibrary = library?.map(({ book }) => {
    const { ISBN, title, genre, pages, cover } = book

    return {
      id: ISBN,
      bookTitle: title,
      bookGenre: genre,
      bookPages: pages,
      bookCover: cover
    }
  })

  const filteredBooks = mappedLibrary?.filter(({ bookGenre }) => {
    return bookGenre === category
  })

  return category === ALL_CATEGORIES ? mappedLibrary : filteredBooks
}
