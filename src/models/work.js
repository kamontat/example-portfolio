import loader from './loader'

export default class Work {
  constructor () {
    this.work = loader('work')
  }

  getExperinces () {
    return this.work.experiences.map(elem => new Experince(elem))
  }

  getExperince (index) {
    return new Experince(this.work.experiences[index])
  }
}

export class Experince {
  constructor (json) {
    this._json = json
  }

  isPrivate () {
    return this._json.private
  }
}
