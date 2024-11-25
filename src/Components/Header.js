import React from 'react';


const Header = ({ turns, onShuffle }) => {
  return (
    <header>
      
      <h1>Memory Game</h1>
      <p>Turns {turns}/15</p>
      <button  type="button" class="btn " onClick={onShuffle}>New game</button>

    </header>
  );
};

export default Header;
