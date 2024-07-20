import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'

const Books = () => {
  const { bookId } = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get(`/books/${bookId}`)
        setBook(data.book)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [bookId])

  return (
    <>
      <section className='hero is-link'>
        <div className='hero-body'>
          <p className='title'>LinkHero</p>
          <p className='subtitle'>Linksubtitle</p>
        </div>
      </section>
      <div className='section'>
        <div className='container'>
          {!book
            ? (
              <div className='skeleton-lines'>
                <div />
                <div />
                <div />
              </div>
              )
            : (
              <span>{book.title}</span>
              )}
        </div>
      </div>
    </>
  )
}

export default Books
