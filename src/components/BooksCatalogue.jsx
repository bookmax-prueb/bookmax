import { useEffect, useState } from 'react'
import api from '../services/api'
import { Link } from 'react-router-dom'

const BooksCatalogue = () => {
  const [books, setBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [pages, setPages] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get(`/books?offset=${(currentPage - 1) * 10}&searchTerm=${query}`)
        const { paginationInfo } = data
        setBooks(data.books)
        setTotalPages(paginationInfo.totalPages)

        const tmpPages = []
        for (let i = 0; i < paginationInfo.totalPages; i++) {
          tmpPages.push(i + 1)
        }
        setPages(tmpPages)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getData()
  }, [currentPage, query])

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1)
    }
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  const handleChangeQuery = (e) => {
    setQuery(e.target.value)
  }

  const handleQueryButton = () => { }

  return (
    <>
      <div className='section'>
        <div className='container'>
          <div className='field has-addons'>
            <div className='control is-expanded'>
              <div className='is-fullwisth'>
                <input
                  className='input is-large is-rounded'
                  type='text'
                  placeholder='search by title and genre...'
                  onChange={handleChangeQuery}
                  value={query}
                />
              </div>
            </div>
            <div className='control'>
              <button
                className='button is-primary is-large is-rounded'
                type='submit'
                onClick={handleQueryButton}
              > Buscar
              </button>
            </div>
          </div>
          <div className='fixed-grid has-5-cols mt-6'>
            <div className='grid is-gap-5'>
              {books.map((book) => (
                <div key={book.id} className='cell'>
                  <div className='card'>
                    <div className='card-image'>
                      <figure className='image is-4by3'>
                        <img
                          src={book.cover}
                          alt='Placeholder image'
                        />
                      </figure>
                    </div>
                    <div className='card-content'>
                      <div className='content'>
                        <Link to={`/books/${book._id}`}>
                          <h3 className='subtitle is-3'>{book.title}</h3>
                        </Link>
                        <h5 className='subtitle is-5'>{`${book.author.firstName} ${book.author.lastName}`}</h5>
                        <span className='tag is-link'>Score: {book.score}</span>
                        <span className='tag is-info'>{book.genre}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <nav
            className='pagination is-rounded is-centered'
            role='navigation'
            aria-label='pagination'
          >
            <a
              className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`}
              title='This is the first page'
              onClick={handlePrevious}
            >
              Anterior
            </a>
            <a
              className={`pagination-next ${currentPage === totalPages ? 'is-disabled' : ''}`}
              onClick={handleNext}
            >
              Siguiente
            </a>
            <ul className='pagination-list'>
              {pages.map((page) => (
                <li key={page}>
                  <a
                    className={`pagination-link ${page === currentPage ? 'is-current' : ''}`}
                    aria-label={`Goto page ${page}`}
                    onClick={() => {
                      handlePageChange(page)
                    }}
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default BooksCatalogue
