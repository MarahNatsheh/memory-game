import React from 'react';
import '../App.css'; // Ensure this file has necessary styles for the card flipping effect

const Card = ({ card, flipped, disabled, handleChoice }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          className={`front ${card.highlight ? "highlight" : ""}`}
          src={card.src}
          alt="Card Front"
        />
        <img
          className="back"
          src={require('../Images/EducativeIcon.png')}
          alt="Card Back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;

