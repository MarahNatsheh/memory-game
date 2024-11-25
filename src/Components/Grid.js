import React from 'react';
import Card from './Card';
import '../App.css'; // Include styling for the grid

const Grid = ({ cards, choiceOne, choiceTwo, disabled, handleChoice }) => {
  return (
    <div className="grid-container">
      {cards.map((card) => (
        <Card
          key={card.id} // Unique key for React rendering
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
