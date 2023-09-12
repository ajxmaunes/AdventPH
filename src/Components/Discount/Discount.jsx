import React, { useEffect } from 'react'
import './Discount.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

// Imported Video
import video from '../Assets/video.mp4'

const Discount = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='discount section'>
      <div className="secContainer">
        <video src={video} autoPlay loop muted typeof='mp4'></video>
        <div className="textDiv">
          <span className='title'>
            Sign Up for 35% Discount
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatem possimus amet.
          </p>

          <div className="input_btn flex">
            <input type="text" placeholder='Enter Your Email' />
            <button className='btn'>Subscribe</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Discount
