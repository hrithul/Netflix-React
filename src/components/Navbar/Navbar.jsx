import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="search" className='icons'/>
        <p>Children</p>
        <img src={bell} alt="bell" className='icons'/>
        <div className="navbar-profile">
        <img src={profile_img} alt="avatar" className='profile'/>
        <img src={caret_icon} alt="caret" className='caret'/>
        <div className="dropdown">
          <p>Sign out of Netfilx</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar