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
  let newStrWithAddition = str;
  let result = '';
  const {
    repeatTimes = 1,
    additionRepeatTimes = 1,
    separator = null,
    additionSeparator
  } = options;


  if (Object.keys(options).includes('addition')) {
    const { addition } = options;
    newStrWithAddition = `${newStrWithAddition}${addition}`;
    let counter = 1;
    while (counter < additionRepeatTimes) {
      newStrWithAddition += `${additionSeparator ? additionSeparator : '|'}${addition}`;
      counter++;
    }
  }

  result = newStrWithAddition;

  if (repeatTimes > 1) {
    let counter = 1;
    while (counter < repeatTimes) {
      result += `${separator ? separator : '+'}${newStrWithAddition}`;
      counter++;
    }
  }

  return result;
}

module.exports = {
  repeater
};
