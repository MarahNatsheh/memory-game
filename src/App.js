import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Grid from './Components/Grid';
import { cardImages } from './Components/Images';
import { ReactComponent as TrophyIcon } from './trophy-animation.svg';
import './App.css';
import Loading from './Components/Loading';
import StarBackground from './Components/StarBackground';

const App = () => {

  const [shuffledCards, setShuffledCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [winner, setWinner] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(true); 

  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .map((card) => ({ ...card, id: Math.random() }))
      .sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
    setWinner(false); 
    setGameOver(false); 
    setLoading(false); 

  };

  const handleChoice = (card) => {
    if (!disabled) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  const backToDefault = (incrementTurn = true) => {
    setChoiceOne(null);
    setChoiceTwo(null);
    if (incrementTurn) {
      setTurns((prevTurns) => prevTurns + 1);
    }
    setDisabled(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true); 
      if (choiceOne.src === choiceTwo.src) {
        setShuffledCards((prevCards) =>
          prevCards.map((card) =>
            card.src === choiceOne.src
              ? { ...card, matched: true, highlight: true } 
              : card
          )
        );
  
        setTimeout(() => {
          setShuffledCards((prevCards) =>
            prevCards.map((card) =>
              card.highlight ? { ...card, highlight: false } : card
            )
          );
          backToDefault(false); 
        }, 1500); 
      } else {
        setTimeout(() => backToDefault(true), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);
  

  useEffect(() => {
    if (shuffledCards.length > 0) {
      const allMatched = shuffledCards.every((card) => card.matched);

      if (allMatched) {
        setWinner(true); 
        setDisabled(true); 
      } else if (turns >= 15) {
        setGameOver(true); 
        setDisabled(true); 
      }
    }
  }, [shuffledCards, turns]);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    setLoading(true); // Show loading screen initially
    setTimeout(() => {
      shuffleCards();
    }, 2000); // Simulate loading delay
  }, []);

  return (
    <div className="App">
      <StarBackground />
      {loading ? (
        <Loading />
      ) : (
        <>
         
          <Header turns={turns} onShuffle={shuffleCards} />
          {winner && (
            <>
              <h2>Congratulations! You've won the game!</h2>
              <TrophyIcon className="trophy-animation" />
            </>
          )}
          {gameOver && !winner && (
            <>
              <h2 >Game Over! Better luck next time 😢 Press "New game" to play again.</h2>
              <div id="tudo">
                <div className="gameover">
                  <p>GAME</p>
                  <p>OVER</p>
                </div>
              </div>
            </>
          )}
          {!winner && !gameOver && (
            <Grid
              cards={shuffledCards}
              choiceOne={choiceOne}
              choiceTwo={choiceTwo}
              disabled={disabled}
              handleChoice={handleChoice}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;




