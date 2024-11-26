import React from 'react';
import Card from './Card';
import '../App.css'; 
const Grid = ({ cards, choiceOne, choiceTwo, disabled, handleChoice }) => {
  return (
    <div className="grid-container">
      {cards.map((card) => (
        <Card
          key={card.id} 
          card={card}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
          handleChoice={handleChoice}
        />
      ))}
    </div>
  );
};

export default Grid;
