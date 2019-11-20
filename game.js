import Ship from "./ship";
import InputHandler from "./input";
import Projectile from "./projectile";
import EnemyFighter from "./enemyfighter";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  Start() {
    this.ship = new Ship(this);
    this.enemyFighter = new EnemyFighter(this);
    this.gameObjects = [this.ship, this.enemyFighter];

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
