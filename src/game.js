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
    let enemyFighters = [];
    for (let i = 0; i < 3; i++) {
      enemyFighters.push(new EnemyFighter(this));
    }
    this.gameObjects = [this.ship, ...enemyFighters];

    new InputHandler(this.ship);
  }

  CreateProjectile(origin) {
    this.gameObjects.push(new Projectile(origin));
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
