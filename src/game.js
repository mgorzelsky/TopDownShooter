import Ship from "/src/ship";
import InputHandler from "/src/input";
import Projectile from "/src/projectile";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  Start() {
    this.ship = new Ship(this);
    this.projectile = new Projectile(this);
    this.gameObjects = [this.ship, this.projectile];

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
