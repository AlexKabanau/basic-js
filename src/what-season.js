const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if ((date)) {
    // const hasMethod = "getMonth" in date;
    if ((typeof date == 'object'))  {
      if (("getMonth" in date) && (Object.getOwnPropertyNames(date).length == 0)) {
        const month = date.getMonth();
        if (month>11/* || month<1*/) {
          month = month - 11;
        }
        if (month==0 || month==1 || month==11 ) {
          return 'winter'
        } else if (month >= 2 && month <= 4) {
          return 'spring'
        } else if (month >= 5 && month <= 7) {
          return 'summer'
        }
        return 'autumn'
      } else {
        throw new Error ("Invalid date!");
      }
    } else {
      throw new Error ("Invalid date!");
    }
      
  } else {
    return 'Unable to determine the time of year!'
  }
}

module.exports = {
  getSeason
};
