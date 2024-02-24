const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resultObj = {};

  domains.forEach((domain) => {
    const domainComponents = domain.split('.').reverse();
    let key = '';

    domainComponents.forEach((el) => {
      key += `.${el}`;

      if (!resultObj.hasOwnProperty(key)) {
        resultObj[key] = 1;
      } else {
        resultObj[key] += 1;
      }
    });

  });

  return resultObj;
}

module.exports = {
  getDNSStats
};
