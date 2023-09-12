import React, { useEffect } from 'react'
import './Staff.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

// Imported Images
import user4 from '../Assets/user (4).jpg'

const Staff = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='staff container section'>
      <div className="secContainer">
        <span className='secTitle'>
          Different People - One Mission
        </span>

        <div className="staffContainer grid">
          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={user4} alt="" />
            </div>

            <span className='name'>
              Aljune Maunes
            </span>
            <span className='jobTitle'>
              CEO Wander
            </span>
            <span className='contact'>
              +639 311 115 722
            </span>
          </div>
          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={user4} alt="" />
            </div>

            <span className='name'>
              Aljune Maunes
            </span>
            <span className='jobTitle'>
              CEO Wander
            </span>
            <span className='contact'>
              +639 311 115 722
            </span>
          </div>
          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={user4} alt="" />
            </div>

            <span className='name'>
              Aljune Maunes
            </span>
            <span className='jobTitle'>
              CEO Wander
            </span>
            <span className='contact'>
              +639 311 115 722
            </span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Staff
