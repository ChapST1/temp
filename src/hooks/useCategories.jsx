import { useEffect, useState } from 'react'
import { getBooksCategories } from '../services/api/getCategories'

export function useCategories () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getBooksCategories().then((categories) => setCategories(categories))
  }, [])

  return {
    categories
  }
}
