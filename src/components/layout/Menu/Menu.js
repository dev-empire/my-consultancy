import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { StyledMenu } from './Menu.styled'

const Menu = ({ open }) => (
  <StyledMenu open={open}>
    <a href="/">Home</a>
    <a href="/order">Order</a>
    <a href="/contact">Contact</a>
  </StyledMenu>
)

Menu.prototype = {
  open: PropTypes.bool.isRequired,
}

export default Menu
