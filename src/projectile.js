export default class Projectile {
  constructor(game) {
    this.image = document.getElementById("img_projectile");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.speed = -5;

    this.size = 5;
    this.position = {
      x: game.ship.position.x + game.ship.width / 2 - this.size / 2,
      y: game.ship.position.y - this.size - 1
    };
  }

  Update() {
    this.position.y += this.speed;
  }

  Draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
}
