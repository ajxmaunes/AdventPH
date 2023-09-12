import React, { useEffect } from 'react'
import './Cards.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

// Imported Images
import Image1 from '../Assets/Image1.jpg'
import Image2 from '../Assets/Image2.jpg'
import Image3 from '../Assets/Image3.jpg'
import Image6  from '../Assets/Image6.jpg'

// Imported Icon
import { AiOutlineSwapRight } from 'react-icons/ai'

const Cards = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='cards'>
      <div data-aos='fade-up' data-aos-duration='1000' className="cardContainer container grid">
        <div className="singleCard">
          <div className="imgDiv">
            <img src={Image6} alt="" />
          </div>
          <h4 className="textDiv">
            City Tour
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={Image1} alt="" />
          </div>
          <h4 className="textDiv">
            Historical Tour
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={Image2} alt="" />
          </div>
          <h4 className="textDiv">
            Beach Travels
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={Image3} alt="" />
          </div>
          <h4 className="textDiv">
          Mountain Tours
          </h4>
        </div>
      </div>

      <div className="spanText text">
        Other Tours <AiOutlineSwapRight className='icon' />
      </div>
    </div>
  )
}

export default Cards
