import React, { useState } from "react";
import "./Game.css";
import { Link } from "react-router-dom";

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const handleUserChoice = (choice) => {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = determineWinner(choice, computerChoice);

    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setResult(result);
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return "It's a tie!";
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      return "You win!";
    }
    return "Computer wins!";
  };

  const playAgainHandler = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
  };

  return (
    <div className="gameSection">
      {!result ? <h1>Chose Any Option</h1> : undefined}
      {!result ? (
        <div className="d-flex">
          <div onClick={() => handleUserChoice("rock")} className="gameIcon">
            <img src="/Images/rock.webp" alt="" className="rock " />
          </div>
          <div onClick={() => handleUserChoice("paper")} className="gameIcon">
            <img src="/Images/paper.webp" alt="" className="paper" />
          </div>
          <div onClick={() => handleUserChoice("scissors")} className="gameIcon">
            <img src="/Images/scissor.webp" alt="" className="scissor" />
          </div>
        </div>
      ) : undefined}
      <div className="">
        {userChoice && (
          <div className="d-flex flex-column">
            <div>
              {userChoice === "rock" ? (
                <img src="/Images/rock.webp" alt="" className="rock" />
              ) : userChoice === "paper" ? (
                <img src="/Images/paper.webp" alt="" className="paper" />
              ) : (
                <img src="/Images/scissor.webp" alt="" className="scissor" />
              )}
            </div>
            <h3> Your choice</h3>
          </div>
        )}
        {computerChoice && (
          <div>
            <div>
              {computerChoice === "rock" ? (
                <img src="/Images/rock.webp" alt="" className="rock" />
              ) : computerChoice === "paper" ? (
                <img src="/Images/paper.webp" alt="" className="paper" />
              ) : (
                <img src="/Images/scissor.webp" alt="" className="scissor" />
              )}
            </div>
            <h3>Computer's choice</h3>
          </div>
        )}
      </div>
      {result && (
        <div>
          <h1>{result}</h1>
          <div>
            <button onClick={playAgainHandler}> Play Again</button>
            <Link to="/"> <button>visit portfolio</button> </Link>
          </div>
        </div>
      )}
      <button>Rules</button>
      {!result ? (
        <button>
          Busy now? <Link to="/"> Go to portfolio</Link>
        </button>
      ) : undefined}
    </div>
  );
};

export default Game;
