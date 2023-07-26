import { useBooks } from '../hooks/useBooks'
import { Toaster } from 'sonner'

import { Footer } from './Footer'
import { Header } from './Header'
import { ListOfBooks } from './ListOfBooks'
import { ListOfReadingList } from './ListOfReadingList'

export function BooksApp () {
  const { error, loading } = useBooks()

  return (
    <>
      <main className='px-5'>
        <Header />

        <h1 className='text-center text-4xl py-3 text-[#171717]'>Biblioteca</h1>

        {error && <h1>Ha ocurrido un error</h1>}

        {
        loading
          ? <h1>Cargando...</h1>
          : (
            <div className='grid grid-cols-2 gap-10 pt-2'>
              <ListOfBooks />
              <ListOfReadingList />
            </div>
            )
      }
        <Toaster />

      </main>

      <Footer />
    </>
  )
}
