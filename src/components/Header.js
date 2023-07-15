import React from 'react'
import { Nav } from './Nav'
import Logo from '../assets/Logo .png'

const Header = () => {
  return (
    <div>
      <img src={Logo} alt="little lemon logo" />
      <Nav />
    </div>
  )
}

export default Header