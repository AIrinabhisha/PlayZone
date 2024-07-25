import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import './ticket.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Ticket = () => {
  const [tickets, setTicket] = useState({
    name: "",
    email: "",
    phoneno: "",
    age: "",
    time: "",
    desc: "",
    
  });
  const navigate = useNavigate();

  const handlechange = (e) => {
    setTicket((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/ticket", tickets);
      toast.success("Added successfully");
      navigate("/ticketview");
    } catch (err) {
      toast.error("Enter the value");
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="ticket-container">
          <form>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handlechange}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handlechange}
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phoneno"
              name="phoneno"
              required
              onChange={handlechange}
            />

            <label htmlFor="date">Date of Journey</label>
            <input
              type="number"
              id="date"
              name="age"
              required
              onChange={handlechange}
            />

            <label htmlFor="time">Time of Journey</label>
            <input
              type="number"
              id="time"
              name="time"
              required
              onChange={handlechange}
            />

            <label htmlFor="tickets">Number of Tickets</label>
            <input
              type="text"
              id="desc"
              name="desc"
              required
              onChange={handlechange}
            />

            <button type="submit" onClick={handleClick}>
              Book Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Ticket;
