export default function Brick(level, bricks, canvas, brickObj) {
    if (bricks.length === 0) {
      let newBricks = [];
      let row = Math.floor(Math.random() * 5) + 1; // Random number of rows (1 to 5)
      let column = Math.floor(Math.random() * 5) + 1; // Random number of columns (1 to 5)
      let brickWidth = brickObj.width;
      let brickHeight = brickObj.height;
  
      for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
          newBricks.push({
            x: c * (brickWidth + brickObj.padding) + brickObj.offsetLeft,
            y: r * (brickHeight + brickObj.padding) + brickObj.offsetTop,
            broke: false,
            draw(ctx) {
              if (!this.broke) {
                ctx.beginPath();
                ctx.rect(this.x, this.y, brickWidth, brickHeight);
                ctx.fillStyle = "blue";
                ctx.fill();
                ctx.closePath();
              }
            },
          });
        }
      }
      return newBricks;
    } else {
      return bricks;
    }
  }
  