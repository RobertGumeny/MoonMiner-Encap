import GameController from "./controllers/GameController.js"

class App{
  constructor(){
    this.gameController = new GameController()
  }
}

window["app"] = new App()