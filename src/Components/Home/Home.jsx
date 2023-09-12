import React, { useEffect } from 'react'
import './Home.css'


import Aos from 'aos'
import 'aos/dist/aos.css'
import SearchBar from '../Searchbar/SearchBar'

const Home = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
      <div className='home'>
        <div className="homeText">
          <span data-aos='fade-up' data-aos-duration='2000' className='spanText'>
            A TEAM OF PROFESIONAL TRAVEL EXPERTS
          </span>

          <div data-aos='fade-up' data-aos-duration='4000' className="homeTitle">
            Adventure is <strong>WORTHWHILE</strong>
          </div>

          <div data-aos='fade-up' data-aos-duration='6000'>
          <SearchBar placeholder="Enter a Book Name..." />
          </div>
        </div>
      </div>
  )
}

export default Home
