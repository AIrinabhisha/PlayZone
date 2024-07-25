import React from 'react';
import "./play.css";
import { useNavigate } from 'react-router-dom';

const Play = (props) => {
  const navigate = useNavigate()
  function ticketBooking(){
    navigate("/ticket")
  }
  return (
    <div>
      <div className='card-container'>
        <img
          src={props.mainimage} 
          alt='invalid'
          style={{ width: '100%', height: 'auto' }} // Example of inline styles
        />
        <h1>{props.heading}</h1>
        <p>{props.des}</p>
        <button onClick={ticketBooking}>Booking</button>
      </div>
    </div>
  );
}

export default Play;
