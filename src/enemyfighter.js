export default class EnemyFighter {
  constructor(game) {
    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 15;
    this.height = 40;
    this.position = {
      x: Math.floor(Math.random() * game.gameWidth),
      y: Math.floor(Math.random() * (game.gameHeight / 2))
    };
    this.maxSpeed = 3;
    this.horizontalSpeed = 0;
    this.verticalSpeed = 0;
    this.markedForDeletion = false;

    this.projectileSpeed = 6;
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
    ctx.fillStyle = "#d75a0e";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
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
