import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

// Imported Icons
import {AiFillCloseCircle} from 'react-icons/ai'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {

  // Lets display the Navbar
  const [active, setActive] = useState('menuDiv')

  const showNavbar = () => {
    setActive('menuDiv activeNavbar')
  }

  // Lets display the Navbar
  const removeNavbar = () => {
    setActive('menuDiv')
  }

  return (
    <div>
      <div className="header">
        <div className="logoDiv">
          <Link to='/' className='logo'>AdventPH</Link>
        </div>

        <div className={active}>
          <ul className="menuLists">
            <li className="navItem">
              <Link to='/' onClick={removeNavbar} className='menuLink'>Home</Link>
            </li>
            <li className="navItem">
              <Link to='/About' relative="path" onClick={removeNavbar} className='menuLink'>About</Link>
            </li>
            <li className="navItem">
              <Link to='/OurTours' onClick={removeNavbar} className='menuLink'>Our Tours</Link>
            </li>
            <li className="navItem">
              <Link to='/Gallery' onClick={removeNavbar} className='menuLink'>Gallery</Link>
            </li>
            <li className="navItem">
              <Link to='/ContactUs' onClick={removeNavbar} className='menuLink'>Contact Us</Link>
            </li>
            {/* <li className="navItem">
              <a href="#Blog" onClick={removeNavbar} className='menuLink'>Blog</a>
            </li> */}
            {/* <li className="navItem">
              <a href="#Pages" onClick={removeNavbar} className='menuLink'>Pages</a>
            </li> */}
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div className="socialIcons flex">
          <FacebookIcon className='icon' />
          <TwitterIcon className='icon' />
          <YouTubeIcon className='icon' />
          <InstagramIcon className='icon' />
        </div>

        <div onClick={showNavbar} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
 