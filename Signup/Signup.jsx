import React from 'react'
import "./sign.css"
import Navbar from '../components/navbar/Navbar'

const Signup = () => {
  return (
    <>
    <Navbar />
    <div >
    <div className='signup-container'>
      <form>
        <input type='text' placeholder='FirstName' />
        <input type='text' placeholder='LastName' />
        <input type='password' placeholder='Password' />
        <input type='password' placeholder='Confirm Password' />
        <div>
          <input type='radio' id='terms' />
          <label htmlFor='terms'>Accept all terms and conditions</label>
        </div>
        <button>Sign Up</button>
        <p>Already have the account? <a href='/login'>Login</a></p>
        <p>copyright @ playzone.com</p>
      </form>
    </div>
    </div>
    </>
  )
}

export default Signup
