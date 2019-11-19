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
    this.gameObjects = [this.ship];

    new InputHandler(this.ship);
  }

  CreateProjectile() {
    this.gameObjects.push(new Projectile(this));
  }

  Update(deltaTime) {
    this.gameObjects.forEach(object => object.Update(deltaTime));

    this.gameObjects = this.gameObjects.filter(
      object => !object.markedForDeletion
    );
  }

  Draw(ctx) {
    ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
    this.gameObjects.forEach(object => object.Draw(ctx));
  }
}
