import React, { useState } from 'react';
import "./Game.css";

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleUserChoice = (choice) => {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = determineWinner(choice, computerChoice);

    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setResult(result);
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return 'It\'s a tie!';
    if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'rock')
    ) {
      return 'You win!';
    }
    return 'Computer wins!';
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <div>
        <button onClick={() => handleUserChoice('rock')}>Rock</button>
        <button onClick={() => handleUserChoice('paper')}>Paper</button>
        <button onClick={() => handleUserChoice('scissors')}>Scissors</button>
      </div>
      <div>
        {userChoice && <p>Your choice: {userChoice}</p>}
        {computerChoice && <p>Computer's choice: {computerChoice}</p>}
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default Game;
