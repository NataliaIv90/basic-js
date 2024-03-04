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
  constructor(directMachine = true) {
    this.directMachine = directMachine;
  }
  encrypt(string, key) {
    return this.do(string, key, 'encrypt');
  }
  decrypt(string, key) {
    return this.do(string, key, 'decrypt');
  }

  do(string, key, type) {
    if (!string || !key || !type) {
      throw new Error('Incorrect arguments!')
    };

    let j = -1;
    const upKey = key.toUpperCase();
    const charArr = string.toUpperCase().split('').map((c) => {
      const chcode = c.charCodeAt();

      if (chcode >= 65 && chcode <= 90) {
        j++;
        if (type === 'encrypt')
          return String.fromCharCode(
            (chcode + upKey[(j) % upKey.length].charCodeAt() - 130) % 26 + 65
          );
        if (type === 'decrypt') {
          return String.fromCharCode(
            (chcode - 65 + (26 - upKey[(j) % upKey.length].charCodeAt() + 65)) % 26 + 65
          );
        }
      }
      return c;
    });

    return this.directMachine
      ? charArr.join('')
      : charArr.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
