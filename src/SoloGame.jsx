import { useEffect, useState } from "react";
import styles from "./style/Game.module.css";
import Board from "./components/Board.jsx";
import { calculateWinner } from "./components/winner.js";
import SidePanel from "./components/SidePanel.jsx";
import EndGame from "./components/EndGame.jsx";
import MoveIndicator from "./components/MoveIndicator.jsx";
import RetryGame from "./components/RetryGame.jsx";
import { useTranslation } from "react-i18next";

export default function SoloGame() {
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameResult, setGameResult] = useState("none");

  // X - blue, O - red
  const [move, setMove] = useState("X");

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (gameResult !== "none" || boardCopy[index]) return;

    boardCopy[index] = move;
    setMove(move === "X" ? "O" : "X");
    setBoard(boardCopy);
  };

  useEffect(() => {
    const result = calculateWinner(board);
    setGameResult(result);
    if (result !== "none") {
      setModalActive(true);
    }
  }, [board]);

  const handleResetBoard = () => {
    setMove("X");
    setBoard(Array(9).fill(null));
    setGameResult("none");
  };

  useEffect(() => {
    handleResetBoard();
  }, []);

  const result = (gameResult) => {
    switch (gameResult) {
      case "draw":
        return "draw";
      case "X":
        return "crosses";
      case "O":
        return "zeroes";
    }
  };

  return (
    <div className={styles.wrapper}>
      
      <Board squares={board} move={move} click={handleClick} />
      <SidePanel />
      <MoveIndicator move={move} />
      <EndGame
        result={result(gameResult)}
        handleResetBoard={handleResetBoard}
        active={modalActive}
        setActive={setModalActive}
      />
    </div>
  );
}
