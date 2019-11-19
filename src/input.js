export default class InputHandler {
    constructor() {
      document.addEventListener("keydown", event => {
        switch (event.keyCode) {
          case 38: //up
            alert("Move Up");
            break;
          case 37: //left
            alert("Move Left");
            break;
          case 40: //down
            alert("Move Down");
            break;
          case 39: //right
            alert("Move Right");
            break;
        }
      });
    }
  }
  