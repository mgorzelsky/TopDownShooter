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
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2
    }
    this.maxSpeed = 35;
    this.horizontalSpeed = 0;
    this.verticalSpeed = 0;

    //this.projectileSpeed = -70;
    this.fireVector = {
      x: 0,
      y: -70
    }
    this.projectileOriginPoint = {
      x: this.position.x + this.width / 2,
      y: this.position.y - 1
    };

    this.fireRate = 15;
    this.count = 1;
    this.isFiring = false;
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
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2
    }

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
    if (this.position.y < 0) this.position.y = 0;
    if (this.position.y + this.height > this.gameHeight)
      this.position.y = this.gameHeight - this.height;

    this.projectileOriginPoint = {
      x: this.position.x + this.width / 2,
      y: this.position.y - 1
    };
    this.count++;
    if (this.isFiring && this.count === this.fireRate) {
      this.count = 1;
      this.Fire();
    }
    if (this.count === this.fireRate) {
      this.count = 1;
    }
  }
}
