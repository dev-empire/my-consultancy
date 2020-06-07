import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="grid-2">
        <div>
          <p>Devengcy</p>
          <p>&copy;2020</p>
        </div>
        <div>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  )
}

const footerStyle = {
  backgroundColor: '#313131',
  color: '#f4f4f4',
  lineHeight: '1.5',
}

export default Footer
