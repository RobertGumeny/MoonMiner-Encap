import Game from "../models/Game.js"
import Upgrade from "../models/Upgrades.js"

// NOTE Private Area

let _counts = new Game()

// NOTE Config upgrade objects

let _drillConfigObj = {
  name: "Drills",
  price: 50,
  level: 0,
  modifier: 1
}
let _cartConfigObj = {
  name: "Carts",
  price: 250,
  level: 0,
  modifier: 10
}
let _roverConfigObj = {
  name: "Rovers",
  price: 500,
  level: 0,
  modifier: 100
}
let _harvesterConfigObj = {
  name: "Harvesters",
  price: 2500,
  level: 0,
  modifier: 250
}

let _drills = new Upgrade(_drillConfigObj)
let _carts = new Upgrade(_cartConfigObj)
let _rovers = new Upgrade(_roverConfigObj)
let _harvesters = new Upgrade(_harvesterConfigObj)

// NOTE Public Area

export default class GameService{
  harvest(){ // NOTE Harvest on click
    _counts.dustCount++
    this.checkUpgrades()
    this.dpcUpdate()
    this.dpsUpdate()
  }
  addDust(){
    _counts.dustCount += 2500
  }

  checkUpgrades(){ // NOTE Check to see if "on click" upgrades are available
    this.drillsUpgrade() 
    this.cartsUpgrade()
  }
  drillsUpgrade(){
    if (_drills.level > 0){
      _counts.dustCount += (_drills.level * _drills.modifier)
    }
  }
  cartsUpgrade(){
    if (_carts.level > 0){
      _counts.dustCount += (_carts.level * _carts.modifier)
    }
  }
  // NOTE Purchase upgrades and increase price of upgrade

  purchaseDrill(){ // NOTE Purchase Drill Upgrade
    if (_counts.dustCount >= _drills.price){
      _drills.level++
      _counts.dustCount -= _drills.price
      _drills.price = (Math.round(_drills.price * (_drills.modifier / 100))) + _drills.price
      this.dpcUpdate()
      _counts.message = "Drill upgrade purchased"
    }else{
      _counts.message = "Not enough money"
    }
  }
  purchaseCart(){ // NOTE Purchase Cart Upgrade
    if (_counts.dustCount >= _carts.price){
      _carts.level++
      _counts.dustCount -= _carts.price
      _carts.price = (Math.round(_carts.price * (_carts.modifier / 100))) + _carts.price
      this.dpcUpdate()
      _counts.message = "Cart upgrade purchased"
    }else{
      _counts.message = "Not enough money"
    }
  }
  purchaseRover(){ // NOTE Purchase Rover Upgrade
    if (_counts.dustCount >= _rovers.price){
      _rovers.level++
      _counts.dustCount -= _rovers.price
      _rovers.price = (Math.round(_rovers.price * (_rovers.modifier / 200))) + _rovers.price
      this.dpsUpdate()
      _counts.message = "Rover upgrade purchased"
    }else{
      _counts.message = "Not enough money"
    }
  }
  purchaseHarvester(){ // NOTE Purchase Harvester Upgrade
    if (_counts.dustCount >= _harvesters.price){
      _harvesters.level++
      _counts.dustCount -= _harvesters.price
      _harvesters.price = (Math.round(_harvesters.price * (_harvesters.modifier / 400))) +_harvesters.price
      this.dpsUpdate()
      _counts.message = "Harvester upgrade purchased"
    }else{
      _counts.message = "Not enough money"
    }
  }
  passiveUpgradeCheck(){ // NOTE Check passive upgrades and income gain
    if (_rovers.level > 0){
      _counts.dustCount += (_rovers.level * _rovers.modifier)
    }
    if (_harvesters.level > 0){
      _counts.dustCount += (_harvesters.level * _harvesters.modifier)
    }
  }
  dpcUpdate(){
    let dpcCombo = (_drills.level * _drills.modifier) + (_carts.level * _carts.modifier)
    _counts.dustPerClick = dpcCombo + 1
  }
  dpsUpdate(){
    let dpsCombo = (_rovers.level * _rovers.modifier) + (_harvesters.level * _harvesters.modifier)
    _counts.dustPerSecond = dpsCombo
  }

  // NOTE Get counts for dust, dust per click, dust per second, and upgrade levels/cost to draw to screen.
  get DustCount(){ // NOTE Dust Count
    return _counts.dustCount.toString()
  }
  get DustPerClick(){ // NOTE Dust per click
    return _counts.dustPerClick.toString()
  }
  get DustPerSecond(){ // NOTE Dust per second
    return _counts.dustPerSecond.toString()
  }
  get DrillLevel(){ // NOTE begin upgrade counters
    return _drills.level.toString()
  }
  get DrillPrice(){
    return _drills.price.toString()
  }
  get CartLevel(){
    return _carts.level.toString()
  }
  get CartPrice(){
    return _carts.price.toString()
  }
  get RoverLevel(){
    return _rovers.level.toString()
  }
  get RoverPrice(){
    return _rovers.price.toString()
  }
  get HarvesterLevel(){
    return _harvesters.level.toString()
  }
  get HarvesterPrice(){ // NOTE End upgrade counters
    return _harvesters.price.toString()
  }
  get MessageCenter(){
    return _counts.message
  }

  constructor(){
  }
}