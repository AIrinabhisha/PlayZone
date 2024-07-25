import React from 'react'
import "./login.css"
import Navbar from '../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  function paid(){
    navigate("/paid")
  }
  return (
    <>
    <Navbar />
    <div className='login-con'>
      <form>
        <input type='text' placeholder='username or email'>
        </input><br /><br />
        <input type='password' placeholder='password'></input><br /><br />
        <button onClick={paid} >Login</button>
        <p><a href='/sign'>signUp</a></p>
      </form>
    </div>
    </>
  )
}

export default Login
