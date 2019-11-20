export default class Ship {
  constructor(game) {
    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 15;
    this.height = 40;
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 20
    };
    this.maxSpeed = 3;
    this.horizontalSpeed = 0;
    this.verticalSpeed = 0;
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
    this.game.CreateProjectile();
  }

  Draw(ctx) {
    ctx.fillStyle = "#000";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  Update(deltaTime) {
    this.position.x += this.horizontalSpeed;
    this.position.y += this.verticalSpeed;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
    if (this.position.y < 0) this.position.y = 0;
    if (this.position.y + this.height > this.gameHeight)
      this.position.y = this.gameHeight - this.height;
  }
}
