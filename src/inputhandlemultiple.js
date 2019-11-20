//Doesn't QUITE work

export default class InputHandler {
    constructor(ship) {
      this.ship = ship;
      this.inputMap = new Map();
      this.inputMap
        .set("MoveUp", false)
        .set("MoveLeft", false)
        .set("MoveDown", false)
        .set("MoveRight", false)
        .set("StopVertical", true)
        .set("StopHorizontal", true)
        .set("Fire", false);
  
      document.addEventListener("keydown", event => {
        switch (event.key) {
          case "ArrowUp": //up
            //ship.MoveUp();
            this.inputMap.set("MoveUp", true).set("StopVertical", false);
            break;
          case "ArrowLeft": //left
            //ship.MoveLeft();
            this.inputMap.set("MoveLeft", true).set("StopHorizontal", false);
            break;
          case "ArrowDown": //down
            //ship.MoveDown();
            this.inputMap.set("MoveDown", true).set("StopVertical", false);
            break;
          case "ArrowRight": //right
            //ship.MoveRight();
            this.inputMap.set("MoveRight", true).set("StopHorizontal", false);
            break;
          default:
        }
        this.Act();
      });
      document.addEventListener("keyup", event => {
        switch (event.key) {
          case "ArrowUp": //up
            if (ship.verticalSpeed < 0) {
              //ship.StopVertical();
              this.inputMap.set("MoveUp", false).set("StopVertical", true);
            }
            break;
          case "ArrowLeft": //left
            if (ship.horizontalSpeed < 0) {
              //ship.StopHorizontal();
              this.inputMap.set("MoveLeft", false).set("StopHorizontal", true);
            }
            break;
          case "ArrowDown": //down
            if (ship.verticalSpeed > 0) {
              //ship.StopVertical();
              this.inputMap.set("MoveDown", false).set("StopVertical", true);
            }
            break;
          case "ArrowRight": //right
            if (ship.horizontalSpeed > 0) {
              //ship.StopHorizontal();
              this.inputMap.set("MoveRight", false).set("StopHorizontal", true);
            }
            break;
          default:
        }
        this.Act();
      });
      document.addEventListener("keydown", event => {
        if (event.code === "Space") {
          //ship.Fire();
          this.inputMap.set("Fire", true);
        }
        this.Act();
      });
      document.addEventListener("keyup", event => {
        if (event.code === "Space") {
          //ship.Fire();
          this.inputMap.set("Fire", false);
        }
        this.Act();
      });
    }
  
    Act() {
      for (var [key, value] of this.inputMap) {
        switch (key) {
          case "MoveUp":
            if (value) this.ship.MoveUp();
            break;
          case "MoveLeft":
            if (value) this.ship.MoveLeft();
            break;
          case "MoveDown":
            if (value) this.ship.MoveDown();
            break;
          case "MoveRight":
            if (value) this.ship.MoveRight();
            break;
          case "StopVertical":
            if (value) this.ship.StopVertical();
            break;
          case "StopHorizontal":
            if (value) this.ship.StopHorizontal();
            break;
          case "Fire":
            if (value) this.ship.Fire();
            break;
          default:
        }
      }
    }
  }
  