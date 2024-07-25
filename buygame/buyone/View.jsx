import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './view.css';  // Import the CSS file
import Navbar from '../../components/navbar/Navbar';

const View = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);
  const handleDelte = async (id) =>{
    try{
      await axios.delete("http://localhost:8800/books/" +id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
    <Navbar />
    <div className="container-view">
      <h6>Delivery Address</h6>
      <div className='books'>
        {books.map((book) => (
          <div className='book' key={book.id}>
            <b>{book.title}</b>
            <p>{book.desc}</p>
            <label>Phone number</label>
            <span>{book.price}</span>
            <label>Email ID</label>
            <p>{book.cover}</p>

            <h6>Your Rewards</h6>
            <b>2 Super Coins</b>
            <p>Use it to save on your next order</p><br />
            <h6>Early Access to this Sake</h6>
            <p>For playzone Members</p>
            
            
            <div className="add-button">
        <Link  onClick={()=>handleDelte(book.id)}>Cancel</Link>
      </div>
          </div>
        ))}
      </div>
      
    </div>
    </>
  );
}

export default View;
