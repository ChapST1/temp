import { useEffect, useState } from 'react'
import { getBooks } from '../services/api/getBooks'
import { useZustandBookStore } from './useZustandBooksStore'

export function useBooks () {
  const { updateBooks, category } = useZustandBookStore()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)

    getBooks({ category })
      .then((books) => {
        updateBooks(books)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [category, updateBooks])

  return {
    loading,
    error
  }
}
