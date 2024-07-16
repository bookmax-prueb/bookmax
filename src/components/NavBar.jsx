import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item"></a>
    <a
      role="button"
      className="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <Link className="navbar-item" to='/' >Books</Link>
      <Link className="navbar-item" to='/authors'>Authors</Link>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link className="button is-primary" to='/register'>
            <strong>Register</strong>
          </Link>
          <Link className="button is-light" to='/login'>Log in</Link>
        </div>
      </div>
    </div>
  </div>
</nav>

   
    </>
  )
}

export default NavBar