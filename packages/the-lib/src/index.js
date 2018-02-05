import { add } from 'ramda'

export const mySum = (one, two) => add(one, two)

export class Wink {
  constructor(one, two) {
    this.one = one
    this.two = two
  }

  theSum() {
    return 1000 + mySum(this.one, this.two)
  }
}
