const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    return 0;
  }

  function getDataFromStr(arr) {
    let obj = {};
    const keys = new Set(arr);

    for (const key of keys) {
      obj[key] = {
        value: key,
        amount: 0,
      }
    }

    arr.split('').map((el) => {
      obj[el].amount += 1;
    });

    return obj;
  }

  const obj1 = getDataFromStr(s1);
  const obj2 = getDataFromStr(s2);

  let commonSymbolsAmount = 0;

  Object.keys(obj1).map((el) => {
    if (Object.keys(obj2).includes(el)) {
      commonSymbolsAmount += obj1[el].amount >= obj2[el].amount
        ? obj2[el].amount
        : obj1[el].amount;
    }
  });

  return commonSymbolsAmount;
}

module.exports = {
  getCommonCharacterCount
};
