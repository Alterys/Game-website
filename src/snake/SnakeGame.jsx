import React, { useState, useEffect } from "react";
import styles from "./SnakeGame.module.css";
import SnakeSegment from "./SnakeSegment";
import Food from "./Food";
import Modal from "./Modal";
import SidePanel from "../components/SidePanel"

const generateFood = () => {
  const x = Math.floor(Math.random() * 20);
  const y = Math.floor(Math.random() * 20);
  return { x, y };
};

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 5, y: 5 }]);
  const [food, setFood] = useState(generateFood());
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameOver) {
      const handleKeyPress = (e) => {
        e.preventDefault();
        switch (e.key) {
          case "ArrowUp":
          case "w":
          case "ц":
            setDirection("UP");
            break;
          case "ArrowDown":
          case "s":
          case "ы":
            setDirection("DOWN");
            break;
          case "ArrowLeft":
          case "a":
          case "ф":
            setDirection("LEFT");
            break;
          case "ArrowRight":
          case "d":
          case "в":
            setDirection("RIGHT");
            break;
          default:
            break;
        }
      };

      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [gameOver]);

  useEffect(() => {
    if (!gameOver) {
      const moveSnake = () => {
        const newSnake = [...snake];
        const head = { ...newSnake[0] };

        switch (direction) {
          case "UP":
            head.y -= 1;
            break;
          case "DOWN":
            head.y += 1;
            break;
          case "LEFT":
            head.x -= 1;
            break;
          case "RIGHT":
            head.x += 1;
            break;
          default:
            break;
        }

        if (
          head.x < 0 ||
          head.x >= 20 ||
          head.y < 0 ||
          head.y >= 20 ||
          checkCollisionWithSelf(newSnake, head)
        ) {
          setGameOver(true);
          return;
        }

        newSnake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        setSnake(newSnake);
      };

      const checkCollisionWithSelf = (snakeArray, head) => {
        return snakeArray.slice(1).some(
          (segment) => segment.x === head.x && segment.y === head.y
        );
      };

      const gameInterval = setInterval(moveSnake, 200);
      return () => {
        clearInterval(gameInterval);
      };
    }
  }, [snake, direction, food, gameOver]);

  const handleRestart = () => {
    setSnake([{ x: 5, y: 5 }]);
    setFood(generateFood());
    setDirection("RIGHT");
    setGameOver(false);
  };

  return (
    <div>
      <SidePanel />
      <div className={styles.grid}>
        {snake.map((segment, index) => (
          <SnakeSegment key={index} x={segment.x} y={segment.y} />
        ))}
        <Food x={food.x} y={food.y} />
      </div>
      {gameOver && <Modal onRestart={handleRestart} />}
    </div>
  );
};

export default SnakeGame;