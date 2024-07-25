import React, { useState } from 'react';
import "./paid.css";
import Navbar from '../../components/navbar/Navbar';
import BannerImage from "./game_details_image.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Paid = () => {
  const [book, setBooks] = useState({
    title:"",
    desc:"",
    cover:"", 
    price:''
})
const navigate = useNavigate()
const handlechange = (e) =>{
    setBooks(prev=>({...prev, [e.target.name]: [e.target.value]}))
}
const handleClick = async e =>{
    e.preventDefault();
     try{
        await axios.post("http://localhost:8800/books", book)
        toast.success("add succesfully")
        navigate("/view")
     }catch(err){
        toast.error("Enter the value")
     }
}
  return (
    <>
      <Navbar />
      <div className="paid-background" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="container-paid">
          <div className="product-details">
            <h3>Product Details</h3>
            <p><strong>Product Name:</strong> Example Product</p>
            <p><strong>Price:</strong> $6,000</p>
          </div>

          <div className="payment-form">
            <h3>Payment Information</h3>
            <form id="payment-form" >
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="title"
                  placeholder="Enter your name"
                  onChange={handlechange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address and Pin:</label>
                <input
                  type="text"
                  id="address"
                  name="desc"
                  placeholder="Enter the address and pin"
                  onChange={handlechange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="cover"
                  placeholder="Enter the email"
                  onChange={handlechange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="number"
                  id="phone"
                  name="price"
                  placeholder="Enter the phone"
                  onChange={handlechange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="card-number">Card Number:</label>
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  placeholder="Enter your card number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="expiry-date">Expiry Date:</label>
                <input
                  type="text"
                  id="expiry-date"
                  name="expiry-date"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV:</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="CVV"
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" onClick={handleClick}>Pay Now</button>
              </div>
            </form>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Example Product</td>
                  <td>$6,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paid;
