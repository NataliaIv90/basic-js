const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const newArr = [];
  let discardNext = false;

  for (let i = 0; i < arr.length; i++) {
    if (discardNext) {
      discardNext = false;
      continue;
    }

    switch (arr[i]) {
      case "--double-next":
        if (i + 1 < arr.length) {
          newArr.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i > 0 && arr[i - 2] !== "--discard-next" && newArr.length > 0) {
          newArr.push(newArr[newArr.length - 1]);
        }
        break;
      case "--discard-prev":
        if (i > 0 && arr[i - 2] !== "--discard-next") {
          newArr.pop();
        }
        break;
      case "--discard-next":
        discardNext = true;
        break;
      default:
        newArr.push(arr[i]);
        break;
    }
  }

  return newArr;
}

module.exports = {
  transform
};
