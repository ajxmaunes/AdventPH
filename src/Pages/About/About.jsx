import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './About.css'

// Imported Images
import Image1 from './images/Image1.jpg'
import Image2 from './images/Image2.jpg'

const About = () => {
  return (
    <div>
        <Navbar />
      <div className='about container section'>
      <div className="secContainer">
        <span className="secTitle">
          About
        </span>

        <div className="aboutContainer">

          <div className="singleAbout grid">
            <div className="imgDiv">
              <img src={Image1} alt="" />
            </div>
            <div className="aboutInfo">

            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, saepe. Sint impedit dolorum blanditiis aliquid hic praesentium ad, numquam natus ea facere cupiditate aspernatur obcaecati voluptatem fugit voluptas qui aut. Ipsam esse provident eligendi ipsa earum maxime quis, autem magnam tenetur, eveniet beatae reiciendis necessitatibus velit obcaecati minus suscipit vero officiis? Accusamus modi id repellendus aliquid fuga tempora, totam eaque delectus iusto accusantium unde fugiat deleniti saepe rerum obcaecati natus, cupiditate culpa quod optio. Odit iure maiores sequi accusamus minus harum cum, voluptates obcaecati delectus aliquid, totam commodi alias tempore nemo et nesciunt suscipit veniam atque doloremque eligendi voluptate. Omnis!
            </p>
            </div>

          </div>
          <div className="singleAbout grid">
            <div className="aboutInfo">

            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, saepe. Sint impedit dolorum blanditiis aliquid hic praesentium ad, numquam natus ea facere cupiditate aspernatur obcaecati voluptatem fugit voluptas qui aut. Ipsam esse provident eligendi ipsa earum maxime quis, autem magnam tenetur, eveniet beatae reiciendis necessitatibus velit obcaecati minus suscipit vero officiis? Accusamus modi id repellendus aliquid fuga tempora, totam eaque delectus iusto accusantium unde fugiat deleniti saepe rerum obcaecati natus, cupiditate culpa quod optio. Odit iure maiores sequi accusamus minus harum cum, voluptates obcaecati delectus aliquid, totam commodi alias tempore nemo et nesciunt suscipit veniam atque doloremque eligendi voluptate. Omnis!
            </p>
            </div>
            <div className="imgDiv">
              <img src={Image2} alt="" />
            </div>

          </div>
        </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default About
