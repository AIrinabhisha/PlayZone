export function BallMovement(ctx, ballObj) {
    // Create a new Ball instance
    let ball = new Ball(ballObj.x, ballObj.y, ballObj.radius);
  
    // Draw the ball on the canvas
    ball.draw(ctx);
  
    // Update ball position
    ballObj.x += ballObj.dx;
    ballObj.y += ballObj.dy;
  }
  
  class Ball {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  
    draw(ctx) {
      // Draw the ball
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "black";
      ctx.stroke();
    }
  }
  