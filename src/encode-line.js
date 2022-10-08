const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const encodeLine = (str) => {
	const result = [];
	let counter = 1;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			counter++;
			continue;
		}
		if (counter > 1) {
			result.push(counter);
			result.push(str[i]);
			counter = 1;
		} else {
			result.push(str[i]);
		}
	}
	return result.join('');
};

module.exports = {
	encodeLine
};
