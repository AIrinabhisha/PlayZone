export default function PaddleHit(ballObj, paddleProps) {
    if (
      ballObj.x < paddleProps.x + paddleProps.width &&
      ballObj.x > paddleProps.x &&
      ballObj.y + ballObj.radius > paddleProps.y - paddleProps.height / 2 &&
      ballObj.y - ballObj.radius < paddleProps.y + paddleProps.height / 2
    ) {
      // Calculate where the ball hits the paddle
      let collidePoint = ballObj.x - (paddleProps.x + paddleProps.width / 2);
  
      // Normalize the values
      collidePoint = collidePoint / (paddleProps.width / 2);
  
      // Calculate the angle of the ball
      let angle = collidePoint * Math.PI / 3;
  
      // Adjust ball's direction based on the angle
      ballObj.dx = ballObj.speed * Math.sin(angle);
      ballObj.dy = -ballObj.speed * Math.cos(angle);
    }
  }
  