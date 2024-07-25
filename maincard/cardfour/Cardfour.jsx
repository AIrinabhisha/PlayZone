import React from 'react'
import "./cardfour.css"
import { useNavigate } from "react-router-dom";

const Cardfour = () => {
    const navigate = useNavigate();
    function redirectTogameone() {
      navigate("/tic");
    }
  return (
    
    <div className="Card-1" >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7SOPEaq_zs--cSfVlHkUibCIMmdELIG3bA&s" alt="Invalid"
        ></img>
        <h1>Free Game</h1>
        <p>
          You must be performing a challenging activity that requires skill. The
          activity must provide clear goals and feedback. The outcome is
          uncertain but can be influenced by your actions.
        </p>
        <button onClick={redirectTogameone}>play Now</button>
        <p>
          <a href="/">Learn more</a>
        </p>
      </div>
  )
}

export default Cardfour
