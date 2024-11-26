# 🧠 Memory Game: Match the Cards!

Welcome to Memory Game, a fun, interactive challenge that will test your memory and speed! Try to match pairs of cards before time runs out or your turns expire. Can you remember where each card is hidden? Let’s find out!

## 📜 Table of Contents

- 🌟 [Introduction](#introduction) 
- 🕹️ [How to Play](#how-to-play)
- 🎨 [Features](#features)
- ⚙️ [Installation and setup](#installation-and-setup)
- 🤝 [Contributing](#contributing)
- 🌍 [Live Demo](#live-demo)
- 🧩 [Behind the Code](#behind-the-code)
- 🛠 [Code walkthrough](#code-walkthrough)

## 🌟 Introduction

**Memory Game** is a fun card-matching game built with React. Your goal? Match all pairs of cards before the time runs out or you exceed the maximum number of turns. With a beautiful cosmic theme and playful animations, this game will keep you hooked! ✨


## 🕹️ How to Play

1. Click on a card to flip it over.
2. Click on any two cards to reveal their images. Try to remember their locations! 🃏
3. Match Pairs: If the cards match, they stay flipped. If not, they’ll turn back after a short time ⏱️.
4. Time’s Ticking: Race against the 90-second clock. 🕰️
5. Limited Turns: Be strategic— you have only 15 turns to match all the cards! 🔢
6. The game ends when all cards are matched or when the timer runs out or you exceed the maximum number of turns.💥
7. Game Over: If time runs out or you hit the turn limit, the game’s over! But don’t worry, you can always play again. 🔄
8. Click "New Game" to start a new game.✨

## 🎨 Features

- **Card Flipping**: Click on a card to flip it over.🌌
- **Card Matching**: Match the cards by clicking on the same pair of cards.
- **Timer & Score**: The game ends when all cards are matched or when the timer runs out or you exceed the maximum number of turns. At you will be able to track your score.🏆
- **Restart Button**: Click "New Game" to start a new game.


## 🔧 Installation and setup

1. Clone the repository: `git clone https://github.com/MarahNatsheh/memory-game.git`
2. Navigate to the project directory: `cd memory-game`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

That's it! You're all set to play Memory Game.


## 🤝 Contributing

If you have any contributions, please feel free to reach out!
1. Fork the repository: `git clone https://github.com/MarahNatsheh/memory-game.git`
2. Create a new branch: `git checkout -b my-branch`
3. Make your changes and commit them: `git commit -m "Add feature"`
4. Push your changes: `git push origin my-branch`
5. Create a pull request: [here](https://github.com/MarahNatsheh/memory-game/pulls)

## 🌍 Live Demo

You can check out the live demo of the Memory Game [here](https://marahnatsheh.github.io/memory-game/).

## 🧩 Behind the Code

- **Frontend**: React
- **Backend**: Node.js
- **Database**: MongoDB
- **Deployment**: GitHub Pages
- **Testing**: Jest 

## 🛠 Code Walkthrough
1. **App Component**  
   The main logic of the game resides in the `App.js` file, which serves as the root component.

   **State Variables**  
   - **shuffledCards**: An array holding the shuffled deck of cards.
   - **turns**: Tracks the number of moves the player has made.
   - **choiceOne and choiceTwo**: Store the first and second cards selected by the player.
   - **disabled**: Prevents further clicks while the game processes card matches.
   - **winner and gameOver**: Represent the two end states of the game.
   - **loading**: Used for the introductory animation/loading screen.
   - **score**: Tracks the player's current score based on successful matches.
   - **timeLeft**: Controls the countdown timer.

   **Key Functions**  
   - **shuffleCards**  
     Shuffles the cards and resets all states for a new game.  
     Updates:  
     - Score (score = 0)  
     - Timer (timeLeft = 90)  
     - Game states (winner = false, gameOver = false).

   - **handleChoice**  
     Handles player clicks on cards.  
     Updates:  
     - **choiceOne** for the first click.  
     - **choiceTwo** for the second click.

   - **backToDefault**  
     Resets `choiceOne` and `choiceTwo` after processing the match or mismatch.

   **useEffect Hooks**  
   - **Match Checking**: When both choices are made, checks if they match.  
     Updates:  
     - Highlights matched cards.  
     - Increments the score.

   - **Game End Logic**: Monitors whether all cards are matched or if the player has exceeded the allowed moves.

   - **Timer Countdown**: Counts down from 90 seconds, and triggers game-over when time runs out.

2. **Header Component**  
   The Header component displays the title, the current move count, and the "New Game" button.

   **Props**  
   - **turns**: Displays the current move count.  
   - **onShuffle**: Resets the game by calling `shuffleCards` in the parent App component.

3. **Grid Component**  
   The Grid component renders the card layout dynamically.

   **Props**  
   - **cards**: The shuffled array of card objects.  
   - **choiceOne & choiceTwo**: Track the two selected cards.  
   - **handleChoice**: Triggers the logic for card selection.  
   - **disabled**: Prevents interaction while the game processes matches.

   **Key Features**  
   - Dynamically applies styles and animations based on the card states (matched, highlight).
   - Leverages conditional rendering for flipped cards.

4. **Timer and Score**  
   - **Timer**:  
     A circular SVG progress bar with `strokeDasharray` and `strokeDashoffset` dynamically linked to the `timeLeft` state.

   - **Score**:  
     A visually distinct circular display, showing the player's score.

5. **Loading Component**  
   A simple animated introduction screen that displays while the game is preparing the shuffled cards.

6. **Animations**  
   Smooth animations for:  
   - Flipping cards.  
   - Highlighting matches.  
   - The winning trophy.

7. **Game End States**  
   - **Victory**:  
     Displays a congratulatory message with an SVG trophy animation.  

   - **Game Over**:  
     Shows an encouraging "Game Over" message and prompts the user to try again.


## 🎉 Enjoy playing Memory Game!
Thank you for checking out my Memory Game. I hope you enjoy playing as much as I enjoyed building it.

