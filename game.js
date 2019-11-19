import Ship from "/src/ship";
import InputHandler from "/src/input";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  Start() {
    this.ship = new Ship(this);

    this.gameObjects = [this.ship];

    new InputHandler(this.ship);
  }

  Update(deltaTime) {
    this.gameObjects.forEach(object => object.Update(deltaTime));
  }

  Draw(ctx) {
    ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
    this.gameObjects.forEach(object => object.Draw(ctx));
  }
}
