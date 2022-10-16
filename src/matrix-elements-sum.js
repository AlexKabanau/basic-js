const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sumResult = [];
  let sum;
  let sumM;
  for (let i=0; i<matrix.length; i++) {
    sum = 0;
    if (i==0) {
      for (let j=0; j<matrix[i].length; j++) {
        sum += matrix[i][j];
      }
      console.log(sum);
      sumResult.push(sum);
    } else {
      for (let j=0; j<matrix[i].length; j++) {
        if (matrix[i-1]) {
          if (matrix[i-1][j] !== 0) {
            sum += matrix[i][j];
          }
        }
      }
      sumResult.push(sum);
    }
    
  }
  sumM = 0;
  for (let i=0; i<sumResult.length; i++) {
    sumM += sumResult[i]
  }
  return sumM;

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};
