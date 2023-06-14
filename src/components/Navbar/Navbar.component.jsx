// import { Link } from 'react-router-dom'
import './Navbar.style.css'
import { auth, logout } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const logoutUser = () => {
    logout(auth)
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3">
      <div className="w-25">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav d-flex justify-content-around w-75">
          <li className="nav-item">
            <button className="btn btn-secondary">Comming Soon🙄</button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-primary"
              onClick={logoutUser}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
