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
const deleteDigit = (n) => {
	const array = `${n}`.split('').map((el) => +el);
	let max = 0;
	for (let i = 0; i < array.length; i++) {
		const testArray = [...array];
		testArray.splice(i, 1);
		const currentNum = +testArray.join('');
		if (currentNum > max) {
			max = currentNum;
		}
	}

	return max;
};

module.exports = {
	deleteDigit
};
