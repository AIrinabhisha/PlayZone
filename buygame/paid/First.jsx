import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./first.css"
import { useNavigate } from 'react-router-dom'

const First = (props) => {
  const navigate = useNavigate()
  function paid(){
    navigate("/login")
  }
  return (
    <div className='first-container'>
      
      <div className='side-navbar-first'>
        <img src={props.img}alt='error' /><br />
        <button>ADD TO CART</button>
        <button onClick={paid}>BUY NOW</button>
      </div>
      <div>
        <p></p>
        <p>special price</p>
        <h3>{props.price}</h3>
        <strong>Available offers</strong>
        <p><b>Bank Offer</b>Get Rs.50 instant Discount on first playzone UPI transction on order of Rs.200 and ablve <b>T&C</b></p>
        <p><b>Bank offer</b>5% cashback on playzone Axis Bank Card <b>T&C</b></p>
        <p><b>Bank Offer</b>Flat Rs500 off on HSDX bank Debit Card EMI Txns, Tenutre: 3 and 6 months, Min Txn Vakye:Rs.750</p>
        <p><b>Special Price</b>Get extra 8% off (price inclusive of cashback/coupon)<b>T&C</b></p>
        <div>
            <div>
                <input type='radio' />Buy  without Exchange             Rs.6,000
            </div>
            <div>
                <input type="radio" />Buy with Exchange               up to Rs.4,000 off
                <p>Enter pincode to check if exchange is available</p>
                <p>Deliver</p> <input type="number" placeholder='Enter Delivery pincode'/><a href="#">Check</a>
                 <p>Delivery by {props.data}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default First
