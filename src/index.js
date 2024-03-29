import Game from "./game.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 700;
const GAME_HEIGHT = 700;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.Start();

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  game.Update(deltaTime);
  game.Draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
