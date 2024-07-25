import React, { useState } from 'react';
import "./footer.css";
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/irin', { email })
      .then(res => {
        setMessage('Email submitted successfully!');
        setEmail('');
      })
      .catch(err => {
        setMessage('Failed to submit email.');
        console.log(err);
      });
  };
  return (
    <div className='footer-container'>
    <h3>Crescendo</h3>
    <div className='input'>
      <form onSubmit={handleSubmit}>
        <input 
          type='email' 
          placeholder='Enter your Email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    <div className='list'>
      <strong>Links</strong>
      <p>Home</p>
      <p>Support</p>
      <p>About</p>
    </div>
    <div className='list-1'>
      <strong>Services</strong>
      <p>Insurance</p>
      <p>Legal</p>
      <p>Site Map</p>
    </div>
    <div className='list-2'>
      <strong>About</strong>
      <p>Accessibility</p>
      <p>Environment</p>
      <p>Branches</p>
    </div>
    <div className='list-3'>
      <strong>Contact us</strong>
      <p>(+91) 123-456-7890</p>
      <p>ChildCrescendo@gmail.com</p>
    </div>
  </div>
  )
}

export default Footer
