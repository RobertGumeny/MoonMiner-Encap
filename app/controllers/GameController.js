import GameService from "../services/GameService.js"

// NOTE Private area

let _gameService = new GameService()

function _drawCounters() {
  document.getElementById("dust-count").innerText = _gameService.DustCount
  document.getElementById("dust-per-click").innerText = _gameService.DustPerClick
  document.getElementById("dust-per-second").innerText = _gameService.DustPerSecond
  document.getElementById("drills-level").innerText = _gameService.DrillLevel
  document.getElementById("drills-price").innerText = _gameService.DrillPrice
  document.getElementById("carts-level").innerText = _gameService.CartLevel
  document.getElementById("carts-price").innerText = _gameService.CartPrice
  document.getElementById("rovers-level").innerText = _gameService.RoverLevel
  document.getElementById("rovers-price").innerText = _gameService.RoverPrice
  document.getElementById("harvesters-level").innerText = _gameService.HarvesterLevel
  document.getElementById("harvesters-price").innerText = _gameService.HarvesterPrice

}

// NOTE Public area

export default class GameController{
  constructor(){
    _drawCounters()
  }
  harvest(){
    _gameService.harvest()
    _drawCounters()
  }
  
}