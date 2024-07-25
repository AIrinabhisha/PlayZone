export default function BrickCollision(circle, rect) {
    var distX = Math.abs(circle.x - rect.x - rect.width / 2);
    var distY = Math.abs(circle.y - rect.y - rect.height / 2);
  
    if (distX > rect.width / 2 + circle.radius) {
      return {
        hit: false,
      };
    }
    if (distY > rect.height / 2 + circle.radius) {
      return {
        hit: false,
      };
    }
  
    if (distX <= rect.width / 2) {
      return {
        hit: true,
        axis: "Y",
      };
    }
    if (distY <= rect.height / 2) {
      return {
        hit: true,
        axis: "X",
      };
    }
  
    // Check for corner collisions
    var dx = distX - rect.width / 2;
    var dy = distY - rect.height / 2;
    return {
      hit: dx * dx + dy * dy <= circle.radius * circle.radius,
      axis: "X", // Default axis, change as necessary based on your game's logic
    };
  }
  