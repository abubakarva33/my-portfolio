import React, { useState } from "react";
import "./Game.css";
import { Link } from "react-router-dom";

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  const handleUserChoice = (choice) => {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = determineWinner(choice, computerChoice);

    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setResult(result);
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return "OPPS! MATCH TIE";
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      setScore((prevScore) => prevScore + 1);
      return "YOU WIN!";
    }
    return "YOU LOSE!";
  };

  const playAgainHandler = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
  };

  return (
    <div className="gameSection">
      <div className="scoreContainer">
        <div className="scoreBoard">
          <div>
            <p className="my-0 p-0 lh-1">FUN WITH</p>
            <h5 className="my-0 p-0 lh-1">ROCK</h5>
            <h5 className="my-0 p-0 lh-1">PAPER</h5>
            <h5 className="my-0 p-0 lh-1">SCISSORS</h5>
          </div>
          <div className="d-flex align-items-center justify-content-center flex-column">
            <h5 className="my-0 p-0">SCORE</h5>
            <h1 className="my-0 p-0">{score}</h1>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
          {!result ? <h2 className="my-5">PICK ANY OPTION</h2> : undefined}
          {!result ? (
            <div className="gameImages">
              <div onClick={() => handleUserChoice("rock")} className="gameIcon">
                <img src="/Images/rock.webp" alt="" className="rock " />
              </div>
              <div onClick={() => handleUserChoice("paper")} className="gameIcon">
                <img src="/Images/paper.webp" alt="" className="paper" />
              </div>
              <div onClick={() => handleUserChoice("scissors")} className="gameIcon lastImg">
                <img src="/Images/scissor.webp" alt="" className="scissor" />
              </div>
            </div>
          ) : undefined}
          <div className="d-flex mt-5">
            {userChoice && (
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="gameIcon">
                  {userChoice === "rock" ? (
                    <img src="/Images/rock.webp" alt="" className="rock" />
                  ) : userChoice === "paper" ? (
                    <img src="/Images/paper.webp" alt="" className="rock" />
                  ) : (
                    <img src="/Images/scissor.webp" alt="" className="rock" />
                  )}
                </div>
                <h5 className="gameIconName mt-3"> YOU PICKED</h5>
              </div>
            )}
            {computerChoice && (
              <div className="d-flex align-items-center justify-content-center flex-column">
                <div className="gameIcon lastImg">
                  {computerChoice === "rock" ? (
                    <img src="/Images/rock.webp" alt="" className="rock" />
                  ) : computerChoice === "paper" ? (
                    <img src="/Images/paper.webp" alt="" className="rock" />
                  ) : (
                    <img src="/Images/scissor.webp" alt="" className="rock" />
                  )}
                </div>
                <h5 className="gameIconName mt-3 lastImg">COMPUTER PICKED</h5>
              </div>
            )}
          </div>
          {result && (
            <div className="d-flex align-items-center justify-content-center flex-column w-100">
              <h1 className="my-4">{result}</h1>
              <div className="gameBtn gameBtnGroup ">
                <button onClick={playAgainHandler} className="linkBtn playAgainBtn">
                  PLAY AGAIN
                </button>
                <button className="linkBtn ">
                  <Link to="/" className="portfolioBtn">
                    BROWSE <span className="browseBtn"> PORTFOLIO</span>
                  </Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center flex-column">
        {!result ? (
          <button className="linkBtn">
            {" "}
            <Link to="/">
              Busy Now?
              <span className="browseBtn">
                <b> Browse Portfolio</b>
              </span>
            </Link>
          </button>
        ) : undefined}
        <button className="rulesBtn"> RULES </button>
      </div>
    </div>
  );
};

export default Game;
