const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stringN = n.toString();
  let arr = []
  arr.push(Math.floor(n / 10));

  for (let i = 1; i < stringN.length; i += 1) {
    let head = Math.floor(n / (10 ** i) / 10);
    let tail = n % 10 ** i;
    arr.push(Number.parseInt(`${head}${tail}`));
  }

  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
