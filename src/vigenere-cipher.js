const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = false;
    if (reverse == false) {
      this.reverse = true;
    };
  }
  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    let answer = '';
    let keyI = 0;

    for (let i=0; i<str.length; i++) {
      let currentLetter = str[i];
      if ((currentLetter.charCodeAt()<=90) && (currentLetter.charCodeAt()>=65)) {
        let indexStr = currentLetter.charCodeAt()-65;
        let indexKey = key[keyI%key.length].toUpperCase().charCodeAt()-65;
        answer = answer + String.fromCharCode((indexStr+indexKey)%26 + 65);
        keyI++;
      } else if (((str[i].charCodeAt()>=97) && (str[i].charCodeAt()<=122))) {
        let indexStr = currentLetter.charCodeAt()-97;
        let indexKey = key[keyI%key.length].charCodeAt()-97;
        answer = answer + String.fromCharCode((indexStr+indexKey)%26 + 97);
        keyI++;
      } else {
        answer = answer + currentLetter;
      }
    }
    if (this.reverse == false) {
      return answer
          .toUpperCase();
    } else {
      return answer
          .split('')
          .reverse()
          .join('')
          .toUpperCase();
    }
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    let answer = '';
    let keyI = 0;

    for (let i=0; i<str.length; i++) {
      let currentLetter = str[i];
      if ((currentLetter.charCodeAt()<=90) && (currentLetter.charCodeAt()>=65)) {
        let indexStr = currentLetter.charCodeAt()-65;
        let indexKey = key[keyI%key.length].toUpperCase().charCodeAt()-65;
        answer = answer + String.fromCharCode((((indexStr-indexKey)%26)+26)%26 + 65);
        keyI++;
      } else if (((str[i].charCodeAt()>=97) && (str[i].charCodeAt()<=122))) {
        let indexStr = currentLetter.charCodeAt()-97;
        let indexKey = key[keyI%key.length].toUpperCase().charCodeAt()-97;
        answer = answer + String.fromCharCode((indexStr-indexKey)%26 + 97);
        keyI++;
      } else {
        answer = answer + currentLetter;
      }
    }
    if (this.reverse == false) {
      return answer
          .toUpperCase();
    } else {
      return answer
          .split('')
          .reverse()
          .join('')
          .toUpperCase();
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
