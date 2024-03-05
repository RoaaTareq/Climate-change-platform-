import React from 'react';
import './CSS/header.css'
import logo from '../../images/logo-2.png'

function Header() {
  return (
  <nav className='main-navbar'>
     <header className='container'>
     <div className="d-flex  align-items-center">
     <img src={logo} alt='log' className='logo'/>
    <ul className='list-menu' >
      
        <li>Home</li>
        <li>Courses</li>
        <li>About US</li>
        <li>Blog</li>
        <li>Contact</li>
    </ul>
     </div>
   </header>
  </nav>
  );
}

export default Header;
