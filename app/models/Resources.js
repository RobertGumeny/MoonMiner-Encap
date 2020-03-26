

export default class Resource{
  constructor(data){
    this.name = data.name
    this.count = data.count
    this.value = data.value
    this.perClick = data.perClick
    this.perSecond = data.perSecond
    this.unlocked = data.unlocked
    this.unlockPrice = data.unlockPrice
  }
}