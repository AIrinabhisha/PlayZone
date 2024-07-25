import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';

const TicketView = () => {
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    const fetchAllTickets = async () => {
      try {
        const res = await axios.get("http://localhost:8800/ticket");
        setTicket(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTickets();
  }, []);

  return (
    <>
    <Navbar />
    <div>
      {ticket.map((ti) => (
        <div className='container-ticket' key={ti.id}>
          <h1>{ti.name}</h1>
          <p>{ti.email}</p>
          <p>{ti.phoneno}</p>
          <p>{ti.age}</p>
          <p>{ti.time}</p>
          <p>{ti.desc}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default TicketView;
