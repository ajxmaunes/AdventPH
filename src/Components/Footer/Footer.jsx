import React, { useEffect } from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

import Aos from 'aos'
import 'aos/dist/aos.css'

// Imported Icons
import {HiPhone} from 'react-icons/hi'
import {MdEmail} from 'react-icons/md'
import {FaLocationArrow, FaFacebookF} from 'react-icons/fa'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="footer">
      <div className='secContainer container'>
        <div className="content grid">
          
          <div className="row">
            <div className="spanText">
              CONTACT US
            </div>

            <div className="contactDiv">
              <span className='flex'>
                <HiPhone className='icon' />
                <span>(123) 456-7869</span>
              </span>
              <span className='flex'>
                <MdEmail className='icon' />
                <span><a href="mailto: aljunemaunes0@gmail.com" className='email'>adventph@gmail.com</a></span>
              </span>
              <span className='flex'>
                <FaLocationArrow className='icon' />
                <span>(123) 456-7869</span>
              </span>
            </div>
          </div>

          <div className="row">
            <div className="spanText">
              POPULAR NEWS
            </div>

            <div className="singleNews">
              <span className="text">
                Your Personal Guide to the most places to visit in the world.
              </span>
              <p>
                Jan 04, 2023
              </p>
            </div>
            <div className="singleNews">
              <span className="text">
                The grand reveal of the most iconic hotel in the world.
              </span>
              <p>
                Jan 20, 2023
              </p>
            </div>
          </div>

          <div className="row">
            <div className="spanText">
              QUICK LINKS
            </div>
            <div className="footerLinks">
              <ul>
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link to='/About' className='link'>About Us</Link></li>
                <li><Link to='/OurTours' className='link'>Our Tours</Link></li>
                <li><Link to='/Gallery' className='link'>Gallery</Link></li>
                <li><Link to='/ContactUs' className='link'>Contact Us</Link></li>  
              </ul>
            </div>
          </div>

        </div>
        <div className="bottomDiv flex">
          <p>Copyright 2023 AJDev - All rights reserved</p>

          <div  className="social flex">
            <FaFacebookF className='icon' />
            <AiOutlineTwitter className='icon' />
            <AiFillYoutube className='icon' />
            <AiFillInstagram className='icon' />
          </div>

          <p>Privacy Policy</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
