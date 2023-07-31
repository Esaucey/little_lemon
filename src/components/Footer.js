import React from 'react'
import './Footer.css'
import Logo from '../assets/Logo .png'

const Footer = () => {
  return (
    <div className='footer_container'>
      <img src={Logo} alt="" height="40px" />
        <div className='footer_doormat_nav'>
          <h4>Doormat Navigation</h4>
          <p>Home</p>
          <p>About</p>
          <p>Menu</p>
          <p>Reservation</p>
          <p>Order Online</p>
          <p>Login</p>
        </div>
        <div className='footer_contact'>
          <h4>Contact</h4>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
        <div className='footer_social_links'>
          <h4>Social Media Links</h4>
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
          <p>Link 4</p>
        </div>

    </div>
  )
}

export default Footer