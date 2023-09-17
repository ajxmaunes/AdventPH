import React, { useEffect } from 'react'
import './Review.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

// Imported Images
import user1 from '../Assets/user (1).jpg'
import user2 from '../Assets/user (2).jpg'
import user3 from '../Assets/user (3).jpg'

const Review = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='review section'>
      <div className="secContainer">
        <div className="secTitle">
          <span className='secTitle'>
            What People Say
          </span>

          <div className="reviewContainer container grid">

            <div data-aos='fade-up' data-aos-duration='3000' className="singleReview">
              <div className="imgDiv">
                <img src={user1} alt="" />
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, doloribus voluptates aliquid quaerat beatae dolor?
              </p>

              <div className="name">
                Aljune M.
              </div>
            </div>

            <div data-aos='fade-up' data-aos-duration='3500' className="singleReview">
              <div className="imgDiv">
                <img src={user1} alt="" />
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, doloribus voluptates aliquid quaerat beatae dolor?
              </p>

              <div className="name">
                Aljune O.
              </div>
            </div>

            <div data-aos='fade-up' data-aos-duration='4000' className="singleReview">
              <div className="imgDiv">
                <img src={user1} alt="" />
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, doloribus voluptates aliquid quaerat beatae dolor?
              </p>

              <div className="name">
                Mark P.
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
