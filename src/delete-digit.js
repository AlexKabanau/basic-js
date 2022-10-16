const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let min = [];
  let x;
  for (let i=0; i<arr.length; i++) {
    x=n.toString().split('');
    // console.log(x)
    x.splice(i, 1);
    // console.log(x)
    min.push(Number(x.join('')));
  }
  max = min[0];
  for (let i=0; i<min.length; i++) {
    if (min[i]>max) {
      max=min[i]
    }
  }
  return max
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
