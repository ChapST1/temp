import { useZustandBookStore } from '../hooks/useZustandBooksStore'

export function Range () {
  const { pages, updatePages } = useZustandBookStore()

  const handleChange = (event) => {
    const value = event.target.value

    updatePages(value)
  }

  return (
    <input type='range' min='0' max='1000' defaultValue={pages} onChange={handleChange} />
  )
}
