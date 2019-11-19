export default class Ship {
    constructor(gameWidth, gameHeight) {
      this.width = 15;
      this.height = 40;
      this.position = {
        x: gameWidth / 2 - this.width / 2,
        y: gameHeight - this.height - 20
      };
    }
  
    draw(ctx) {
      ctx.fillStyle = "#d75a0e";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  
    move(deltaTime) {
      if (!deltaTime) return;
    }
  }
  