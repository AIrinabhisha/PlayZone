import React from 'react';
import Play from './Play';
import "./mainplay.css";
import Navbar from '../navbar/Navbar';

const Mainplay = () => {
  return (
    <>
    <Navbar />
    <div className='mainplay'>
     
      <div className='play-card'>
      <Play 
        mainimage="https://lh5.googleusercontent.com/p/AF1QipMpfqqkcn8kH43vWp0I3kFRWRWDDXaQoxojBlX0=w112-h112-n-k-no" 
        heading="Jony Fun World - Game Zone " 
        des="Sk COmplex, Chittlapakkam Main Rd, opp. Punjab National Bank"
      />
</div>
<div className='play-card'>
      <Play 
        mainimage="https://lh5.googleusercontent.com/p/AF1QipNdjFP44qyopA6xVDujOlaLdOlEStyg936nIvUu=w112-h112-n-k-no" 
        heading="Fun CIkaraiOne Mall, Aminja" 
        des="STF hop Citymaz Hotels"
      />
</div>
<div className='play-card'>
      <Play 
        mainimage="https://lh5.googleusercontent.com/p/AF1QipPnSk61PZo4tG712IrgQxCovCzn2MBsiA5wq4IC=w112-h112-n-k-no" 
        heading="TIA Gaming World - Kids Soft Play Area" 
        des="Amusement Center"
      />
      </div>
      <h2>Location</h2>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62178.95798188481!2d80.18252081408714!3d13.087466932921156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schennai%20play%20station!5e0!3m2!1sen!2sin!4v1720513948836!5m2!1sen!2sin" 
        width="600" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </>
  );
}

export default Mainplay;
