import { action, observable } from 'mobx'

export default class HomeStore {
  @observable lastUpdate = 0
  @observable light = false

  constructor (lastUpdate) {
    this.lastUpdate = lastUpdate
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now()
      this.light = true
    }, 1000)
  }

  stop = () => clearInterval(this.timer)
}