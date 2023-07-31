import React from 'react'
import { Nav } from './Nav'
import Logo from '../assets/Logo .png'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="little lemon logo" height="50px"/>
      <Nav />
    </div>
  )
}

export default Header