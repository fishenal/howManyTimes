export default class store {
  constructor (key) {
    this.key = key
  }
  fetch () {
    return JSON.parse(window.localStorage.getItem(this.key) || '[]')
  }
  save (items) {
    window.localStorage.setItem(this.key, JSON.stringify(items))
  }
}
