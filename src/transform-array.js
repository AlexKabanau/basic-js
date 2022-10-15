const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let answer = [];
    for (let i=0; i<arr.length; i++) {
      if (arr[i] == `--discard-next`) {
        i++;
      } else if (arr[i] == `--discard-prev`) {
        if (arr[i-2] != `--discard-next`) {
          answer.pop();
        } else {
          continue
        }
        
      } else if (arr[i] == `--double-next`) {
        if (arr[i+1]) {
          answer.push(arr[i+1]);
        } else {
          continue
        }
      } else if (arr[i] == `--double-prev`) {
        if (arr[i-1] && arr[i-2] != `--discard-next`) {
          answer.push(arr[i-1]);
        } else {
          continue
        }
      } else {
        answer.push(arr[i]);
      }
    }
    return answer;
  } else {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
