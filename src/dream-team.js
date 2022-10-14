const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let answer = [];
  if (typeof arr != 'object' || arr == null) {
    console.log('1');
    return false
  }

  for (let i=0; i<arr.length; i++) {
    if (typeof(arr[i]) != 'string') {
      console.log('2');
      continue
    }
    for (let j=0; j<arr[i].length; j++) {
      if (arr[i][j]!=' ') {
        answer.push(arr[i][j])
        break
      }
    }
  }
  return answer.join('').toUpperCase().split('').sort().join('')
}

module.exports = {
  createDreamTeam
};
