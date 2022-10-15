const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position == 'number' && Number.isInteger(position) && position<this.arr.length && position>=1) {
      this.arr.splice(position - 1, 1);
    } else {
      this.arr.length = 0;
      throw new Error ("You can't remove incorrect link!");
    }
    return this
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    const answer = this.arr.map(el => `( ${el} )`).join('~~');
    this.arr.length = 0;
    return answer;
  }
};

module.exports = {
  chainMaker
};
