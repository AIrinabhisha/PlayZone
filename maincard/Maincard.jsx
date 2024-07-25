import React from 'react'
import Navbar from '../navbar/Navbar'
//import Cardone from './cardone/Cardone'
import Cardtwo from './cardtwo/Cardtwo'
import Cardthree from './cardthree/Cardthree'
import "./maincard.css"
import Cardfour from './cardfour/Cardfour'
//import BannerImage from "./game_details_image.png"

const Maincard = () => {
  return (
    <div className='cardmain'>  
      <Navbar />
      <div className='card-containers'>
     
      
      <Cardthree />
      <Cardtwo />
      <Cardfour />
      
      </div>
    </div>
  )
}

export default Maincard
