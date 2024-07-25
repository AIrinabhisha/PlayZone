import React from 'react'
import "./landing.css"
import BannerImage from "./banner_image.png"


const Landing = () => {
  return (
    <div>
      <div className='header' style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1>P L A Y Z O N E</h1>
        <p>Games and sports play a crucial role in our life. It is not only needed for kids but also for adults. Games and sports keep everyone fit both physically and mentally. It has also been scientifically proven that keeping yourself engaged in different games and sports will keep you motivated. If you are writing a paragraph on games and sports, refer to the samples given below.</p>
      </div>
    </div>
  )
}

export default Landing
