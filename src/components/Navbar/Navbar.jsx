import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav className='container'>
       <img src={ logo } alt="logo" className='logo' /> 
       <ul>
        <li>Home</li>
        <li>Dienstleistungen</li>
        <li>Über uns</li>
        <li>Campus</li>
        <li>Referenzen</li>
        <li><button className='btn'>Kontaktiere uns</button></li>
       </ul>
    </nav>
  )
}

export default Navbar