import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Grid from './Components/Grid';
import { cardImages } from './Components/Images';
import { ReactComponent as TrophyIcon } from './trophy-animation.svg';
import Loading from './Components/Loading';
import StarBackground from './Components/StarBackground';
import './App.css';
import './Animations.css';

const App = () => {

  
  const [shuffledCards, setShuffledCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [winner, setWinner] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(true); 
  const [score, setScore] = useState(0); 
  const [timeLeft, setTimeLeft] = useState(90); 
  const progress = (timeLeft / 90) * 100; 

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
    setScore(0); 
    setTimeLeft(90);
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
        setScore((prevScore) => prevScore + 1); 
        setTimeout(() => {
          setShuffledCards((prevCards) =>
            prevCards.map((card) =>
              card.highlight ? { ...card, highlight: false } : card
            )
          );
          backToDefault(false); 
        }, 1500);
      } else {
        setTimeout(() => {
          backToDefault(true); 
        }, 1000); 
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
    setLoading(true); 
    setTimeout(() => {
      shuffleCards();
    }, 2000); 
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !winner && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
  
      return () => clearInterval(timer); 
    } else if (timeLeft === 0) {
      setGameOver(true); 
      setDisabled(true);
    }
  }, [timeLeft, winner, gameOver]);
  
return (
<div className="App">
  <StarBackground />
  {loading ? (
    <Loading />
  ) : (
    <>
      <Header turns={turns} onShuffle={shuffleCards} />
      <div className="main-container">
        {/* Timer */}
        <div className="timer">
          <svg className="progress-circle" viewBox="0 0 36 36">
            <path
              className="progress-circle-bg"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="progress-circle-bar"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              strokeDasharray="100"
              strokeDashoffset={100 - progress}
            />
          </svg>
          <div className="timer-text">
            <h3>{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</h3>
          </div>
        </div>
          {!winner && !gameOver ? (
            <Grid
              cards={shuffledCards}
              choiceOne={choiceOne}
              choiceTwo={choiceTwo}
              disabled={disabled}
              handleChoice={handleChoice}
            />
          ) : null}
        <div className="score">
          <div className="score-circle">
            <h3>{score}</h3>
          </div>
        </div>
      </div>
      {gameOver && !winner && (
        <>
          <h2>Game Over! Better luck next time 😢 Press "New game" to play again.</h2>
          <div id="tudo">
            <div className="gameover">
              <p>GAME</p>
              <p>OVER</p>
            </div>
          </div>
        </>
      )}
      {winner && (
        <>
          <h2>Congratulations! You've won the game!</h2>
          <TrophyIcon className="trophy-animation" />
        </>
      )}
    </>
  )}
</div>
); 
};

export default App;




