export function ReadingListItem ({ book, removeToReadingList }) {
  const { id, bookTitle, bookCover } = book

  const handleClick = () => {
    removeToReadingList(id)
  }

  return (
    <div key={id} className='h-full bg-red-400' id={id} onClick={handleClick}>
      <img
        src={bookCover}
        alt={`cover del libro: ${bookTitle}`}
        className='h-full'
      />
    </div>
  )
}
