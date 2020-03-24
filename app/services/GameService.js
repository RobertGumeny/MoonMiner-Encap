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
  harvest(){
    _counts.dustCount++

  }
  checkUpgrades(){
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
  get HarvesterPrice(){
    return _harvesters.price.toString()
  }

  constructor(){
  }
}