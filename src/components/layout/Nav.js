import React from 'react'
import { useClickOutside } from '../../hooks'

import Burger from './Burger'
import Menu from './Menu'

const Nav = () => {
  const [open, setOpen] = React.useState(false)
  const node = React.useRef()
  useClickOutside(node, () => setOpen(false))

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  )
}

export default Nav
