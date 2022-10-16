const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // if (str == null) {
  //   str = 'null';
  // }
  
  if ((str == null) && (options.addition == null)) {
    str = "null";
    options.addition == String(null);
    
    console.log('options.addition: '+options.addition);
    console.log(typeof options.addition);
  }
  // if (options.addition == null) {
  //   options.addition = 'null'
  // }
  if (!options.repeatTimes) {
    options.repeatTimes = 1
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1
  }
  if (!options.separator) {
    options.separator = '+'
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  }
  
  let answer = [];
  let el = [];
  let extraEl = [];
  let string = [];
  for (let i=0; i<options.repeatTimes; i++) {
    el.push(str);
    console.log('el '+el);
    if (options.additionRepeatTimes) {
      console.log(options.additionRepeatTimes);
      
      for (let i=0; i<options.additionRepeatTimes; i++) {
        console.log(options.addition);
        if (options.addition === null) {
          extraEl.push(`null`);
        } else {
          extraEl.push(options.addition);
        }

        
      }
      console.log('extraEl '+extraEl);
      el.push(extraEl.join(`${options.additionSeparator}`));
      string.push(el.join(''));
      extraEl = [];
      el = [];
      // console.log('el '+el);
      // el.join('');
      console.log(string);
    } else {
      string.push(str);
    }

  }
  answer.push(string.join(`${options.separator}`))
  return answer.join('');
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
