import Game from "../models/Game.js";
import Upgrade from "../models/Upgrades.js";
import Resource from "../models/Resources.js";

// NOTE Private Area

let _counts = new Game();

// NOTE Config upgrade objects

let _drillConfigObj = {
  name: "Drills",
  price: 50,
  level: 0,
  modifier: 1
};
let _cartConfigObj = {
  name: "Carts",
  price: 250,
  level: 0,
  modifier: 10
};
let _roverConfigObj = {
  name: "Rovers",
  price: 500,
  level: 0,
  modifier: 100
};
let _harvesterConfigObj = {
  name: "Harvesters",
  price: 2500,
  level: 0,
  modifier: 250
};

let _drills = new Upgrade(_drillConfigObj);
let _carts = new Upgrade(_cartConfigObj);
let _rovers = new Upgrade(_roverConfigObj);
let _harvesters = new Upgrade(_harvesterConfigObj);

// NOTE Config resource objects

let _dustConfigObj = {
  name: "Moon Dust",
  count: 0,
  value: 1,
  perClick: 1,
  perSecond: 0,
  unlocked: true
};
let _rocksConfigObj = {
  name: "Moon Rocks",
  count: 0,
  value: 5,
  perClick: 1,
  perSecond: 0,
  unlocked: false,
  unlockPrice: 500
};
let _ironConfigObj = {
  name: "Moon Iron",
  count: 0,
  value: 25,
  perClick: 1,
  perSecond: 0,
  unlocked: false,
  unlockPrice: 1000
};
let _gemsConfigObj = {
  name: "Moon Gems",
  count: 0,
  value: 100,
  perClick: 1,
  perSecond: 0,
  unlocked: false,
  unlockPrice: 2500
};

let _dust = new Resource(_dustConfigObj);
let _rocks = new Resource(_rocksConfigObj);
let _iron = new Resource(_ironConfigObj);
let _gems = new Resource(_gemsConfigObj);

// NOTE Public Area

export default class GameService {
  harvestDust() {
    // NOTE Harvest resource on click
    _dust.count++;
    this.checkDustUpgrades();
    this.pcUpdate();
    this.psUpdate();
  }

  harvestRock() {
    if (_rocks.unlocked == true) {
      _rocks.count++;
      this.checkRockUpgrades();
      this.pcUpdate();
      this.psUpdate();
    } else {
      console.log("Not unlocked");
    }
  }
  harvestIron() {
    if (_iron.unlocked == true) {
      _iron.count++;
      this.checkIronUpgrades();
      this.pcUpdate();
      this.psUpdate();
    } else {
      console.log("Not unlocked");
    }
  }

  harvestGems() {
    if (_gems.unlocked == true) {
      _gems.count++;
      this.checkGemUpgrades();
      this.pcUpdate();
      this.psUpdate();
    } else {
      console.log("Not unlocked");
    }
  }
  sellResources() {
    // NOTE Convert resources to money
    if (_dust.count > 0) {
      _counts.money += _dust.count * _dust.value;
      _dust.count = 0;
    }
    if (_rocks.count > 0) {
      _counts.money += _rocks.count * _rocks.value;
      _rocks.count = 0;
    }
    if (_iron.count > 0) {
      _counts.money += _iron.count * _iron.value;
      _iron.count = 0;
    }
    if (_gems.count > 0) {
      _counts.money += _gems.count * _gems.value;
      _gems.count = 0;
    }
  }
  addDust() {
    _dust.count += 2500;
  }
  addRocks() {
    _rocks.count += 2500;
  }
  addIron() {
    _iron.count += 2500;
  }
  addGems() {
    _gems.count += 2500;
  }
  addMoney() {
    _counts.money += 2500;
  }
  // NOTE Check to see if "on click" upgrades are available
  checkDustUpgrades() {
    if (_drills.level > 0) {
      _dust.count += _drills.level * _drills.modifier;
    }
    if (_carts.level > 0) {
      _dust.count += _carts.level * _carts.modifier;
    }
  }

  checkRockUpgrades() {
    if (_drills.level > 0) {
      _rocks.count += _drills.level * _drills.modifier;
    }
    if (_carts.level > 0) {
      _rocks.count += _carts.level * _carts.modifier;
    }
  }

  checkIronUpgrades() {
    if (_drills.level > 0) {
      _iron.count += _drills.level * _drills.modifier;
    }
    if (_carts.level > 0) {
      _iron.count += _carts.level * _carts.modifier;
    }
  }
  checkGemUpgrades() {
    if (_drills.level > 0) {
      _gems.count += _drills.level * _drills.modifier;
    }
    if (_carts.level > 0) {
      _gems.count += _carts.level * _carts.modifier;
    }
  }

  // NOTE Purchase upgrades and increase price of upgrade

  purchaseDrill() {
    // NOTE Purchase Drill Upgrade
    if (_counts.money >= _drills.price) {
      _drills.level++;
      _counts.money -= _drills.price;
      _drills.price =
        Math.round(_drills.price * (_drills.modifier / 100)) + _drills.price;
      this.pcUpdate();
      _counts.message = "Drill upgrade purchased";
    } else {
      _counts.message = "Not enough money";
    }
  }
  purchaseCart() {
    // NOTE Purchase Cart Upgrade
    if (_counts.money >= _carts.price) {
      _carts.level++;
      _counts.money -= _carts.price;
      _carts.price =
        Math.round(_carts.price * (_carts.modifier / 100)) + _carts.price;
      this.pcUpdate();
      _counts.message = "Cart upgrade purchased";
    } else {
      _counts.message = "Not enough money";
    }
  }
  purchaseRover() {
    // NOTE Purchase Rover Upgrade
    if (_counts.money >= _rovers.price) {
      _rovers.level++;
      _counts.money -= _rovers.price;
      _rovers.price =
        Math.round(_rovers.price * (_rovers.modifier / 200)) + _rovers.price;
      this.psUpdate();
      _counts.message = "Rover upgrade purchased";
    } else {
      _counts.message = "Not enough money";
    }
  }
  purchaseHarvester() {
    // NOTE Purchase Harvester Upgrade
    if (_counts.money >= _harvesters.price) {
      _harvesters.level++;
      _counts.money -= _harvesters.price;
      _harvesters.price =
        Math.round(_harvesters.price * (_harvesters.modifier / 400)) +
        _harvesters.price;
      this.psUpdate();
      _counts.message = "Harvester upgrade purchased";
    } else {
      _counts.message = "Not enough money";
    }
  }

  unlockRocks() {
    if (_counts.money >= _rocks.unlockPrice) {
      _rocks.unlocked = true;
      _counts.money -= _rocks.unlockPrice;
    }
  }
  unlockIron() {
    if (_counts.money >= _iron.unlockPrice) {
      _iron.unlocked = true;
      _counts.money -= _iron.unlockPrice;
    }
  }

  unlockGems() {
    if (_counts.money >= _gems.unlockPrice) {
      _gems.unlocked = true;
      _counts.money -= _gems.unlockPrice;
    }
  }

  passiveUpgradeCheck() {
    // NOTE Check passive upgrades and income gain
    let rovercombo = _rovers.level * _rovers.modifier;
    let harvestercombo = _harvesters.level * _harvesters.modifier;
    if (_rovers.level > 0) {
      _dust.count += rovercombo;
      if (_rocks.unlocked == true) {
        _rocks.count += rovercombo;
      }
      if (_iron.unlocked == true) {
        _iron.count += rovercombo;
      }
      if (_gems.unlocked == true) {
        _gems.count += rovercombo;
      }
    }
    if (_harvesters.level > 0) {
      _dust.count += harvestercombo;
    }
    if (_rocks.unlocked == true) {
      _rocks.count += harvestercombo;
    }
    if (_iron.unlocked == true) {
      _iron.count += harvestercombo;
    }
    if (_gems.unlocked == true) {
      _gems.count += harvestercombo;
    }
  }

  pcUpdate() {
    // NOTE Run update checking Resource Per Click
    _dust.perClick =
      _drills.level * _drills.modifier + _carts.level * _carts.modifier + 1;
    _rocks.perClick =
      _drills.level * _drills.modifier + _carts.level * _carts.modifier + 1;
    _iron.perClick =
      _drills.level * _drills.modifier + _carts.level * _carts.modifier + 1;
    _gems.perClick =
      _drills.level * _drills.modifier + _carts.level * _carts.modifier + 1;
  }
  psUpdate() {
    // NOTE Run update checking Dust Per Second
    _dust.perSecond =
      _rovers.level * _rovers.modifier +
      _harvesters.level * _harvesters.modifier;
    _rocks.perSecond =
      _rovers.level * _rovers.modifier +
      _harvesters.level * _harvesters.modifier;
    _iron.perSecond =
      _rovers.level * _rovers.modifier +
      _harvesters.level * _harvesters.modifier;
    _gems.perSecond =
      _rovers.level * _rovers.modifier +
      _harvesters.level * _harvesters.modifier;
  }

  // NOTE Get counts money, resources, and upgrades.

  get MoneyCount() {
    // NOTE Money count
    return _counts.money.toString();
  }
  get DustCount() {
    // NOTE Dust Count, per click, and per second
    return _dust.count.toString();
  }
  get DustPerClick() {
    return _dust.perClick.toString();
  }
  get DustPerSecond() {
    return _dust.perSecond.toString();
  }
  get RockCount() {
    // NOTE Rock count, per click, and per second
    return _rocks.count.toString();
  }
  get RockPerClick() {
    return _rocks.perClick.toString();
  }
  get RockPerSecond() {
    return _rocks.perSecond.toString();
  }
  get IronCount() {
    // NOTE Iron count, per click, and per second
    return _iron.count.toString();
  }
  get IronPerClick() {
    return _iron.perClick.toString();
  }
  get IronPerSecond() {
    return _iron.perSecond.toString();
  }
  get GemsCount() {
    // NOTE Gems count, per click, and per second
    return _gems.count.toString();
  }
  get GemsPerClick() {
    return _gems.perClick.toString();
  }
  get GemsPerSecond() {
    return _gems.perSecond.toString();
  }
  get DrillLevel() {
    // NOTE begin upgrade counters
    return _drills.level.toString();
  }
  get DrillPrice() {
    return _drills.price.toString();
  }
  get CartLevel() {
    return _carts.level.toString();
  }
  get CartPrice() {
    return _carts.price.toString();
  }
  get RoverLevel() {
    return _rovers.level.toString();
  }
  get RoverPrice() {
    return _rovers.price.toString();
  }
  get HarvesterLevel() {
    return _harvesters.level.toString();
  }
  get HarvesterPrice() {
    // NOTE End upgrade counters
    return _harvesters.price.toString();
  }
  get RocksPrice() {
    return _rocks.unlockPrice.toString();
  }
  get IronPrice() {
    return _iron.unlockPrice.toString();
  }
  get GemsPrice() {
    return _gems.unlockPrice.toString();
  }
  get MessageCenter() {
    return _counts.message;
  }

  constructor() {}
}
