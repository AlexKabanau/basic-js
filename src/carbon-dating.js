const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(str) {
  // throw new NotImplementedError(str);
  if (((typeof(str)=='string') && (+str)) && (+str<15) && (+str>0)) {
    return Math.ceil((Math.log(15.0/+str))/(0.693/5730))
  } else {
  
  return false 
  }
}

module.exports = {
  dateSample
};
