export default function WallCollision(ballObj, canvas, player, paddleProps) {
    if (ballObj.y + ballObj.radius > canvas.height) {
      // Ball hits the bottom wall
      player.lives--;
      if (player.lives > 0) {
        // Reset ball position above the paddle
        ballObj.x = paddleProps.x;
        ballObj.y = paddleProps.y - 30;
        // Randomize ball direction
        ballObj.dx = 6 * (Math.random() * 2 - 1);
        ballObj.dy = -6;
      } else {
        // Game over scenario
        alert("Game Over! Press OK to restart.");
        // Reset player lives, level, score
        player.lives = 5;
        player.level = 1;
        player.score = 0;
        // Reset ball position above the paddle
        ballObj.x = paddleProps.x;
        ballObj.y = paddleProps.y - 30;
        // Randomize ball direction
        ballObj.dx = 6 * (Math.random() * 2 - 1);
        ballObj.dy = -6;
      }
    }
  
    if (ballObj.y - ballObj.radius < 0) {
      // Ball hits the top wall
      ballObj.dy = Math.abs(ballObj.dy); // Reverse y direction
    }
  
    if (ballObj.x + ballObj.radius > canvas.width || ballObj.x - ballObj.radius < 0) {
      // Ball hits the side walls
      ballObj.dx *= -1; // Reverse x direction
    }
  }
  