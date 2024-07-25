import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./buyone.css"
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';


const Buyone = () => {
  const navigate = useNavigate()
  function first(){
    navigate("/first")
  }
  function second(){
    navigate("/second")
  }
  function three(){
    navigate("/three")
  }
  function four(){
    navigate("/four")
  }
  function five(){
    navigate("/five")
  }
  function six(){
    navigate("/six")
  }
  function seven(){
    navigate("/seven")
  }

  return (
    <div>
    <Navbar />
    <div className="profile">
        <div style={{ width: "14rem" }}>
    
          <img
            variant="top"
            src="https://static.javatpoint.com/top10-technologies/images/top-10-games-in-the-world1.png"/>
          <div>
            <h1>PUBG</h1>
            <p>
              Player Unknown's Battlegrounds, abbreviated as PUBG or PUBG, is a
              video game  <br />
              <Button variant="primary" onClick={first}>Buy</Button>
              
            </p>
          </div>
        </div>
        <div style={{ width: "14rem" }}>
          <img
            variant="top"
            src="https://cdn1.epicgames.com/spt-assets/419bd4760ed0465ba7f365f56f47d163/shrapnel-19nie.jpg?h=270&quality=medium&resize=1&w=480"
          />
          
            <h1>Minecraft</h1>
            <p>
              Minecraft is a world-building game created by Mojang, and it was
              launched in 2011. Minecraft is all about building things from <br />
              blocks.  <br />
              <Button variant="primary" onClick={second}>Buy</Button>
            </p>
          
        </div>

        <div style={{ width: "14rem" }}>
          <img
            variant="top"
            src="`https://i.pcmag.com/imagery/roundups/07sBMitXcz0UXdYU6LowlQt-2..v1648837830.jpg`"
          />
          
            <h1>Apex Legends</h1>
            <p>
              Apex Legends is the most popular online game. Since its release,
              this game has been making a lot of storms. This is the game for
              those who prefer battlefield games but don't play PUBG or <br />
              <Button variant="primary" onClick={three}>Buy</Button>
            </p>
          
        </div>

        <div style={{ width: "14rem" }}>
          <img
            variant="top"
            src=" https://www.lifewire.com/thmb/gAly30YDL-YdYVm9mrsJQTkTIMc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/speed-racing-pro-2-082aeab9eda345599d530bd2c90b752b.png"
          />
        
            <h1>Fortnite Battle Royale</h1>
            <p>
              Fortnite is the most popular online game. This game is a hybrid of
              Minecraft, PUBG, and Call of Duty, and it's a lot of fun! This
              game is great if you enjoy being creative. In this survival game,
             
             <br /> <Button variant="primary" onClick={four}>Buy</Button>
            </p>
          
        </div>
        <div style={{ width: "14rem" }}>
          <img
            variant="top"
            src="https://img2.appland.se/app/icons/20160629110812/512x512_icon_1467198492.1479.png"
          />
        
            <h1>BadLand</h1>
            <p>
              Fortnite is the most popular online game. This game is a hybrid of
              Minecraft, PUBG, and Call of Duty, and it's a lot of fun! This
              game is great if you enjoy being creative. In this survival game,
             
             <br /> <Button variant="primary" onClick={five}>Buy</Button>
            </p>
          
        </div>
        <div style={{ width: "14rem" }}>
          <img
            variant="top"
            src="https://img2.appland.se/app/icons/20181023T070940Z-5bcec9344dd1d/37303837383538373230343531676e70.png"
          />
        
            <h1>Cut The Robe 2</h1>
            <p>
              Fortnite is the most popular online game. This game is a hybrid of
              Minecraft, PUBG, and Call of Duty, and it's a lot of fun! This
              game is great if you enjoy being creative. In this survival game,
             
             <br /> <Button variant="primary" onClick={six}>Buy</Button>
            </p>
          
        </div>
        <div style={{ width: "14rem" }}>
          <img
            variant="top"
            src="https://img2.appland.se/app/icons/20180124T151559Z-5a68a32f83cf2/34333231363936303836313531676e70.png"
          />
        
            <h1>A Normal Lock Phone</h1>
            <p>
              Fortnite is the most popular online game. This game is a hybrid of
              Minecraft, PUBG, and Call of Duty, and it's a lot of fun! This
              game is great if you enjoy being creative. In this survival game,
             
             <br /> <Button variant="primary" onClick={seven}>Buy</Button>
            </p>
          
        </div>
        <div style={{ width: "14rem" }}>
          <img
            variant="top"
            src="https://img2.appland.se/app/icons/20230228T052114Z-63fd8f4a48aef/34343638383631363537373631676e70.png"
          />
        
            <h1>A Tale For Anne</h1>
            <p>
              Fortnite is the most popular online game. This game is a hybrid of
              Minecraft, PUBG, and Call of Duty, and it's a lot of fun! This
              game is great if you enjoy being creative. In this survival game,
             
             <br /> <Button variant="primary">Buy</Button>
            </p>
          
        </div>
        <div style={{ width: "14rem" }}>
          <img
            variant="top"
            src="https://img2.appland.se/app/icons/20180119T141256Z-5a61fce81e478/34323537373131373336313531676e70.png"
          />
        
            <h1>A Bling legend</h1>
            <p>
              Fortnite is the most popular online game. This game is a hybrid of
              Minecraft, PUBG, and Call of Duty, and it's a lot of fun! This
              game is great if you enjoy being creative. In this survival game,
             
             <br /> <Button variant="primary">Buy</Button>
            </p>
          
        </div>
        <div style={{ width: "14rem" }}>
          <img
            variant="top"
            src="https://img2.appland.se/app/icons/20220104T112429Z-61d42e6d59937/34353139363435393231343631676e70.png"
          />
        
            <h1>Advance beak</h1>
            <p>
              Fortnite is the most popular online game. This game is a hybrid of
              Minecraft, PUBG, and Call of Duty, and it's a lot of fun! This
              game is great if you enjoy being creative. In this survival game,
             
             <br /> <Button variant="primary">Buy</Button>
            </p>
          
        </div>
        <div style={{ width: "14rem" }}>
          <img
            variant="top"
            src="https://img2.appland.se/app/icons/20160701074142/icon512_1467358902.1254.png"
          />
        
            <h1>Cut the rope</h1>
            <p>
              Fortnite is the most popular online game. This game is a hybrid of
              Minecraft, PUBG, and Call of Duty, and it's a lot of fun! This
              game is great if you enjoy being creative. In this survival game,
             
             <br /> <Button variant="primary">Buy</Button>
            </p>
          
        </div>
        

        </div>
        </div>
    
  )
}

export default Buyone
