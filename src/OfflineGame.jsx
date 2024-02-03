import { useEffect, useState } from "react";
import styles from "./style/Game.module.css";
import Board from "./components/Board.jsx";
import { calculateWinner } from "./components/winner.js";
import { bot } from "./components/bot.js";
import { useLocation } from "react-router-dom";
import SidePanel from "./components/SidePanel.jsx";
import EndGame from "./components/EndGame.jsx";
import TimerGame from "./components/TimerGame.jsx";
import useCountdown from "./hooks/useCountdown.js";

export default function OfflineGame() {
  const { state } = useLocation();
  const playerChar = (state?.xIsNext ? "X" : "O") ?? "X";
  const botChar = playerChar === "X" ? "O" : "X";
  const [modalActive, setModalActive] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameResult, setGameResult] = useState("none");
  const { seconds, reset } = useCountdown({
    onDone: () => {
      setGameResult("defeat");
      setModalActive(true);
    },
    initialSeconds: +state?.rangeTime * 60,
  });

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (gameResult !== "none" || boardCopy[index]) return;

    boardCopy[index] = playerChar;
    setBoard(boardCopy);

    const winner = calculateWinner(boardCopy);
    setGameResult(winner);
    if (winner === "none") {
      setBoard(bot(boardCopy, botChar));
    }
  };

  const handleResetBoard = () => {
    reset();
    setBoard(Array(9).fill(null));
    setGameResult("none");
  };

  useEffect(() => {
    setGameResult(calculateWinner(board));
  }, [board]);

  useEffect(() => {
    if (gameResult !== "none") {
      setModalActive(true);
    }
  }, [gameResult]);

  useEffect(() => {
    handleResetBoard();
  }, []);

  const result = (gameResult) => {
    switch (gameResult) {
      case playerChar:
        return "win";
      case botChar:
        return "defeat";
      default:
        return gameResult;
    }
  };

  return (
    <div className={styles.wrapper}>
      {state?.rangeTime && <TimerGame seconds={seconds} />}
      <SidePanel />
      <Board squares={board} move={playerChar} click={handleClick} />
      <EndGame
        result={result(gameResult)}
        handleResetBoard={handleResetBoard}
        active={modalActive}
        setActive={setModalActive}
      />
    </div>
  );
}
