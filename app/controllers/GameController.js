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
  document.getElementById("message-center").innerText = _gameService.MessageCenter
}

// NOTE Public area

export default class GameController{
  constructor(){
    _drawCounters()
    _gameService.dpcUpdate()
    _gameService.dpsUpdate()
    setInterval(this.passiveUpgradeCheck, 2000)
  }
  harvest(){ 
    _gameService.harvest()
    _drawCounters()
  }
  purchaseDrill(){ 
    _gameService.purchaseDrill()
    _drawCounters()
  }
  purchaseCart(){
    _gameService.purchaseCart()
    _drawCounters()
  }
  purchaseRover(){
    _gameService.purchaseRover()
    _drawCounters()
  }
  purchaseHarvester(){
    _gameService.purchaseHarvester()
    _drawCounters()
  }
  passiveUpgradeCheck(){
    _gameService.passiveUpgradeCheck()
    _drawCounters()
  }
  addDust(){
    _gameService.addDust()
    _drawCounters()
  }

}