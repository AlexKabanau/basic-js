const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    if (Array.isArray(arr)) {
      for (let i=0; i<arr.length; i++) {
        const currentItem = arr[i];
        counter = Math.max(counter, this.calculateDepth(currentItem));
      }
      counter++;
    }
    return counter;
    // for (let i=0; i< arr.length; i++) {
    //   const currentValue = arr[i];
    //   if (Array.isArray(currentValue)) {
    //     this.counter++;
    //     console.log(this.counter);
    //     this.calculateDepth(currentValue);
    //   }
    //   console.log(this.counter);
    // }
    // return this.counter
    // const answer = this.counter;
    // this.counter = 1;
    // return answer;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
