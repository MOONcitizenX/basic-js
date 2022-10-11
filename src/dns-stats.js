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
const getDNSStats = (domains) => {
	const result = {};
	for (let item of domains) {
		let arr = item.split('.').reverse();
		for (let [index, elem] of Object.entries(arr)) {
			elem = `${+index === 0 ? '' : '.'}${arr
				.slice(0, +index)
				.join('.')}.${elem}`;
			if (result[elem]) {
				result[elem] += 1;
			} else {
				result[elem] = 1;
			}
		}
	}
	return result;
};

module.exports = {
	getDNSStats
};
