import React, { useEffect } from 'react'
import './Tours.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

// Imported Images
import tourImage1 from '../Assets/Image4.jpg'
import tourImage2 from '../Assets/Image5.jpg'
import tourImage3 from '../Assets/Image7.jpg'

// Imported Icons
import {AiFillStar} from 'react-icons/ai'


const Tours = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='tours container section'>
      <div className="secContainer">
        <span className="secTitle">
          Hot Tours
        </span>

        <div className="tourContainer">

          <div data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage1} alt="" />
            </div>
            <div data-aos='fade-up' data-aos-duration='2500' className="tourInfo">
            <span className="tourTitle">
              Taal Lake, Batangas
            </span>
            <div className="stars_review flex">
              <div className="stars">
                <AiFillStar className='icon' />
                <AiFillStar className='icon' />
                <AiFillStar className='icon' />
                <AiFillStar className='icon' />
                <AiFillStar className='icon' />
              </div>

              <small className='custReview'>
                2 Customer Review
              </small>
            </div>

            <p>
            Taal Volcano is a large caldera filled by Taal Lake in the Philippines. Located in the province of Batangas about 50 kilometers south of Manila, the volcano is the second most active volcano in the country with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake. The caldera was formed by prehistoric eruptions between 140,000 and 5,380 BP.
            </p>
            <button className='btn'>Buy This Tour</button>
            </div>

            <span className='price'>
            ₱990
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage3} alt="" />
            </div>
            <div data-aos='fade-up' data-aos-duration='2500' className="tourInfo">
            <span className="tourTitle">
              Vigan City
            </span>
            <div className="stars_review flex">
              <div className="stars">
                <AiFillStar className='icon' />
                <AiFillStar className='icon' />
                <AiFillStar className='icon' />
                <AiFillStar className='icon' />
                <AiFillStar className='icon' />
              </div>

              <small className='custReview'>
                5 Customer Review
              </small>
            </div>

            <p>
            Vigan is a city in the Philippines, on the west coast of Luzon island. It's known for its preserved Spanish colonial and Asian architecture. Calle Crisologo dominates the Mestizo district, with its cobblestone streets, malecón, horse-drawn carriages and rustic mansions. Near the white baroque Vigan Cathedral are Plaza Salcedo, offering fountain light shows, and Plaza Burgos, known for its street-food stalls.
            </p>
            <button className='btn'>Buy This Tour</button>
            </div>

            <span className='price'>
            ₱790
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration='3000' className="singleTour grid">
              <div className="imgDiv">
                <img src={tourImage2} alt="" />
              </div>
              <div data-aos='fade-up' data-aos-duration='3500' className="tourInfo">
              <span className="tourTitle">
                Batanes Island
              </span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                </div>

                <small className='custReview'>
                  12 Customer Review
                </small>
              </div>

              <p>
              Batanes, officially the Province of Batanes, is an archipelagic province in the Philippines, administratively part of the Cagayan Valley region. It is the northernmost province in the Philippines, and the smallest, both in population and land area. The capital is Basco, located on the island of Batan.
              </p>
              <button className='btn'>Buy This Tour</button>
              </div>
              
              <span className='price'>
              ₱1090
              </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Tours
