import Ship from "/src/ship";
import InputHandler from "/src/input";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 500;
const GAME_HEIGHT = 600;

let ship = new Ship(GAME_WIDTH, GAME_HEIGHT);

new InputHandler();

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  ship.move(deltaTime);
  ship.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
