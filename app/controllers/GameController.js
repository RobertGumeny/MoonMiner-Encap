import GameService from "../services/GameService.js"

// NOTE Private area

let _gameService = new GameService()

function _drawCounters() {
  document.getElementById("money-count").innerText = _gameService.MoneyCount

  // Resource Counters
  document.getElementById("dust-count").innerText = _gameService.DustCount
  document.getElementById("dust-per-click").innerText = _gameService.DustPerClick
  document.getElementById("dust-per-second").innerText = _gameService.DustPerSecond
  document.getElementById("rocks-count").innerText = _gameService.RockCount
  document.getElementById("rocks-per-click").innerText = _gameService.RockPerClick
  document.getElementById("rocks-per-second").innerText = _gameService.RockPerSecond
  document.getElementById("iron-count").innerText = _gameService.IronCount
  document.getElementById("iron-per-click").innerText = _gameService.IronPerClick
  document.getElementById("iron-per-second").innerText = _gameService.IronPerSecond
  document.getElementById("gems-count").innerText = _gameService.GemsCount
  document.getElementById("gems-per-click").innerText = _gameService.GemsPerClick
  document.getElementById("gems-per-second").innerText = _gameService.GemsPerSecond

  // Upgrade Counters
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
    _gameService.pcUpdate()
    _gameService.psUpdate()
    setInterval(this.passiveUpgradeCheck, 2000)
  }
  harvestDust(){ 
    _gameService.harvestDust()
    _drawCounters()
  }
  harvestRock(){
    _gameService.harvestRock()
    _drawCounters()
  }
  harvestIron(){
    _gameService.harvestIron()
    _drawCounters()
  }
  harvestGems(){
    _gameService.harvestGems()
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
  addRocks(){
    _gameService.addRocks()
    _drawCounters()
  }
  addIron(){
    _gameService.addIron()
    _drawCounters()
  }
  addGems(){
    _gameService.addGems()
    _drawCounters()
  }
  addMoney(){
    _gameService.addMoney()
    _drawCounters()
  }
}