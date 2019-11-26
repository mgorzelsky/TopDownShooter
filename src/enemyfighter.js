export default class EnemyFighter {
  constructor(game) {
    this.image = document.getElementById("img_enemyFighter");

    this.game = game;

    this.angle = 0;
    this.shipSlope = {
      x: 0,
      y: 0
    }
    this.width = 39;
    this.height = 27;
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight / 2 - this.height / 2
      // x: Math.floor(Math.random() * game.gameWidth),
      // y: Math.floor(Math.random() * (game.gameHeight / 2))
    };
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2
    }

    this.maxSpeed = 3;
    this.speed = {
      x: 0,
      y: 0
    }

    this.markedForDeletion = false;

    this.projectileSpeed = 70;
    this.fireVector = {
      x: 0,
      y: 70
    }
    //find the origin point of the projectile in the default position (facing right), offset to draw from the top right corner
    this.projectileOriginPoint = {
      x: this.position.x + this.width + 3 - 5 / 2,
      y: this.position.y + this.height / 2 - 5 / 2
    };

    this.fireRate = 50;
    this.count = 1;
  }

  TrackPlayer() {
    this.fireVector.x = this.game.ship.center.x - this.projectileOriginPoint.x; // a
    this.fireVector.y = this.game.ship.center.y - this.projectileOriginPoint.y; // b

    let magnitude = Math.sqrt(Math.pow(this.fireVector.x, 2) + Math.pow(this.fireVector.y, 2)); // c

    // angle B
    //Calculate angle from enemy fighter to player in radians
    this.angle = this.CalculateOrientation();

    //Normalized values so that projectiles move the same speed regardless of distance to the target.
    this.fireVector.x = (this.fireVector.x / magnitude) * this.projectileSpeed;
    this.fireVector.y = (this.fireVector.y / magnitude) * this.projectileSpeed;
  }

  CalculateOrientation() {
    let sideX = this.game.ship.center.x - this.center.x; // a
    let sideY = this.game.ship.center.y - this.center.y; // b
    let sideC = Math.sqrt(Math.pow(sideX, 2) + Math.pow(sideY, 2)); // c
    this.shipSlope.x = sideX / sideC;
    this.shipSlope.y = sideY / sideC;
    //TOP LEFT
    if (this.game.ship.center.x < this.center.x && this.game.ship.center.y < this.center.y) {
      return Math.acos((sideC ** 2 + sideX ** 2 - sideY ** 2) / Math.abs((2 * sideC * sideX)));
    }
    //TOP RIGHT
    else if (this.game.ship.center.x > this.center.x && this.game.ship.center.y < this.center.y) {
      return Math.acos((sideC ** 2 + sideX ** 2 - sideY ** 2) / -(2 * sideC * sideX));
    }
    //positive y
    else {
      return Math.acos((sideC ** 2 + sideX ** 2 - sideY ** 2) / (2 * sideC * sideX));
    }
  }

  Fire() {
    this.game.CreateProjectile(this);
  }

  Draw(ctx) {
    ctx.translate(this.center.x, this.center.y);
    //TOP
    if (this.game.ship.center.y < this.center.y) {
      ctx.rotate(this.angle + Math.PI);
      ctx.drawImage(this.image, -(this.width / 2), -(this.height / 2));
      ctx.rotate(-(this.angle + Math.PI));
    }
    //BOTTOM
    else {
      ctx.rotate(this.angle);
      ctx.drawImage(this.image, -(this.width / 2), -(this.height / 2));
      ctx.rotate(-this.angle);
    }
    ctx.translate(-this.center.x, -this.center.y);
  }

  Update(deltaTime) {
    this.TrackPlayer();
    this.position.x += this.speed.x / deltaTime;
    this.position.y += this.speed.y / deltaTime;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2
    }

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.game.gameWidth)
      this.position.x = this.game.gameWidth - this.width;
    if (this.position.y < 0) this.position.y = 0;
    if (this.position.y + this.height > this.game.gameHeight)
      this.position.y = this.game.gameHeight - this.height;

    this.projectileOriginPoint = {
      x: (((this.position.x + this.width) + (this.position.x + this.width)) / 2) + this.shipSlope.x,
      y: ((this.position.y + (this.position.y + this.height))) / 2 + this.shipSlope.y
    };

    this.count++;
    if (this.count === this.fireRate) {
      this.count = 1;
      this.Fire();
    }
  }
}
