import { useContext } from 'react'
import AppContext from '../context/AppContext'

import { Link } from 'react-router-dom'

const Navbar = () => {
  const { navTitle } = useContext(AppContext)

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary sticky-top' data-bs-theme='dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>{navTitle}</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/youtube'>Youtube</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
