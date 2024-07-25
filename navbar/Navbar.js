import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import Poki from "./onlinelogomaker-063024-1146-9535.png"
//import Cards from '../games/Cards';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  function redirectToGame() {
    navigate("/Maincard");
  }
  return (
    <div className='container'> 
        <div className='leftSide'>
            <img src={Poki} alt='invalid' />
        </div>
        <div className='rightSide'>
            <Link to="/Hole">Home</Link>
            <Link to="/ca" onClick={redirectToGame}>Games</Link>
            <Link to="/su">How To Subscribe</Link>
            <Link to="/">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
      
    </div>
  )
}

export default Navbar
