export default class Ship {
  constructor(game) {
    this.image = document.getElementById("img_playerShip");

    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 27;
    this.height = 39;
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 20
    };
    this.maxSpeed = 30;
    this.horizontalSpeed = 0;
    this.verticalSpeed = 0;

    this.projectileSpeed = -70;
  }

  MoveUp() {
    this.verticalSpeed = -this.maxSpeed;
  }

  MoveLeft() {
    this.horizontalSpeed = -this.maxSpeed;
  }

  MoveDown() {
    this.verticalSpeed = this.maxSpeed;
  }

  MoveRight() {
    this.horizontalSpeed = this.maxSpeed;
  }

  StopVertical() {
    this.verticalSpeed = 0;
  }

  StopHorizontal() {
    this.horizontalSpeed = 0;
  }

  Fire() {
    this.game.CreateProjectile(this);
  }

  Draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  Update(deltaTime) {
    this.position.x += this.horizontalSpeed / deltaTime;
    this.position.y += this.verticalSpeed / deltaTime;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
    if (this.position.y < 0) this.position.y = 0;
    if (this.position.y + this.height > this.gameHeight)
      this.position.y = this.gameHeight - this.height;
  }
}
