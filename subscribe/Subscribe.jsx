import React from 'react'
import Navbar from '../navbar/Navbar'
import "./subscribe.css"
import { useNavigate } from 'react-router-dom'

const Subscribe = () => {
    const navigate = useNavigate();
  function redirectToSign() {
    navigate("/sign");
  }
  return (
    <>
    <Navbar />
    <div className='su-container'>
        
      <h1>HOW TO SUBSCRIBE</h1>
      <p>1.Open the settings on your Android device</p>
      <p>2.Find security or applications.</p>
      <p>3.Locate "Unknown Sources" and activate them.</p>
      <p>4.Check out the instructional video below for help or <a href="/sign">sign up</a>now</p>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/nfTU2wuM06I?si=tNj94rhA1wbjn_-O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
      <button onClick={redirectToSign}>SIGN UP NOW</button>
    </div>
    </>
  )
}

export default Subscribe
