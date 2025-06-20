import { useState } from "react";
import "./Game.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "react-bootstrap/Modal";
import { useGetProfileQuery, useGetServicesQuery, useGetWorksQuery } from "../../redux/api";

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);

  //! do not remove this function //
  const { isSuccess: profileSuccess } = useGetProfileQuery();
  const { isSuccess: workSuccess } = useGetWorksQuery(undefined, {
    skip: !profileSuccess,
  });
  useGetServicesQuery(undefined, {
    skip: !workSuccess,
  });
   //! do not remove this function //

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const rulesHandler = () => {
    handleShow();
  };

  return (
    <div>
      <div className="gameSection">
        <div className="scoreBoard">
          <div>
            <p className="my-0 p-0 lh-1">FUN WITH</p>
            <p className="my-0 p-0 lh-1">ROCK</p>
            <p className="my-0 p-0 lh-1">PAPER</p>
            <p className="my-0 p-0 lh-1">SCISSORS</p>
          </div>
          <div className="d-flex align-items-center justify-content-center flex-column">
            <p className="my-0 p-0">SCORE</p>
            <h1 className="my-0 p-0">{score}</h1>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
          {!result ? <h2 className="my-5">PICK ANY OPTION</h2> : undefined}
          {!result ? (
            <div className="gameImages">
              <div onClick={() => handleUserChoice("rock")} className="gameIcon">
                <motion.img
                  src="/Images/rock.webp"
                  alt=""
                  className="rock "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  exit={{ opacity: 0 }}
                />
              </div>
              <div onClick={() => handleUserChoice("paper")} className="gameIcon">
                <motion.img
                  src="/Images/paper.webp"
                  alt=""
                  className="paper"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  exit={{ opacity: 0 }}
                />
              </div>
              <div onClick={() => handleUserChoice("scissors")} className="gameIcon lastImg">
                <motion.img
                  src="/Images/scissor.webp"
                  alt=""
                  className="scissor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  exit={{ opacity: 0 }}
                />
              </div>
            </div>
          ) : undefined}
          <div className="d-flex mt-5">
            {userChoice && (
              <motion.div
                className="d-flex align-items-center justify-content-center flex-column"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                exit={{ opacity: 0 }}
              >
                <div className="gameIcon">
                  {userChoice === "rock" ? (
                    <motion.img
                      src="/Images/rock.webp"
                      alt=""
                      className="rock"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      exit={{ opacity: 0 }}
                    />
                  ) : userChoice === "paper" ? (
                    <motion.img
                      src="/Images/paper.webp"
                      alt=""
                      className="rock"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      exit={{ opacity: 0 }}
                    />
                  ) : (
                    <motion.img
                      src="/Images/scissor.webp"
                      alt=""
                      className="rock"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </div>
                <h3 className="gameIconName mt-3"> YOU PICKED</h3>
              </motion.div>
            )}
            {computerChoice && (
              <motion.div
                className="d-flex align-items-center justify-content-center flex-column"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                exit={{ opacity: 0 }}
              >
                <div className="gameIcon lastImg">
                  {computerChoice === "rock" ? (
                    <motion.img
                      src="/Images/rock.webp"
                      alt=""
                      className="rock"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      exit={{ opacity: 0 }}
                    />
                  ) : computerChoice === "paper" ? (
                    <motion.img
                      src="/Images/paper.webp"
                      alt=""
                      className="rock"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      exit={{ opacity: 0 }}
                    />
                  ) : (
                    <motion.img
                      src="/Images/scissor.webp"
                      alt=""
                      className="rock"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </div>
                <h3 className="gameIconName mt-3 lastImg">COMPUTER PICKED</h3>
              </motion.div>
            )}
          </div>
          {result && (
            <motion.div
              className="d-flex align-items-center justify-content-center flex-column w-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
              exit={{ opacity: 0 }}
            >
              <h1 className="my-4">{result}</h1>
              <div className="gameBtn gameBtnGroup">
                <button onClick={playAgainHandler} className="navlinkA linkBtn playAgainBtn">
                  PLAY AGAIN
                </button>
                <button className="navlinkA linkBtn">
                  <Link to="/main/home" className="portfolioBtn">
                    BROWSE <span className="browseBtn"> PORTFOLIO</span>
                  </Link>
                </button>
              </div>
            </motion.div>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column">
          {!result ? (
            <button className="navlinkA linkBtn ">
              <Link to="/main/home">
                Busy Now?
                <span className="browseBtn">
                  <b> Browse Portfolio</b>
                </span>
              </Link>
            </button>
          ) : undefined}
          <button className="rulesBtn" onClick={rulesHandler}>
            RULES
          </button>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          fullscreen={"lg-down md-down sm-down "}
          className="bg-transparent"
        >
          <Modal.Header closeButton>
            <Modal.Title>RULES FOR GAME</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className=" d-flex align-items-center justify-content-center flex-column">
              <div className="modalBody align-items-center justify-content-center">
                <div className="gameIcon">
                  <motion.img
                    src="/Images/paper.webp"
                    alt=""
                    className="rock "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    exit={{ opacity: 0 }}
                  />
                </div>

                <div className="rotateItem0">
                  <img
                    src="/Images/arrow.webp"
                    alt=""
                    className="arrow1"
                    style={{ rotate: "180deg" }}
                  />
                  <p>BEATS</p>
                </div>
                <div className="gameIcon">
                  <motion.img
                    src="/Images/scissor.webp"
                    alt=""
                    className="paper"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    exit={{ opacity: 0 }}
                  />
                </div>
              </div>
              <div className="d-flex ">
                <div className="rotateItem1">
                  <img src="/Images/arrow.webp" alt="" className="arrow1" />
                  <p>BEATS</p>
                </div>
                <div className="gameIcon lastImg ruleImg3">
                  <motion.img
                    src="/Images/rock.webp"
                    alt=""
                    className="scissor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    exit={{ opacity: 0 }}
                  />
                </div>
                <div className="rotateItem2">
                  <img src="/Images/arrow.webp" alt="" className="arrow1" />
                  <p>BEATS</p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Game;
