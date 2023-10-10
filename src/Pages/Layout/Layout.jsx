import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        <div>{children}</div>
        <Footer />
    </div>
  )
}

export default MainLayout
