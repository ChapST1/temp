import { ALL_CATEGORIES } from '../../constants'
import { getBooks } from './getBooks'

export async function getBooksCategories () {
  const books = await getBooks({ category: ALL_CATEGORIES, pages: 0 })

  const booksCategories = books.map(({ bookGenre }) => bookGenre)
  const filterCategories = new Set([ALL_CATEGORIES, ...booksCategories])

  return Array.from(filterCategories)
}
