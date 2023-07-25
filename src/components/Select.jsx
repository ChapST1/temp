import { useCategories } from '../hooks/useCategories'
import { useZustandBookStore } from '../hooks/useZustandBooksStore'

export function Select () {
  const { updateCategory } = useZustandBookStore()
  const { categories } = useCategories()

  const handleCategoryChange = (event) => {
    const category = event.target.value
    updateCategory(category)
  }

  return (
    <select name='' id='' className='my-5' onChange={handleCategoryChange}>
      {
        categories.map((category, index) => {
          return <option key={index} value={category}>{category}</option>
        })
      }
    </select>
  )
}
