// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="website-logo"
    />
    <ul className="list-items-container">
      <li className="list-items">
        <Link to="/" className="nav-item">
          Home
        </Link>
      </li>
      <li className="list-items">
        <Link to="/products" className="nav-item">
          Products
        </Link>
      </li>
      <li className="list-items">
        <Link to="/cart" className="nav-item">
          Cart
        </Link>
      </li>
      <button className="logout-btn" type="button">
        LogOut
      </button>
    </ul>
  </nav>
)

export default Header
