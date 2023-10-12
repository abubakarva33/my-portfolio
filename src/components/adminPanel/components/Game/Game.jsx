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

  const playAgainHandler =()=>{
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
  }

  return (
    <div>
      <h1>Chose Any Option</h1>
      <div className="gameIcon">
        <div onClick={() => handleUserChoice("rock")}>
          <img src="/public/Images/rock.png" alt="" className="rock" />
        </div>
        <div onClick={() => handleUserChoice("paper")}>
          <img src="/public/Images/paper.png" alt="" className="paper" />
        </div>
        <div onClick={() => handleUserChoice("scissors")}>
          <img src="/public/Images/scissor.png" alt="" className="scissor" />
        </div>
      </div>
      <div className="gameIcon">
        {userChoice && (
          <div className="d-flex flex-column">
            <div>
              {userChoice === "rock" ? (
                <img src="/public/Images/rock.png" alt="" className="rock" />
              ) : userChoice === "paper" ? (
                <img src="/public/Images/paper.png" alt="" className="paper" />
              ) : (
                <img src="/public/Images/scissor.png" alt="" className="scissor" />
              )}
            </div>
            <h3> Your choice</h3>
          </div>
        )}
        {computerChoice && (
          <div>
            <div>
              {computerChoice === "rock" ? (
                <img src="/public/Images/rock.png" alt="" className="rock" />
              ) : computerChoice === "paper" ? (
                <img src="/public/Images/paper.png" alt="" className="paper" />
              ) : (
                <img src="/public/Images/scissor.png" alt="" className="scissor" />
              )}
            </div>
            <h3>Computer's choice</h3>
          </div>
        )}
      </div>
      {result && (
        <div>
          {" "}
          <h1>{result}</h1>
          <div>
          <button onClick={playAgainHandler}> Play Again</button>
          <button>visit portfolio</button>
          </div>
        </div>
      )}
      <button>Rules</button>
      {!result? <div> Busy now? <Link to="/"> Go to portfolio</Link></div>: undefined}
    </div>
  );
};

export default Game;
