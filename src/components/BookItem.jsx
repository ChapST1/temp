export function BookItem ({ book, updateReadingList }) {
  const { id, bookTitle, bookCover } = book

  const handleClick = () => {
    updateReadingList(id)
  }

  return (
    <div key={id} className='h-full' id={id} onClick={handleClick}>
      <img
        src={bookCover}
        alt={`cover del libro: ${bookTitle}`}
        className='h-full'
      />
    </div>
  )
}
