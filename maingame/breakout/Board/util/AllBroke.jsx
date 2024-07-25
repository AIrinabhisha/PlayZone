import data from "../../data/Data"; // Adjust the import path as per your project structure
import ResetBall from "./ResetBall";

export default function AllBroken(bricks, player, canvas, ballObj) {
  let { brickObj, paddleProps } = data;

  let total = 0;
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i].broke === true) {
      total++;
    }
  }

  if (total === bricks.length) {
    player.level++;
    ResetBall(ballObj, canvas, paddleProps);
    brickObj.y = 50; // Adjust brickObj properties as per your game logic
  }
}
