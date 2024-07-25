import React from 'react'
import "./cardtwo.css"
import { useNavigate } from 'react-router-dom'

const Cardtwo = () => {
  const navigate = useNavigate();
  function redirectToPlay() {
    navigate("/play");
  }
  return (
    <div className="Card-1" >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Ed5i07KGKV4eK7ze6zkGHrCWNBtKi4dy6w&s" alt='invalid'></img>
        <h1>Booking Ticket for playzone</h1>
        <p>
          You must be performing a challenging activity that requires skill. The
          activity must provide clear goals and feedback. The outcome is
          uncertain but can be influenced by your actions.
        </p>
        <button onClick={redirectToPlay}>play</button>
        <p>
          <a href="/">Learn more</a>
        </p>
      </div>
  )
}

export default Cardtwo
