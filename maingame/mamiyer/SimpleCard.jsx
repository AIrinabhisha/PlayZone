import React from "react";
import "./singlecard.css";
import img1 from "./img/cover.png";

const SimpleCard = ({ card, handleChoice, flipped,disabled }) => {
  const handleClick = () => {
    if(!disabled){
        handleChoice(card);
    }
    
  };

  return (
    <div className="card-love">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card" />
        <img className="back" src={img1} alt="card" onClick={handleClick} />
      </div>
    </div>
  );
};

export default SimpleCard;
