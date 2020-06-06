import React from 'react'

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
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/about">
              <li>About</li>
            </a>
            <a href="/contact">
              <li>Contact</li>
            </a>
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
