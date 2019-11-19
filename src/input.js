export default class InputHandler {
  constructor(ship) {
    document.addEventListener("keydown", event => {
      switch (event.key) {
        case "ArrowUp": //up
          ship.MoveUp();
          break;
        case "ArrowLeft": //left
          ship.MoveLeft();
          break;
        case "ArrowDown": //down
          ship.MoveDown();
          break;
        case "ArrowRight": //right
          ship.MoveRight();
          break;
        default:
      }
    });
    document.addEventListener("keyup", event => {
      switch (event.key) {
        case "ArrowUp": //up
          if (ship.verticalSpeed < 0) ship.StopVertical();
          break;
        case "ArrowLeft": //left
          if (ship.horizontalSpeed < 0) ship.StopHorizontal();
          break;
        case "ArrowDown": //down
          if (ship.verticalSpeed > 0) ship.StopVertical();
          break;
        case "ArrowRight": //right
          if (ship.horizontalSpeed > 0) ship.StopHorizontal();
          break;
        default:
      }
    });
  }
}
