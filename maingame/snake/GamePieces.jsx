import React, { useState, useEffect } from 'react';
import './gamepieces.css';

const GamePieces = ({ score, setScore, onGameOver }) => {
  const [snake, setSnake] = useState([
    { x: 10, y: 10 },
    { x: 10, y: 11 },
  ]);
  const [direction, setDirection] = useState('UP');
  const [food, setFood] = useState({ x: 15, y: 15 });

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [direction]);

  useEffect(() => {
    const gameInterval = setInterval(() => {
      moveSnake();
    }, 200);

    return () => clearInterval(gameInterval);
  }, [snake, direction]);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case 'UP':
        head.y -= 1;
        break;
      case 'DOWN':
        head.y += 1;
        break;
      case 'LEFT':
        head.x -= 1;
        break;
      case 'RIGHT':
        head.x += 1;
        break;
      default:
        break;
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setScore(score + 1);
      setFood({
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20),
      });
    } else {
      newSnake.pop();
    }

    if (checkCollision(head, newSnake)) {
      onGameOver('wall');
    } else {
      setSnake(newSnake);
    }
  };

  const checkCollision = (head, snake) => {
    if (head.x < 0 || head.y < 0 || head.x >= 20 || head.y >= 20) {
      return true;
    }

    for (let segment of snake) {
      if (segment.x === head.x && segment.y === head.y) {
        return true;
      }
    }

    return false;
  };

  return (
    <div className="game-board">
      {snake.map((segment, index) => (
        <div
          key={index}
          className="snake-segment"
          style={{
            left: `${segment.x * 20}px`,
            top: `${segment.y * 20}px`,
          }}
        ></div>
      ))}
      <div
        className="food"
        style={{
          left: `${food.x * 20}px`,
          top: `${food.y * 20}px`,
        }}
      ></div>
    </div>
  );
};

export default GamePieces;
