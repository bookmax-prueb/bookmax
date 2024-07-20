import { Link, useParams } from 'react-router-dom'
import api from '../services/api'
import { useEffect, useState } from 'react'

const Author = () => {
  const { authorId } = useParams()
  const [author, setAuthor] = useState(null)
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get(`/authors/${authorId}`)
        setAuthor(data.author)
        const responseBooks = await api.get(`/authors/${authorId}/books`)
        setBooks(responseBooks.data.books)
        console.log(responseBooks.data.books)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [authorId])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='section'>
      <div className='container'>
        {author
          ? (
            <div className='card'>
              <div className='card-content'>
                <div className='media'>
                  <div className='media-left'>
                    <figure className='image is-48x48'>
                      <img src={author.avatar} alt='Placeholder image' />
                    </figure>
                  </div>
                  <div className='media-content'>
                    <p className='title is-4'>
                      {author.firstName} {author.lastName}
                    </p>
                  </div>
                </div>

                <div className='content'>
                  <nav className='panel is-info'>
                    <p className='panel-heading'>Libros</p>
                    <div className='panel-block'>
                      <p className='control has-icons-left'>
                        <input
                          className='input'
                          type='text'
                          placeholder='Search'
                          value={searchTerm}
                          onChange={handleSearch}
                        />
                        <span className='icon is-left'>
                          <i className='fas fa-search' aria-hidden='true' />
                        </span>
                      </p>
                    </div>
                    {filteredBooks.map((book) => (
                      <Link
                        className='panel-block'
                        to={`/books/${book._id}`}
                        key={book._id}
                      >
                        <span className='panel-icon'>
                          <i className='fas fa-book' aria-hidden='true' />
                        </span>
                        {book.title}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
            )
          : (
            <div className='skeleton-block' />
            )}
      </div>
    </div>
  )
}

export default Author
